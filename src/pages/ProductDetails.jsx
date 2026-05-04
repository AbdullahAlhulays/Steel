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

  const currentImage = product.colorImages[selectedColor] || product.defaultImage

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

    product.fields.forEach((field) => {
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
  const backTo = category ? `/category/${category.slug}` : '/'

  return (
    <section className="mx-auto max-w-7xl px-3 py-4 sm:px-6 sm:py-10 lg:px-8">
      <Link
        to={backTo}
        className="mb-4 inline-flex min-h-10 items-center rounded-xl border border-[#D6D1CA] bg-white px-4 py-2 text-sm font-semibold text-[#6B6B6B] shadow-sm transition hover:border-[#AEB4BC] hover:text-[#2F2F2F] sm:mb-8 sm:min-h-11 sm:rounded-2xl"
      >
        العودة للقسم
      </Link>

      <div
        dir="rtl"
        className="grid gap-4 sm:gap-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-start"
      >
        <form
          onSubmit={handleSubmit}
          className="order-2 rounded-2xl border border-[#D6D1CA] bg-white p-4 shadow-[0_16px_45px_rgba(47,47,47,0.08)] sm:rounded-[2rem] sm:p-7 lg:order-1"
        >
          <div className="mb-5 flex flex-wrap items-center gap-2 sm:mb-6 sm:gap-3">
            <span className="rounded-full border border-[#D6D1CA] bg-[#FAF8F5] px-3 py-1 text-xs font-semibold text-[#A88254]">
              {product.category}
            </span>
            <span className="rounded-full border border-[#D6D1CA] bg-[#FAF8F5] px-3 py-1 text-xs font-semibold text-[#6B6B6B]">
              {product.id}
            </span>
          </div>

          <h1 className="text-xl font-bold leading-tight text-[#2F2F2F] sm:text-3xl md:text-4xl">
            {product.name}
          </h1>
          <p className="mt-3 text-sm leading-7 text-[#6B6B6B] sm:mt-4 sm:text-base sm:leading-8">
            {product.description}
          </p>

          <div className="mt-6 space-y-5 sm:mt-8 sm:space-y-6">
            <ColorSelector
              colors={product.availableColors}
              selectedColor={selectedColor}
              onChange={setSelectedColor}
            />

            <div className="grid gap-4 sm:grid-cols-2">
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

            {product.fields.map((field) => (
              <InputField
                key={field.name}
                field={field}
                value={fieldValues[field.name] || ''}
                onChange={updateField}
              />
            ))}

            {product.whatsappNote && (
              <p className="rounded-xl border border-[#D6D1CA] bg-[#FAF8F5] p-4 text-sm leading-7 text-[#6B6B6B] sm:rounded-2xl">
                {product.whatsappNote}
              </p>
            )}

            <WhatsAppButton />
          </div>
        </form>

        <div className="order-1 space-y-3 sm:space-y-4 lg:order-2">
          <ImageZoom
            product={product}
            color={selectedColor}
            imageSrc={currentImage}
          />

          <div className="grid gap-2 min-[420px]:grid-cols-3 sm:gap-3">
            {[
              ['اللون المختار', selectedColor],
              ['العرض', `${selectedWidth} سم`],
              ['الطول', `${selectedLength} سم`],
            ].map(([label, value]) => (
              <div
                key={label}
                className="rounded-xl border border-[#D6D1CA] bg-white p-3 shadow-sm sm:rounded-2xl sm:p-4"
              >
                <p className="text-xs text-[#6B6B6B]">{label}</p>
                <p className="mt-1 font-bold text-[#2F2F2F]">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductDetails
