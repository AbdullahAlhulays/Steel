import { Link, useParams } from 'react-router-dom'
import ProductGrid from '../components/ProductGrid'
import { getCategoryBySlug, getProductsByCategory } from '../data/products'

function CategoryPage({ searchTerm, onClearSearch }) {
  const { categorySlug } = useParams()
  const category = getCategoryBySlug(categorySlug)

  if (!category) {
    return (
      <section className="mx-auto flex min-h-[70vh] max-w-4xl flex-col items-center justify-center px-5 text-center">
        <p className="mb-3 text-sm font-semibold text-[#A88254]">
          التصنيف غير موجود
        </p>
        <h1 className="text-3xl font-bold text-[#2F2F2F]">
          لم نجد هذا القسم
        </h1>
        <Link
          to="/"
          className="mt-6 rounded-2xl bg-[#C7A46A] px-6 py-3 font-bold text-white"
        >
          العودة للتصنيفات
        </Link>
      </section>
    )
  }

  const query = searchTerm.trim().toLowerCase()
  const categoryProducts = getProductsByCategory(category.name)
  const products = categoryProducts.filter((product) => {
    if (!query) return true

    return [product.name, product.category, product.id].some((value) =>
      value.toLowerCase().includes(query),
    )
  })

  return (
    <>
      <section className="border-b border-[#D8D3CC] bg-[#F3EEE7]">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <Link
            to="/"
            className="mb-6 inline-flex rounded-2xl border border-[#D6D1CA] bg-white px-4 py-2 text-sm font-semibold text-[#6B6B6B] shadow-sm transition hover:border-[#AEB4BC] hover:text-[#2F2F2F]"
          >
            العودة للتصنيفات
          </Link>
          <p className="mb-3 text-sm font-semibold text-[#A88254]">
            {categoryProducts.length} منتج في هذا القسم
          </p>
          <h1 className="text-3xl font-bold leading-tight text-[#2F2F2F] md:text-5xl">
            {category.name}
          </h1>
          <p className="mt-4 max-w-2xl leading-8 text-[#6B6B6B]">
            {category.description}
          </p>
        </div>
      </section>

      <ProductGrid
        products={products}
        searchTerm={searchTerm}
        onClearFilters={onClearSearch}
        title="منتجات هذا القسم"
        eyebrow={category.name}
        description="اختر الصورة أو المنتج المناسب، ثم افتح صفحة التخصيص لاختيار اللون والمقاس والتفاصيل."
        emptyTitle="لا توجد منتجات في هذا القسم"
        emptyDescription="أضف المنتجات أو صور الأعمال لهذا القسم من ملف البيانات."
      />
    </>
  )
}

export default CategoryPage
