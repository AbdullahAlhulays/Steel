import { products } from '../data/products'
import ProductMockup from './ProductMockup'

function HeroSection({ onBrowseProducts, onShowSteps }) {
  return (
    <section className="relative overflow-hidden border-b border-[#D8D3CC] bg-[#FAF8F5]">
      <div className="absolute inset-x-0 top-0 h-24 bg-[#F3EEE7]/70 sm:h-32" />
      <div
        dir="ltr"
        className="relative mx-auto grid max-w-7xl items-center gap-6 px-3 py-7 sm:gap-8 sm:px-6 sm:py-14 lg:min-h-[650px] lg:grid-cols-[1.02fr_0.98fr] lg:gap-10 lg:px-8"
      >
        <div className="order-2 lg:order-1">
          <Showcase />
        </div>

        <div dir="rtl" className="order-1 max-w-2xl lg:order-2">
          <p className="mb-3 inline-flex max-w-full rounded-full border border-[#D8D3CC] bg-white px-3 py-2 text-[11px] font-semibold leading-5 text-[#A88254] shadow-sm sm:mb-5 sm:px-4 sm:text-sm">
            متجر سعودي للوحات الستيل المخصصة
          </p>
          <h1 className="text-[1.9rem] font-bold leading-tight text-[#2F2F2F] sm:text-4xl md:text-5xl lg:text-6xl">
            لوحات ستيل فاخرة بتصميم يناسبك
          </h1>
          <p className="mt-4 max-w-xl text-sm leading-7 text-[#6B6B6B] sm:mt-6 sm:text-lg sm:leading-9">
            تصفح التصاميم المتاحة، اختر المنتج المناسب، ثم خصص اللون والمقاس
            والتفاصيل قبل إرسال الطلب عبر الواتساب.
          </p>

          <div className="mt-6 grid grid-cols-2 gap-2 sm:mt-9 sm:flex sm:gap-3">
            <button
              type="button"
              onClick={onBrowseProducts}
              className="inline-flex min-h-11 items-center justify-center rounded-xl bg-[#C7A46A] px-3 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-[#A88254] sm:min-h-12 sm:rounded-2xl sm:px-6 sm:py-4"
            >
              تصفح المنتجات
            </button>
            <button
              type="button"
              onClick={onShowSteps}
              className="inline-flex min-h-11 items-center justify-center rounded-xl border border-[#D8D3CC] bg-white px-3 py-3 text-sm font-bold text-[#2F2F2F] shadow-sm transition hover:border-[#AEB4BC] hover:bg-[#F3EEE7] sm:min-h-12 sm:rounded-2xl sm:px-6 sm:py-4"
            >
              طريقة الطلب
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

function Showcase() {
  return (
    <div className="relative mx-auto h-[250px] w-full max-w-[330px] sm:h-[430px] sm:max-w-[540px] lg:h-[500px] lg:max-w-[620px]">
      <div className="absolute inset-x-8 bottom-6 h-16 rounded-[50%] bg-[#D8D3CC]/60 blur-2xl sm:inset-x-6 sm:bottom-7 sm:h-20" />
      <div className="absolute left-0 top-4 w-[68%] -rotate-6 opacity-90 sm:left-7 sm:top-12 sm:w-[70%] sm:opacity-95">
        <ProductMockup
          product={products[2]}
          color="فضي لامع"
          compact
          className="min-h-[170px] sm:min-h-[230px]"
        />
      </div>
      <div className="absolute right-0 top-14 w-[76%] rotate-3 sm:top-28 sm:w-[78%]">
        <ProductMockup
          product={products[1]}
          color="ذهبي لامع"
          compact
          className="min-h-[215px] sm:min-h-[300px]"
        />
      </div>
      <div className="absolute bottom-2 left-0 w-[70%] -rotate-2 sm:bottom-8 sm:w-[72%]">
        <ProductMockup
          product={products[0]}
          color="اسود لامع"
          compact
          className="min-h-[165px] sm:min-h-[220px]"
        />
      </div>
    </div>
  )
}

export default HeroSection
