import { colorPreviews } from '../data/products'

function ColorSelector({ colors, selectedColor, onChange }) {
  return (
    <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3">
      {colors.map((color) => {
        const isSelected = selectedColor === color

        return (
          <button
            key={color}
            type="button"
            onClick={() => onChange(color)}
            className={`flex min-h-11 items-center gap-2 rounded-xl border bg-white p-2 text-right transition sm:min-h-[64px] sm:flex-col sm:items-stretch sm:p-2.5 ${
              isSelected
                ? 'border-[#C7A46A] shadow-[0_0_0_3px_rgba(199,164,106,0.18)]'
                : 'border-[#D6D1CA] hover:border-[#AEB4BC]'
            }`}
          >
            <span
              className={`block h-7 w-9 shrink-0 rounded-lg border border-[#D6D1CA] sm:h-8 sm:w-full ${colorPreviews[color]}`}
            />
            <span className="block text-xs font-semibold leading-5 text-[#2F2F2F]">
              {color}
            </span>
          </button>
        )
      })}
    </div>
  )
}

export default ColorSelector
