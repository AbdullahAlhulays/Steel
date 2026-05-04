import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import ColorSelector from '../components/ColorSelector'
import ImageZoom from '../components/ImageZoom'
import InputField from '../components/InputField'
import SizeSelector from '../components/SizeSelector'
import WhatsAppButton from '../components/WhatsAppButton'
import { availableColors, getCategoryByName, getProductById } from '../data/products'

const whatsAppNumber = '966551195719'

function ProductDetails() {
  const { productId } = useParams()
  const product = getProductById(productId)

  if (!product) {
    return (
      <section className="mx-auto flex min-h-[70vh] max-w-4xl flex-col items-center justify-center px-5 text-center">
        <p className="mb-3 text-sm font-semibold text-[#A88254]">
          المنتج غير موجود
        </p>
        <h1 className="text-3xl font-bold text-[#2F2F2F]">
          لم نجد منتجا بهذا الرقم
        </h1>
        <Link
          to="/"
          className="mt-6 rounded-2xl bg-[#C7A46A] px-6 py-3 font-bold text-white"
        >
          العودة للمنتجات
        </Link>
      </section>
    )
  }

  return <ProductOrderForm key={product.id} product={product} />
}

function ProductOrderForm({ product }) {
  const customFields = product.requiredFields || product.fields || []
  const [selectedColor, setSelectedColor] = useState(
    product.availableColors[0] || availableColors[0],
  )
  const [selectedWidth, setSelectedWidth] = useState(
    product.sizeOptions.widths[3],
  )
  const [selectedLength, setSelectedLength] = useState(
    product.sizeOptions.lengths[7],
  )
  const [fieldValues, setFieldValues] = useState({})

  const currentImage = product.colorImages[selectedColor] || product.image

  function updateField(fieldName, value) {
    setFieldValues((currentValues) => ({
      ...currentValues,
      [fieldName]: value,
    }))
  }

  function buildWhatsAppMessage() {
    const lines = [
      'السلام عليكم، أريد طلب منتج من SteelLine',
      '',
      `اسم المنتج: ${product.name}`,
      `رقم المنتج: ${product.id}`,
      `التصنيف: ${product.category}`,
      `اللون: ${selectedColor}`,
      `العرض: ${selectedWidth} سم`,
      `الطول: ${selectedLength} سم`,
    ]

    customFields.forEach((field) => {
      const value = fieldValues[field.name]?.trim()

      if (value || field.required) {
        lines.push(`${field.label}: ${value || ''}`)
      }
    })

    if (product.whatsappNote) {
      lines.push('', product.whatsappNote)
    }

    return lines.join('\n')
  }

  function handleSubmit(event) {
    event.preventDefault()
    const message = encodeURIComponent(buildWhatsAppMessage())
    window.open(
      `https://wa.me/${whatsAppNumber}?text=${message}`,
      '_blank',
      'noopener,noreferrer',
    )
  }

  const category = getCategoryByName(product.category)
  const backTo = category ? `/?category=${category.slug}` : '/'

  return (
    <section className="mx-auto max-w-7xl px-3 py-4 pb-6 sm:px-6 sm:py-10 lg:px-8">
      <Link
        to={backTo}
        className="mb-4 inline-flex min-h-10 items-center rounded-xl border border-[#D6D1CA] bg-white px-4 py-2 text-sm font-semibold text-[#6B6B6B] shadow-sm transition hover:border-[#AEB4BC] hover:text-[#2F2F2F] sm:mb-8 sm:min-h-11 sm:rounded-2xl"
      >
        العودة للمنتجات
      </Link>

      <div
        dir="rtl"
        className="grid gap-4 sm:gap-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-start"
      >
        <div className="order-1 space-y-3 sm:space-y-4 lg:order-2">
          <ImageZoom
            product={product}
            color={selectedColor}
            imageSrc={currentImage}
          />

          <div className="rounded-2xl border border-[#D6D1CA] bg-white p-4 shadow-sm lg:hidden">
            <div className="mb-3 flex flex-wrap items-center gap-2">
              <span className="rounded-full border border-[#D6D1CA] bg-[#FAF8F5] px-3 py-1 text-[11px] font-semibold text-[#A88254]">
                {product.category}
              </span>
              <span className="rounded-full border border-[#D6D1CA] bg-[#FAF8F5] px-3 py-1 text-[11px] font-semibold text-[#6B6B6B]">
                {product.id}
              </span>
            </div>
            <h1 className="text-xl font-bold leading-7 text-[#2F2F2F]">
              {product.name}
            </h1>
            <p className="mt-2 text-sm leading-7 text-[#6B6B6B]">
              {product.description}
            </p>
          </div>

          <div className="grid grid-cols-3 gap-2 sm:gap-3">
            {[
              ['اللون', selectedColor],
              ['العرض', `${selectedWidth} سم`],
              ['الطول', `${selectedLength} سم`],
            ].map(([label, value]) => (
              <div
                key={label}
                className="rounded-xl border border-[#D6D1CA] bg-white p-3 shadow-sm sm:rounded-2xl sm:p-4"
              >
                <p className="text-[11px] text-[#6B6B6B] sm:text-xs">{label}</p>
                <p className="text-clamp-2 mt-1 text-sm font-bold leading-5 text-[#2F2F2F] sm:text-base">
                  {value}
                </p>
              </div>
            ))}
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="order-2 rounded-2xl border border-[#D6D1CA] bg-white p-3 shadow-[0_16px_45px_rgba(47,47,47,0.08)] sm:rounded-[2rem] sm:p-7 lg:order-1"
        >
          <div className="hidden lg:block">
            <div className="mb-6 flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-[#D6D1CA] bg-[#FAF8F5] px-3 py-1 text-xs font-semibold text-[#A88254]">
                {product.category}
              </span>
              <span className="rounded-full border border-[#D6D1CA] bg-[#FAF8F5] px-3 py-1 text-xs font-semibold text-[#6B6B6B]">
                {product.id}
              </span>
            </div>

            <h1 className="text-3xl font-bold leading-tight text-[#2F2F2F] md:text-4xl">
              {product.name}
            </h1>
            <p className="mt-4 text-base leading-8 text-[#6B6B6B]">
              {product.description}
            </p>
          </div>

          <div className="space-y-3 sm:mt-8 sm:space-y-4 lg:mt-8">
            <OptionGroup title="اختر اللون">
              <ColorSelector
                colors={product.availableColors}
                selectedColor={selectedColor}
                onChange={setSelectedColor}
              />
            </OptionGroup>

            <OptionGroup title="اختر المقاس">
              <div className="grid grid-cols-2 gap-2 sm:gap-4">
                <SizeSelector
                  label="العرض"
                  value={selectedWidth}
                  options={product.sizeOptions.widths}
                  onChange={setSelectedWidth}
                />
                <SizeSelector
                  label="الطول"
                  value={selectedLength}
                  options={product.sizeOptions.lengths}
                  onChange={setSelectedLength}
                />
              </div>
            </OptionGroup>

            {customFields.length > 0 && (
              <OptionGroup title="تفاصيل اللوحة">
                <div className="grid gap-3">
                  {customFields.map((field) => (
                    <InputField
                      key={field.name}
                      field={field}
                      value={fieldValues[field.name] || ''}
                      onChange={updateField}
                    />
                  ))}
                </div>
              </OptionGroup>
            )}

            {product.whatsappNote && (
              <p className="rounded-xl border border-[#D6D1CA] bg-[#FAF8F5] p-4 text-sm leading-7 text-[#6B6B6B] sm:rounded-2xl">
                {product.whatsappNote}
              </p>
            )}

            <div className="sticky bottom-3 z-20 -mx-1 rounded-2xl bg-white/95 p-1 shadow-[0_10px_30px_rgba(47,47,47,0.18)] backdrop-blur sm:static sm:mx-0 sm:p-0 sm:shadow-none">
              <WhatsAppButton />
            </div>
          </div>
        </form>
      </div>
    </section>
  )
}

function OptionGroup({ title, children }) {
  return (
    <section className="rounded-2xl border border-[#E4DFD8] bg-[#FAF8F5] p-3 sm:p-4">
      <h2 className="mb-3 text-sm font-bold text-[#2F2F2F]">
        {title}
      </h2>
      {children}
    </section>
  )
}

export default ProductDetails
