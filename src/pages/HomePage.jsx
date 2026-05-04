import { useSearchParams } from 'react-router-dom'
import FeaturesSection from '../components/FeaturesSection'
import HeroSection from '../components/HeroSection'
import ProductGrid from '../components/ProductGrid'
import StepsSection from '../components/StepsSection'
import { categories } from '../data/products'

function HomePage({ products, searchTerm, onClearFilters }) {
  const [searchParams, setSearchParams] = useSearchParams()
  const selectedCategorySlug = searchParams.get('category') || 'all'
  const selectedCategory = categories.find(
    (category) => category.slug === selectedCategorySlug,
  )
  const visibleProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory.name)
    : products

  function updateCategoryFilter(categorySlug) {
    const nextParams = new URLSearchParams(searchParams)

    if (categorySlug === 'all') {
      nextParams.delete('category')
    } else {
      nextParams.set('category', categorySlug)
    }

    setSearchParams(nextParams, { replace: true })
  }

  function clearFilters() {
    const nextParams = new URLSearchParams(searchParams)
    nextParams.delete('category')
    setSearchParams(nextParams, { replace: true })
    onClearFilters()
  }

  function scrollToSection(sectionId) {
    document.getElementById(sectionId)?.scrollIntoView({ block: 'start' })
  }

  return (
    <>
      <HeroSection
        onBrowseProducts={() => scrollToSection('products')}
        onShowSteps={() => scrollToSection('steps')}
      />

      <ProductGrid
        products={visibleProducts}
        searchTerm={searchTerm}
        categories={categories}
        selectedCategorySlug={selectedCategory ? selectedCategory.slug : 'all'}
        onCategorySelect={updateCategoryFilter}
        onClearFilters={clearFilters}
        title="اختر التصميم وخصص طلبك"
        eyebrow="المنتجات"
        description="تصفح كل التصاميم المتاحة، أو اختر تصنيفا محددا ثم افتح المنتج لتخصيص اللون والمقاس والتفاصيل."
      />

      <StepsSection />
      <FeaturesSection />
    </>
  )
}

export default HomePage
