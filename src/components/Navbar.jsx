import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

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

        {isOpen && (
          <div className="grid gap-2 border-t border-[#D8D3CC] py-3 lg:hidden">
            <button
              type="button"
              onClick={handleCatalogClick}
              className="min-h-11 rounded-xl bg-[#C7A46A] px-4 py-3 text-center text-sm font-bold text-white sm:min-h-12 sm:rounded-2xl"
            >
              المنتجات
            </button>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Navbar
