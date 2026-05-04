import { Link } from 'react-router-dom'
import { categories, getProductsByCategory } from '../data/products'
import ProductVisual from './ProductVisual'
import SectionTitle from './SectionTitle'

function CategoryList() {
  return (
    <section id="categories" className="mx-auto max-w-7xl px-3 py-10 sm:px-6 sm:py-16 lg:px-8">
      <div className="mb-7 flex flex-col gap-4 sm:mb-10 lg:flex-row lg:items-end lg:justify-between">
        <SectionTitle
          eyebrow="التصنيفات"
          title="اختر القسم المناسب"
          description="كل قسم يعرض فقط المنتجات والصور الخاصة به، ثم تنتقل من المنتج إلى صفحة التخصيص."
        />
      </div>

      <div className="grid grid-cols-2 gap-2 sm:gap-4 lg:grid-cols-3 xl:grid-cols-5">
        {categories.map((category) => {
          const categoryProducts = getProductsByCategory(category.name)
          const previewProduct = categoryProducts[0]

          return (
            <Link
              key={category.slug}
              to={`/category/${category.slug}`}
              className="group flex h-full flex-col overflow-hidden rounded-xl border border-[#D8D3CC] bg-white shadow-[0_8px_20px_rgba(47,47,47,0.06)] transition hover:-translate-y-1 hover:border-[#AEB4BC] hover:shadow-[0_18px_45px_rgba(47,47,47,0.1)] sm:rounded-3xl sm:shadow-[0_12px_30px_rgba(47,47,47,0.06)]"
            >
              <div className="p-1.5 sm:p-3">
                {previewProduct ? (
                  <ProductVisual
                    product={previewProduct}
                    color="فضي لامع"
                    imageSrc={previewProduct.defaultImage}
                    compact
                    className="min-h-[118px] sm:min-h-[180px]"
                  />
                ) : (
                  <div className="grid min-h-[118px] place-items-center rounded-xl border border-[#D6D1CA] bg-[#F3EEE7] px-2 text-center text-xs font-semibold text-[#6B6B6B] sm:min-h-[180px] sm:rounded-[1.75rem] sm:text-sm">
                    لا توجد منتجات بعد
                  </div>
                )}
              </div>

              <div className="flex flex-1 flex-col p-2.5 pt-1 sm:p-5 sm:pt-2">
                <p className="text-xs font-semibold text-[#A88254]">
                  {categoryProducts.length} منتج
                </p>
                <h3 className="mt-1 text-sm font-bold leading-6 text-[#2F2F2F] sm:mt-2 sm:text-lg sm:leading-7">
                  {category.name}
                </h3>
                <p className="text-clamp-2 mt-1 flex-1 text-xs leading-5 text-[#6B6B6B] sm:mt-3 sm:text-sm sm:leading-7">
                  {category.description}
                </p>

                <span className="mt-3 hidden min-h-12 items-center justify-center rounded-2xl border border-[#D8D3CC] bg-[#FAF8F5] px-4 py-3 text-sm font-bold text-[#2F2F2F] transition group-hover:border-[#AEB4BC] group-hover:bg-[#F3EEE7] sm:inline-flex">
                  عرض منتجات القسم
                </span>
              </div>
            </Link>
          )
        })}
      </div>
    </section>
  )
}

export default CategoryList
