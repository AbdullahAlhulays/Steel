import ProductCard from './ProductCard'
import SectionTitle from './SectionTitle'

function ProductGrid({
  products,
  searchTerm,
  categories = [],
  selectedCategorySlug = 'all',
  onCategorySelect,
  onClearFilters,
  title = 'اختر التصميم وخصص طلبك',
  eyebrow = 'المنتجات',
  description = 'كل منتج يفتح صفحة واحدة لاختيار المقاس واللون وإرسال الطلب عبر الواتساب.',
  emptyTitle = 'لا توجد منتجات مطابقة',
  emptyDescription = 'جرّب البحث باسم المنتج أو رقم المنتج، أو اختر تصنيفا آخر.',
}) {
  const hasSearch = Boolean(searchTerm)
  const hasCategoryFilter = selectedCategorySlug !== 'all'
  const hasFilters = hasSearch || hasCategoryFilter

  return (
    <section id="products" className="mx-auto max-w-7xl px-3 py-10 sm:px-6 sm:py-16 lg:px-8">
      <div className="mb-5 flex flex-col gap-4 sm:mb-8 lg:flex-row lg:items-end lg:justify-between">
        <SectionTitle
          eyebrow={hasSearch ? 'نتائج البحث' : eyebrow}
          title={hasSearch ? 'المنتجات المطابقة' : title}
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

      {categories.length > 0 && (
        <div className="mb-5 -mx-3 overflow-x-auto px-3 sm:mx-0 sm:mb-7 sm:px-0">
          <div className="flex w-max min-w-full gap-2">
            <FilterChip
              isActive={selectedCategorySlug === 'all'}
              label="كل المنتجات"
              onClick={() => onCategorySelect?.('all')}
            />
            {categories.map((category) => (
              <FilterChip
                key={category.slug}
                isActive={selectedCategorySlug === category.slug}
                label={category.name}
                onClick={() => onCategorySelect?.(category.slug)}
              />
            ))}
          </div>
        </div>
      )}

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

function FilterChip({ isActive, label, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`shrink-0 rounded-full border px-4 py-2.5 text-xs font-bold transition sm:px-5 sm:text-sm ${
        isActive
          ? 'border-[#C7A46A] bg-[#C7A46A] text-white shadow-sm'
          : 'border-[#D8D3CC] bg-white text-[#5F5F5F] hover:border-[#AEB4BC] hover:text-[#2F2F2F]'
      }`}
    >
      {label}
    </button>
  )
}

export default ProductGrid
