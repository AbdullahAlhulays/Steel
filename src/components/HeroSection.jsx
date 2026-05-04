import { products } from '../data/products'
import ProductMockup from './ProductMockup'

function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-[#D8D3CC] bg-[#FAF8F5]">
      <div className="absolute inset-x-0 top-0 h-32 bg-[#F3EEE7]/70" />
      <div
        dir="ltr"
        className="relative mx-auto grid max-w-7xl items-center gap-8 px-4 py-10 sm:px-6 sm:py-14 lg:min-h-[650px] lg:grid-cols-[1.02fr_0.98fr] lg:gap-10 lg:px-8"
      >
        <div className="order-2 lg:order-1">
          <Showcase />
        </div>

        <div dir="rtl" className="order-1 max-w-2xl lg:order-2">
          <p className="mb-4 inline-flex rounded-full border border-[#D8D3CC] bg-white px-4 py-2 text-xs font-semibold text-[#A88254] shadow-sm sm:mb-5 sm:text-sm">
            متجر سعودي للوحات الستيل المخصصة
          </p>
          <h1 className="text-3xl font-bold leading-tight text-[#2F2F2F] sm:text-4xl md:text-6xl">
            لوحات ستيل فاخرة بتصميم يناسبك
          </h1>
          <p className="mt-5 max-w-xl text-base leading-8 text-[#6B6B6B] sm:mt-6 sm:text-lg sm:leading-9">
            اختر التصنيف المناسب، افتح المنتج، خصص المقاس واللون، ثم أرسل الطلب
            للواتساب من صفحة واحدة واضحة.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:mt-9 sm:flex-row">
            <a
              href="#categories"
              className="inline-flex min-h-12 items-center justify-center rounded-2xl bg-[#C7A46A] px-6 py-4 text-sm font-bold text-white shadow-sm transition hover:bg-[#A88254]"
            >
              اختر التصنيف
            </a>
            <a
              href="#steps"
              className="inline-flex min-h-12 items-center justify-center rounded-2xl border border-[#D8D3CC] bg-white px-6 py-4 text-sm font-bold text-[#2F2F2F] shadow-sm transition hover:border-[#AEB4BC] hover:bg-[#F3EEE7]"
            >
              طريقة الطلب
            </a>
          </div>

          <div className="mt-6 grid max-w-xl gap-2 sm:mt-8 sm:grid-cols-3 sm:gap-3">
            {['اختر التصنيف', 'اختر المنتج', 'أرسل واتساب'].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-[#D8D3CC] bg-white px-4 py-3 text-center text-sm font-semibold text-[#6B6B6B] shadow-sm sm:text-right"
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
    <div className="relative mx-auto h-[330px] w-full max-w-[390px] sm:h-[430px] sm:max-w-[540px] lg:h-[500px] lg:max-w-[620px]">
      <div className="absolute inset-x-6 bottom-7 h-20 rounded-[50%] bg-[#D8D3CC]/60 blur-2xl" />
      <div className="absolute left-2 top-5 w-[72%] -rotate-6 opacity-90 sm:left-7 sm:top-12 sm:w-[70%] sm:opacity-95">
        <ProductMockup
          product={products[2]}
          color="فضي لامع"
          compact
          className="min-h-[230px]"
        />
      </div>
      <div className="absolute right-0 top-20 w-[78%] rotate-3 sm:top-28">
        <ProductMockup
          product={products[1]}
          color="ذهبي لامع"
          compact
          className="min-h-[300px]"
        />
      </div>
      <div className="absolute bottom-6 left-0 w-[76%] -rotate-2 sm:bottom-8 sm:w-[72%]">
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
