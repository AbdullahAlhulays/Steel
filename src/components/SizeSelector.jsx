function SizeSelector({ label, value, options, onChange }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-semibold text-[#2F2F2F]">
        {label}
      </span>
      <select
        value={value}
        onChange={(event) => onChange(Number(event.target.value))}
        className="min-h-12 w-full rounded-2xl border border-[#D6D1CA] bg-white px-4 py-3.5 text-[#2F2F2F] outline-none transition focus:border-[#AEB4BC]"
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option} سم
          </option>
        ))}
      </select>
    </label>
  )
}

export default SizeSelector
