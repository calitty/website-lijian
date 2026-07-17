import type { Lang } from "@/data/site";

type GuideText = { readonly en: string } & Partial<Record<Lang, string>>;
type GuideList = { readonly en: readonly string[] } & Partial<Record<Lang, readonly string[]>>;

export const guideLangCodes = ["en", "zh"] as const satisfies readonly Lang[];

export function supportsGuideLang(lang: Lang): lang is (typeof guideLangCodes)[number] {
  return (guideLangCodes as readonly Lang[]).includes(lang);
}

export interface SeoGuideSection {
  readonly id: string;
  readonly heading: GuideText;
  readonly body: GuideText;
  readonly bullets?: GuideList;
}

export interface SeoGuide {
  readonly slug: string;
  readonly image: string;
  readonly title: GuideText;
  readonly description: GuideText;
  readonly lead: GuideText;
  readonly shortAnswer: GuideText;
  readonly keywords: readonly string[];
  readonly checklistTitle: GuideText;
  readonly checklist: GuideList;
  readonly sections: readonly SeoGuideSection[];
  readonly relatedProducts: readonly string[];
  readonly relatedApplications: readonly string[];
}

const guideNavLabels: GuideText = {
  en: "Guides",
  ru: "Советы",
  ar: "الدليل",
  es: "Guías",
  pt: "Guias",
  tr: "Rehber",
  de: "Ratgeber",
  fr: "Guides",
  it: "Guide",
  th: "คู่มือ",
  vi: "Hướng dẫn",
  id: "Panduan",
  zh: "采购资料",
};

export const guideIndexCopy = {
  eyebrow: {
    en: "Buyer resources",
    zh: "采购与选型资料",
  },
  title: {
    en: "Food Machinery Blade Selection Guides",
    zh: "食品机械刀片采购与询价资料",
  },
  description: {
    en: "Practical guides for choosing custom food processing blades, preparing quote information, selecting materials and checking replacement fit before sampling or batch orders.",
    zh: "面向食品厂、设备厂和维修采购的刀片选型资料，帮助确认非标定制、材料硬度、替换装机和询价信息。",
  },
  lead: {
    en: "These pages are built for high-intent buyers who search by problem: how to order a custom blade, what material to choose, why a replacement blade does not fit, or which blade type works for a food line.",
    zh: "这些内容覆盖高意图搜索问题：如何按图纸或样品定制刀片、材料硬度如何选、替换刀片装机如何确认、不同食品产线应匹配什么刀型。",
  },
  readGuide: {
    en: "Read guide",
    zh: "阅读指南",
  },
  checklist: {
    en: "Checklist",
    zh: "关键清单",
  },
  related: {
    en: "Related pages",
    zh: "相关页面",
  },
  contact: {
    en: "Discuss blade requirement",
    zh: "沟通刀片需求",
  },
  shortAnswer: {
    en: "Short answer",
    zh: "简要回答",
  },
  catalog: {
    en: "Product catalog",
    zh: "产品目录",
  },
  catalogLead: {
    en: "PDF blade range for food machinery replacement and OEM inquiries.",
    zh: "用于食品机械替换刀片和 OEM 询盘的产品范围 PDF。",
  },
  rfqTemplate: {
    en: "RFQ template",
    zh: "询价模板",
  },
  rfqTemplateLead: {
    en: "CSV fields for drawing, dimensions, material, quantity and delivery.",
    zh: "用于填写图纸、尺寸、材料、数量和交期的 CSV 模板。",
  },
  emailInquiry: {
    en: "Email inquiry",
    zh: "邮箱询盘",
  },
} as const;

export function guideNavLabel(lang: Lang) {
  return guideNavLabels[lang] ?? guideNavLabels.en;
}

export function localizeGuideText(value: GuideText, lang: Lang) {
  return value[lang] ?? value.en;
}

export function localizeGuideList(value: GuideList, lang: Lang) {
  return value[lang] ?? value.en;
}

export const seoGuides: readonly SeoGuide[] = [
  {
    slug: "order-custom-food-machine-blades",
    image: "/images/lijian/china-source-sample-table.jpg",
    title: {
      en: "How to Order Custom Food Machine Blades by Drawing or Sample",
      zh: "如何按图纸或样品定制食品机械刀片",
    },
    description: {
      en: "A quote checklist for custom food machine blades made by drawing, old blade sample, equipment model or key dimensions.",
      zh: "面向非标食品机械刀片的询价清单，说明如何用图纸、旧刀样品、设备型号或关键尺寸开始报价。",
    },
    lead: {
      en: "Custom blade orders move faster when the buyer sends the information that affects fit, cutting performance and repeat production.",
      zh: "非标刀片订单能否快速推进，关键在于先提供影响装机、切割效果和复购一致性的资料。",
    },
    shortAnswer: {
      en: "A custom food machine blade quote can start from a drawing, used blade photo, old blade sample or machine model. The important details are profile, mounting holes, thickness, bevel direction, material or hardness target, quantity and delivery schedule.",
      zh: "食品机械非标刀片询价可以从图纸、旧刀照片、旧刀样品或设备型号开始。关键资料包括外形、孔位、厚度、刃口方向、材料或硬度目标、数量和交期。",
    },
    keywords: ["custom food machine blades", "food processing blade drawing", "replacement blade sample", "OEM food machinery knives"],
    checklistTitle: {
      en: "Quote-ready information",
      zh: "可直接报价的信息",
    },
    checklist: {
      en: [
        "Blade drawing, old blade photo or used sample",
        "Outer profile, length, width, thickness and radius",
        "Mounting hole diameter, slot position and center distance",
        "Machine brand, model or installation station",
        "Material, hardness target or corrosion requirement",
        "Single bevel, double bevel, serration or perforation detail",
        "Sample quantity, batch quantity and delivery expectation",
        "Packaging, anti-rust and export shipping requirement",
      ],
      zh: [
        "刀片图纸、旧刀照片或旧刀样品",
        "外形轮廓、长度、宽度、厚度和弧度",
        "安装孔径、槽位和孔距",
        "设备品牌、型号或安装工位",
        "材料、硬度目标或耐腐蚀要求",
        "单面刃、双面刃、齿形或打孔细节",
        "样品数量、批量数量和交期要求",
        "包装、防锈和出口运输要求",
      ],
    },
    sections: [
      {
        id: "reference",
        heading: {
          en: "Start from the strongest reference",
          zh: "先提供最可靠的参照资料",
        },
        body: {
          en: "A complete drawing is ideal, but it is not the only way to start. A clear old blade photo, used blade sample, machine model or measurement sketch can be enough for the first technical review.",
          zh: "完整图纸最好，但不是唯一入口。清晰旧刀照片、旧刀样品、设备型号或手工测量草图，也可以作为初步技术确认的依据。",
        },
        bullets: {
          en: ["Drawing for profile and holes", "Used sample for bevel direction", "Machine model for installation context"],
          zh: ["图纸确认外形和孔位", "旧刀确认刃口方向", "设备型号确认装机场景"],
        },
      },
      {
        id: "fit",
        heading: {
          en: "Separate fit-critical data from performance data",
          zh: "区分装机尺寸和切割性能参数",
        },
        body: {
          en: "Hole position, thickness, slot location and flatness affect whether the blade can be installed. Material, hardness, edge angle and surface finish affect cutting life, hygiene cleaning and product quality.",
          zh: "孔位、厚度、槽位和平面度决定能否装机；材料、硬度、刃口角度和表面处理决定切割寿命、清洗适应性和产品切面效果。",
        },
        bullets: {
          en: ["Fit: holes, thickness, slots, flatness", "Performance: material, hardness, edge, finish", "Supply: quantity, sample date, repeat batch"],
          zh: ["装机：孔位、厚度、槽位、平面度", "性能：材料、硬度、刃口、表面", "供货：数量、打样时间、复购批次"],
        },
      },
      {
        id: "repeat",
        heading: {
          en: "Plan the sample as the start of repeat supply",
          zh: "把打样作为批量复购的起点",
        },
        body: {
          en: "For maintenance buyers and food machinery OEMs, the first sample should confirm not only whether one blade works, but also which dimensions, inspection points and packaging details must stay stable in repeat orders.",
          zh: "对维修采购和食品机械设备厂来说，第一件样品不仅要验证能否使用，还要明确后续批量订单需要稳定控制的尺寸、检验点和包装方式。",
        },
      },
    ],
    relatedProducts: ["custom-food-processing-blades", "straight-blades", "circular-blades"],
    relatedApplications: ["meat-processing", "food-packaging", "vegetable-fruit-processing"],
  },
  {
    slug: "food-processing-blade-material-hardness",
    image: "/images/lijian/blade-inspection.jpg",
    title: {
      en: "Food Processing Blade Material and Hardness Selection",
      zh: "食品加工刀片材料和硬度怎么选",
    },
    description: {
      en: "How to discuss stainless steel, tool steel, hardness, corrosion resistance and edge life for food machinery blades.",
      zh: "说明食品机械刀片如何结合不锈钢、工具钢、硬度、耐腐蚀和刃口寿命进行选型。",
    },
    lead: {
      en: "There is no single best blade material. The right choice depends on food contact, moisture, cleaning, cutting load, speed and maintenance expectations.",
      zh: "食品机械刀片没有单一最优材料，选型要看食品接触、潮湿清洗、切割负载、设备速度和维护预期。",
    },
    shortAnswer: {
      en: "For wet, salty or frequent washdown lines, stainless material and smooth finishing usually matter more. For dry, high-load or abrasive cutting, wear resistance and edge stability may be more important. Hardness should support edge life without making the blade too brittle for the working load.",
      zh: "潮湿、盐分或频繁清洗工况通常更重视不锈材料和表面光洁；干式、高负载或磨损性切割更重视耐磨和刃口稳定。硬度需要兼顾寿命和抗崩口，不能只追求越高越好。",
    },
    keywords: ["food processing blade material", "food machinery blade hardness", "stainless food machine knives", "blade edge life"],
    checklistTitle: {
      en: "Material selection inputs",
      zh: "材料选型输入",
    },
    checklist: {
      en: [
        "Food type: meat, seafood, frozen food, vegetable, bakery or packaging",
        "Wet, salty, oily, acidic or dry environment",
        "Cleaning frequency and sanitation chemical exposure",
        "Cutting load, machine speed and impact level",
        "Target edge life and sharpening plan",
        "Surface finish, corrosion resistance and anti-rust packing",
      ],
      zh: [
        "食品类型：肉类、水产、冷冻、果蔬、烘焙或包装",
        "潮湿、盐分、油脂、酸性或干式环境",
        "清洗频率和清洗剂接触情况",
        "切割负载、设备速度和冲击程度",
        "目标刃口寿命和修磨计划",
        "表面处理、耐腐蚀和防锈包装",
      ],
    },
    sections: [
      {
        id: "washdown",
        heading: {
          en: "Wet and washdown lines need corrosion control",
          zh: "潮湿清洗产线优先控制腐蚀",
        },
        body: {
          en: "Seafood, poultry and many prepared-food lines expose blades to moisture, salt and cleaning. Stainless choices, smooth finishing and anti-rust packing reduce corrosion risk before and after installation.",
          zh: "水产、禽类和部分预制食品产线会接触水分、盐分和清洗环境。不锈材料、光洁表面和防锈包装可以降低装机前后的腐蚀风险。",
        },
      },
      {
        id: "load",
        heading: {
          en: "High load cutting needs toughness as well as hardness",
          zh: "高负载切割不能只看硬度",
        },
        body: {
          en: "Frozen food, dense meat, packaging cut-off and some chopping positions may create impact. Hardness that is too aggressive can shorten practical life if the edge chips under load.",
          zh: "冷冻食品、密实肉类、包装切断和部分剁切工位会产生冲击。硬度过高如果导致刃口崩缺，实际寿命反而会缩短。",
        },
        bullets: {
          en: ["Confirm impact and speed", "Balance hardness with toughness", "Check edge angle and thickness together"],
          zh: ["确认冲击和速度", "平衡硬度和韧性", "把刃口角度和厚度一起评估"],
        },
      },
      {
        id: "edge",
        heading: {
          en: "Edge geometry is part of material selection",
          zh: "刃口结构也是材料选型的一部分",
        },
        body: {
          en: "A material discussion is incomplete without edge geometry. A thin edge helps clean slicing, while a stronger bevel may be needed for frozen or high-speed operations.",
          zh: "材料讨论不能脱离刃口结构。薄刃有利于整洁切片，而冷冻或高速工位可能需要更强的刃口支撑。",
        },
      },
    ],
    relatedProducts: ["seafood-processing-blades", "meat-processing-blades", "packaging-blades"],
    relatedApplications: ["fish-seafood-processing", "frozen-food-processing", "food-packaging"],
  },
  {
    slug: "replacement-blade-fit-quality-checklist",
    image: "/images/lijian/precision-machined-cutter-heads.jpg",
    title: {
      en: "Replacement Food Machinery Blade Fit and Quality Checklist",
      zh: "替换食品机械刀片装机和质检清单",
    },
    description: {
      en: "A practical checklist for checking mounting fit, cutting stability, dimensional control and export packing before replacing food machine blades.",
      zh: "用于替换食品机械刀片的装机、切割稳定、尺寸控制和出口包装检查清单。",
    },
    lead: {
      en: "Replacement blades fail most often because small fit details are missed before production. A shared checklist reduces rework and downtime.",
      zh: "替换刀片常见问题不是刀型大方向错误，而是生产前遗漏了细小装机参数。统一清单能减少返工和停机。",
    },
    shortAnswer: {
      en: "For replacement food machinery blades, check profile, hole pattern, thickness, flatness, bevel direction, tooth pitch or perforation pitch, hardness, surface finish and packing. These details affect installation fit, cutting stability, burr control and corrosion during transport.",
      zh: "替换食品机械刀片应检查外形、孔位、厚度、平面度、刃口方向、齿距或打孔间距、硬度、表面处理和包装。这些项目直接影响装机、切割稳定、毛刺和运输锈蚀。",
    },
    keywords: ["replacement food machinery blades", "blade fit checklist", "food machine knife quality control", "mounting hole blade inspection"],
    checklistTitle: {
      en: "Fit and inspection points",
      zh: "装机与质检要点",
    },
    checklist: {
      en: [
        "Profile and overall length match the old blade",
        "Mounting hole size, slot position and center distance are measured",
        "Thickness, flatness and straightness are controlled",
        "Bevel side, bevel angle and edge direction are confirmed",
        "Tooth pitch, perforation pitch or cut-off edge is specified",
        "Hardness and material match the operating condition",
        "Surface finish and burr control are reviewed",
        "Anti-rust packing protects the blade during export shipping",
      ],
      zh: [
        "外形和总长度与旧刀匹配",
        "测量安装孔、槽位和孔距",
        "控制厚度、平面度和直线度",
        "确认刃口面、刃口角度和方向",
        "明确齿距、打孔间距或切断刃口",
        "材料和硬度匹配实际工况",
        "检查表面处理和毛刺控制",
        "出口运输使用防锈保护包装",
      ],
    },
    sections: [
      {
        id: "install",
        heading: {
          en: "Installation fit comes before cutting performance",
          zh: "先确保装机，再讨论切割性能",
        },
        body: {
          en: "If mounting holes, slots, thickness or flatness are wrong, the blade may not install correctly even if the edge is sharp. Replacement orders should start by confirming the old blade measurements.",
          zh: "如果孔位、槽位、厚度或平面度不正确，即使刃口锋利也可能无法装机。替换订单应先围绕旧刀尺寸确认。",
        },
      },
      {
        id: "cutting",
        heading: {
          en: "Cutting stability depends on more than sharpness",
          zh: "切割稳定不只取决于锋利度",
        },
        body: {
          en: "Edge angle, tooth pitch, surface finish and hardness all affect burrs, tearing, vibration and service life. This is why the cutting problem should be described together with the blade drawing.",
          zh: "刃口角度、齿距、表面处理和硬度都会影响毛刺、撕裂、振动和寿命。因此提供图纸时，也应说明当前切割问题。",
        },
      },
      {
        id: "packing",
        heading: {
          en: "Export packing is part of quality control",
          zh: "出口包装属于质量控制的一部分",
        },
        body: {
          en: "Food machinery blades can be damaged or corroded in transit. Foam separation, edge protection, anti-rust handling and clear labels help protect repeat orders.",
          zh: "食品机械刀片在运输中可能磕碰或锈蚀。泡棉隔离、刃口保护、防锈处理和清晰标签有助于保护批量订单。",
        },
      },
    ],
    relatedProducts: ["bowl-cutter-blades", "curved-food-processing-blades", "straight-blades"],
    relatedApplications: ["meat-processing", "poultry-processing", "frozen-food-processing"],
  },
  {
    slug: "choose-blades-by-food-processing-application",
    image: "/images/stock/food-processing-conveyor-apples.jpg",
    title: {
      en: "Choose Blades by Food Processing Application",
      zh: "按食品加工应用选择刀片",
    },
    description: {
      en: "A buyer guide for matching blade profile, material and edge geometry to meat, poultry, seafood, frozen food, vegetable, bakery and food packaging lines.",
      zh: "按肉类、禽类、水产、冷冻、果蔬、烘焙和食品包装产线匹配刀片外形、材料和刃口结构的采购资料。",
    },
    lead: {
      en: "Application-based selection is often faster than starting from a blade name, because the food material and line condition explain the real cutting problem.",
      zh: "按应用场景选型通常比只按刀片名称更有效，因为食品物料和产线条件能说明真正的切割问题。",
    },
    shortAnswer: {
      en: "Choose food processing blades by the product being cut, the machine station and the failure mode. Meat lines often focus on clean cut and edge life; seafood on corrosion control; frozen food on toughness; bakery on tooth pitch; packaging on burr, perforation and high-speed stability.",
      zh: "选择食品加工刀片时，应先看切割物料、设备工位和当前失效问题。肉类关注切面和寿命，水产关注耐腐蚀，冷冻关注韧性，烘焙关注齿距，包装关注毛刺、打孔和高速稳定。",
    },
    keywords: ["food processing blade applications", "meat processing blades", "seafood blade selection", "food packaging blades"],
    checklistTitle: {
      en: "Application matching questions",
      zh: "应用匹配问题",
    },
    checklist: {
      en: [
        "What food is being cut and what texture causes difficulty?",
        "Is the station slicing, dicing, trimming, chopping, perforating or cut-off?",
        "Is the environment wet, frozen, salty, oily or dry?",
        "What is the current failure: tearing, burrs, short life, corrosion or poor fit?",
        "Is the order for maintenance replacement, OEM equipment or repeat batch supply?",
      ],
      zh: [
        "切割什么食品，物料质地的难点是什么？",
        "工位是切片、切丁、修整、斩切、打孔还是切断？",
        "环境是潮湿、冷冻、盐分、油脂还是干式？",
        "当前问题是撕裂、毛刺、寿命短、腐蚀还是装机不准？",
        "订单是维修替换、设备厂 OEM 还是复购批量？",
      ],
    },
    sections: [
      {
        id: "meat",
        heading: {
          en: "Meat, poultry and frozen food",
          zh: "肉类、禽类和冷冻食品",
        },
        body: {
          en: "These applications often need stable fit, edge life and reduced tearing. Frozen or high-load positions may need stronger edge support and careful hardness selection.",
          zh: "这些场景通常关注装机稳定、刃口寿命和减少撕裂。冷冻或高负载工位还需要更强的刃口支撑和更谨慎的硬度选择。",
        },
      },
      {
        id: "wet",
        heading: {
          en: "Seafood and washdown environments",
          zh: "水产和潮湿清洗环境",
        },
        body: {
          en: "For fish, shrimp and seafood lines, corrosion resistance, smooth finish and hygiene cleaning are usually discussed before only chasing hardness.",
          zh: "鱼类、虾类和水产线通常应先讨论耐腐蚀、表面光洁和清洗卫生，再单独追求硬度。",
        },
      },
      {
        id: "bakery-packaging",
        heading: {
          en: "Bakery, snack and packaging lines",
          zh: "烘焙、零食和包装线",
        },
        body: {
          en: "Bread and snack lines may need tooth pitch control for clean entry, while packaging lines usually focus on cut-off quality, perforation pitch, burr control and repeatable high-speed running.",
          zh: "面包和零食线常需要控制齿距和起切效果；包装线则通常关注切断质量、打孔间距、毛刺控制和高速重复稳定。",
        },
      },
    ],
    relatedProducts: ["meat-processing-blades", "seafood-processing-blades", "bakery-bread-blades", "packaging-blades"],
    relatedApplications: ["meat-processing", "fish-seafood-processing", "bakery-snack-processing", "food-packaging"],
  },
] as const;

export function getSeoGuide(slug: string) {
  return seoGuides.find((guide) => guide.slug === slug);
}
