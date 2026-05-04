function SectionTitle({ eyebrow, title, description, align = 'start' }) {
  const alignment = align === 'center' ? 'mx-auto text-center' : ''

  return (
    <div className={`max-w-2xl ${alignment}`}>
      {eyebrow && (
        <p className="mb-3 text-sm font-semibold text-[#A88254]">{eyebrow}</p>
      )}
      <h2 className="text-3xl font-bold leading-tight text-[#2F2F2F] md:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-8 text-[#6B6B6B]">{description}</p>
      )}
    </div>
  )
}

export default SectionTitle
