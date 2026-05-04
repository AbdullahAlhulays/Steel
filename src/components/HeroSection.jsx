import { products } from '../data/products'
import ProductMockup from './ProductMockup'

function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-[#D8D3CC] bg-[#FAF8F5]">
      <div className="absolute inset-x-0 top-0 h-32 bg-[#F3EEE7]/70" />
      <div
        dir="ltr"
        className="relative mx-auto grid min-h-[650px] max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.02fr_0.98fr] lg:px-8"
      >
        <div className="order-2 lg:order-1">
          <Showcase />
        </div>

        <div dir="rtl" className="order-1 max-w-2xl lg:order-2">
          <p className="mb-5 inline-flex rounded-full border border-[#D8D3CC] bg-white px-4 py-2 text-sm font-semibold text-[#A88254] shadow-sm">
            متجر سعودي للوحات الستيل المخصصة
          </p>
          <h1 className="text-4xl font-bold leading-tight text-[#2F2F2F] md:text-6xl">
            لوحات ستيل فاخرة بتصميم يناسبك
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-9 text-[#6B6B6B]">
            اختر التصنيف المناسب، افتح المنتج، خصص المقاس واللون، ثم أرسل الطلب
            للواتساب من صفحة واحدة واضحة.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#categories"
              className="inline-flex items-center justify-center rounded-2xl bg-[#C7A46A] px-6 py-4 text-sm font-bold text-white shadow-sm transition hover:bg-[#A88254]"
            >
              اختر التصنيف
            </a>
            <a
              href="#steps"
              className="inline-flex items-center justify-center rounded-2xl border border-[#D8D3CC] bg-white px-6 py-4 text-sm font-bold text-[#2F2F2F] shadow-sm transition hover:border-[#AEB4BC] hover:bg-[#F3EEE7]"
            >
              طريقة الطلب
            </a>
          </div>

          <div className="mt-8 grid max-w-xl gap-3 sm:grid-cols-3">
            {['اختر التصنيف', 'اختر المنتج', 'أرسل واتساب'].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-[#D8D3CC] bg-white px-4 py-3 text-sm font-semibold text-[#6B6B6B] shadow-sm"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Showcase() {
  return (
    <div className="relative mx-auto h-[500px] max-w-[620px]">
      <div className="absolute inset-x-6 bottom-7 h-20 rounded-[50%] bg-[#D8D3CC]/60 blur-2xl" />
      <div className="absolute left-7 top-12 w-[70%] -rotate-6 opacity-95">
        <ProductMockup
          product={products[2]}
          color="فضي لامع"
          compact
          className="min-h-[230px]"
        />
      </div>
      <div className="absolute right-0 top-28 w-[78%] rotate-3">
        <ProductMockup
          product={products[1]}
          color="ذهبي لامع"
          compact
          className="min-h-[300px]"
        />
      </div>
      <div className="absolute bottom-8 left-0 w-[72%] -rotate-2">
        <ProductMockup
          product={products[0]}
          color="اسود لامع"
          compact
          className="min-h-[220px]"
        />
      </div>
    </div>
  )
}

export default HeroSection
