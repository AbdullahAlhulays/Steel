import { useEffect, useMemo, useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import { products } from './data/products'
import CategoryPage from './pages/CategoryPage'
import HomePage from './pages/HomePage'
import ProductDetails from './pages/ProductDetails'

function App() {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredProducts = useMemo(() => {
    const query = searchTerm.trim().toLowerCase()

    return products.filter((product) => {
      const matchesSearch =
        !query ||
        [product.name, product.category, product.id].some((value) =>
          value.toLowerCase().includes(query),
        )

      return matchesSearch
    })
  }, [searchTerm])

  function clearSearch() {
    setSearchTerm('')
  }

  return (
    <div dir="rtl" className="min-h-screen bg-[#FAF8F5] text-[#2F2F2F]">
      <ScrollToTop />
      <Navbar
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        onClearSearch={clearSearch}
      />

      <main>
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                products={filteredProducts}
                searchTerm={searchTerm}
                onClearFilters={clearSearch}
              />
            }
          />
          <Route
            path="/category/:categorySlug"
            element={
              <CategoryPage
                searchTerm={searchTerm}
                onClearSearch={clearSearch}
              />
            }
          />
          <Route path="/product/:productId" element={<ProductDetails />} />
          <Route
            path="*"
            element={
              <section className="mx-auto flex min-h-[70vh] max-w-4xl flex-col items-center justify-center px-5 text-center">
                <p className="mb-3 text-sm font-semibold text-[#A88254]">
                  الصفحة غير موجودة
                </p>
                <h1 className="text-3xl font-bold text-[#2F2F2F]">
                  لم نجد الصفحة المطلوبة
                </h1>
              </section>
            }
          />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [pathname])

  return null
}

export default App
