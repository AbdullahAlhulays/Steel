import { useState } from 'react'
import ProductVisual from './ProductVisual'

function ImageZoom({ product, color, imageSrc }) {
  const [origin, setOrigin] = useState('50% 50%')
  const [isZoomed, setIsZoomed] = useState(false)

  function handleMouseMove(event) {
    const bounds = event.currentTarget.getBoundingClientRect()
    const x = ((event.clientX - bounds.left) / bounds.width) * 100
    const y = ((event.clientY - bounds.top) / bounds.height) * 100
    setOrigin(`${x}% ${y}%`)
  }

  return (
    <div
      className="group relative overflow-hidden rounded-2xl border border-[#D6D1CA] bg-[#F3EEE7] shadow-[0_18px_45px_rgba(47,47,47,0.08)] sm:rounded-[2rem]"
      onMouseEnter={() => setIsZoomed(true)}
      onMouseLeave={() => {
        setIsZoomed(false)
        setOrigin('50% 50%')
      }}
      onMouseMove={handleMouseMove}
    >
      <div
        style={{ transformOrigin: origin }}
        className={`transition-transform duration-300 ease-out ${
          isZoomed ? 'scale-150 cursor-zoom-in' : 'scale-100'
        }`}
      >
        <ProductVisual
          product={product}
          color={color}
          imageSrc={imageSrc}
          className="min-h-[235px] border-0 sm:min-h-[430px]"
        />
      </div>
      <span className="pointer-events-none absolute bottom-5 right-5 hidden rounded-full border border-[#D6D1CA] bg-white/90 px-4 py-2 text-xs font-semibold text-[#6B6B6B] opacity-0 shadow-sm transition group-hover:opacity-100 sm:block">
        حرّك المؤشر لتكبير التفاصيل
      </span>
    </div>
  )
}

export default ImageZoom
