import CategoryList from '../components/CategoryList'
import FeaturesSection from '../components/FeaturesSection'
import HeroSection from '../components/HeroSection'
import ProductGrid from '../components/ProductGrid'
import StepsSection from '../components/StepsSection'

function HomePage({
  products,
  searchTerm,
  onClearFilters,
}) {
  const hasSearch = Boolean(searchTerm)

  return (
    <>
      <HeroSection />

      {!hasSearch && (
        <>
          <CategoryList />
          <StepsSection />
          <FeaturesSection />
        </>
      )}

      {hasSearch && (
        <ProductGrid
          products={products}
          searchTerm={searchTerm}
          onClearFilters={onClearFilters}
          title="نتائج البحث"
          eyebrow="المنتجات المطابقة"
          description="هذه المنتجات مطابقة للبحث أو التصنيف المحدد من شريط التنقل."
        />
      )}
    </>
  )
}

export default HomePage
