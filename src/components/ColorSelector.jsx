import { colorPreviews } from '../data/products'

function ColorSelector({ colors, selectedColor, onChange }) {
  return (
    <div>
      <p className="mb-3 text-sm font-semibold text-[#2F2F2F]">اللون</p>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3">
        {colors.map((color) => {
          const isSelected = selectedColor === color

          return (
            <button
              key={color}
              type="button"
              onClick={() => onChange(color)}
              className={`min-h-[68px] rounded-xl border bg-white p-2.5 text-right transition sm:min-h-[76px] sm:rounded-2xl ${
                isSelected
                  ? 'border-[#C7A46A] shadow-[0_0_0_3px_rgba(199,164,106,0.18)]'
                  : 'border-[#D6D1CA] hover:border-[#AEB4BC]'
              }`}
            >
              <span
                className={`mb-2 block h-8 rounded-lg border border-[#D6D1CA] sm:h-10 sm:rounded-xl ${colorPreviews[color]}`}
              />
              <span className="block text-xs font-semibold leading-5 text-[#2F2F2F]">
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
