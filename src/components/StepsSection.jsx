import SectionTitle from './SectionTitle'

function StepsSection() {
  const steps = [
    {
      title: 'اختر نوع اللوحة',
      text: 'ابدأ من بطاقة المنتج المناسبة: عنوان وطني، رقم منزل، اسم، شركة أو لوحة فنية.',
    },
    {
      title: 'خصص المقاس واللون والتفاصيل',
      text: 'حدد التشطيب المناسب والمقاس المطلوب، ثم أضف البيانات الخاصة باللوحة.',
    },
    {
      title: 'أرسل الطلب عبر واتساب',
      text: 'بعد الضغط على زر الإرسال، تفتح رسالة جاهزة بجميع اختياراتك لتأكيد الطلب.',
    },
  ]

  return (
    <section id="steps" className="border-y border-[#D8D3CC] bg-[#F3EEE7]">
      <div className="mx-auto max-w-7xl px-3 py-10 sm:px-6 sm:py-20 lg:px-8">
        <SectionTitle
          eyebrow="طريقة الطلب"
          title="ثلاث خطوات فقط"
          description="نفس المسار لكل المنتجات حتى يعرف العميل أين يبدأ ومتى يرسل الطلب."
        />

        <div className="mt-7 grid grid-cols-3 gap-2 sm:mt-10 sm:gap-4">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="rounded-xl border border-[#D8D3CC] bg-white p-2.5 text-center shadow-[0_8px_22px_rgba(47,47,47,0.06)] sm:rounded-3xl sm:p-6 sm:text-right sm:shadow-[0_12px_30px_rgba(47,47,47,0.06)]"
            >
              <span className="mx-auto grid h-8 w-8 place-items-center rounded-xl border border-[#D8D3CC] bg-[#FAF8F5] text-xs font-bold text-[#A88254] sm:mx-0 sm:h-12 sm:w-12 sm:rounded-2xl sm:text-sm">
                {index + 1}
              </span>
              <h3 className="text-clamp-2 mt-2 text-xs font-bold leading-5 text-[#2F2F2F] sm:mt-6 sm:text-xl sm:leading-7">
                {step.title}
              </h3>
              <p className="mt-3 hidden text-sm leading-7 text-[#6B6B6B] sm:block sm:text-base">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default StepsSection
