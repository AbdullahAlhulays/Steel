import { useState } from 'react'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import { categories } from '../data/products'

function Navbar({
  searchTerm,
  onSearchChange,
  onClearSearch,
}) {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  function scrollToCategories() {
    window.setTimeout(() => {
      document.getElementById('categories')?.scrollIntoView({ block: 'start' })
    }, 0)
  }

  function handleSearchChange(event) {
    onSearchChange(event.target.value)

    if (location.pathname.startsWith('/product/')) {
      navigate('/')
    }
  }

  function handleCatalogClick() {
    onClearSearch()
    setIsOpen(false)
    navigate('/')
    scrollToCategories()
  }

  function handleBrandClick() {
    onClearSearch()
    setIsOpen(false)
  }

  function handleCategoryLinkClick() {
    onClearSearch()
    setIsOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 border-b border-[#D8D3CC] bg-white/95 shadow-[0_8px_30px_rgba(47,47,47,0.04)] backdrop-blur-xl">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex min-h-20 items-center gap-4">
          <Link
            to="/"
            onClick={handleBrandClick}
            className="flex shrink-0 items-center gap-3"
            aria-label="العودة إلى الرئيسية"
          >
            <span className="relative grid h-12 w-12 place-items-center overflow-hidden rounded-2xl border border-[#D8D3CC] bg-[#FAF8F5] shadow-sm">
              <span className="absolute inset-x-2 top-3 h-px bg-[#AEB4BC]" />
              <span className="absolute inset-y-2 right-4 w-px bg-[#C7A46A]" />
              <span className="absolute inset-y-2 left-4 w-px bg-[#AEB4BC]" />
              <span className="text-sm font-bold text-[#2F2F2F]">SL</span>
            </span>
            <span>
              <span className="block text-xl font-bold leading-tight text-[#2F2F2F]">
                SteelLine
              </span>
              <span className="block text-xs text-[#6B6B6B]">
                لوحات ستيل حسب الطلب
              </span>
            </span>
          </Link>

          <label className="relative hidden flex-1 md:block">
            <span className="sr-only">البحث عن منتج</span>
            <input
              type="search"
              value={searchTerm}
              onChange={handleSearchChange}
              placeholder="ابحث باسم المنتج أو التصنيف أو رقم المنتج"
              className="w-full rounded-2xl border border-[#D8D3CC] bg-[#FAF8F5] px-4 py-3 pr-12 text-sm text-[#2F2F2F] outline-none transition placeholder:text-[#938c84] focus:border-[#AEB4BC] focus:bg-white"
            />
            <span className="absolute right-4 top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full border border-[#A88254]" />
          </label>

          <button
            type="button"
            onClick={handleCatalogClick}
            className="hidden shrink-0 rounded-2xl bg-[#C7A46A] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#A88254] lg:inline-flex"
          >
            التصنيفات
          </button>

          <button
            type="button"
            onClick={() => setIsOpen((current) => !current)}
            className="mr-auto grid h-11 w-11 place-items-center rounded-xl border border-[#D8D3CC] bg-[#FAF8F5] lg:hidden"
            aria-label="فتح القائمة"
            aria-expanded={isOpen}
          >
            <span className="flex w-5 flex-col gap-1.5">
              <span className="h-px rounded-full bg-[#2F2F2F]" />
              <span className="h-px rounded-full bg-[#2F2F2F]" />
              <span className="h-px rounded-full bg-[#2F2F2F]" />
            </span>
          </button>
        </div>

        <div className="pb-4 md:hidden">
          <label className="relative block">
            <span className="sr-only">البحث عن منتج</span>
            <input
              type="search"
              value={searchTerm}
              onChange={handleSearchChange}
              placeholder="ابحث عن منتج"
              className="w-full rounded-2xl border border-[#D8D3CC] bg-[#FAF8F5] px-4 py-3 pr-12 text-sm text-[#2F2F2F] outline-none placeholder:text-[#938c84] focus:border-[#AEB4BC]"
            />
            <span className="absolute right-4 top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full border border-[#A88254]" />
          </label>
        </div>

        <div className="hidden border-t border-[#ECE9E4] py-3 lg:block">
          <div className="flex items-center gap-2 overflow-x-auto">
            {categories.map((category) => {
              return (
                <NavLink
                  key={category.slug}
                  to={`/category/${category.slug}`}
                  onClick={handleCategoryLinkClick}
                  className={({ isActive }) =>
                    `shrink-0 rounded-full border px-4 py-2 text-xs font-semibold transition ${
                      isActive
                      ? 'border-[#C7A46A] bg-[#C7A46A] text-white'
                      : 'border-[#D8D3CC] bg-white text-[#6B6B6B] hover:border-[#AEB4BC] hover:text-[#2F2F2F]'
                    }`
                  }
                >
                  {category.name}
                </NavLink>
              )
            })}
          </div>
        </div>

        {isOpen && (
          <div className="grid gap-2 border-t border-[#D8D3CC] py-4 lg:hidden">
            <button
              type="button"
              onClick={handleCatalogClick}
              className="rounded-2xl bg-[#C7A46A] px-4 py-3 text-center text-sm font-bold text-white"
            >
              التصنيفات
            </button>
            {categories.map((category) => {
              return (
                <NavLink
                  key={category.slug}
                  to={`/category/${category.slug}`}
                  onClick={handleCategoryLinkClick}
                  className={({ isActive }) =>
                    `rounded-2xl border px-4 py-3 text-right text-sm font-semibold transition ${
                      isActive
                      ? 'border-[#C7A46A] bg-[#C7A46A] text-white'
                      : 'border-[#D8D3CC] bg-white text-[#6B6B6B]'
                    }`
                  }
                >
                  {category.name}
                </NavLink>
              )
            })}
          </div>
        )}
      </nav>
    </header>
  )
}

export default Navbar
