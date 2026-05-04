const metalStyles = {
  'فضي مطفي': {
    plate: 'bg-[linear-gradient(135deg,#f1f2f3_0%,#AEB4BC_48%,#d8dbe0_100%)]',
    text: 'text-[#2F2F2F]',
    accent: 'bg-[#6B6B6B]',
    rail: 'bg-[#AEB4BC]',
    edge: 'border-[#cfd4da]',
  },
  'فضي لامع': {
    plate: 'bg-[linear-gradient(135deg,#ffffff_0%,#aeb4bc_36%,#eef0f2_66%,#b8bdc4_100%)]',
    text: 'text-[#2F2F2F]',
    accent: 'bg-[#6B6B6B]',
    rail: 'bg-[#AEB4BC]',
    edge: 'border-[#cfd4da]',
  },
  'ذهبي مطفي': {
    plate: 'bg-[linear-gradient(135deg,#d2b77f_0%,#A88254_52%,#c7aa72_100%)]',
    text: 'text-[#2F2F2F]',
    accent: 'bg-[#2F2F2F]',
    rail: 'bg-[#C7A46A]',
    edge: 'border-[#ccb17d]',
  },
  'ذهبي لامع': {
    plate: 'bg-[linear-gradient(135deg,#dec78f_0%,#A88254_40%,#C7A46A_72%,#9a784c_100%)]',
    text: 'text-[#2F2F2F]',
    accent: 'bg-[#2F2F2F]',
    rail: 'bg-[#d8c494]',
    edge: 'border-[#cdb27d]',
  },
  'اسود مطفي': {
    plate: 'bg-[linear-gradient(135deg,#565656_0%,#2F2F2F_58%,#444444_100%)]',
    text: 'text-white',
    accent: 'bg-[#D6D1CA]',
    rail: 'bg-[#AEB4BC]',
    edge: 'border-[#656565]',
  },
  'اسود لامع': {
    plate: 'bg-[linear-gradient(135deg,#3b3b3b_0%,#6B6B6B_36%,#2F2F2F_64%,#555555_100%)]',
    text: 'text-white',
    accent: 'bg-[#EAE7E2]',
    rail: 'bg-[#AEB4BC]',
    edge: 'border-[#666666]',
  },
  خشبي: {
    plate: 'bg-[linear-gradient(135deg,#be8f63_0%,#7a5539_48%,#a87950_100%)]',
    text: 'text-[#2F2F2F]',
    accent: 'bg-[#2F2F2F]',
    rail: 'bg-[#d2ad86]',
    edge: 'border-[#ad825c]',
  },
}

function Screw({ className = '' }) {
  return (
    <span
      className={`absolute h-2.5 w-2.5 rounded-full border border-[#D6D1CA] bg-[#8B9098] shadow-inner ${className}`}
    />
  )
}

function ProductMockup({
  product,
  color = 'ذهبي لامع',
  compact = false,
  className = '',
}) {
  const style = metalStyles[color] || metalStyles['ذهبي لامع']
  const type = product?.mockupType || 'address'
  const size = compact ? 'min-h-[210px]' : 'min-h-[420px]'

  return (
    <div
      className={`relative overflow-hidden rounded-[1.75rem] border border-[#D6D1CA] bg-[#F3EEE7] ${size} ${className}`}
    >
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.72),rgba(234,231,226,0.52))]" />
      <div className="absolute inset-x-10 bottom-6 h-px bg-gradient-to-l from-transparent via-[#AEB4BC]/45 to-transparent" />

      <div className={`relative flex h-full ${size} items-center justify-center p-5`}>
        {type === 'house' && <HousePlate style={style} compact={compact} />}
        {type === 'nameAddress' && (
          <NameAddressPlate style={style} compact={compact} />
        )}
        {type === 'company' && <CompanyPlate style={style} compact={compact} />}
        {type === 'art' && <ArtPlate style={style} compact={compact} />}
        {type === 'address' && <AddressPlate style={style} compact={compact} />}
      </div>
    </div>
  )
}

function BrushedOverlay() {
  return (
    <span className="pointer-events-none absolute inset-0 rounded-[inherit] bg-[repeating-linear-gradient(100deg,rgba(255,255,255,0.22)_0px,rgba(255,255,255,0.08)_1px,transparent_2px,transparent_10px)] opacity-45" />
  )
}

function AddressPlate({ style, compact }) {
  return (
    <div
      className={`relative w-[86%] max-w-[560px] overflow-hidden rounded-2xl border ${style.edge} ${style.plate} shadow-[0_18px_45px_rgba(47,47,47,0.14)] ${
        compact ? 'p-5' : 'p-8'
      }`}
    >
      <BrushedOverlay />
      <Screw className="right-5 top-5" />
      <Screw className="left-5 top-5" />
      <div className={`relative space-y-4 ${style.text}`}>
        <p className="text-xs font-semibold opacity-75">العنوان الوطني</p>
        <div className="flex items-end justify-between gap-5">
          <p className={`${compact ? 'text-4xl' : 'text-6xl'} font-bold`}>
            8162
          </p>
          <div className="flex-1 space-y-2">
            <span className={`block h-3 rounded-full ${style.accent}`} />
            <span className={`block h-2 w-2/3 rounded-full ${style.accent}`} />
          </div>
        </div>
        <div className={`h-1.5 rounded-full ${style.rail}`} />
      </div>
    </div>
  )
}

function HousePlate({ style, compact }) {
  return (
    <div
      className={`relative w-[62%] max-w-[360px] overflow-hidden rounded-[2rem] border ${style.edge} ${style.plate} shadow-[0_18px_45px_rgba(47,47,47,0.14)] ${
        compact ? 'p-6' : 'p-9'
      }`}
    >
      <BrushedOverlay />
      <Screw className="right-6 top-6" />
      <Screw className="left-6 top-6" />
      <div className={`relative text-center ${style.text}`}>
        <p className="text-xs font-semibold opacity-75">رقم المنزل</p>
        <p className={`${compact ? 'text-7xl' : 'text-9xl'} font-bold`}>25</p>
        <span className={`mx-auto block h-2 w-24 rounded-full ${style.accent}`} />
      </div>
    </div>
  )
}

function NameAddressPlate({ style, compact }) {
  return (
    <div
      className={`relative w-[90%] max-w-[590px] overflow-hidden rounded-3xl border ${style.edge} ${style.plate} shadow-[0_18px_45px_rgba(47,47,47,0.14)] ${
        compact ? 'p-5' : 'p-8'
      }`}
    >
      <BrushedOverlay />
      <Screw className="right-5 top-5" />
      <Screw className="left-5 top-5" />
      <div className={`relative space-y-4 text-center ${style.text}`}>
        <p className={`${compact ? 'text-2xl' : 'text-4xl'} font-bold`}>
          عبدالرحمن بن محمد
        </p>
        <span className={`mx-auto block h-2 w-2/3 rounded-full ${style.accent}`} />
        <p className="text-sm font-semibold opacity-75">فلة 12 - العنوان الوطني</p>
      </div>
    </div>
  )
}

function CompanyPlate({ style, compact }) {
  return (
    <div
      className={`relative w-[88%] max-w-[600px] overflow-hidden rounded-2xl border border-[#D6D1CA] bg-white shadow-[0_18px_45px_rgba(47,47,47,0.13)] ${
        compact ? 'p-5' : 'p-8'
      }`}
    >
      <div className={`absolute inset-x-6 top-0 h-px ${style.rail}`} />
      <div className="relative flex items-center gap-5">
        <div
          className={`relative grid shrink-0 place-items-center overflow-hidden rounded-xl border ${style.edge} ${style.plate} ${style.text} ${
            compact ? 'h-16 w-16 text-xl' : 'h-24 w-24 text-3xl'
          } font-bold`}
        >
          <BrushedOverlay />
          <span className="relative">SL</span>
        </div>
        <div className="min-w-0 flex-1 space-y-3">
          <div className={`h-4 rounded-full ${style.rail}`} />
          <div className="h-3 w-3/4 rounded-full bg-[#AEB4BC]" />
          <div className="h-2 w-1/2 rounded-full bg-[#D6D1CA]" />
        </div>
      </div>
    </div>
  )
}

function ArtPlate({ style, compact }) {
  return (
    <div
      className={`relative w-[82%] max-w-[520px] overflow-hidden rounded-[2rem] border ${style.edge} ${style.plate} shadow-[0_18px_45px_rgba(47,47,47,0.14)] ${
        compact ? 'p-6' : 'p-9'
      }`}
    >
      <BrushedOverlay />
      <div className={`relative mx-auto mb-5 h-1.5 w-2/3 rounded-full ${style.accent}`} />
      <div className={`relative text-center ${style.text}`}>
        <p className={`${compact ? 'text-5xl' : 'text-7xl'} font-bold`}>فن</p>
        <p className="mt-2 text-sm font-semibold opacity-75">تصميم معدني مخصص</p>
      </div>
      <div className={`relative mx-auto mt-5 h-1.5 w-1/2 rounded-full ${style.accent}`} />
    </div>
  )
}

export default ProductMockup
