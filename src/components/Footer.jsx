import { Link } from 'react-router-dom'
import { categories } from '../data/products'

function Footer() {
  return (
    <footer className="border-t border-[#D8D3CC] bg-white">
      <div className="mx-auto grid max-w-7xl gap-7 px-3 py-8 sm:px-6 sm:py-10 md:grid-cols-[1.1fr_1fr_0.8fr] lg:px-8">
        <div>
          <Link to="/" className="inline-flex max-w-full items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-2xl border border-[#D8D3CC] bg-[#FAF8F5] text-sm font-bold text-[#2F2F2F]">
              SL
            </span>
            <span className="min-w-0">
              <span className="block text-lg font-bold text-[#2F2F2F]">
                SteelLine
              </span>
              <span className="block text-sm leading-6 text-[#6B6B6B]">
                لوحات ستيل مخصصة للمنازل والشركات
              </span>
            </span>
          </Link>
          <p className="mt-4 max-w-md text-sm leading-7 text-[#6B6B6B] sm:mt-5 sm:text-base sm:leading-8">
            تجربة طلب واضحة تساعد العميل على اختيار اللوحة المناسبة وتخصيصها
            بسهولة.
          </p>
        </div>

        <div>
          <h3 className="font-bold text-[#2F2F2F]">التصنيفات</h3>
          <div className="mt-4 grid gap-2">
            {categories.map((category) => (
              <Link
                key={category.slug}
                to={`/category/${category.slug}`}
                className="w-fit py-1 text-sm text-[#6B6B6B] transition hover:text-[#A88254]"
              >
                {category.name}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-bold text-[#2F2F2F]">التواصل</h3>
          <p className="mt-4 text-sm leading-7 text-[#6B6B6B]">
            الطلبات تتم عبر الواتساب مباشرة.
          </p>
          <a
            href="https://wa.me/966551195719"
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex rounded-xl bg-[#C7A46A] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#A88254] sm:rounded-2xl"
          >
            تواصل عبر واتساب
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
