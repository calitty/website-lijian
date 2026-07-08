import { guideNavLabel, localizeGuideText, seoGuides, supportsGuideLang } from "@/data/guides";
import {
  applications,
  contact,
  localize,
  localizeList,
  localizeTerm,
  products,
  qualityChecks,
  ui,
  withLang,
  type Lang,
} from "@/data/site";

type GeoString = { readonly en: string } & Partial<Record<Lang, string>>;
type GeoList = { readonly en: readonly string[] } & Partial<Record<Lang, readonly string[]>>;

function text(value: GeoString, lang: Lang) {
  return value[lang] ?? value.en;
}

function list(value: GeoList, lang: Lang) {
  return value[lang] ?? value.en;
}

function profileText(value: Partial<Record<Lang, string>>, lang: Lang, fallback: string) {
  return value[lang] ?? fallback;
}

function siteHref(siteUrl: string | URL, path: string) {
  return new URL(path, typeof siteUrl === "string" ? siteUrl : siteUrl.href).href;
}

export const geoIndustryTerms = [
  "food machinery blades",
  "food processing knives",
  "custom food processing blades",
  "replacement blades for food machinery",
  "OEM food machine knives",
  "meat processing blades",
  "poultry processing knives",
  "seafood processing blades",
  "vegetable cutting blades",
  "bakery serrated blades",
  "food packaging blades",
  "industrial circular knives",
  "bowl cutter blades",
] as const;

const geoIndustryTermLabels: Partial<Record<Lang, Partial<Record<(typeof geoIndustryTerms)[number], string>>>> = {
  ru: {
    "food machinery blades": "ножи для пищевого оборудования",
    "food processing knives": "ножи для пищевой промышленности",
    "custom food processing blades": "нестандартные ножи для пищевой промышленности",
    "replacement blades for food machinery": "сменные ножи для пищевого оборудования",
    "OEM food machine knives": "OEM ножи для пищевого оборудования",
    "meat processing blades": "ножи для переработки мяса",
    "poultry processing knives": "ножи для переработки птицы",
    "seafood processing blades": "ножи для переработки морепродуктов",
    "vegetable cutting blades": "ножи для нарезки овощей",
    "bakery serrated blades": "зубчатые ножи для хлебопекарного оборудования",
    "food packaging blades": "ножи для пищевой упаковки",
    "industrial circular knives": "промышленные дисковые ножи",
    "bowl cutter blades": "ножи для куттера",
  },
  ar: {
    "food machinery blades": "شفرات آلات الأغذية",
    "food processing knives": "سكاكين معالجة الأغذية",
    "custom food processing blades": "شفرات مخصصة لمعالجة الأغذية",
    "replacement blades for food machinery": "شفرات بديلة لآلات الأغذية",
    "OEM food machine knives": "سكاكين OEM لآلات الأغذية",
    "meat processing blades": "شفرات معالجة اللحوم",
    "poultry processing knives": "سكاكين معالجة الدواجن",
    "seafood processing blades": "شفرات معالجة المأكولات البحرية",
    "vegetable cutting blades": "شفرات تقطيع الخضروات",
    "bakery serrated blades": "شفرات مسننة للمخابز",
    "food packaging blades": "شفرات تغليف الأغذية",
    "industrial circular knives": "سكاكين دائرية صناعية",
    "bowl cutter blades": "شفرات قطاعة الوعاء",
  },
  es: {
    "food machinery blades": "cuchillas para maquinaria alimentaria",
    "food processing knives": "cuchillas para procesamiento de alimentos",
    "custom food processing blades": "cuchillas personalizadas para procesamiento de alimentos",
    "replacement blades for food machinery": "cuchillas de recambio para maquinaria alimentaria",
    "OEM food machine knives": "cuchillas OEM para máquinas alimentarias",
    "meat processing blades": "cuchillas para procesamiento de carne",
    "poultry processing knives": "cuchillas para procesamiento de aves",
    "seafood processing blades": "cuchillas para procesamiento de pescado y mariscos",
    "vegetable cutting blades": "cuchillas para cortar vegetales",
    "bakery serrated blades": "cuchillas dentadas para panadería",
    "food packaging blades": "cuchillas para empaque alimentario",
    "industrial circular knives": "cuchillas circulares industriales",
    "bowl cutter blades": "cuchillas para bowl cutter",
  },
  pt: {
    "food machinery blades": "lâminas para máquinas alimentícias",
    "food processing knives": "facas para processamento de alimentos",
    "custom food processing blades": "lâminas sob medida para processamento de alimentos",
    "replacement blades for food machinery": "lâminas de reposição para máquinas alimentícias",
    "OEM food machine knives": "facas OEM para máquinas alimentícias",
    "meat processing blades": "lâminas para processamento de carne",
    "poultry processing knives": "facas para processamento de aves",
    "seafood processing blades": "lâminas para pescado e frutos do mar",
    "vegetable cutting blades": "lâminas para corte de vegetais",
    "bakery serrated blades": "lâminas serrilhadas para panificação",
    "food packaging blades": "lâminas para embalagem alimentícia",
    "industrial circular knives": "facas circulares industriais",
    "bowl cutter blades": "lâminas para bowl cutter",
  },
  tr: {
    "food machinery blades": "gıda makineleri bıçakları",
    "food processing knives": "gıda işleme bıçakları",
    "custom food processing blades": "özel gıda işleme bıçakları",
    "replacement blades for food machinery": "gıda makineleri için yedek bıçaklar",
    "OEM food machine knives": "OEM gıda makinesi bıçakları",
    "meat processing blades": "et işleme bıçakları",
    "poultry processing knives": "kanatlı işleme bıçakları",
    "seafood processing blades": "deniz ürünleri işleme bıçakları",
    "vegetable cutting blades": "sebze kesme bıçakları",
    "bakery serrated blades": "fırıncılık için dişli bıçaklar",
    "food packaging blades": "gıda paketleme bıçakları",
    "industrial circular knives": "endüstriyel dairesel bıçaklar",
    "bowl cutter blades": "bowl cutter bıçakları",
  },
  de: {
    "food machinery blades": "Messer für Lebensmittelmaschinen",
    "food processing knives": "Messer für die Lebensmittelverarbeitung",
    "custom food processing blades": "kundenspezifische Lebensmittelverarbeitungsmesser",
    "replacement blades for food machinery": "Ersatzmesser für Lebensmittelmaschinen",
    "OEM food machine knives": "OEM-Messer für Lebensmittelmaschinen",
    "meat processing blades": "Messer für Fleischverarbeitung",
    "poultry processing knives": "Messer für Geflügelverarbeitung",
    "seafood processing blades": "Messer für Fisch- und Seafood-Verarbeitung",
    "vegetable cutting blades": "Messer zum Gemüseschneiden",
    "bakery serrated blades": "gezahnte Messer für Bäckereien",
    "food packaging blades": "Messer für Lebensmittelverpackung",
    "industrial circular knives": "industrielle Rundmesser",
    "bowl cutter blades": "Kutter-Messer",
  },
  fr: {
    "food machinery blades": "lames pour machines alimentaires",
    "food processing knives": "couteaux pour transformation alimentaire",
    "custom food processing blades": "lames sur mesure pour transformation alimentaire",
    "replacement blades for food machinery": "lames de rechange pour machines alimentaires",
    "OEM food machine knives": "couteaux OEM pour machines alimentaires",
    "meat processing blades": "lames pour transformation de viande",
    "poultry processing knives": "couteaux pour transformation de volaille",
    "seafood processing blades": "lames pour poisson et fruits de mer",
    "vegetable cutting blades": "lames de coupe de légumes",
    "bakery serrated blades": "lames dentelées pour boulangerie",
    "food packaging blades": "lames pour emballage alimentaire",
    "industrial circular knives": "couteaux circulaires industriels",
    "bowl cutter blades": "lames de cutter de cuve",
  },
  it: {
    "food machinery blades": "lame per macchine alimentari",
    "food processing knives": "coltelli per lavorazione alimentare",
    "custom food processing blades": "lame personalizzate per lavorazione alimentare",
    "replacement blades for food machinery": "lame di ricambio per macchine alimentari",
    "OEM food machine knives": "coltelli OEM per macchine alimentari",
    "meat processing blades": "lame per lavorazione carne",
    "poultry processing knives": "coltelli per lavorazione pollame",
    "seafood processing blades": "lame per pesce e frutti di mare",
    "vegetable cutting blades": "lame per taglio verdure",
    "bakery serrated blades": "lame dentate per panificazione",
    "food packaging blades": "lame per confezionamento alimentare",
    "industrial circular knives": "coltelli circolari industriali",
    "bowl cutter blades": "lame per bowl cutter",
  },
  th: {
    "food machinery blades": "ใบมีดเครื่องจักรอาหาร",
    "food processing knives": "มีดแปรรูปอาหาร",
    "custom food processing blades": "ใบมีดแปรรูปอาหารสั่งทำ",
    "replacement blades for food machinery": "ใบมีดทดแทนสำหรับเครื่องจักรอาหาร",
    "OEM food machine knives": "มีด OEM สำหรับเครื่องจักรอาหาร",
    "meat processing blades": "ใบมีดแปรรูปเนื้อสัตว์",
    "poultry processing knives": "มีดแปรรูปสัตว์ปีก",
    "seafood processing blades": "ใบมีดแปรรูปอาหารทะเล",
    "vegetable cutting blades": "ใบมีดตัดผัก",
    "bakery serrated blades": "ใบมีดฟันเลื่อยสำหรับเบเกอรี่",
    "food packaging blades": "ใบมีดบรรจุภัณฑ์อาหาร",
    "industrial circular knives": "มีดวงกลมอุตสาหกรรม",
    "bowl cutter blades": "ใบมีด bowl cutter",
  },
  vi: {
    "food machinery blades": "dao máy thực phẩm",
    "food processing knives": "dao chế biến thực phẩm",
    "custom food processing blades": "dao chế biến thực phẩm tùy chỉnh",
    "replacement blades for food machinery": "dao thay thế cho máy thực phẩm",
    "OEM food machine knives": "dao OEM cho máy thực phẩm",
    "meat processing blades": "dao chế biến thịt",
    "poultry processing knives": "dao chế biến gia cầm",
    "seafood processing blades": "dao chế biến thủy sản",
    "vegetable cutting blades": "dao cắt rau củ",
    "bakery serrated blades": "dao răng cưa cho bánh mì",
    "food packaging blades": "dao đóng gói thực phẩm",
    "industrial circular knives": "dao tròn công nghiệp",
    "bowl cutter blades": "dao bowl cutter",
  },
  id: {
    "food machinery blades": "pisau mesin makanan",
    "food processing knives": "pisau pengolahan makanan",
    "custom food processing blades": "pisau pengolahan makanan kustom",
    "replacement blades for food machinery": "pisau pengganti untuk mesin makanan",
    "OEM food machine knives": "pisau OEM untuk mesin makanan",
    "meat processing blades": "pisau pengolahan daging",
    "poultry processing knives": "pisau pengolahan unggas",
    "seafood processing blades": "pisau pengolahan seafood",
    "vegetable cutting blades": "pisau pemotong sayuran",
    "bakery serrated blades": "pisau bergerigi untuk bakery",
    "food packaging blades": "pisau kemasan makanan",
    "industrial circular knives": "pisau sirkular industri",
    "bowl cutter blades": "pisau bowl cutter",
  },
  zh: {
    "food machinery blades": "食品机械刀片",
    "food processing knives": "食品加工刀片",
    "custom food processing blades": "非标食品加工刀片",
    "replacement blades for food machinery": "食品机械替换刀片",
    "OEM food machine knives": "OEM 食品机械刀片",
    "meat processing blades": "肉类加工刀片",
    "poultry processing knives": "禽类加工刀片",
    "seafood processing blades": "水产加工刀片",
    "vegetable cutting blades": "果蔬切割刀片",
    "bakery serrated blades": "烘焙齿刀",
    "food packaging blades": "食品包装刀片",
    "industrial circular knives": "工业圆刀",
    "bowl cutter blades": "斩拌机刀片",
  },
};

export function localizeGeoIndustryTerm(term: (typeof geoIndustryTerms)[number], lang: Lang) {
  return geoIndustryTermLabels[lang]?.[term] ?? localizeTerm(term, lang);
}

export const geoIndustryProfile = {
  category: {
    en: "Food machinery blade manufacturer",
    zh: "食品机械刀片制造商",
  },
  oneSentence: {
    en: "Maanshan Lijian manufactures custom and replacement blades for food processing machinery, with support for drawings, old blade samples, machine models, sampling and repeat batch delivery.",
    zh: "利坚食品机械刀片厂面向食品加工设备制造非标刀片、替换刀片和 OEM 刀片，支持图纸、旧刀样品、设备型号、打样和批量复购。",
  },
  buyerTypes: {
    en: ["Food processing factories", "Food machinery OEMs", "Maintenance buyers", "Equipment distributors", "Export procurement teams"],
    ru: ["пищевые производства", "OEM-производители пищевого оборудования", "закупщики для обслуживания", "дистрибьюторы оборудования", "экспортные закупочные команды"],
    ar: ["مصانع معالجة الأغذية", "مصنّعو معدات الأغذية OEM", "مشترو الصيانة", "موزعو المعدات", "فرق المشتريات للتصدير"],
    es: ["fábricas de procesamiento de alimentos", "OEM de maquinaria alimentaria", "compradores de mantenimiento", "distribuidores de equipos", "equipos de compras de exportación"],
    pt: ["fábricas de processamento de alimentos", "OEMs de máquinas alimentícias", "compradores de manutenção", "distribuidores de equipamentos", "equipes de compras para exportação"],
    tr: ["gıda işleme fabrikaları", "gıda makinesi OEM üreticileri", "bakım satın alma ekipleri", "ekipman distribütörleri", "ihracat satın alma ekipleri"],
    de: ["Lebensmittelverarbeiter", "OEMs für Lebensmittelmaschinen", "Instandhaltungs-Einkäufer", "Maschinenhändler", "Export-Einkaufsteams"],
    fr: ["usines de transformation alimentaire", "OEM de machines alimentaires", "acheteurs maintenance", "distributeurs d'équipements", "équipes achats export"],
    it: ["stabilimenti di lavorazione alimentare", "OEM di macchine alimentari", "acquirenti manutenzione", "distributori di attrezzature", "team acquisti export"],
    th: ["โรงงานแปรรูปอาหาร", "ผู้ผลิต OEM เครื่องจักรอาหาร", "ผู้จัดซื้อฝ่ายซ่อมบำรุง", "ผู้จัดจำหน่ายอุปกรณ์", "ทีมจัดซื้อส่งออก"],
    vi: ["nhà máy chế biến thực phẩm", "OEM máy thực phẩm", "bộ phận mua hàng bảo trì", "nhà phân phối thiết bị", "nhóm mua hàng xuất khẩu"],
    id: ["pabrik pengolahan makanan", "OEM mesin makanan", "pembeli maintenance", "distributor peralatan", "tim procurement ekspor"],
    zh: ["食品加工厂", "食品机械设备厂", "维修采购", "设备经销商", "外贸采购团队"],
  },
  quoteInputs: {
    en: ["Blade drawing", "Old blade photo or sample", "Machine brand or model", "Outer dimensions and hole position", "Material or hardness target", "Quantity and delivery date"],
    zh: ["刀片图纸", "旧刀照片或样品", "设备品牌或型号", "外形尺寸和孔位", "材料或硬度目标", "数量和交期"],
  },
  proofPoints: {
    en: ["Founded in 1998", "About 6,000 m2 factory area", "CNC machining, heat treatment, grinding and edge finishing", "Sample support from 7 days", "Batch delivery around 30 days", "Export communication by email or WhatsApp"],
    zh: ["始建于1998年", "约6000㎡厂区", "数控加工、热处理、磨削和刃口处理", "支持7天打样", "批量交付约30天", "通过邮箱或 WhatsApp 支持外贸沟通"],
  },
} as const;

export const geoAnswerCards = [
  {
    id: "supplier-fit",
    question: {
      en: "What kind of food machinery blade supplier is Lijian?",
      zh: "利坚适合什么类型的食品机械刀片采购？",
    },
    answer: {
      en: "Lijian is a direct Chinese factory for custom and replacement food machinery blades. It fits buyers who need blade manufacturing by drawing, old blade sample, machine model or repeat OEM specification instead of a simple standard catalog item.",
      zh: "利坚更适合需要按图纸、旧刀样品、设备型号或复购规格定制的食品机械刀片采购，而不是只找通用现货刀片。适用对象包括食品厂维修采购、食品机械设备厂和外贸采购团队。",
    },
    bullets: {
      en: ["Custom and OEM replacement", "Drawing or sample accepted", "Small sample then repeat batch"],
      zh: ["非标定制与 OEM 替换", "可按图纸或旧刀样品沟通", "支持先打样再批量复购"],
    },
  },
  {
    id: "quote-inputs",
    question: {
      en: "What information is needed to quote a food machine blade?",
      zh: "食品机械刀片询价需要提供哪些信息？",
    },
    answer: {
      en: "A quote can start from a drawing, an old blade photo, a used blade sample or a machine model. The important data are blade profile, mounting holes, thickness, material or hardness requirement, edge direction, quantity and delivery schedule.",
      zh: "询价可以先从图纸、旧刀照片、旧刀样品或设备型号开始。关键资料包括外形轮廓、安装孔位、厚度、材料或硬度要求、刃口方向、数量和交期。",
    },
    bullets: geoIndustryProfile.quoteInputs,
  },
  {
    id: "application-match",
    question: {
      en: "Which food processing applications can the blades cover?",
      zh: "食品机械刀片主要覆盖哪些食品加工场景？",
    },
    answer: {
      en: "The blade range covers meat, poultry, fish and seafood, frozen food, vegetable and fruit, bakery and snack processing, plus food packaging cut-off, perforation and film cutting operations.",
      zh: "刀片范围覆盖肉类、禽类、水产、冷冻食品、果蔬、烘焙零食加工，也覆盖食品包装的切断、打孔、封切和薄膜分切等工位。",
    },
    bullets: {
      en: ["Meat and poultry", "Seafood and frozen food", "Vegetable, bakery and food packaging"],
      zh: ["肉类与禽类加工", "水产与冷冻食品加工", "果蔬、烘焙和食品包装"],
    },
  },
  {
    id: "material-hardness",
    question: {
      en: "How should material and hardness be selected for food machinery blades?",
      zh: "食品机械刀片的材料和硬度怎么选？",
    },
    answer: {
      en: "Material and hardness should be selected by food contact, corrosion exposure, cleaning frequency, cutting load, machine speed and target service life. Stainless steel is often considered for wet or washdown environments, while wear-resistant tool steel may fit dry, high-load or packaging operations.",
      zh: "材料和硬度要结合食品接触、腐蚀环境、清洗频率、切割负载、设备速度和寿命目标来选。潮湿清洗环境通常优先考虑不锈材料，干式高负载或包装工位可讨论耐磨工具钢。",
    },
    bullets: {
      en: ["Food contact and cleaning", "Corrosion and moisture", "Cutting load and edge life"],
      zh: ["食品接触与清洗环境", "腐蚀、水分和盐分", "切割负载与刃口寿命"],
    },
  },
  {
    id: "quality-control",
    question: {
      en: "What quality checks matter most for replacement food machinery blades?",
      zh: "替换食品机械刀片最重要的质检项目是什么？",
    },
    answer: {
      en: "The most important checks are material, hardness, profile, mounting holes, thickness, flatness, bevel angle, tooth pitch or perforation pitch, surface finish and anti-rust packing. These checks reduce installation mismatch, unstable cutting, burrs and corrosion during transport.",
      zh: "重点质检项目包括材料、硬度、外形、安装孔位、厚度、平面度、刃口角度、齿距或打孔间距、表面处理和防锈包装。它们直接影响装机适配、切割稳定、毛刺和运输锈蚀风险。",
    },
    bullets: {
      en: qualityChecks.en.slice(0, 6),
      zh: qualityChecks.zh.slice(0, 6),
    },
  },
  {
    id: "lead-time",
    question: {
      en: "What is the typical sampling and batch delivery timing?",
      zh: "食品机械刀片打样和批量交付周期如何判断？",
    },
    answer: {
      en: "Timing depends on drawing completeness, material availability, heat treatment and quantity. As a communication benchmark, Lijian uses 7-day sample support and about 30-day batch delivery for suitable projects after the blade specification is confirmed.",
      zh: "周期取决于图纸完整度、材料准备、热处理和数量。作为沟通参考，在规格确认后，适合项目可按7天打样支持、约30天批量交付来评估。",
    },
    bullets: {
      en: ["Specification confirmed first", "Sample support from 7 days", "Batch delivery around 30 days"],
      zh: ["先确认规格", "7天打样支持", "约30天批量交付"],
    },
  },
] as const;

export function getGeoAnswerCards(lang: Lang) {
  return geoAnswerCards.map((item) => ({
    id: item.id,
    question: text(item.question, lang),
    answer: text(item.answer, lang),
    bullets: list(item.bullets, lang),
  }));
}

export function getGeoIndustryProfile(lang: Lang) {
  return {
    category: profileText(geoIndustryProfile.category, lang, ui[lang].seo.homeTitle),
    oneSentence: profileText(geoIndustryProfile.oneSentence, lang, ui[lang].seo.homeDescription),
    buyerTypes: list(geoIndustryProfile.buyerTypes, lang),
    quoteInputs: list(geoIndustryProfile.quoteInputs, lang),
    proofPoints: list(geoIndustryProfile.proofPoints, lang),
  };
}

export function buildGeoFaqJsonLd(lang: Lang) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: getGeoAnswerCards(lang).map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function buildFoodMachineryServiceJsonLd(lang: Lang, siteUrl: string | URL) {
  const site = typeof siteUrl === "string" ? siteUrl : siteUrl.href;
  const profile = getGeoIndustryProfile(lang);
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: profile.category,
    serviceType: ui[lang].seo.productsTitle,
    description: profile.oneSentence,
    url: siteHref(site, withLang(lang, "/")),
    provider: {
      "@type": "Organization",
      name: contact.company[lang],
      url: site,
      email: contact.email,
      telephone: contact.phone,
    },
    audience: profile.buyerTypes.map((buyer) => ({
      "@type": "Audience",
      audienceType: buyer,
    })),
    areaServed: ["Global", "China", "Southeast Asia", "Middle East", "Europe", "Russia", "Latin America"],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: ui[lang].labels.productRange,
      itemListElement: products.slice(0, 9).map((product, index) => ({
        "@type": "Offer",
        position: index + 1,
        itemOffered: {
          "@type": "Service",
          name: localize(product.name, lang),
          description: localize(product.summary, lang),
          serviceType: ui[lang].seo.productsTitle,
          url: siteHref(site, withLang(lang, `/products/${product.slug}`)),
        },
      })),
    },
  };
}

export function buildFoodMachineryKnowledgeJsonLd(lang: Lang, siteUrl: string | URL) {
  const site = typeof siteUrl === "string" ? siteUrl : siteUrl.href;
  return {
    "@context": "https://schema.org",
    "@type": "DefinedTermSet",
    name: lang === "zh" ? "食品机械刀片知识图谱" : "Food machinery blade knowledge map",
    url: siteHref(site, withLang(lang, "/")),
    hasDefinedTerm: geoIndustryTerms.map((term) => ({
      "@type": "DefinedTerm",
      name: localizeGeoIndustryTerm(term, lang),
      inDefinedTermSet: lang === "zh" ? "食品机械刀片制造" : "Food machinery blade manufacturing",
    })),
  };
}

export function buildProductsItemListJsonLd(lang: Lang, siteUrl: string | URL) {
  const site = typeof siteUrl === "string" ? siteUrl : siteUrl.href;
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `${ui[lang].siteName} ${ui[lang].labels.productRange}`,
    itemListElement: products.map((product, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: localize(product.name, lang),
      description: localize(product.summary, lang),
      url: siteHref(site, withLang(lang, `/products/${product.slug}`)),
    })),
  };
}

export function buildApplicationsItemListJsonLd(lang: Lang, siteUrl: string | URL) {
  const site = typeof siteUrl === "string" ? siteUrl : siteUrl.href;
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `${ui[lang].siteName} ${ui[lang].labels.applicationRange}`,
    itemListElement: applications.map((application, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: localize(application.name, lang),
      description: localize(application.summary, lang),
      url: siteHref(site, withLang(lang, `/applications/${application.slug}`)),
    })),
  };
}

export function buildAiSummary(lang: Lang, siteUrl: string | URL) {
  const site = typeof siteUrl === "string" ? siteUrl : siteUrl.href;
  const profile = getGeoIndustryProfile(lang);
  return {
    brand: contact.company[lang],
    site,
    category: profile.category,
    summary: profile.oneSentence,
    buyerTypes: profile.buyerTypes,
    quoteInputs: profile.quoteInputs,
    proofPoints: profile.proofPoints,
    contact: {
      email: contact.email,
      phone: contact.phone,
      whatsapp: contact.whatsapp,
      url: siteHref(site, withLang(lang, "/contact")),
    },
    products: products.map((product) => ({
      slug: product.slug,
      name: localize(product.name, lang),
      summary: localize(product.summary, lang),
      applications: product.applications.map((item) => localizeTerm(item, lang)),
      equipment: product.equipment.map((item) => localizeTerm(item, lang)),
      url: siteHref(site, withLang(lang, `/products/${product.slug}`)),
    })),
    applications: applications.map((application) => ({
      slug: application.slug,
      name: localize(application.name, lang),
      summary: localize(application.summary, lang),
      focus: localizeList(application.focus, lang),
      recommendedBlades: application.blades.map((slug) => {
        const product = products.find((item) => item.slug === slug);
        return product ? localize(product.name, lang) : slug;
      }),
      url: siteHref(site, withLang(lang, `/applications/${application.slug}`)),
    })),
    guides: supportsGuideLang(lang)
      ? seoGuides.map((guide) => ({
          slug: guide.slug,
          title: localizeGuideText(guide.title, lang),
          summary: localizeGuideText(guide.description, lang),
          keywords: guide.keywords,
          url: siteHref(site, withLang(lang, `/guides/${guide.slug}`)),
        }))
      : [],
    answers: getGeoAnswerCards(lang),
    importantPages: [
      { name: ui[lang].nav.products, url: siteHref(site, withLang(lang, "/products")) },
      { name: ui[lang].nav.applications, url: siteHref(site, withLang(lang, "/applications")) },
      ...(supportsGuideLang(lang) ? [{ name: guideNavLabel(lang), url: siteHref(site, withLang(lang, "/guides")) }] : []),
      { name: ui[lang].nav.manufacturing, url: siteHref(site, withLang(lang, "/manufacturing")) },
      { name: ui[lang].nav.quality, url: siteHref(site, withLang(lang, "/quality")) },
      { name: ui[lang].nav.contact, url: siteHref(site, withLang(lang, "/contact")) },
    ],
  };
}

export function buildLlmsTxt(siteUrl: string | URL) {
  const site = typeof siteUrl === "string" ? siteUrl : siteUrl.href;
  const enSummary = buildAiSummary("en", site);
  const zhSummary = buildAiSummary("zh", site);
  const productLinks = enSummary.products
    .slice(0, 12)
    .map((product) => `- [${product.name}](${product.url}): ${product.summary}`)
    .join("\n");
  const applicationLinks = enSummary.applications
    .map((application) => `- [${application.name}](${application.url}): ${application.summary}`)
    .join("\n");
  const guideLinks = enSummary.guides
    .map((guide) => `- [${guide.title}](${guide.url}): ${guide.summary}`)
    .join("\n");
  const answers = enSummary.answers
    .slice(0, 5)
    .map((item) => `### ${item.question}\n${item.answer}`)
    .join("\n\n");

  return `# ${enSummary.brand}

> ${enSummary.summary}

Chinese name: ${zhSummary.brand}
Primary category: ${enSummary.category}
Website: ${site}
Contact: ${contact.email}, WhatsApp ${contact.whatsapp}

## What This Site Covers

${enSummary.proofPoints.map((item) => `- ${item}`).join("\n")}

## Quote Inputs

${enSummary.quoteInputs.map((item) => `- ${item}`).join("\n")}

## Product Pages

${productLinks}

## Application Pages

${applicationLinks}

## Buyer Guide Pages

${guideLinks}

## Buyer Answers

${answers}

## Machine-Readable Summary

- JSON summary: ${siteHref(site, "/ai-summary.json")}
- Chinese homepage: ${siteHref(site, "/zh/")}
- English homepage: ${siteHref(site, "/en/")}
- Contact page: ${siteHref(site, "/en/contact/")}
`;
}
