import { Link } from 'react-router-dom'
import { colorPreviews } from '../data/products'
import ProductVisual from './ProductVisual'

function ProductCard({ product }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-[#D6D1CA] bg-white shadow-[0_16px_40px_rgba(47,47,47,0.08)] transition duration-300 hover:-translate-y-1 hover:border-[#AEB4BC] hover:shadow-[0_20px_55px_rgba(47,47,47,0.12)] sm:rounded-3xl">
      <div className="overflow-hidden p-2.5 sm:p-3">
        <ProductVisual
          product={product}
          color="ذهبي لامع"
          imageSrc={product.defaultImage}
          compact
          className="min-h-[180px] transition duration-500 group-hover:scale-[1.015] sm:min-h-[250px]"
        />
      </div>

      <div className="space-y-4 p-4 pt-3 sm:space-y-5 sm:p-6 sm:pt-3">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <p className="mb-2 text-xs font-semibold text-[#A88254]">
              {product.category}
            </p>
            <h3 className="text-lg font-bold leading-7 text-[#2F2F2F] sm:text-xl">
              {product.name}
            </h3>
          </div>
          <span className="shrink-0 rounded-full border border-[#D6D1CA] bg-[#FAF8F5] px-3 py-1 text-xs font-semibold text-[#6B6B6B]">
            {product.id}
          </span>
        </div>

          <p className="text-sm leading-7 text-[#6B6B6B] sm:min-h-14">
          {product.description}
        </p>

        <div>
          <p className="mb-2 text-xs font-semibold text-[#6B6B6B]">
            التشطيبات المتاحة
          </p>
          <div className="flex flex-wrap gap-2 rounded-2xl border border-[#EAE7E2] bg-[#FAF8F5] p-2">
            {product.availableColors.map((color) => (
              <span
                key={color}
                title={color}
                className={`h-6 w-6 rounded-full border border-[#D6D1CA] ${colorPreviews[color]}`}
              />
            ))}
          </div>
        </div>

        <Link
          to={`/product/${product.id}`}
          className="inline-flex min-h-11 w-full items-center justify-center rounded-xl bg-[#C7A46A] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#A88254] sm:min-h-12 sm:rounded-2xl sm:py-3.5"
        >
          تخصيص الطلب
        </Link>
      </div>
    </article>
  )
}

export default ProductCard
