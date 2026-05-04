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
    <section className="mx-auto max-w-7xl px-3 py-12 sm:px-6 sm:py-20 lg:px-8">
      <div className="grid gap-8 sm:gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <SectionTitle
          eyebrow="لماذا SteelLine؟"
          title="تفاصيل صغيرة تصنع ثقة أكبر"
          description="الموقع منظم ليجعل اختيار اللوحة واضحا، ويعطي العميل صورة دقيقة عن المنتج قبل إرسال الطلب."
        />

        <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-[#D8D3CC] bg-white p-5 shadow-[0_12px_30px_rgba(47,47,47,0.06)] sm:rounded-3xl sm:p-6"
            >
              <span className="mb-5 block h-1.5 w-12 rounded-full bg-[#C7A46A]" />
              <h3 className="text-lg font-bold text-[#2F2F2F]">
                {feature.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-[#6B6B6B] sm:text-base">{feature.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection
