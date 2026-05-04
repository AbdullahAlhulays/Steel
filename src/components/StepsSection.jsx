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
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="طريقة الطلب"
          title="ثلاث خطوات فقط"
          description="نفس المسار لكل المنتجات حتى يعرف العميل أين يبدأ ومتى يرسل الطلب."
        />

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="rounded-3xl border border-[#D8D3CC] bg-white p-6 shadow-[0_12px_30px_rgba(47,47,47,0.06)]"
            >
              <span className="grid h-12 w-12 place-items-center rounded-2xl border border-[#D8D3CC] bg-[#FAF8F5] text-sm font-bold text-[#A88254]">
                {index + 1}
              </span>
              <h3 className="mt-6 text-xl font-bold text-[#2F2F2F]">
                {step.title}
              </h3>
              <p className="mt-3 leading-7 text-[#6B6B6B]">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default StepsSection
