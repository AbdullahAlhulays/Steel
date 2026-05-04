import ProductCard from './ProductCard'
import SectionTitle from './SectionTitle'

function ProductGrid({
  products,
  searchTerm,
  onClearFilters,
  title = 'اختر اللوحة وابدأ التخصيص',
  eyebrow = 'المنتجات',
  description = 'كل منتج يفتح صفحة واحدة لاختيار المقاس واللون وإرسال الطلب عبر الواتساب.',
  emptyTitle = 'لا توجد منتجات مطابقة للبحث',
  emptyDescription = 'جرّب البحث باسم المنتج أو التصنيف أو رقم المنتج.',
}) {
  const hasFilters = Boolean(searchTerm)

  return (
    <section id="products" className="mx-auto max-w-7xl px-3 py-10 sm:px-6 sm:py-16 lg:px-8">
      <div className="mb-7 flex flex-col gap-5 sm:mb-10 lg:flex-row lg:items-end lg:justify-between">
        <SectionTitle
          eyebrow={hasFilters ? 'نتائج البحث' : eyebrow}
          title={hasFilters ? 'المنتجات المطابقة' : title}
          description={description}
        />

        {hasFilters && (
          <button
            type="button"
            onClick={onClearFilters}
            className="min-h-11 w-full rounded-xl border border-[#D6D1CA] bg-white px-5 py-3 text-sm font-bold text-[#2F2F2F] shadow-sm transition hover:border-[#AEB4BC] hover:bg-[#F3EEE7] sm:min-h-12 sm:w-fit sm:rounded-2xl"
          >
            عرض كل المنتجات
          </button>
        )}
      </div>

      {products.length > 0 ? (
        <div className="grid grid-cols-2 gap-2 sm:gap-4 md:grid-cols-2 xl:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-[#D6D1CA] bg-white p-5 text-center shadow-sm sm:rounded-3xl sm:p-10">
          <p className="text-xl font-bold text-[#2F2F2F]">
            {emptyTitle}
          </p>
          <p className="mt-3 text-sm text-[#6B6B6B]">
            {emptyDescription}
          </p>
        </div>
      )}
    </section>
  )
}

export default ProductGrid
