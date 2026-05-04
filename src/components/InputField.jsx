function InputField({ field, value, onChange }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-semibold text-[#2F2F2F]">
        {field.label}
      </span>
      <input
        type={field.type || 'text'}
        inputMode={field.inputMode}
        value={value}
        required={field.required}
        placeholder={field.placeholder}
        onChange={(event) => onChange(field.name, event.target.value)}
        className="w-full rounded-2xl border border-[#D6D1CA] bg-white px-4 py-3.5 text-[#2F2F2F] outline-none transition placeholder:text-[#9a948d] focus:border-[#AEB4BC]"
      />
    </label>
  )
}

export default InputField
