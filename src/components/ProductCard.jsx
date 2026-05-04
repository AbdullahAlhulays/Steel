import { Link } from 'react-router-dom'
import { colorPreviews } from '../data/products'
import ProductVisual from './ProductVisual'

function ProductCard({ product }) {
  return (
    <article className="group overflow-hidden rounded-xl border border-[#D6D1CA] bg-white shadow-[0_8px_22px_rgba(47,47,47,0.07)] transition duration-300 hover:-translate-y-1 hover:border-[#AEB4BC] hover:shadow-[0_20px_55px_rgba(47,47,47,0.12)] sm:rounded-3xl sm:shadow-[0_16px_40px_rgba(47,47,47,0.08)]">
      <div className="overflow-hidden p-1.5 sm:p-3">
        <ProductVisual
          product={product}
          color="ذهبي لامع"
          imageSrc={product.defaultImage}
          compact
          className="min-h-[124px] transition duration-500 group-hover:scale-[1.015] sm:min-h-[250px]"
        />
      </div>

      <div className="space-y-2.5 p-2.5 pt-2 sm:space-y-5 sm:p-6 sm:pt-3">
        <div className="flex items-start justify-between gap-2 sm:gap-3">
          <div className="min-w-0">
            <p className="mb-1 text-[10px] font-semibold leading-4 text-[#A88254] sm:mb-2 sm:text-xs">
              {product.category}
            </p>
            <h3 className="text-clamp-2 text-sm font-bold leading-5 text-[#2F2F2F] sm:text-xl sm:leading-7">
              {product.name}
            </h3>
          </div>
          <span className="shrink-0 rounded-full border border-[#D6D1CA] bg-[#FAF8F5] px-2 py-0.5 text-[10px] font-semibold text-[#6B6B6B] sm:px-3 sm:py-1 sm:text-xs">
            {product.id}
          </span>
        </div>

          <p className="hidden text-sm leading-7 text-[#6B6B6B] sm:block sm:min-h-14">
          {product.description}
        </p>

        <div>
          <p className="mb-1 text-[10px] font-semibold text-[#6B6B6B] sm:mb-2 sm:text-xs">
            التشطيبات المتاحة
          </p>
          <div className="flex flex-wrap gap-1 rounded-xl border border-[#EAE7E2] bg-[#FAF8F5] p-1.5 sm:gap-2 sm:rounded-2xl sm:p-2">
            {product.availableColors.map((color) => (
              <span
                key={color}
                title={color}
                className={`h-4 w-4 rounded-full border border-[#D6D1CA] sm:h-6 sm:w-6 ${colorPreviews[color]}`}
              />
            ))}
          </div>
        </div>

        <Link
          to={`/product/${product.id}`}
          className="inline-flex min-h-10 w-full items-center justify-center rounded-lg bg-[#C7A46A] px-2 py-2 text-xs font-bold leading-5 text-white transition hover:bg-[#A88254] sm:min-h-12 sm:rounded-2xl sm:px-5 sm:py-3.5 sm:text-sm"
        >
          تخصيص الطلب
        </Link>
      </div>
    </article>
  )
}

export default ProductCard
