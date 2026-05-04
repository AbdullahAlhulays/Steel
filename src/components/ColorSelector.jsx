import { colorPreviews } from '../data/products'

function ColorSelector({ colors, selectedColor, onChange }) {
  return (
    <div>
      <p className="mb-3 text-sm font-semibold text-[#2F2F2F]">اللون</p>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {colors.map((color) => {
          const isSelected = selectedColor === color

          return (
            <button
              key={color}
              type="button"
              onClick={() => onChange(color)}
              className={`rounded-2xl border bg-white p-2.5 text-right transition ${
                isSelected
                  ? 'border-[#C7A46A] shadow-[0_0_0_3px_rgba(199,164,106,0.18)]'
                  : 'border-[#D6D1CA] hover:border-[#AEB4BC]'
              }`}
            >
              <span
                className={`mb-2 block h-10 rounded-xl border border-[#D6D1CA] ${colorPreviews[color]}`}
              />
              <span className="text-xs font-semibold text-[#2F2F2F]">
                {color}
              </span>
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default ColorSelector
