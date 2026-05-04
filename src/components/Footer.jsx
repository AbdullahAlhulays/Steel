import { Link } from 'react-router-dom'
import { categories } from '../data/products'

function Footer() {
  return (
    <footer className="border-t border-[#D8D3CC] bg-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-[1.1fr_1fr_0.8fr] lg:px-8">
        <div>
          <Link to="/" className="inline-flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-2xl border border-[#D8D3CC] bg-[#FAF8F5] text-sm font-bold text-[#2F2F2F]">
              SL
            </span>
            <span>
              <span className="block text-lg font-bold text-[#2F2F2F]">
                SteelLine
              </span>
              <span className="text-sm text-[#6B6B6B]">
                لوحات ستيل مخصصة للمنازل والشركات
              </span>
            </span>
          </Link>
          <p className="mt-5 max-w-md leading-8 text-[#6B6B6B]">
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
            className="mt-4 inline-flex rounded-2xl bg-[#C7A46A] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#A88254]"
          >
            تواصل عبر واتساب
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
