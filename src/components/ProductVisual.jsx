import ProductMockup from './ProductMockup'

function ProductVisual({ product, color, imageSrc, compact = false, className = '' }) {
  const usesRealImage =
    imageSrc && /\.(avif|webp|png|jpe?g)$/i.test(imageSrc.split('?')[0])

  if (usesRealImage) {
    return (
      <div
        className={`overflow-hidden rounded-[1.75rem] border border-[#D6D1CA] bg-[#F3EEE7] ${className}`}
      >
        <img
          src={imageSrc}
          alt={product.name}
          className="h-full min-h-[220px] w-full object-cover"
        />
      </div>
    )
  }

  return (
    <ProductMockup
      product={product}
      color={color}
      compact={compact}
      className={className}
    />
  )
}

export default ProductVisual
