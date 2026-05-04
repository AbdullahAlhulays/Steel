function SectionTitle({ eyebrow, title, description, align = 'start' }) {
  const alignment = align === 'center' ? 'mx-auto text-center' : ''

  return (
    <div className={`max-w-2xl ${alignment}`}>
      {eyebrow && (
        <p className="mb-3 text-sm font-semibold text-[#A88254]">{eyebrow}</p>
      )}
      <h2 className="text-[1.65rem] font-bold leading-tight text-[#2F2F2F] sm:text-3xl md:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-sm leading-7 text-[#6B6B6B] sm:text-base sm:leading-8">{description}</p>
      )}
    </div>
  )
}

export default SectionTitle
