export const defaultLang = "en" as const;

export const languages = {
  en: { label: "English", shortLabel: "EN", locale: "en" },
  ru: { label: "Русский", shortLabel: "RU", locale: "ru" },
  ar: { label: "العربية", shortLabel: "AR", locale: "ar" },
  th: { label: "ไทย", shortLabel: "TH", locale: "th" },
  vi: { label: "Tiếng Việt", shortLabel: "VI", locale: "vi" },
  id: { label: "Bahasa Indonesia", shortLabel: "ID", locale: "id" },
  zh: { label: "简体中文", shortLabel: "中文", locale: "zh-CN" },
} as const;

export type Lang = keyof typeof languages;

export const langCodes = Object.keys(languages) as Lang[];

export const contact = {
  company: {
    en: "Maanshan Lijian Food Machinery Blade Factory",
    ru: "Maanshan Lijian Food Machinery Blade Factory",
    ar: "مصنع ماانشان ليجيان لشفرات آلات الأغذية",
    th: "โรงงานใบมีดเครื่องจักรอาหาร Maanshan Lijian",
    vi: "Nhà máy dao máy thực phẩm Maanshan Lijian",
    id: "Pabrik Pisau Mesin Makanan Maanshan Lijian",
    zh: "马鞍山市利坚食品机械刀片厂",
  },
  address: {
    en: "Shanghai Foreign Trade Office / Maanshan Factory Technical Department",
    ru: "Шанхайский внешнеторговый отдел / технический отдел завода в Мааньшане",
    ar: "مكتب شنغهاي للتجارة الخارجية / القسم الفني في مصنع ماانشان",
    th: "สำนักงานการค้าต่างประเทศเซี่ยงไฮ้ / ฝ่ายเทคนิคโรงงานหม่าอันซาน",
    vi: "Văn phòng ngoại thương Thượng Hải / Bộ phận kỹ thuật nhà máy Maanshan",
    id: "Kantor Perdagangan Luar Negeri Shanghai / Departemen Teknis Pabrik Maanshan",
    zh: "上海外贸部 / 马鞍山工厂技术部",
  },
  email: "sales@lijianblades.com",
  phone: "+86 188 0192 8860",
  whatsapp: "+8618801928860",
  whatsappQr: "/images/contact/whatsapp-qr.jpeg",
  logo: "/images/brand/lijian-symbol-rounded.svg",
  telegram: "",
  wechat: "",
  linkedin: "",
  departments: [
    {
      id: "shanghai-trade",
      name: {
        en: "Shanghai Foreign Trade Office",
        ru: "Шанхайский внешнеторговый отдел",
        ar: "مكتب شنغهاي للتجارة الخارجية",
        th: "สำนักงานการค้าต่างประเทศเซี่ยงไฮ้",
        vi: "Văn phòng ngoại thương Thượng Hải",
        id: "Kantor Perdagangan Luar Negeri Shanghai",
        zh: "上海外贸部",
      },
      address: {
        en: "Room 229, Building C, No. 888 Huanhu West 2nd Road, Lingang New Area, China (Shanghai) Pilot Free Trade Zone, Shanghai, China",
        ru: "Кабинет 229, корпус C, дом 888, Huanhu West 2nd Road, Lingang New Area, China (Shanghai) Pilot Free Trade Zone, Шанхай, Китай",
        ar: "الغرفة 229، المبنى C، رقم 888 طريق Huanhu West 2nd، منطقة Lingang الجديدة، منطقة التجارة الحرة التجريبية في شنغهاي، الصين",
        th: "ห้อง 229 อาคาร C เลขที่ 888 ถนน Huanhu West 2nd เขต Lingang New Area เขตการค้าเสรีนำร่องจีน (เซี่ยงไฮ้) เซี่ยงไฮ้ ประเทศจีน",
        vi: "Phòng 229, Tòa C, Số 888 đường Huanhu West 2nd, Khu mới Lingang, Khu thương mại tự do thí điểm Trung Quốc (Thượng Hải), Thượng Hải, Trung Quốc",
        id: "Ruang 229, Gedung C, No. 888 Huanhu West 2nd Road, Kawasan Baru Lingang, Zona Perdagangan Bebas Percontohan China (Shanghai), Shanghai, China",
        zh: "中国（上海）自由贸易试验区临港新片区环湖西二路888号C楼229室",
      },
      phone: "+86 188 0192 8860",
    },
    {
      id: "maanshan-technical",
      name: {
        en: "Maanshan Factory Technical Department",
        ru: "Технический отдел завода в Мааньшане",
        ar: "القسم الفني في مصنع ماانشان",
        th: "ฝ่ายเทคนิคโรงงานหม่าอันซาน",
        vi: "Bộ phận kỹ thuật nhà máy Maanshan",
        id: "Departemen Teknis Pabrik Maanshan",
        zh: "马鞍山工厂技术部",
      },
      address: {
        en: "Daxi Industrial Cluster, Sanyang Village, Bowang Town, Bowang District, Maanshan, Anhui, China",
        ru: "Промышленная зона Daxi, деревня Sanyang, поселок Bowang, район Bowang, Мааньшань, Аньхой, Китай",
        ar: "منطقة Daxi الصناعية، قرية Sanyang، بلدة Bowang، مقاطعة Bowang، ماانشان، آنهوي، الصين",
        th: "เขตอุตสาหกรรม Daxi หมู่บ้าน Sanyang เมือง Bowang เขต Bowang เมือง Maanshan มณฑล Anhui ประเทศจีน",
        vi: "Cụm công nghiệp Daxi, làng Sanyang, thị trấn Bowang, quận Bowang, Maanshan, An Huy, Trung Quốc",
        id: "Kawasan Industri Daxi, Desa Sanyang, Kota Bowang, Distrik Bowang, Maanshan, Anhui, China",
        zh: "安徽省马鞍山市博望区博望镇三杨村大溪工业集中区",
      },
      phone: "+86 138 5559 6398",
    },
  ],
};

export const channelLinks = {
  email: `mailto:${contact.email}`,
  phone: `tel:${contact.phone.replace(/\s/g, "")}`,
  whatsapp: `https://wa.me/${contact.whatsapp.replace(/\D/g, "")}`,
  telegram: contact.telegram ? `https://t.me/${contact.telegram}` : "",
  wechat: contact.wechat ? "#wechat" : "",
  linkedin: contact.linkedin,
};

export const ui = {
  en: {
    siteName: "Lijian Food Blades",
    nav: {
      home: "Home",
      products: "Products",
      applications: "Applications",
      manufacturing: "Manufacturing",
      quality: "Quality",
      about: "About",
      contact: "Contact",
    },
    actions: {
      viewProducts: "View Products",
      contactUs: "Contact Us",
      discussBlade: "Discuss This Blade",
    },
    labels: {
      language: "Language",
      typicalApplications: "Typical Applications",
      typicalEquipment: "Typical Equipment",
      customOptions: "Custom Options",
      materials: "Materials",
      process: "Process",
      inspection: "Inspection",
      productRange: "Product Range",
      applicationRange: "Application Range",
      contactChannels: "Contact Channels",
      whatsappQr: "WhatsApp QR Code",
      scanWhatsapp: "Scan to add WhatsApp",
      openWhatsapp: "Click to chat on WhatsApp",
    },
    seo: {
      homeTitle: "Maanshan Lijian Chinese Direct Food Processing Blades Manufacturer",
      homeDescription:
        "Maanshan Lijian is a Chinese direct manufacturer of custom and replacement blades for meat, seafood, poultry, vegetable, bakery and packaging machinery.",
      productsTitle: "Custom Food Processing Blades and Food Machine Knives",
      productsDescription:
        "Custom and OEM replacement food machine knives for buyers who need matched blade profile, mounting holes, material, hardness and repeatable batch supply.",
      applicationsTitle: "Food Processing Blade Applications",
      applicationsDescription:
        "Match replacement and custom blades by food material, production line and cutting condition, including meat, poultry, seafood, frozen food, vegetable, bakery and packaging equipment.",
      manufacturingTitle: "Industrial Blade Manufacturing Capabilities",
      manufacturingDescription:
        "Production control for replacement fit, batch consistency and export delivery: material selection, CNC machining, heat treatment, grinding, edge finishing, inspection and packing.",
      qualityTitle: "Food Processing Blade Quality Control",
      qualityDescription:
        "Quality control for food machine blades focuses on measurable risks: material, hardness, hole position, thickness, bevel angle, edge consistency, surface finish and anti-rust packing.",
      aboutTitle: "About Maanshan Lijian Food Machinery Blade Factory",
      aboutDescription:
        "Maanshan Lijian Food Machinery Blade Factory is a Chinese direct factory focused on custom food machine knives, OEM replacement blades and export cooperation.",
      contactTitle: "Contact Maanshan Lijian Food Machinery Blade Factory",
      contactDescription:
        "Contact Maanshan Lijian by email, WhatsApp or phone for custom food processing blades and replacement knives.",
    },
    home: {
      eyebrow: "Chinese Direct Food Machinery Blade Factory",
      h1: "Custom Industrial Food Processing Blades",
      intro:
        "Send a drawing, old blade photo, machine model or key dimensions. We manufacture custom and OEM replacement blades for meat, seafood, poultry, vegetable, bakery and food packaging machinery.",
      trust: ["Drawing, sample or model accepted", "7-day sample support", "30-day batch delivery", "Export communication support"],
      productsLead:
        "Choose by blade type, machine position or replacement requirement. Send drawings, old samples or equipment models, and we will help confirm the dimensions and custom details before production.",
      applicationsLead:
        "Select by food category and production line first. We help buyers match blade profile, material, hardness and edge geometry for replacement knives, OEM equipment and repeat orders.",
      manufacturingLead:
        "For overseas replacement orders, manufacturing control is built around installation fit, cutting life and repeatability. We review drawings, control CNC holes and slots, match heat-treatment hardness, grind critical surfaces and pack for export shipment.",
      qualityLead:
        "Quality control explains what is checked before shipment, so buyers can reduce the risk of poor installation, unstable cutting, short blade life or corrosion during transport.",
    },
    contactPrompt:
      "Work directly with Maanshan Lijian, a Chinese source factory. Share the blade drawing, sample, equipment model or cutting issue, and we will confirm material, hardness, edge geometry and delivery options.",
  },
  ru: {
    siteName: "Lijian Food Blades",
    nav: {
      home: "Главная",
      products: "Продукция",
      applications: "Применение",
      manufacturing: "Производство",
      quality: "Качество",
      about: "Компания",
      contact: "Контакты",
    },
    actions: {
      viewProducts: "Продукция",
      contactUs: "Связаться",
      discussBlade: "Обсудить нож",
    },
    labels: {
      language: "Язык",
      typicalApplications: "Типичное применение",
      typicalEquipment: "Оборудование",
      customOptions: "Параметры на заказ",
      materials: "Материалы",
      process: "Процесс",
      inspection: "Инспекция",
      productRange: "Ассортимент",
      applicationRange: "Отрасли",
      contactChannels: "Каналы связи",
      whatsappQr: "QR-код WhatsApp",
      scanWhatsapp: "Сканируйте, чтобы добавить WhatsApp",
      openWhatsapp: "Открыть чат WhatsApp",
    },
    seo: {
      homeTitle: "Maanshan Lijian - китайский прямой производитель ножей для пищевого оборудования",
      homeDescription:
        "Maanshan Lijian Food Machinery Blade Factory — китайский прямой завод-производитель стандартных и нестандартных ножей для мясного, рыбного, овощного, хлебопекарного и упаковочного оборудования.",
      productsTitle: "Промышленные ножи для пищевой промышленности",
      productsDescription:
        "Нестандартные и OEM сменные ножи для пищевого оборудования с подбором профиля, отверстий, материала, твердости и повторяемой поставки.",
      applicationsTitle: "Применение ножей в пищевой промышленности",
      applicationsDescription:
        "Подбор сменных и нестандартных ножей по продукту, линии и условиям резки: мясо, птица, рыба, заморозка, овощи, выпечка и упаковочное оборудование.",
      manufacturingTitle: "Производственные возможности промышленных ножей",
      manufacturingDescription:
        "Контроль производства для посадки, стабильности партии и экспортной поставки: материал, CNC обработка, термообработка, шлифование, кромка, проверка и упаковка.",
      qualityTitle: "Контроль качества ножей для пищевого оборудования",
      qualityDescription:
        "Контроль качества ножей для пищевого оборудования по измеримым рискам: материал, твердость, отверстия, толщина, угол заточки, кромка, поверхность и антикоррозионная упаковка.",
      aboutTitle: "О Maanshan Lijian Food Machinery Blade Factory",
      aboutDescription:
        "Maanshan Lijian Food Machinery Blade Factory — китайский прямой завод, специализирующийся на ножах для пищевого оборудования, сменных OEM ножах и экспортном сотрудничестве.",
      contactTitle: "Контакты Maanshan Lijian",
      contactDescription:
        "Свяжитесь с Maanshan Lijian по Email, WhatsApp или телефону для изготовления ножей для пищевого оборудования.",
    },
    home: {
      eyebrow: "Китайский прямой завод ножей для пищевого оборудования",
      h1: "Промышленные ножи для пищевого оборудования",
      intro:
        "Отправьте чертеж, фото старого ножа, модель оборудования или основные размеры. Мы производим ножи на заказ и OEM сменные ножи для мясного, рыбного, овощного, хлебопекарного и упаковочного оборудования.",
      trust: ["Чертеж, образец или модель", "Образец от 7 дней", "Партия от 30 дней", "Поддержка экспортной связи"],
      productsLead:
        "Выбирайте по типу ножа, месту установки или задаче замены. Отправьте чертеж, старый образец или модель машины, и мы уточним размеры и параметры перед производством.",
      applicationsLead:
        "Начните с продукта и типа линии. Мы помогаем подобрать профиль ножа, материал, твердость и геометрию кромки для замены, OEM оборудования и повторных заказов.",
      manufacturingLead:
        "Для зарубежных заказов производство строится вокруг посадки, ресурса резки и повторяемости. Мы проверяем чертежи, контролируем CNC отверстия и пазы, подбираем твердость, шлифуем критические поверхности и упаковываем для экспорта.",
      qualityLead:
        "Контроль качества показывает, что проверяется перед отправкой, чтобы снизить риск плохой установки, нестабильного реза, малого ресурса или коррозии при перевозке.",
    },
    contactPrompt:
      "Свяжитесь напрямую с Maanshan Lijian, китайским заводом-источником. Отправьте чертеж, образец, модель оборудования или задачу резки, и мы уточним материал, твердость, геометрию кромки и поставку.",
  },
  ar: {
    siteName: "Lijian Food Blades",
    nav: {
      home: "الرئيسية",
      products: "المنتجات",
      applications: "التطبيقات",
      manufacturing: "التصنيع",
      quality: "الجودة",
      about: "عن المصنع",
      contact: "تواصل معنا",
    },
    actions: {
      viewProducts: "عرض المنتجات",
      contactUs: "تواصل معنا",
      discussBlade: "ناقش هذه الشفرة",
    },
    labels: {
      language: "اللغة",
      typicalApplications: "تطبيقات شائعة",
      typicalEquipment: "معدات مناسبة",
      customOptions: "خيارات التخصيص",
      materials: "المواد",
      process: "العملية",
      inspection: "الفحص",
      productRange: "نطاق المنتجات",
      applicationRange: "نطاق التطبيقات",
      contactChannels: "قنوات التواصل",
      whatsappQr: "رمز WhatsApp",
      scanWhatsapp: "امسح لإضافة WhatsApp",
      openWhatsapp: "افتح محادثة WhatsApp",
    },
    seo: {
      homeTitle: "Maanshan Lijian - مصنع صيني لشفرات آلات الأغذية",
      homeDescription:
        "Maanshan Lijian مصنع صيني مباشر لشفرات آلات الأغذية، يقدم شفرات مخصصة وبديلة و OEM لمعدات اللحوم والأسماك والدواجن والخضار والمخابز والتغليف.",
      productsTitle: "شفرات آلات الأغذية وشفرات معالجة الطعام المخصصة",
      productsDescription:
        "شفرات مخصصة وبديلة لمعدات معالجة الأغذية مع مطابقة الشكل، فتحات التركيب، المادة، الصلابة وتكرار التوريد للطلبات المتكررة.",
      applicationsTitle: "تطبيقات شفرات معالجة الأغذية",
      applicationsDescription:
        "اختيار الشفرات حسب خط الإنتاج والمواد الغذائية: اللحوم، الدواجن، الأسماك، الأغذية المجمدة، الخضار، المخابز ومعدات التغليف.",
      manufacturingTitle: "قدرات تصنيع الشفرات الصناعية",
      manufacturingDescription:
        "تصنيع مضبوط للملاءمة، ثبات الدفعات والتصدير: اختيار المادة، CNC، المعالجة الحرارية، الجلخ، تشطيب الحافة، الفحص والتغليف.",
      qualityTitle: "مراقبة جودة شفرات آلات الأغذية",
      qualityDescription:
        "مراقبة جودة شفرات آلات الأغذية تغطي المادة، الصلابة، مواضع الفتحات، السماكة، زاوية الحافة، السطح، ثبات الدفعات والتغليف ضد الصدأ.",
      aboutTitle: "عن مصنع Maanshan Lijian لشفرات آلات الأغذية",
      aboutDescription:
        "Maanshan Lijian مصنع صيني مباشر متخصص في شفرات آلات الأغذية، الشفرات المخصصة، شفرات OEM البديلة والتعاون في التصدير.",
      contactTitle: "تواصل مع Maanshan Lijian",
      contactDescription:
        "تواصل عبر البريد الإلكتروني أو WhatsApp أو الهاتف لطلب شفرات آلات الأغذية والشفرات المخصصة والبديلة.",
    },
    home: {
      eyebrow: "مصنع صيني مباشر لشفرات آلات الأغذية",
      h1: "تصنيع شفرات مخصصة لمعدات الأغذية",
      intro:
        "أرسل الرسم، صورة الشفرة القديمة، موديل الجهاز أو الأبعاد الرئيسية. نصنع شفرات مخصصة وبديلة OEM لمعدات اللحوم والأسماك والدواجن والخضار والمخابز وتغليف الأغذية.",
      trust: ["نقبل الرسم أو العينة أو موديل الجهاز", "دعم عينة خلال 7 أيام", "تسليم الدفعات خلال 30 يوما", "تواصل تصدير عبر WhatsApp"],
      productsLead:
        "ابدأ من نوع الشفرة أو موضع التركيب أو طلب الاستبدال. بعد استلام الرسم أو العينة أو موديل الجهاز، نؤكد الشكل، الفتحات، السماكة، المادة وتفاصيل الحافة.",
      applicationsLead:
        "اختر حسب نوع الغذاء وخط الإنتاج. نساعد في مطابقة شكل الشفرة، المادة، الصلابة وهندسة الحافة لطلبات الاستبدال و OEM والطلبات المتكررة.",
      manufacturingLead:
        "للطلبات الخارجية، يركز التصنيع على ملاءمة التركيب، عمر القطع وتكرار الجودة. نراجع الرسومات، نتحكم في فتحات CNC، نطابق الصلابة، نجلخ الأسطح الحرجة ونغلف للتصدير.",
      qualityLead:
        "توضح مراقبة الجودة ما يتم فحصه قبل الشحن لتقليل مخاطر عدم الملاءمة، القطع غير المستقر، قصر عمر الشفرة أو الصدأ أثناء النقل.",
    },
    contactPrompt:
      "تواصل مباشرة مع Maanshan Lijian، مصنع صيني مصدر. أرسل الرسم، العينة، موديل الجهاز أو مشكلة القطع، وسنؤكد المادة، الصلابة، شكل الحافة وخيارات التسليم.",
  },
  th: {
    siteName: "Lijian Food Blades",
    nav: {
      home: "หน้าแรก",
      products: "สินค้า",
      applications: "การใช้งาน",
      manufacturing: "การผลิต",
      quality: "คุณภาพ",
      about: "เกี่ยวกับโรงงาน",
      contact: "ติดต่อเรา",
    },
    actions: {
      viewProducts: "ดูสินค้า",
      contactUs: "ติดต่อเรา",
      discussBlade: "สอบถามใบมีดนี้",
    },
    labels: {
      language: "ภาษา",
      typicalApplications: "การใช้งานทั่วไป",
      typicalEquipment: "อุปกรณ์ที่ใช้",
      customOptions: "ตัวเลือกสั่งผลิต",
      materials: "วัสดุ",
      process: "กระบวนการ",
      inspection: "การตรวจสอบ",
      productRange: "กลุ่มสินค้า",
      applicationRange: "กลุ่มการใช้งาน",
      contactChannels: "ช่องทางติดต่อ",
      whatsappQr: "QR Code WhatsApp",
      scanWhatsapp: "สแกนเพื่อเพิ่ม WhatsApp",
      openWhatsapp: "เปิดแชท WhatsApp",
    },
    seo: {
      homeTitle: "Maanshan Lijian - ผู้ผลิตใบมีดเครื่องจักรอาหารจากจีน",
      homeDescription:
        "Maanshan Lijian เป็นโรงงานจีนผู้ผลิตใบมีดเครื่องจักรอาหาร ใบมีดสั่งทำ ใบมีดทดแทน และใบมีด OEM สำหรับเครื่องจักรแปรรูปอาหารและบรรจุภัณฑ์",
      productsTitle: "ใบมีดเครื่องจักรอาหารและใบมีดแปรรูปอาหารสั่งทำ",
      productsDescription:
        "ใบมีดเครื่องจักรอาหารแบบสั่งทำและใบมีดทดแทน OEM พร้อมการยืนยันรูปทรง รูติดตั้ง วัสดุ ความแข็ง และการผลิตซ้ำเป็นล็อต",
      applicationsTitle: "การใช้งานใบมีดแปรรูปอาหาร",
      applicationsDescription:
        "เลือกใบมีดตามวัตถุดิบอาหารและไลน์การผลิต เช่น เนื้อสัตว์ สัตว์ปีก อาหารทะเล อาหารแช่แข็ง ผักผลไม้ เบเกอรี่ และบรรจุภัณฑ์",
      manufacturingTitle: "ความสามารถในการผลิตใบมีดอุตสาหกรรม",
      manufacturingDescription:
        "ควบคุมการผลิตสำหรับความพอดีในการติดตั้ง ความสม่ำเสมอของล็อต และการส่งออก: วัสดุ CNC ชุบแข็ง เจียร แต่งคม ตรวจสอบ และบรรจุ",
      qualityTitle: "การควบคุมคุณภาพใบมีดเครื่องจักรอาหาร",
      qualityDescription:
        "ตรวจสอบวัสดุ ความแข็ง รูติดตั้ง ความหนา มุมคม ผิวงาน ความสม่ำเสมอของล็อต และบรรจุป้องกันสนิมสำหรับใบมีดเครื่องจักรอาหาร",
      aboutTitle: "เกี่ยวกับโรงงานใบมีดเครื่องจักรอาหาร Maanshan Lijian",
      aboutDescription:
        "Maanshan Lijian เป็นโรงงานจีนที่ผลิตใบมีดเครื่องจักรอาหาร ใบมีดสั่งทำ ใบมีดทดแทน OEM และรองรับงานส่งออก",
      contactTitle: "ติดต่อ Maanshan Lijian",
      contactDescription:
        "ติดต่อผ่านอีเมล WhatsApp หรือโทรศัพท์สำหรับใบมีดเครื่องจักรอาหาร ใบมีดสั่งทำ และใบมีดทดแทน",
    },
    home: {
      eyebrow: "โรงงานจีนผลิตใบมีดเครื่องจักรอาหารโดยตรง",
      h1: "ใบมีดเครื่องจักรอาหารสั่งผลิต",
      intro:
        "ส่งแบบวาด รูปใบมีดเก่า รุ่นเครื่องจักร หรือขนาดหลักมาให้เรา เราผลิตใบมีดสั่งทำและใบมีดทดแทน OEM สำหรับเครื่องจักรเนื้อสัตว์ อาหารทะเล สัตว์ปีก ผักผลไม้ เบเกอรี่ และบรรจุภัณฑ์อาหาร",
      trust: ["รับแบบวาด ตัวอย่าง หรือรุ่นเครื่องจักร", "รองรับตัวอย่าง 7 วัน", "ส่งมอบล็อต 30 วัน", "ติดต่อส่งออกผ่าน WhatsApp"],
      productsLead:
        "เริ่มจากประเภทใบมีด ตำแหน่งติดตั้ง หรือความต้องการทดแทน หลังได้รับแบบ ตัวอย่าง หรือรุ่นเครื่องจักร เราจะช่วยยืนยันรูปทรง รูติดตั้ง ความหนา วัสดุ และรายละเอียดคม",
      applicationsLead:
        "เลือกตามประเภทอาหารและไลน์ผลิต เราช่วยจับคู่รูปทรงใบมีด วัสดุ ความแข็ง และคมตัดสำหรับงานทดแทน OEM และการสั่งซ้ำ",
      manufacturingLead:
        "สำหรับคำสั่งซื้อส่งออก เราเน้นความพอดีในการติดตั้ง อายุการตัด และความสม่ำเสมอของล็อต โดยตรวจแบบ ควบคุมรู CNC เลือกความแข็ง เจียรผิวสำคัญ และบรรจุสำหรับขนส่ง",
      qualityLead:
        "การควบคุมคุณภาพแสดงสิ่งที่ตรวจสอบก่อนส่ง เพื่อช่วยลดความเสี่ยงเรื่องติดตั้งไม่ได้ การตัดไม่เสถียร อายุสั้น หรือเกิดสนิมระหว่างขนส่ง",
    },
    contactPrompt:
      "ติดต่อ Maanshan Lijian โรงงานต้นทางจากจีนโดยตรง ส่งแบบ ตัวอย่าง รุ่นเครื่องจักร หรือปัญหาการตัด เราจะช่วยยืนยันวัสดุ ความแข็ง รูปทรงคม และตัวเลือกการส่งมอบ",
  },
  vi: {
    siteName: "Lijian Food Blades",
    nav: {
      home: "Trang chủ",
      products: "Sản phẩm",
      applications: "Ứng dụng",
      manufacturing: "Sản xuất",
      quality: "Chất lượng",
      about: "Về nhà máy",
      contact: "Liên hệ",
    },
    actions: {
      viewProducts: "Xem sản phẩm",
      contactUs: "Liên hệ",
      discussBlade: "Trao đổi dao này",
    },
    labels: {
      language: "Ngôn ngữ",
      typicalApplications: "Ứng dụng phổ biến",
      typicalEquipment: "Thiết bị phù hợp",
      customOptions: "Tùy chỉnh",
      materials: "Vật liệu",
      process: "Quy trình",
      inspection: "Kiểm tra",
      productRange: "Dải sản phẩm",
      applicationRange: "Dải ứng dụng",
      contactChannels: "Kênh liên hệ",
      whatsappQr: "Mã QR WhatsApp",
      scanWhatsapp: "Quét để thêm WhatsApp",
      openWhatsapp: "Mở trò chuyện WhatsApp",
    },
    seo: {
      homeTitle: "Maanshan Lijian - nhà sản xuất dao máy thực phẩm tại Trung Quốc",
      homeDescription:
        "Maanshan Lijian là nhà máy Trung Quốc sản xuất dao máy thực phẩm, dao tùy chỉnh, dao thay thế OEM cho thiết bị chế biến thực phẩm và đóng gói.",
      productsTitle: "Dao máy thực phẩm và dao chế biến thực phẩm tùy chỉnh",
      productsDescription:
        "Dao máy thực phẩm tùy chỉnh và dao thay thế OEM theo bản vẽ, mẫu cũ hoặc model thiết bị, kiểm soát hình dạng, lỗ lắp, vật liệu, độ cứng và lô sản xuất.",
      applicationsTitle: "Ứng dụng dao chế biến thực phẩm",
      applicationsDescription:
        "Chọn dao theo nguyên liệu và dây chuyền: thịt, gia cầm, thủy sản, thực phẩm đông lạnh, rau quả, bánh mì và thiết bị đóng gói.",
      manufacturingTitle: "Năng lực sản xuất dao công nghiệp",
      manufacturingDescription:
        "Kiểm soát sản xuất cho độ vừa lắp, ổn định lô và xuất khẩu: vật liệu, CNC, nhiệt luyện, mài, hoàn thiện cạnh, kiểm tra và đóng gói.",
      qualityTitle: "Kiểm soát chất lượng dao máy thực phẩm",
      qualityDescription:
        "Kiểm soát vật liệu, độ cứng, vị trí lỗ, độ dày, góc cạnh, bề mặt, ổn định lô và đóng gói chống gỉ cho dao máy thực phẩm.",
      aboutTitle: "Về nhà máy dao máy thực phẩm Maanshan Lijian",
      aboutDescription:
        "Maanshan Lijian là nhà máy Trung Quốc chuyên dao máy thực phẩm, dao tùy chỉnh, dao thay thế OEM và hợp tác xuất khẩu.",
      contactTitle: "Liên hệ Maanshan Lijian",
      contactDescription:
        "Liên hệ qua email, WhatsApp hoặc điện thoại để trao đổi dao máy thực phẩm, dao tùy chỉnh và dao thay thế.",
    },
    home: {
      eyebrow: "Nhà máy Trung Quốc sản xuất dao máy thực phẩm",
      h1: "Dao máy thực phẩm tùy chỉnh",
      intro:
        "Gửi bản vẽ, ảnh dao cũ, model máy hoặc kích thước chính. Chúng tôi sản xuất dao tùy chỉnh và dao thay thế OEM cho máy thịt, thủy sản, gia cầm, rau quả, bánh mì và đóng gói thực phẩm.",
      trust: ["Nhận bản vẽ, mẫu hoặc model máy", "Hỗ trợ mẫu 7 ngày", "Giao lô hàng 30 ngày", "Hỗ trợ xuất khẩu qua WhatsApp"],
      productsLead:
        "Bắt đầu từ loại dao, vị trí lắp hoặc nhu cầu thay thế. Sau khi nhận bản vẽ, mẫu cũ hoặc model máy, chúng tôi xác nhận hình dạng, lỗ, độ dày, vật liệu và cạnh dao.",
      applicationsLead:
        "Chọn theo loại thực phẩm và dây chuyền. Chúng tôi hỗ trợ khớp hình dạng dao, vật liệu, độ cứng và cạnh cắt cho thay thế, OEM và đơn hàng lặp lại.",
      manufacturingLead:
        "Với đơn hàng xuất khẩu, sản xuất tập trung vào độ vừa lắp, tuổi thọ cắt và tính lặp lại. Chúng tôi xem bản vẽ, kiểm soát lỗ CNC, chọn độ cứng, mài bề mặt quan trọng và đóng gói xuất khẩu.",
      qualityLead:
        "Kiểm soát chất lượng cho biết những gì được kiểm trước khi giao, giúp giảm rủi ro không lắp được, cắt không ổn định, tuổi thọ ngắn hoặc gỉ trong vận chuyển.",
    },
    contactPrompt:
      "Liên hệ trực tiếp Maanshan Lijian, nhà máy nguồn tại Trung Quốc. Gửi bản vẽ, mẫu, model thiết bị hoặc vấn đề cắt, chúng tôi sẽ xác nhận vật liệu, độ cứng, hình học cạnh và phương án giao hàng.",
  },
  id: {
    siteName: "Lijian Food Blades",
    nav: {
      home: "Beranda",
      products: "Produk",
      applications: "Aplikasi",
      manufacturing: "Produksi",
      quality: "Kualitas",
      about: "Tentang Pabrik",
      contact: "Kontak",
    },
    actions: {
      viewProducts: "Lihat Produk",
      contactUs: "Hubungi Kami",
      discussBlade: "Diskusikan Pisau Ini",
    },
    labels: {
      language: "Bahasa",
      typicalApplications: "Aplikasi Umum",
      typicalEquipment: "Peralatan Terkait",
      customOptions: "Opsi Kustom",
      materials: "Material",
      process: "Proses",
      inspection: "Inspeksi",
      productRange: "Rentang Produk",
      applicationRange: "Aplikasi",
      contactChannels: "Kanal Kontak",
      whatsappQr: "Kode QR WhatsApp",
      scanWhatsapp: "Pindai untuk menambahkan WhatsApp",
      openWhatsapp: "Buka chat WhatsApp",
    },
    seo: {
      homeTitle: "Maanshan Lijian - Produsen Pisau Mesin Makanan China",
      homeDescription:
        "Maanshan Lijian adalah pabrik China untuk pisau mesin makanan, pisau kustom, dan pisau pengganti OEM bagi mesin pengolahan makanan dan kemasan.",
      productsTitle: "Pisau Mesin Makanan dan Pisau Pengolahan Makanan Kustom",
      productsDescription:
        "Pisau mesin makanan kustom dan pisau pengganti OEM berdasarkan gambar, sampel lama atau model mesin, dengan kontrol profil, lubang pemasangan, material, kekerasan dan produksi berulang.",
      applicationsTitle: "Aplikasi Pisau Pengolahan Makanan",
      applicationsDescription:
        "Pilih pisau berdasarkan bahan makanan dan lini produksi: daging, unggas, seafood, makanan beku, sayur buah, bakery dan mesin kemasan makanan.",
      manufacturingTitle: "Kemampuan Produksi Pisau Industri",
      manufacturingDescription:
        "Kontrol produksi untuk kecocokan pemasangan, konsistensi batch dan pengiriman ekspor: material, CNC, heat treatment, grinding, finishing mata pisau, inspeksi dan packing.",
      qualityTitle: "Kontrol Kualitas Pisau Mesin Makanan",
      qualityDescription:
        "Kontrol material, kekerasan, posisi lubang, ketebalan, sudut mata pisau, permukaan, konsistensi batch dan packing anti karat untuk pisau mesin makanan.",
      aboutTitle: "Tentang Pabrik Pisau Mesin Makanan Maanshan Lijian",
      aboutDescription:
        "Maanshan Lijian adalah pabrik China untuk pisau mesin makanan, pisau kustom, pisau pengganti OEM dan kerja sama ekspor.",
      contactTitle: "Kontak Maanshan Lijian",
      contactDescription:
        "Hubungi melalui email, WhatsApp atau telepon untuk pisau mesin makanan, pisau kustom dan pisau pengganti.",
    },
    home: {
      eyebrow: "Pabrik China untuk Pisau Mesin Makanan",
      h1: "Pisau Mesin Makanan Kustom",
      intro:
        "Kirim gambar, foto pisau lama, model mesin atau ukuran utama. Kami memproduksi pisau kustom dan pisau pengganti OEM untuk mesin daging, seafood, unggas, sayur buah, bakery dan kemasan makanan.",
      trust: ["Menerima gambar, sampel atau model mesin", "Dukungan sampel 7 hari", "Pengiriman batch 30 hari", "Komunikasi ekspor via WhatsApp"],
      productsLead:
        "Mulai dari jenis pisau, posisi pemasangan atau kebutuhan penggantian. Setelah menerima gambar, sampel lama atau model mesin, kami membantu mengonfirmasi profil, lubang, ketebalan, material dan detail mata pisau.",
      applicationsLead:
        "Pilih berdasarkan jenis makanan dan lini produksi. Kami membantu mencocokkan profil pisau, material, kekerasan dan geometri mata pisau untuk penggantian, OEM dan repeat order.",
      manufacturingLead:
        "Untuk pesanan ekspor, produksi difokuskan pada kecocokan pemasangan, umur potong dan konsistensi batch. Kami meninjau gambar, mengontrol lubang CNC, mencocokkan kekerasan, menggiling permukaan penting dan packing untuk ekspor.",
      qualityLead:
        "Kontrol kualitas menjelaskan apa yang diperiksa sebelum pengiriman untuk mengurangi risiko pisau tidak cocok, potongan tidak stabil, umur pendek atau karat selama transportasi.",
    },
    contactPrompt:
      "Hubungi langsung Maanshan Lijian, pabrik sumber dari China. Kirim gambar, sampel, model mesin atau masalah pemotongan, lalu kami akan mengonfirmasi material, kekerasan, geometri mata pisau dan opsi pengiriman.",
  },
  zh: {
    siteName: "利坚食品刀片",
    nav: {
      home: "首页",
      products: "产品中心",
      applications: "应用场景",
      manufacturing: "制造能力",
      quality: "质量控制",
      about: "关于工厂",
      contact: "联系我们",
    },
    actions: {
      viewProducts: "查看产品",
      contactUs: "联系我们",
      discussBlade: "沟通这款刀片",
    },
    labels: {
      language: "语言",
      typicalApplications: "典型应用",
      typicalEquipment: "典型设备",
      customOptions: "可定制参数",
      materials: "材料",
      process: "流程",
      inspection: "检测",
      productRange: "产品范围",
      applicationRange: "应用范围",
      contactChannels: "联系方式",
      whatsappQr: "WhatsApp 二维码",
      scanWhatsapp: "扫码添加 WhatsApp",
      openWhatsapp: "点击 WhatsApp 直接聊天",
    },
    seo: {
      homeTitle: "马鞍山市利坚食品机械刀片厂 - 中国食品机械刀片源头厂家",
      homeDescription:
        "马鞍山市利坚食品机械刀片厂是中国食品机械刀片制造商和源头厂家，面向肉类、水产、禽类、果蔬、烘焙及包装设备，提供非标刀片、替换刀片和 OEM 刀片制造。",
      productsTitle: "工业食品刀片与食品机械刀片产品中心",
      productsDescription:
        "面向食品厂、设备厂和维修采购，提供可匹配外形、安装孔、材料硬度和批次复购要求的非标刀片、替换刀片和 OEM 食品机械刀片。",
      applicationsTitle: "食品加工刀片应用场景",
      applicationsDescription:
        "按食品物料、生产线设备和切割工况匹配替换刀片与非标定制刀片，覆盖肉类、禽类、水产、冷冻食品、果蔬、烘焙和食品包装设备。",
      manufacturingTitle: "工业刀片制造能力",
      manufacturingDescription:
        "围绕替换刀片装机适配、批次一致性和出口交付进行生产控制，包括材料选择、CNC 加工、热处理、磨削、刃口处理、检测和包装。",
      qualityTitle: "食品机械刀片质量控制",
      qualityDescription:
        "食品机械刀片质量控制重点覆盖材料、硬度、孔位、厚度、刃口角度、表面处理、批次一致性和运输防锈等可衡量风险。",
      aboutTitle: "关于马鞍山市利坚食品机械刀片厂",
      aboutDescription:
        "马鞍山市利坚食品机械刀片厂是中国食品机械刀片源头厂家，专注食品机械刀片、非标刀片、OEM 替换刀片和外贸合作。",
      contactTitle: "联系马鞍山市利坚食品机械刀片厂",
      contactDescription:
        "通过邮箱、WhatsApp 或电话沟通食品机械刀片、异形刀片、替换刀片和 OEM 刀片需求。",
    },
    home: {
      eyebrow: "中国食品机械刀片制造商 / 源头厂家",
      h1: "工业食品机械刀片定制制造商",
      intro: "可发送图纸、旧刀照片、设备型号或关键尺寸，我们为肉类、水产、禽类、果蔬、烘焙及食品包装设备生产非标刀片和 OEM 替换刀片。",
      trust: ["图纸/样品/设备型号均可沟通", "7天打样支持", "30天批量交付", "外贸沟通配合"],
      productsLead:
        "客户可按刀片类型、装机位置或替换需求查找产品。提供图纸、旧刀样品或设备型号后，我们会在生产前协助确认尺寸、孔位、材料、硬度和刃口细节。",
      applicationsLead:
        "客户可先按食品品类和生产线查找对应场景，我们会结合设备型号、切割方式、清洗环境和产能要求，匹配刀片外形、材料硬度、刃口结构和后续复购方案。",
      manufacturingLead:
        "面向海外替换刀片订单，制造能力重点解决能否装机、切割寿命和复购一致性。生产中会控制图纸评审、CNC 孔槽加工、热处理硬度、关键面磨削、刃口几何和出口包装。",
      qualityLead:
        "质量控制直接说明出货前检查什么，帮助客户降低换刀后无法装机、切割不稳、寿命偏短或运输生锈的风险。",
    },
    contactPrompt:
      "马鞍山利坚是中国食品机械刀片源头厂家，可依据刀片图纸、样品、设备型号或切割工况确认材料、硬度、刃口结构和交付方式。",
  },
} as const;

export const productImages = {
  hero: "/images/placeholders/photo-hero-factory.jpg",
  factoryGate: "/images/placeholders/factory-gate-lijian.jpg",
  manufacturing: "/images/placeholders/photo-manufacturing-cnc.jpg",
  quality: "/images/placeholders/photo-quality-inspection.jpg",
  workshop: "/images/placeholders/about-workshop-machining.jpg",
  environment: "/images/placeholders/about-food-workshop-environment.jpg",
  equipment: "/images/placeholders/about-equipment-slicer.jpg",
  custom: "/images/placeholders/product-photo-custom-blades.jpg",
  curved: "/images/placeholders/product-photo-curved-blades.jpg",
  bowlCutter: "/images/placeholders/product-photo-bowl-cutter-blades.jpg",
  meat: "/images/placeholders/product-photo-meat-processing-blades.jpg",
  poultry: "/images/placeholders/product-photo-poultry-knives.jpg",
  seafood: "/images/placeholders/product-photo-seafood-blades.jpg",
  vegetable: "/images/placeholders/product-photo-vegetable-blades.jpg",
  bakery: "/images/placeholders/product-photo-bakery-blades.jpg",
  packaging: "/images/placeholders/product-photo-packaging-blades.jpg",
  circular: "/images/placeholders/product-photo-circular-blades.jpg",
  straight: "/images/placeholders/product-photo-straight-blades.jpg",
  serrated: "/images/placeholders/product-photo-serrated-blades.jpg",
};

export const applicationImages = {
  meat: "/images/placeholders/applications/application-meat-processing.jpg",
  poultry: "/images/placeholders/applications/application-poultry-processing.jpg",
  seafood: "/images/placeholders/applications/application-seafood-processing.jpg",
  frozen: "/images/placeholders/applications/application-frozen-food-processing.jpg",
  vegetable: "/images/placeholders/applications/application-vegetable-fruit-processing.jpg",
  bakery: "/images/placeholders/applications/application-bakery-snack-processing.jpg",
  packaging: "/images/placeholders/applications/application-food-packaging.jpg",
};

export const products = [
  {
    slug: "custom-food-processing-blades",
    image: productImages.custom,
    tags: ["Custom", "OEM", "Replacement"],
    name: {
      en: "Custom Food Processing Blades",
      ru: "Ножи для пищевого оборудования на заказ",
      id: "Pisau Pengolahan Makanan Kustom",
      zh: "非标食品加工刀片",
    },
    summary: {
      en: "Non-standard blade profiles made by drawing, sample or equipment model for food processing machines.",
      ru: "Нестандартные профили по чертежу, образцу или модели оборудования для пищевых машин.",
      id: "Profil pisau non-standar dibuat berdasarkan gambar, sampel atau model mesin untuk mesin pengolahan makanan.",
      zh: "按图纸、样品或设备型号定制非标食品机械刀片，重点匹配外形、孔位、厚度和刃口。",
    },
    detail: {
      en: "This category is for buyers who cannot use a standard off-the-shelf blade. Maanshan Lijian can discuss profile shape, mounting holes, slot position, blade thickness, bevel direction and edge angle based on your drawing or sample.",
      ru: "Эта категория подходит, когда стандартный нож не подходит к оборудованию. Maanshan Lijian может обсудить форму, отверстия, пазы, толщину, направление фаски и угол кромки по чертежу или образцу.",
      zh: "适用于原厂刀片停产、旧刀替换或产线改型等场景。马鞍山利坚可根据图纸、样品或设备型号确认外形、孔位、槽位、厚度、刃口方向和刃口角度。",
    },
    applications: ["Meat", "Seafood", "Vegetable", "Packaging"],
    equipment: ["Slicers", "Cutters", "Portioning machines", "Packaging lines"],
    customOptions: {
      en: ["Outer profile", "Hole and slot position", "Thickness", "Single or double bevel", "Surface finish"],
      ru: ["Внешний профиль", "Отверстия и пазы", "Толщина", "Одинарная или двойная фаска", "Поверхность"],
      zh: ["外形轮廓", "孔位和槽位", "厚度", "单面刃或双面刃", "表面处理"],
    },
    materialNote: {
      en: "Material is selected by food contact, corrosion exposure, cutting load and target service life.",
      ru: "Материал подбирается по контакту с пищей, коррозионной среде, нагрузке резки и ресурсу.",
      zh: "材料按食品接触、腐蚀环境、切割负载和预期寿命选择。",
    },
    edgeNote: {
      en: "Edge geometry can be adjusted for clean cutting, wear resistance or easier maintenance.",
      ru: "Геометрия кромки настраивается под чистый рез, износостойкость или обслуживание.",
      zh: "刃口结构可按切面整洁、耐磨寿命或维护便利性调整。",
    },
  },
  {
    slug: "curved-food-processing-blades",
    image: productImages.curved,
    tags: ["Curved", "Precision", "Stainless Steel"],
    name: { en: "Curved Blades", ru: "Изогнутые ножи", id: "Pisau Lengkung", zh: "弧形刀片" },
    summary: {
      en: "Curved and profile blades for bowl cutters, portioning machines and special cutting modules.",
      ru: "Изогнутые и профильные ножи для куттеров, порционирования и специальных режущих узлов.",
      id: "Pisau lengkung dan profil untuk bowl cutter, mesin portioning dan modul pemotongan khusus.",
      zh: "用于斩拌、分份、切割模块和特殊工位的弧形及异形刀片。",
    },
    detail: {
      en: "Curved blades depend heavily on radius accuracy, balance between blade body and mounting hole, and repeatable bevel finishing. They are commonly ordered as replacement blades when customers need the same fit but better cutting stability.",
      ru: "Для изогнутых ножей важны точность радиуса, согласование корпуса и отверстий, а также стабильная обработка фаски. Часто заказываются как сменные ножи для сохранения посадки и стабильного реза.",
      zh: "弧形刀片重点控制半径、孔位、刀身平衡和刃口一致性，适用于原设备刀片替换、装配尺寸保持和切割稳定性要求较高的场景。",
    },
    applications: ["Meat", "Poultry", "Frozen food"],
    equipment: ["Bowl cutters", "Bowl choppers", "Custom cutting modules"],
    customOptions: {
      en: ["Blade radius", "Mounting hole pattern", "Bevel direction", "Tip shape", "Batch matching"],
      ru: ["Радиус ножа", "Схема отверстий", "Направление фаски", "Форма кончика", "Согласование партии"],
      zh: ["弧度半径", "安装孔位", "刃口方向", "刀尖形状", "批次配套"],
    },
    materialNote: {
      en: "Stainless and wear-resistant steels can be discussed according to moisture, cleaning and cutting load.",
      ru: "Нержавеющие и износостойкие стали подбираются по влажности, мойке и нагрузке резки.",
      zh: "可根据潮湿环境、清洗频率和切割负载选择不锈钢或耐磨钢材。",
    },
    edgeNote: {
      en: "Radius and bevel finishing are controlled to reduce vibration and uneven cutting.",
      ru: "Радиус и фаска контролируются для снижения вибрации и неровного реза.",
      zh: "通过控制弧度和刃口处理，减少振动和切割不均。",
    },
  },
  {
    slug: "bowl-cutter-blades",
    image: productImages.bowlCutter,
    tags: ["Bowl Cutter", "Meat", "Replacement"],
    name: { en: "Bowl Cutter Blades", ru: "Ножи для куттера", id: "Pisau Bowl Cutter", zh: "斩拌机刀片" },
    summary: {
      en: "Replacement and OEM blades for meat bowl cutters, choppers and prepared-food mixing lines.",
      ru: "Сменные и OEM ножи для мясных куттеров, измельчителей и линий готовых продуктов.",
      id: "Pisau pengganti dan OEM untuk meat bowl cutter, chopper dan lini pencampuran makanan siap olah.",
      zh: "适配肉类斩拌机、斩拌锅和预制食品搅切设备的替换及 OEM 刀片。",
    },
    detail: {
      en: "Bowl cutter blades need accurate hole position, stable curvature and repeatable sharpness because they run at high speed inside meat and prepared-food equipment. Provide the old blade sample or key dimensions for matching.",
      ru: "Ножи для куттера требуют точных отверстий, стабильной кривизны и повторяемой остроты, так как работают на высокой скорости. Для подбора желательно предоставить образец или основные размеры.",
      zh: "斩拌机刀片在高速设备中工作，对孔位、弧度、刀身强度和刃口一致性要求较高，可按旧刀样品或关键尺寸匹配装机。",
    },
    applications: ["Meat", "Sausage", "Prepared food"],
    equipment: ["Bowl cutters", "Sausage processing lines", "Chopper machines"],
    customOptions: {
      en: ["Left or right hand blade", "Mounting holes", "Curvature", "Blade thickness", "Set matching"],
      ru: ["Левое или правое исполнение", "Отверстия", "Кривизна", "Толщина", "Комплектность"],
      zh: ["左旋或右旋", "安装孔位", "弧度", "刀片厚度", "成套匹配"],
    },
    materialNote: {
      en: "Material choice should balance impact resistance, sharpness retention and sanitation cleaning.",
      ru: "Материал должен сочетать ударную стойкость, удержание остроты и санитарную мойку.",
      zh: "材料选择应兼顾抗冲击、保持锋利和清洗卫生环境。",
    },
    edgeNote: {
      en: "The edge can be finished for fine chopping, emulsifying or coarse cutting applications.",
      ru: "Кромка может быть выполнена под тонкое измельчение, эмульгирование или грубую резку.",
      zh: "刃口可按细斩、乳化或粗切等工况处理。",
    },
  },
  {
    slug: "meat-processing-blades",
    image: productImages.meat,
    tags: ["Meat", "Durable", "Food Contact"],
    name: { en: "Meat Processing Blades", ru: "Ножи для мясопереработки", id: "Pisau Pengolahan Daging", zh: "肉类加工刀片" },
    summary: {
      en: "Blades for meat slicing, trimming, dicing, portioning and high-frequency processing lines.",
      ru: "Ножи для нарезки мяса, жиловки, кубиков, порционирования и интенсивных линий.",
      id: "Pisau untuk slicing, trimming, dicing, portioning dan lini pengolahan daging frekuensi tinggi.",
      zh: "用于肉类切片、修整、切丁、分份和高频加工产线的食品机械刀片。",
    },
    detail: {
      en: "Meat processing blades are specified around cutting cleanliness, downtime reduction and repeatable replacement. Common requirements include stable thickness, sharp edge retention and hole position consistency.",
      ru: "Ножи для мясопереработки подбираются по чистоте реза, снижению простоев и повторяемости замены. Частые требования: стабильная толщина, удержание кромки и точные отверстия.",
      zh: "肉类加工刀片通常围绕切面整洁、减少停机和可重复替换来选型，常见要求包括厚度稳定、刃口耐用和孔位一致。",
    },
    applications: ["Meat", "Frozen meat", "Prepared food"],
    equipment: ["Slicers", "Dicers", "Trimmers", "Portion cutters"],
    customOptions: {
      en: ["Straight or curved profile", "Thickness", "Hole pattern", "Bevel angle", "Anti-rust packing"],
      ru: ["Прямой или изогнутый профиль", "Толщина", "Отверстия", "Угол фаски", "Антикоррозионная упаковка"],
      zh: ["直线或弧形外形", "厚度", "孔位", "刃口角度", "防锈包装"],
    },
    materialNote: {
      en: "Food-contact stainless steel is commonly considered where washdown and corrosion resistance matter.",
      ru: "Нержавеющая сталь для пищевого контакта часто применяется при мойке и коррозионной среде.",
      zh: "在清洗和耐腐蚀要求较高的场景，可优先考虑食品接触不锈钢材料。",
    },
    edgeNote: {
      en: "Sharpness, edge angle and surface finish are tuned to the meat texture and machine speed.",
      ru: "Острота, угол кромки и поверхность настраиваются под структуру мяса и скорость машины.",
      zh: "锋利度、刃口角度和表面处理应结合肉品状态和设备速度调整。",
    },
  },
  {
    slug: "poultry-processing-knives",
    image: productImages.poultry,
    tags: ["Poultry", "OEM", "Stable Batch"],
    name: { en: "Poultry Processing Knives", ru: "Ножи для переработки птицы", id: "Pisau Pengolahan Unggas", zh: "禽类加工刀片" },
    summary: {
      en: "Knives for poultry deboning, trimming, dividing and automated processing equipment.",
      ru: "Ножи для обвалки, жиловки, разделки и автоматизированного оборудования птицы.",
      id: "Pisau untuk deboning, trimming, dividing dan peralatan pengolahan unggas otomatis.",
      zh: "用于禽类剔骨、修整、分割和自动化加工设备的食品刀片。",
    },
    detail: {
      en: "Poultry knives often need compact shapes, clean cutting edges and repeatable fit for automated stations. Send the machine model or worn blade sample to match the profile.",
      ru: "Ножи для птицы часто требуют компактной формы, чистой кромки и повторяемой посадки для автоматических узлов. Отправьте модель машины или старый нож для подбора.",
      zh: "禽类加工刀片常见于自动化分割和修整工位，要求外形紧凑、刃口干净、装机尺寸稳定，可按设备型号或旧刀样品匹配。",
    },
    applications: ["Poultry", "Prepared food"],
    equipment: ["Deboning machines", "Cut-up lines", "Trimming stations"],
    customOptions: {
      en: ["Small profile knives", "Deboning shape", "Mounting slot", "Edge finish", "Replacement batches"],
      ru: ["Малые профильные ножи", "Форма для обвалки", "Посадочный паз", "Финиш кромки", "Партии замены"],
      zh: ["小型异形刀", "剔骨外形", "安装槽", "刃口处理", "替换批量"],
    },
    materialNote: {
      en: "Material should support frequent washdown and stable edge retention.",
      ru: "Материал должен выдерживать частую мойку и сохранять кромку.",
      zh: "材料应适应频繁清洗，并保持较稳定的刃口寿命。",
    },
    edgeNote: {
      en: "A clean fine edge helps reduce tearing and product damage.",
      ru: "Чистая тонкая кромка помогает снизить разрыв продукта.",
      zh: "细致干净的刃口有助于减少撕裂和产品损伤。",
    },
  },
  {
    slug: "seafood-processing-blades",
    image: productImages.seafood,
    tags: ["Seafood", "Stainless Steel", "Corrosion Control"],
    name: { en: "Seafood Processing Blades", ru: "Ножи для переработки рыбы", id: "Pisau Pengolahan Seafood", zh: "水产加工刀片" },
    summary: {
      en: "Stainless blades for fish, shrimp and seafood cutting where corrosion resistance is important.",
      ru: "Нержавеющие ножи для рыбы, креветок и морепродуктов, где важна коррозионная стойкость.",
      id: "Pisau stainless untuk pemotongan ikan, udang dan seafood ketika ketahanan korosi penting.",
      zh: "面向鱼类、虾类和水产切割，重点考虑耐腐蚀、清洗环境和刃口稳定性。",
    },
    detail: {
      en: "Seafood processing usually involves moisture, salt and frequent cleaning. Blade selection should consider stainless material, smooth surface finishing and edge geometry suited to fish or shellfish texture.",
      ru: "Переработка рыбы связана с влагой, солью и частой мойкой. При выборе ножа важны нержавеющий материал, гладкая поверхность и геометрия кромки под рыбу или морепродукты.",
      zh: "水产加工通常面对潮湿、盐分和频繁清洗环境，刀片选型应关注不锈材料、表面处理和适配鱼类或贝类质地的刃口结构。",
    },
    applications: ["Fish", "Seafood", "Frozen seafood"],
    equipment: ["Filleting machines", "Fish cutters", "Peeling lines"],
    customOptions: {
      en: ["Corrosion-resistant material", "Smooth finish", "Thin cutting edge", "Hole position", "Custom profile"],
      ru: ["Коррозионностойкий материал", "Гладкая поверхность", "Тонкая кромка", "Отверстия", "Профиль на заказ"],
      zh: ["耐腐蚀材料", "光洁表面", "薄刃口", "孔位", "异形外形"],
    },
    materialNote: {
      en: "Stainless grades are preferred where salt, water and sanitation chemicals are present.",
      ru: "Нержавеющие марки предпочтительны при соли, воде и моющих средствах.",
      zh: "有盐分、水分和清洗剂环境时，优先考虑不锈钢材料。",
    },
    edgeNote: {
      en: "Thin, clean edges help reduce tearing in fish and seafood cutting.",
      ru: "Тонкая чистая кромка помогает снизить разрыв при резке рыбы.",
      zh: "薄而干净的刃口有助于减少鱼肉和水产品撕裂。",
    },
  },
  {
    slug: "vegetable-fruit-cutting-blades",
    image: productImages.vegetable,
    tags: ["Vegetable", "Clean Cut", "Sharp Edge"],
    name: { en: "Vegetable & Fruit Cutting Blades", ru: "Ножи для овощей и фруктов", id: "Pisau Potong Sayur dan Buah", zh: "果蔬切割刀片" },
    summary: {
      en: "Cutting, slicing, shredding and dicing blades for vegetable and fruit processing machinery.",
      ru: "Ножи для резки, шинковки, соломки и кубиков в оборудовании для овощей и фруктов.",
      id: "Pisau cutting, slicing, shredding dan dicing untuk mesin pengolahan sayur dan buah.",
      zh: "适用于果蔬切片、切丝、切条、切丁和去皮等加工设备。",
    },
    detail: {
      en: "Vegetable and fruit blades are selected for clean cuts, low product bruising and stable dimensions. Edge sharpness and surface finish matter when the final product appearance is important.",
      ru: "Ножи для овощей и фруктов подбираются для чистого реза, меньшего повреждения продукта и стабильных размеров. Острота и поверхность важны для внешнего вида продукта.",
      zh: "果蔬刀片重点服务切面整洁、减少压伤和尺寸稳定，尤其适合对成品外观要求较高的切片、切丝和切丁场景。",
    },
    applications: ["Vegetable", "Fruit", "Ready meals"],
    equipment: ["Slicers", "Dicers", "Peelers", "Cutting discs"],
    customOptions: {
      en: ["Slice thickness", "Tooth or smooth edge", "Disc size", "Mounting bore", "Surface polish"],
      ru: ["Толщина ломтика", "Зубчатая или гладкая кромка", "Размер диска", "Посадочное отверстие", "Полировка"],
      zh: ["切片厚度", "平刃或齿刃", "圆盘尺寸", "安装孔", "抛光处理"],
    },
    materialNote: {
      en: "Material is selected for sharpness retention, corrosion resistance and cleaning requirements.",
      ru: "Материал подбирается по удержанию остроты, коррозионной стойкости и мойке.",
      zh: "材料按锋利保持、耐腐蚀和清洗要求选择。",
    },
    edgeNote: {
      en: "Fine edge finishing supports cleaner product surfaces and less crushing.",
      ru: "Тонкая обработка кромки дает более чистую поверхность и меньше смятия.",
      zh: "精细刃口有助于切面更干净，减少挤压。",
    },
  },
  {
    slug: "bakery-bread-blades",
    image: productImages.bakery,
    tags: ["Bakery", "Serrated", "Clean Slice"],
    name: { en: "Bakery & Bread Blades", ru: "Ножи для хлеба и выпечки", id: "Pisau Bakery dan Roti", zh: "烘焙和面包刀片" },
    summary: {
      en: "Serrated and straight blades for bread slicing, bakery cutting and snack processing lines.",
      ru: "Зубчатые и прямые ножи для нарезки хлеба, выпечки и снековых линий.",
      id: "Pisau bergerigi dan lurus untuk slicing roti, pemotongan bakery dan lini snack.",
      zh: "用于面包切片、烘焙切割和零食加工产线的齿刀及直刀。",
    },
    detail: {
      en: "Bakery blades need tooth profile, edge sharpness and low crumb tearing. For bread slicing, send the blade length, hole pattern and tooth pitch if available.",
      ru: "Ножи для выпечки требуют правильного зуба, остроты и минимального разрыва мякиша. Для хлеборезки желательно указать длину, отверстия и шаг зуба.",
      zh: "烘焙刀片重点控制齿形、锋利度和掉屑撕裂。用于面包切片时，可按刀长、孔位和齿距定制。",
    },
    applications: ["Bakery", "Snack", "Bread"],
    equipment: ["Bread slicers", "Snack cutters", "Bakery lines"],
    customOptions: {
      en: ["Tooth pitch", "Blade length", "Hole pattern", "Straight or serrated", "Edge coating request"],
      ru: ["Шаг зуба", "Длина ножа", "Отверстия", "Прямой или зубчатый", "Запрос на покрытие"],
      zh: ["齿距", "刀长", "孔位", "直刃或齿刃", "涂层需求"],
    },
    materialNote: {
      en: "Material should support fine edge retention and regular production cleaning.",
      ru: "Материал должен сохранять тонкую кромку и выдерживать регулярную мойку.",
      zh: "材料应适合保持细刃，并满足日常生产清洗。",
    },
    edgeNote: {
      en: "Tooth geometry is tuned for bread texture, snack density and cutting speed.",
      ru: "Геометрия зуба настраивается под текстуру хлеба, плотность снеков и скорость резки.",
      zh: "齿形可根据面包组织、零食密度和切割速度调整。",
    },
  },
  {
    slug: "packaging-blades",
    image: productImages.packaging,
    tags: ["Packaging", "Serrated", "Wear Control"],
    name: { en: "Packaging Blades", ru: "Упаковочные ножи", id: "Pisau Kemasan", zh: "包装机械刀片" },
    summary: {
      en: "Cut-off, perforation, sealing and film cutting blades for food packaging machinery.",
      ru: "Ножи для отрезки, перфорации, запайки и резки пленки в пищевой упаковке.",
      id: "Pisau cut-off, perforasi, sealing dan film cutting untuk mesin kemasan makanan.",
      zh: "用于食品包装机械的切断、打孔、封切、薄膜分切和易撕线刀片。",
    },
    detail: {
      en: "Packaging blades are specified by film material, cutting speed, tooth form and installation size. Stable burr control and repeatable dimensions help packaging lines run with fewer stops.",
      ru: "Упаковочные ножи подбираются по материалу пленки, скорости, форме зуба и посадочным размерам. Контроль заусенцев и стабильные размеры уменьшают остановки линии.",
      zh: "包装刀片需结合膜材、速度、齿形和安装尺寸设计。稳定的毛刺控制和尺寸一致性，有助于减少包装线停机。",
    },
    applications: ["Food packaging", "Film", "Frozen food"],
    equipment: ["Flow wrappers", "Tray sealers", "Form-fill-seal lines"],
    customOptions: {
      en: ["Serration profile", "Perforation pitch", "Blade length", "Mounting holes", "Cut-off edge"],
      ru: ["Профиль зуба", "Шаг перфорации", "Длина", "Отверстия", "Кромка отрезки"],
      zh: ["齿形", "打孔间距", "刀长", "安装孔", "切断刃口"],
    },
    materialNote: {
      en: "Material and hardness should match film, paper, composite packaging or frozen-food line needs.",
      ru: "Материал и твердость подбираются под пленку, бумагу, композитную упаковку или замороженные линии.",
      zh: "材料和硬度应匹配薄膜、纸材、复合包装或冷冻食品包装线。",
    },
    edgeNote: {
      en: "Serrated, perforation and straight cut-off edges can be made according to the packaging action.",
      ru: "Зубчатые, перфорационные и прямые кромки выполняются по операции упаковки.",
      zh: "可按包装动作制作齿刃、打孔刃或直线切断刃。",
    },
  },
  {
    slug: "circular-blades",
    image: productImages.circular,
    tags: ["Circular", "Slitting", "Precision Bore"],
    name: { en: "Circular Blades", ru: "Дисковые ножи", id: "Pisau Bulat", zh: "圆刀" },
    summary: {
      en: "Circular knives with controlled bore, bevel and surface finish for slicing, slitting and rotary cutting.",
      ru: "Дисковые ножи с контролем отверстия, фаски и поверхности для резки, продольной резки и ротационного реза.",
      id: "Pisau bulat dengan kontrol bore, bevel dan finishing permukaan untuk slicing, slitting dan rotary cutting.",
      zh: "控制内孔、刃口和表面处理的圆刀，适用于切片、分切和旋转切割。",
    },
    detail: {
      en: "Circular blades require concentricity, bore accuracy and bevel consistency. They are used where rotary cutting quality depends on smooth running and stable edge contact.",
      ru: "Дисковые ножи требуют соосности, точного отверстия и стабильной фаски. Они применяются там, где качество ротационного реза зависит от плавного хода и стабильного контакта кромки.",
      zh: "圆刀重点控制同心度、内孔精度和刃口一致性，适合对旋转切割稳定性、分切平整度有要求的设备。",
    },
    applications: ["Packaging", "Vegetable", "Bakery"],
    equipment: ["Slitters", "Slicers", "Rotary cutters"],
    customOptions: {
      en: ["Outer diameter", "Inner bore", "Keyway or holes", "Single or double bevel", "Surface finish"],
      ru: ["Наружный диаметр", "Внутреннее отверстие", "Шпонка или отверстия", "Одинарная или двойная фаска", "Поверхность"],
      zh: ["外径", "内孔", "键槽或孔位", "单面刃或双面刃", "表面处理"],
    },
    materialNote: {
      en: "Material is selected according to speed, product texture, corrosion exposure and wear target.",
      ru: "Материал подбирается по скорости, структуре продукта, коррозии и ресурсу.",
      zh: "材料按转速、切割对象、腐蚀环境和耐磨目标选择。",
    },
    edgeNote: {
      en: "Bevel symmetry and edge finish help reduce vibration and burrs.",
      ru: "Симметрия фаски и финиш кромки помогают снизить вибрацию и заусенцы.",
      zh: "刃口对称性和表面处理有助于减少振动和毛刺。",
    },
  },
  {
    slug: "straight-blades",
    image: productImages.straight,
    tags: ["Straight", "Guillotine", "OEM"],
    name: { en: "Straight Blades", ru: "Прямые ножи", id: "Pisau Lurus", zh: "直刀" },
    summary: {
      en: "Straight knives for guillotine cutting, chopping, scraping and replacement in food machinery.",
      ru: "Прямые ножи для гильотинной резки, рубки, скребков и замены в пищевом оборудовании.",
      id: "Pisau lurus untuk guillotine cutting, chopping, scraping dan penggantian pada mesin makanan.",
      zh: "用于切断、剁切、刮刀和设备替换的直线型食品机械刀片。",
    },
    detail: {
      en: "Straight blades are simple in shape but sensitive to flatness, bevel straightness and hole accuracy. They can be made for cutting bars, scraper knives, guillotine blades and replacement parts.",
      ru: "Прямые ножи просты по форме, но чувствительны к плоскостности, прямолинейности фаски и точности отверстий. Могут изготавливаться как отрезные, скребковые, гильотинные и сменные детали.",
      zh: "直刀外形看似简单，但平面度、刃口直线度和孔位精度直接影响装机和切割。可用于切断刀、刮刀、闸刀和设备替换件。",
    },
    applications: ["Packaging", "Frozen food", "Prepared food"],
    equipment: ["Guillotine cutters", "Choppers", "Packaging machines"],
    customOptions: {
      en: ["Length and width", "Thickness", "Hole pattern", "Single or double bevel", "Straightness control"],
      ru: ["Длина и ширина", "Толщина", "Отверстия", "Одинарная или двойная фаска", "Контроль прямолинейности"],
      zh: ["长度和宽度", "厚度", "孔位", "单面刃或双面刃", "直线度控制"],
    },
    materialNote: {
      en: "Tool steel or stainless steel can be discussed based on load, corrosion and maintenance.",
      ru: "Инструментальная или нержавеющая сталь выбирается по нагрузке, коррозии и обслуживанию.",
      zh: "可按受力、腐蚀和维护方式选择工具钢或不锈钢。",
    },
    edgeNote: {
      en: "Straight bevel consistency is important for even pressure and clean cut-off.",
      ru: "Стабильность прямой фаски важна для равномерного давления и чистой отрезки.",
      zh: "直线刃口一致性影响受力均匀和切断效果。",
    },
  },
  {
    slug: "serrated-blades",
    image: productImages.serrated,
    tags: ["Serrated", "Tooth Profile", "Packaging"],
    name: { en: "Serrated Blades", ru: "Зубчатые ножи", id: "Pisau Bergerigi", zh: "齿刀" },
    summary: {
      en: "Serrated tooth profiles for bread, film, packaging and textured food cutting.",
      ru: "Зубчатые профили для хлеба, пленки, упаковки и продуктов со сложной текстурой.",
      id: "Profil gigi bergerigi untuk memotong roti, film, kemasan dan makanan bertekstur.",
      zh: "用于面包、薄膜、包装和复杂质地食品切割的齿形刀片。",
    },
    detail: {
      en: "Serrated blades are specified by tooth pitch, tooth depth, blade length and cutting material. A stable tooth profile helps improve cut initiation and reduce tearing.",
      ru: "Зубчатые ножи задаются шагом зуба, глубиной зуба, длиной ножа и материалом резки. Стабильный профиль зуба улучшает начало реза и снижает разрыв.",
      zh: "齿刀主要根据齿距、齿深、刀长和切割材料设计。稳定的齿形有助于更容易起切，并减少撕裂。",
    },
    applications: ["Bakery", "Packaging", "Snack"],
    equipment: ["Bread slicers", "Film cutters", "Flow wrappers"],
    customOptions: {
      en: ["Tooth pitch", "Tooth depth", "Blade length", "Mounting holes", "Edge direction"],
      ru: ["Шаг зуба", "Глубина зуба", "Длина ножа", "Отверстия", "Направление кромки"],
      zh: ["齿距", "齿深", "刀长", "安装孔", "刃口方向"],
    },
    materialNote: {
      en: "Material is matched to cutting media such as bread, film, composite packaging or textured foods.",
      ru: "Материал подбирается под хлеб, пленку, композитную упаковку или продукты со сложной структурой.",
      zh: "材料按面包、薄膜、复合包装或复杂质地食品等切割对象选择。",
    },
    edgeNote: {
      en: "Tooth shape can be made aggressive or fine depending on cutting resistance and finish requirements.",
      ru: "Форма зуба может быть более агрессивной или мелкой в зависимости от сопротивления резке и качества края.",
      zh: "齿形可根据切割阻力和切口要求设计为粗齿或细齿。",
    },
  },
] as const;

export const applications = [
  {
    slug: "meat-processing",
    image: applicationImages.meat,
    name: { en: "Meat Processing", ru: "Мясопереработка", id: "Pengolahan daging", zh: "肉类加工" },
    summary: {
      en: "Slicing, trimming, dicing, bowl cutting and portioning blades for high-frequency meat production.",
      ru: "Ножи для нарезки, жиловки, кубиков, куттера и порционирования на мясных линиях.",
      id: "Pisau slicing, trimming, dicing, bowl cutting dan portioning untuk produksi daging frekuensi tinggi.",
      zh: "用于切片、修整、切丁、斩拌和分份的高频肉类加工刀片。",
    },
    focus: {
      en: ["Clean cut surface", "Edge retention", "Sanitation cleaning", "Fast replacement fit"],
      ru: ["Чистая поверхность реза", "Сохранение кромки", "Санитарная мойка", "Быстрая замена"],
      id: ["Permukaan potong bersih", "Ketahanan mata pisau", "Pembersihan higienis", "Penggantian cepat"],
      zh: ["切面整洁", "刃口耐用", "清洗卫生", "替换装机稳定"],
    },
    blades: ["meat-processing-blades", "bowl-cutter-blades", "curved-food-processing-blades"],
  },
  {
    slug: "poultry-processing",
    image: applicationImages.poultry,
    name: { en: "Poultry Processing", ru: "Переработка птицы", id: "Pengolahan unggas", zh: "禽类加工" },
    summary: {
      en: "Deboning, dividing and trimming knives for poultry processing equipment.",
      ru: "Ножи для обвалки, разделки и жиловки птицы.",
      id: "Pisau deboning, dividing dan trimming untuk peralatan pengolahan unggas.",
      zh: "用于禽类剔骨、分割和修整设备的刀片。",
    },
    focus: {
      en: ["Compact profile", "Reduced tearing", "Slot accuracy", "Stable batch fit"],
      ru: ["Компактный профиль", "Меньше разрыва", "Точность пазов", "Стабильная посадка"],
      id: ["Profil ringkas", "Sobekan lebih rendah", "Akurasi slot", "Kecocokan batch stabil"],
      zh: ["外形紧凑", "减少撕裂", "槽位准确", "批量装机一致"],
    },
    blades: ["poultry-processing-knives", "custom-food-processing-blades"],
  },
  {
    slug: "fish-seafood-processing",
    image: applicationImages.seafood,
    name: { en: "Fish & Seafood Processing", ru: "Рыба и морепродукты", id: "Pengolahan ikan dan seafood", zh: "水产加工" },
    summary: {
      en: "Corrosion-aware stainless blades for fish, shrimp, seafood and frozen seafood lines.",
      ru: "Нержавеющие ножи для рыбы, креветок, морепродуктов и замороженных линий.",
      id: "Pisau stainless tahan korosi untuk lini ikan, udang, seafood dan seafood beku.",
      zh: "面向鱼类、虾类、水产和冷冻水产线的耐腐蚀刀片。",
    },
    focus: {
      en: ["Corrosion resistance", "Smooth finish", "Thin edge", "Washdown environment"],
      ru: ["Коррозионная стойкость", "Гладкая поверхность", "Тонкая кромка", "Влажная мойка"],
      id: ["Tahan korosi", "Finishing halus", "Mata tipis", "Lingkungan washdown"],
      zh: ["耐腐蚀", "表面光洁", "薄刃口", "潮湿清洗环境"],
    },
    blades: ["seafood-processing-blades", "circular-blades", "straight-blades"],
  },
  {
    slug: "frozen-food-processing",
    image: applicationImages.frozen,
    name: { en: "Frozen Food Processing", ru: "Замороженные продукты", id: "Pengolahan makanan beku", zh: "冷冻食品加工" },
    summary: {
      en: "Durable blades for cutting, portioning and packaging frozen food products.",
      ru: "Прочные ножи для резки, порционирования и упаковки замороженных продуктов.",
      id: "Pisau tahan lama untuk memotong, portioning dan mengemas produk makanan beku.",
      zh: "用于冷冻食品切割、分份和包装的耐用刀片。",
    },
    focus: {
      en: ["Impact resistance", "Chipping control", "Stable thickness", "Anti-rust packing"],
      ru: ["Ударная стойкость", "Контроль сколов", "Стабильная толщина", "Антикоррозионная упаковка"],
      id: ["Tahan benturan", "Kontrol chipping", "Ketebalan stabil", "Packing anti karat"],
      zh: ["抗冲击", "减少崩口", "厚度稳定", "防锈包装"],
    },
    blades: ["straight-blades", "curved-food-processing-blades", "packaging-blades"],
  },
  {
    slug: "vegetable-fruit-processing",
    image: applicationImages.vegetable,
    name: { en: "Vegetable & Fruit Processing", ru: "Овощи и фрукты", id: "Pengolahan sayur dan buah", zh: "果蔬加工" },
    summary: {
      en: "Sharp cutting edges for slicing, dicing, peeling and clean product presentation.",
      ru: "Острые кромки для нарезки, кубиков, очистки и аккуратного вида продукта.",
      id: "Mata pisau tajam untuk slicing, dicing, peeling dan tampilan produk yang bersih.",
      zh: "用于切片、切丁、去皮和保持切面整洁的果蔬刀片。",
    },
    focus: {
      en: ["Sharpness", "Low bruising", "Slice consistency", "Easy cleaning"],
      ru: ["Острота", "Меньше смятия", "Стабильная нарезка", "Легкая мойка"],
      id: ["Ketajaman", "Mengurangi memar", "Irisan konsisten", "Mudah dibersihkan"],
      zh: ["锋利度", "减少压伤", "切片一致", "易清洗"],
    },
    blades: ["vegetable-fruit-cutting-blades", "circular-blades"],
  },
  {
    slug: "bakery-snack-processing",
    image: applicationImages.bakery,
    name: { en: "Bakery & Snack Processing", ru: "Хлеб и снеки", id: "Pengolahan bakery dan snack", zh: "烘焙和零食加工" },
    summary: {
      en: "Serrated and straight blades for bread, pastry, snack and bakery production lines.",
      ru: "Зубчатые и прямые ножи для хлеба, выпечки, снеков и производственных линий.",
      id: "Pisau bergerigi dan lurus untuk lini roti, pastry, snack dan bakery.",
      zh: "用于面包、糕点、零食和烘焙产线的齿刀及直刀。",
    },
    focus: {
      en: ["Tooth pitch", "Low crumb tearing", "Clean entry", "Blade length matching"],
      ru: ["Шаг зуба", "Меньше крошки", "Чистый вход", "Подбор длины"],
      id: ["Pitch gigi", "Remah lebih sedikit", "Awal potong bersih", "Panjang pisau sesuai"],
      zh: ["齿距", "减少掉屑", "起切干净", "刀长匹配"],
    },
    blades: ["bakery-bread-blades", "serrated-blades", "straight-blades"],
  },
  {
    slug: "food-packaging",
    image: applicationImages.packaging,
    name: { en: "Food Packaging", ru: "Пищевая упаковка", id: "Kemasan makanan", zh: "食品包装" },
    summary: {
      en: "Cut-off, perforation, film and sealing knives for packaging lines.",
      ru: "Ножи для отрезки, перфорации, пленки и запайки на упаковочных линиях.",
      id: "Pisau cut-off, perforasi, film cutting dan sealing untuk lini kemasan.",
      zh: "用于包装线切断、打孔、薄膜和封切的刀片。",
    },
    focus: {
      en: ["Burr control", "Perforation pitch", "Film cutting", "Line speed stability"],
      ru: ["Контроль заусенцев", "Шаг перфорации", "Резка пленки", "Стабильность скорости"],
      id: ["Kontrol burr", "Pitch perforasi", "Film cutting", "Stabilitas kecepatan lini"],
      zh: ["毛刺控制", "打孔间距", "薄膜切断", "高速稳定"],
    },
    blades: ["packaging-blades", "serrated-blades", "circular-blades"],
  },
] as const;

export const manufacturingSteps = {
  en: [
    "Material Selection",
    "Cutting / Blanking",
    "CNC Machining",
    "Heat Treatment",
    "Precision Grinding",
    "Edge Finishing",
    "Polishing",
    "Inspection",
    "Anti-rust Packaging",
    "International Delivery",
  ],
  ru: [
    "Выбор материала",
    "Раскрой заготовки",
    "CNC обработка",
    "Термообработка",
    "Точное шлифование",
    "Финиш кромки",
    "Полировка",
    "Инспекция",
    "Антикоррозионная упаковка",
    "Международная доставка",
  ],
  ar: [
    "اختيار المادة",
    "القطع / تحضير الخام",
    "تشغيل CNC",
    "المعالجة الحرارية",
    "الجلخ الدقيق",
    "تشطيب الحافة",
    "التلميع",
    "الفحص",
    "تغليف ضد الصدأ",
    "تسليم دولي",
  ],
  th: [
    "เลือกวัสดุ",
    "ตัดและเตรียมชิ้นงาน",
    "กลึง/กัด CNC",
    "ชุบแข็ง",
    "เจียรละเอียด",
    "แต่งคม",
    "ขัดผิว",
    "ตรวจสอบ",
    "บรรจุป้องกันสนิม",
    "ส่งออกระหว่างประเทศ",
  ],
  vi: [
    "Chọn vật liệu",
    "Cắt phôi",
    "Gia công CNC",
    "Nhiệt luyện",
    "Mài chính xác",
    "Hoàn thiện cạnh",
    "Đánh bóng",
    "Kiểm tra",
    "Đóng gói chống gỉ",
    "Giao hàng quốc tế",
  ],
  id: [
    "Pemilihan material",
    "Pemotongan blank",
    "Pemesinan CNC",
    "Heat treatment",
    "Grinding presisi",
    "Finishing mata pisau",
    "Polishing",
    "Inspeksi",
    "Packing anti karat",
    "Pengiriman internasional",
  ],
  zh: [
    "材料选择",
    "下料切割",
    "CNC 加工",
    "热处理",
    "精密磨削",
    "刃口处理",
    "抛光",
    "检测",
    "防锈包装",
    "国际交付",
  ],
} as const;

export const qualityChecks = {
  en: [
    "Material verification",
    "Hardness testing",
    "Dimensional inspection",
    "Hole position inspection",
    "Thickness inspection",
    "Edge angle review",
    "Surface finish check",
    "Batch consistency control",
    "Anti-rust packaging review",
  ],
  ru: [
    "Проверка материала",
    "Контроль твердости",
    "Контроль размеров",
    "Контроль отверстий",
    "Контроль толщины",
    "Проверка угла кромки",
    "Проверка поверхности",
    "Контроль стабильности партии",
    "Проверка антикоррозионной упаковки",
  ],
  ar: [
    "التحقق من المادة",
    "اختبار الصلابة",
    "فحص الأبعاد",
    "فحص مواضع الفتحات",
    "فحص السماكة",
    "مراجعة زاوية الحافة",
    "فحص تشطيب السطح",
    "ثبات الدفعة",
    "مراجعة التغليف ضد الصدأ",
  ],
  th: [
    "ตรวจสอบวัสดุ",
    "ทดสอบความแข็ง",
    "ตรวจสอบขนาด",
    "ตรวจสอบตำแหน่งรู",
    "ตรวจสอบความหนา",
    "ตรวจสอบมุมคม",
    "ตรวจสอบผิวงาน",
    "ควบคุมความสม่ำเสมอของล็อต",
    "ตรวจสอบบรรจุป้องกันสนิม",
  ],
  vi: [
    "Xác nhận vật liệu",
    "Kiểm tra độ cứng",
    "Kiểm tra kích thước",
    "Kiểm tra vị trí lỗ",
    "Kiểm tra độ dày",
    "Kiểm tra góc cạnh",
    "Kiểm tra bề mặt",
    "Kiểm soát ổn định lô",
    "Kiểm tra đóng gói chống gỉ",
  ],
  id: [
    "Verifikasi material",
    "Uji kekerasan",
    "Inspeksi dimensi",
    "Inspeksi posisi lubang",
    "Inspeksi ketebalan",
    "Review sudut mata pisau",
    "Cek finishing permukaan",
    "Kontrol konsistensi batch",
    "Review packing anti karat",
  ],
  zh: [
    "材料检验",
    "硬度检测",
    "尺寸检测",
    "孔位检测",
    "厚度检测",
    "刃口角度检查",
    "表面处理检查",
    "批次一致性控制",
    "包装防锈检查",
  ],
} as const;

type LocalizedString = { readonly [K in typeof defaultLang]: string } & Partial<Record<Lang, string>>;
type LocalizedList<T> = { readonly [K in typeof defaultLang]: readonly T[] } & Partial<Record<Lang, readonly T[]>>;
type LocalizedValue<T> = { readonly [K in typeof defaultLang]: T } & Partial<Record<Lang, T>>;

export function localize<T extends LocalizedString>(value: T, lang: Lang) {
  return value[lang] || value[defaultLang];
}

export function localizeList<T>(value: LocalizedList<T>, lang: Lang) {
  return value[lang] || value[defaultLang];
}

export function pickLang<T>(value: LocalizedValue<T>, lang: Lang) {
  return value[lang] || value[defaultLang];
}

export function withLang(lang: Lang, path = "/") {
  const cleanPath = path === "/" ? "" : path.startsWith("/") ? path : `/${path}`;
  return `/${lang}${cleanPath}/`.replace(/\/+/g, "/");
}

export function pathWithoutTrailingSlash(path: string) {
  return path === "/" ? "/" : path.replace(/\/$/, "");
}

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function getApplication(slug: string) {
  return applications.find((application) => application.slug === slug);
}
