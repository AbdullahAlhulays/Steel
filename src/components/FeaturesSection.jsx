import SectionTitle from './SectionTitle'

function FeaturesSection() {
  const features = [
    {
      title: 'جودة ستيل عالية',
      text: 'تشطيبات معدنية مناسبة للاستخدام اليومي والواجهات.',
    },
    {
      title: 'تصميم حسب الطلب',
      text: 'مرونة في المقاس واللون والبيانات الخاصة بكل لوحة.',
    },
    {
      title: 'دعم واتساب مباشر',
      text: 'إرسال التفاصيل والمتابعة مع المتجر بطريقة واضحة وسريعة.',
    },
    {
      title: 'توصيل سريع',
      text: 'تجربة طلب مرتبة تساعد على تنفيذ وتجهيز الطلب بدون تعقيد.',
    },
  ]

  return (
    <section className="mx-auto max-w-7xl px-3 py-10 sm:px-6 sm:py-20 lg:px-8">
      <div className="grid gap-7 sm:gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <SectionTitle
          eyebrow="لماذا SteelLine؟"
          title="تفاصيل صغيرة تصنع ثقة أكبر"
          description="الموقع منظم ليجعل اختيار اللوحة واضحا، ويعطي العميل صورة دقيقة عن المنتج قبل إرسال الطلب."
        />

        <div className="grid grid-cols-2 gap-2 sm:gap-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-xl border border-[#D8D3CC] bg-white p-3 shadow-[0_8px_22px_rgba(47,47,47,0.06)] sm:rounded-3xl sm:p-6 sm:shadow-[0_12px_30px_rgba(47,47,47,0.06)]"
            >
              <span className="mb-3 block h-1 w-9 rounded-full bg-[#C7A46A] sm:mb-5 sm:h-1.5 sm:w-12" />
              <h3 className="text-sm font-bold leading-6 text-[#2F2F2F] sm:text-lg">
                {feature.title}
              </h3>
              <p className="text-clamp-2 mt-2 text-xs leading-5 text-[#6B6B6B] sm:mt-3 sm:text-base sm:leading-7">{feature.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection
