import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { categories } from '../data/products'

function Navbar({
  searchTerm,
  onSearchChange,
  onClearSearch,
}) {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

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
  }

  function handleBrandClick() {
    onClearSearch()
    setIsOpen(false)
  }

  function handleCategoryClick(category) {
    onClearSearch()
    setIsOpen(false)
    navigate(`/?category=${category.slug}`)
  }

  const selectedCategorySlug =
    location.pathname === '/'
      ? new URLSearchParams(location.search).get('category')
      : null

  return (
    <header className="sticky top-0 z-50 border-b border-[#D8D3CC] bg-white/95 shadow-[0_8px_30px_rgba(47,47,47,0.04)] backdrop-blur-xl">
      <nav className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8">
        <div className="flex min-h-14 items-center gap-2 sm:min-h-20 sm:gap-4">
          <Link
            to="/"
            onClick={handleBrandClick}
            className="flex min-w-0 shrink-0 items-center gap-2 sm:gap-3"
            aria-label="العودة إلى الرئيسية"
          >
            <span className="relative grid h-9 w-9 shrink-0 place-items-center overflow-hidden rounded-xl border border-[#D8D3CC] bg-[#FAF8F5] shadow-sm sm:h-12 sm:w-12 sm:rounded-2xl">
              <span className="absolute inset-x-2 top-3 h-px bg-[#AEB4BC]" />
              <span className="absolute inset-y-2 right-4 w-px bg-[#C7A46A]" />
              <span className="absolute inset-y-2 left-4 w-px bg-[#AEB4BC]" />
              <span className="text-sm font-bold text-[#2F2F2F]">SL</span>
            </span>
            <span className="min-w-0">
              <span className="block truncate text-base font-bold leading-tight text-[#2F2F2F] sm:text-xl">
                SteelLine
              </span>
              <span className="block max-w-[13rem] truncate text-[10px] text-[#6B6B6B] max-[380px]:hidden sm:max-w-none sm:text-xs">
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
            المنتجات
          </button>

          <button
            type="button"
            onClick={() => setIsOpen((current) => !current)}
            className="mr-auto grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-[#D8D3CC] bg-[#FAF8F5] sm:h-11 sm:w-11 lg:hidden"
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

        <div className="pb-3 md:hidden">
          <label className="relative block">
            <span className="sr-only">البحث عن منتج</span>
            <input
              type="search"
              value={searchTerm}
              onChange={handleSearchChange}
              placeholder="ابحث عن منتج"
              className="min-h-11 w-full rounded-xl border border-[#D8D3CC] bg-[#FAF8F5] px-4 py-3 pr-11 text-sm text-[#2F2F2F] outline-none placeholder:text-[#938c84] focus:border-[#AEB4BC] sm:min-h-12 sm:rounded-2xl sm:pr-12"
            />
            <span className="absolute right-4 top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full border border-[#A88254]" />
          </label>
        </div>
      </nav>

      {isOpen && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <button
            type="button"
            className="absolute inset-0 bg-[#2F2F2F]/35"
            aria-label="إغلاق القائمة"
            onClick={() => setIsOpen(false)}
          />

          <aside className="absolute left-0 top-3 max-h-[calc(100dvh-1.5rem)] w-[min(68vw,17rem)] overflow-hidden rounded-r-2xl border border-l-0 border-[#D8D3CC] bg-white shadow-[18px_0_45px_rgba(47,47,47,0.18)]">
            <div className="flex min-h-12 items-center justify-between border-b border-[#ECE9E4] px-3">
              <div>
                <p className="text-sm font-bold text-[#2F2F2F]">القائمة</p>
                <p className="mt-0.5 text-[11px] leading-4 text-[#6B6B6B]">
                  انتقل بسرعة للتصنيفات
                </p>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="grid h-8 w-8 place-items-center rounded-lg border border-[#D8D3CC] bg-[#FAF8F5] text-lg leading-none text-[#2F2F2F]"
                aria-label="إغلاق القائمة"
              >
                ×
              </button>
            </div>

            <div className="overflow-y-auto px-3 py-3">
              <button
                type="button"
                onClick={handleCatalogClick}
                className="mb-3 min-h-10 w-full rounded-lg bg-[#C7A46A] px-3 py-2.5 text-center text-sm font-bold text-white"
              >
                الصفحة الرئيسية
              </button>

              <p className="mb-2 px-1 text-[11px] font-bold text-[#A88254]">
                التصنيفات
              </p>

              <div className="grid gap-1.5">
                {categories.map((category) => (
                  <button
                    key={category.slug}
                    type="button"
                    onClick={() => handleCategoryClick(category)}
                    className={`min-h-10 rounded-lg border px-3 py-2.5 text-right text-xs font-semibold leading-5 transition ${
                      selectedCategorySlug === category.slug
                        ? 'border-[#C7A46A] bg-[#C7A46A] text-white'
                        : 'border-[#D8D3CC] bg-white text-[#6B6B6B]'
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
          </aside>
        </div>
      )}
    </header>
  )
}

export default Navbar
