export const categories = [
  {
    slug: 'national-address',
    name: 'لوحات عنوانك الوطني',
    description: 'لوحات مرتبة لعرض بيانات العنوان الوطني بوضوح على واجهة المنزل.',
  },
  {
    slug: 'house-numbers',
    name: 'لوحات أرقام المنازل',
    description: 'أرقام منزل واضحة وأنيقة بخيارات تشطيب تناسب الأبواب والمداخل.',
  },
  {
    slug: 'name-with-address',
    name: 'لوحات الاسم مع العنوان الوطني',
    description: 'تصميم شخصي يجمع الاسم مع بيانات العنوان في لوحة واحدة متوازنة.',
  },
  {
    slug: 'company-signs',
    name: 'لوحات خاصة بالشركات',
    description: 'حلول مخصصة للشركات والمتاجر حسب الهوية والمقاس المطلوب.',
  },
  {
    slug: 'art-signs',
    name: 'لوحات فنية',
    description: 'قطع ستيل زخرفية للمداخل والمجالس والمساحات التجارية.',
  },
]

export const categoryNames = categories.map((category) => category.name)

export const availableColors = [
  'فضي مطفي',
  'فضي لامع',
  'ذهبي مطفي',
  'ذهبي لامع',
  'اسود مطفي',
  'اسود لامع',
  'خشبي',
]

export const colorPreviews = {
  'فضي مطفي': 'bg-[linear-gradient(135deg,#f1f2f3_0%,#AEB4BC_48%,#d8dbe0_100%)]',
  'فضي لامع': 'bg-[linear-gradient(135deg,#ffffff_0%,#aeb4bc_36%,#eef0f2_66%,#b8bdc4_100%)]',
  'ذهبي مطفي': 'bg-[linear-gradient(135deg,#d2b77f_0%,#A88254_52%,#c7aa72_100%)]',
  'ذهبي لامع': 'bg-[linear-gradient(135deg,#dec78f_0%,#A88254_40%,#C7A46A_72%,#9a784c_100%)]',
  'اسود مطفي': 'bg-[linear-gradient(135deg,#565656_0%,#2F2F2F_58%,#444444_100%)]',
  'اسود لامع': 'bg-[linear-gradient(135deg,#3b3b3b_0%,#6B6B6B_36%,#2F2F2F_64%,#555555_100%)]',
  خشبي: 'bg-[linear-gradient(135deg,#be8f63_0%,#7a5539_48%,#a87950_100%)]',
}

const widthOptions = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120]

const lengthOptions = [
  10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170,
  180, 190, 200, 210, 220, 230, 240,
]

const sizeOptions = {
  widths: widthOptions,
  lengths: lengthOptions,
}

const colorImages = {
  'فضي مطفي': '/images/steel-silver-matte.svg',
  'فضي لامع': '/images/steel-silver-glossy.svg',
  'ذهبي مطفي': '/images/steel-gold-matte.svg',
  'ذهبي لامع': '/images/steel-gold-glossy.svg',
  'اسود مطفي': '/images/steel-black-matte.svg',
  'اسود لامع': '/images/steel-black-glossy.svg',
  خشبي: '/images/steel-wood.svg',
}

export const products = [
  {
    id: 'SL-001',
    name: 'لوحة عنوانك الوطني',
    category: 'لوحات عنوانك الوطني',
    description:
      'لوحة معدنية أنيقة لعرض العنوان الوطني على واجهة المنزل أو المدخل بلمسة مرتبة وفاخرة.',
    defaultImage: '/images/product-address.svg',
    colorImages: { ...colorImages },
    mockupType: 'address',
    fields: [
      {
        name: 'nationalAddress',
        label: 'العنوان الوطني',
        placeholder: 'مثال: 1234 طريق الملك فهد - الرياض',
        required: true,
      },
    ],
    availableColors,
    sizeOptions,
  },
  {
    id: 'SL-002',
    name: 'لوحة رقم منزل',
    category: 'لوحات أرقام المنازل',
    description:
      'رقم منزل بارز على ستيل فاخر، مناسب للأبواب والمداخل الخارجية مع وضوح قوي من بعيد.',
    defaultImage: '/images/product-house-number.svg',
    colorImages: { ...colorImages },
    mockupType: 'house',
    fields: [
      {
        name: 'houseNumber',
        label: 'رقم المنزل',
        placeholder: 'مثال: 25',
        required: true,
        inputMode: 'numeric',
      },
    ],
    availableColors,
    sizeOptions,
  },
  {
    id: 'SL-003',
    name: 'لوحة الاسم مع العنوان الوطني',
    category: 'لوحات الاسم مع العنوان الوطني',
    description:
      'تصميم يجمع الاسم مع بيانات العنوان الوطني بشكل متوازن لمدخل مرتب وشخصي.',
    defaultImage: '/images/product-name-address.svg',
    colorImages: { ...colorImages },
    mockupType: 'nameAddress',
    fields: [
      {
        name: 'customerName',
        label: 'الاسم',
        placeholder: 'مثال: عبدالرحمن بن محمد',
        required: true,
      },
      {
        name: 'unitNumber',
        label: 'رقم الفلة أو البيت أو الشقة',
        placeholder: 'مثال: فلة 12 أو شقة 4',
        required: true,
      },
    ],
    availableColors,
    sizeOptions,
  },
  {
    id: 'SL-004',
    name: 'لوحة خاصة بالشركات',
    category: 'لوحات خاصة بالشركات',
    description:
      'لوحة مخصصة للشركات والمتاجر، مع مساحة لإرسال تفاصيل الهوية والشعار في الطلب.',
    defaultImage: '/images/product-company.svg',
    colorImages: { ...colorImages },
    mockupType: 'company',
    fields: [
      {
        name: 'companyName',
        label: 'اسم الشركة أو المتجر',
        placeholder: 'مثال: SteelLine',
        required: false,
      },
      {
        name: 'designBrief',
        label: 'ملاحظات التصميم',
        placeholder: 'مثال: أحتاج اللوحة بشعار الشركة للواجهة الخارجية',
        required: false,
      },
    ],
    whatsappNote: 'يمكنك إرفاق الشعار أو الصورة بعد فتح المحادثة في الواتساب.',
    availableColors,
    sizeOptions,
  },
  {
    id: 'SL-005',
    name: 'لوحة فنية',
    category: 'لوحات فنية',
    description:
      'قطعة ديكور معدنية بتصميم فني نظيف للمداخل أو المجالس أو المساحات التجارية الراقية.',
    defaultImage: '/images/product-art.svg',
    colorImages: { ...colorImages },
    mockupType: 'art',
    fields: [
      {
        name: 'artDescription',
        label: 'وصف التصميم الفني',
        placeholder: 'مثال: نص قصير أو شكل هندسي بسيط',
        required: false,
      },
    ],
    availableColors,
    sizeOptions,
  },
]

export function getProductById(productId) {
  return products.find((product) => product.id === productId)
}

export function getCategoryBySlug(categorySlug) {
  return categories.find((category) => category.slug === categorySlug)
}

export function getCategoryByName(categoryName) {
  return categories.find((category) => category.name === categoryName)
}

export function getProductsByCategory(categoryName) {
  return products.filter((product) => product.category === categoryName)
}
