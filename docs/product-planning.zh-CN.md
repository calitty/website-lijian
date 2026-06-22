# 工业食品刀片官网产品规划

版本：v1.0  
日期：2026-06-18  
项目路径：`/Users/anguschan/Desktop/project/industrialblades`

## 1. 项目目标

建设一个面向海外客户的工业食品机械刀片官网，重点服务俄罗斯、独联体、东南亚及其他英语市场客户，同时保留中文展示能力。

官网第一阶段的核心目标不是做商城，也不是做复杂在线报价系统，而是：

- 展示企业真实制造能力。
- 展示工业食品刀片产品范围。
- 覆盖食品加工行业典型应用场景。
- 通过搜索引擎被国外采购、工程师、设备维护人员、OEM 厂商和经销商发现。
- 让客户能够快速通过 Email、WhatsApp、Telegram、微信、电话等方式联系到我们。
- 从上线第一天开始采集搜索、访问、地区、设备和联系方式点击数据。

## 2. 网站定位

### 2.1 英文定位

主定位：

> Custom Industrial Food Processing Blades Manufacturer

辅助说明：

> We manufacture custom and replacement blades for meat, seafood, poultry, vegetable, bakery and packaging machinery.

### 2.2 中文定位

主定位：

> 工业食品机械刀片定制制造商

辅助说明：

> 专注肉类、水产、禽类、果蔬、烘焙及包装设备用工业刀片制造，支持非标异形刀片、替换刀片和 OEM 批量生产。

### 2.3 俄文定位

主定位：

> Производитель промышленных ножей для пищевого оборудования

辅助说明：

> Изготавливаем стандартные и нестандартные ножи для мясной, рыбной, овощной, хлебопекарной и упаковочной промышленности.

## 3. 阶段范围

### 3.1 第一阶段必须做

- 英文、俄文、简体中文三语言。
- PC、平板、手机响应式适配。
- 首页。
- 产品中心。
- 应用场景页。
- 制造能力页。
- 质量控制页。
- 工厂介绍页。
- 联系我们页。
- SEO 基础设施。
- 访问统计和转化事件统计。
- sitemap、robots、canonical、hreflang。
- 移动端固定联系按钮。
- 多地区联系方式展示。

### 3.2 第一阶段暂不做

- 在线商城。
- 在线支付。
- 客户登录后台。
- 图纸和照片上传报价。
- 复杂 CRM。
- 多员工后台管理。
- 报价单自动生成。
- 订单跟踪。
- 独立后端服务。

### 3.3 可选增强

- 简单联系表单。
- Cloudflare Pages Functions 处理表单。
- Cloudflare Turnstile 防垃圾提交。
- 表单提交后邮件通知。
- 产品目录 PDF 下载。
- FAQ 页面。
- 展会新闻或行业文章。

## 4. 目标客户

### 4.1 海外食品加工厂

典型关注点：

- 刀片寿命。
- 切割效果。
- 是否适配现有设备。
- 是否适合高频生产。
- 食品接触安全。
- 停机和更换成本。

内容应重点回答：

- 可以用于哪些食品加工场景。
- 可以加工哪些刀型。
- 可以支持哪些材料和刃口。
- 工厂是否具备稳定批量供货能力。

### 4.2 设备维护和工程人员

典型关注点：

- 尺寸精度。
- 孔位、弧度、厚度和刃口角度。
- 材料、硬度、热处理。
- 是否能做非标替换刀。
- 批次一致性。

内容应重点回答：

- 支持异形刀片定制。
- 支持来样、来图、设备型号沟通。
- 有精密磨削和检测能力。
- 可以长期稳定复购。

### 4.3 食品机械 OEM 厂商

典型关注点：

- OEM 批量生产。
- 长期供货稳定性。
- 质量一致性。
- 包装和贴牌。
- 保密和合作稳定性。

内容应重点回答：

- 支持 OEM / private label。
- 支持批量生产。
- 支持长期合作。
- 展示工艺、设备、检测和包装能力。

### 4.4 经销商和进口商

典型关注点：

- 产品线是否完整。
- 是否有足够利润空间。
- 是否有出口经验。
- 交付是否稳定。
- 联系响应是否及时。

内容应重点回答：

- 产品分类清晰。
- 适用行业广。
- 支持国际发货。
- 联系方式明显。

### 4.5 国内客户和合作方

典型关注点：

- 工厂是否真实。
- 加工能力是否可靠。
- 是否能承接非标件。
- 是否具备出口和长期合作能力。

内容应重点回答：

- 工厂介绍。
- 设备和工艺。
- 质量检测。
- 中文联系方式。

## 5. 信息架构

第一阶段建议导航：

```text
Home
Products
Applications
Manufacturing
Quality
About
Contact
Language
```

对应中文：

```text
首页
产品中心
应用场景
制造能力
质量控制
关于工厂
联系我们
语言
```

对应俄文：

```text
Главная
Продукция
Применение
Производство
Контроль качества
О компании
Контакты
Язык
```

## 6. 页面规划

### 6.1 首页

目标：3 秒内让客户知道我们是谁、做什么、是否值得继续浏览、如何联系。

内容顺序：

1. 首屏 Hero。
2. 产品范围。
3. 应用行业。
4. 制造能力。
5. 非标定制能力。
6. 质量控制。
7. 工厂图片。
8. 联系入口。

首屏英文文案建议：

```text
Custom Industrial Food Processing Blades

Precision-manufactured blades for meat, seafood, poultry, vegetable, bakery and packaging machinery.

[View Products] [Contact Us]
```

首屏中文文案建议：

```text
工业食品机械刀片定制制造商

专注肉类、水产、禽类、果蔬、烘焙及包装设备用工业刀片制造。

[查看产品] [联系我们]
```

首屏俄文文案建议：

```text
Промышленные ножи для пищевого оборудования

Изготавливаем ножи для мясной, рыбной, овощной, хлебопекарной и упаковочной промышленности.

[Продукция] [Связаться]
```

### 6.2 产品中心

目标：展示我们能做哪些刀片，尤其强调食品机械非标刀片和替换刀片制造能力。

产品分类建议：

- Custom Food Processing Blades / 非标食品加工刀片。
- Curved Blades / 弧形刀片。
- Bowl Cutter Blades / 斩拌机刀片。
- Meat Processing Blades / 肉类加工刀片。
- Poultry Processing Knives / 禽类加工刀片。
- Seafood Processing Blades / 水产加工刀片。
- Vegetable & Fruit Cutting Blades / 果蔬切割刀片。
- Bakery & Bread Blades / 烘焙和面包刀片。
- Packaging Blades / 包装机械刀片。
- Circular Blades / 圆刀。
- Straight Blades / 直刀。
- Serrated Blades / 齿刀。

每个产品卡片建议包含：

- 产品图。
- 产品名称。
- 典型应用。
- 关键能力标签，例如 Custom / OEM / Stainless Steel / Replacement。
- 联系按钮。

产品详情页建议包含：

- 产品说明。
- 适用行业。
- 典型设备。
- 可定制参数。
- 材料和硬度说明。
- 刃口类型。
- 制造工艺。
- 质量控制。
- 联系入口。

### 6.3 应用场景

目标：让不同食品行业客户快速找到自己的使用场景，同时获得 SEO 流量。

应用分类建议：

- Meat Processing / 肉类加工。
- Poultry Processing / 禽类加工。
- Fish & Seafood Processing / 水产加工。
- Frozen Food Processing / 冷冻食品加工。
- Vegetable & Fruit Processing / 果蔬加工。
- Bakery & Snack Processing / 烘焙和零食加工。
- Food Packaging / 食品包装。

每个应用页应回答：

- 这个行业通常需要哪些切割动作。
- 适合哪些刀片。
- 客户常见问题是什么。
- 我们如何通过材料、刃口、工艺和检测解决。
- 如何联系。

### 6.4 制造能力

目标：证明我们不是普通贸易商，而是具备制造和批量交付能力的供应商。

建议展示流程：

```text
Material Selection
Cutting / Blanking
CNC Machining
Heat Treatment
Precision Grinding
Edge Finishing
Polishing
Inspection
Anti-rust Packaging
International Delivery
```

中文：

```text
材料选择
下料切割
CNC 加工
热处理
精密磨削
刃口处理
抛光
检测
防锈包装
国际交付
```

该页面需要真实设备照片支撑。

### 6.5 质量控制

目标：让客户相信批量刀片稳定、尺寸可靠、刃口一致、适合食品加工环境。

建议内容：

- 材料检验。
- 硬度检测。
- 尺寸检测。
- 孔位检测。
- 厚度检测。
- 刃口检查。
- 表面处理检查。
- 批次一致性控制。
- 包装防锈。

页面语气要具体，避免空泛地写“严格质量控制”。

### 6.6 关于工厂

目标：建立真实企业信任感。

建议内容：

- 公司简介。
- 所在城市和工厂概况。
- 主要产品。
- 主要客户类型。
- 出口市场。
- 生产设备。
- 团队经验。
- 合作理念。

不建议夸大规模。对于海外客户，真实、稳定、专业比夸张数字更可信。

### 6.7 联系我们

目标：让客户不需要思考就能联系。

建议渠道：

- Email。
- WhatsApp。
- Telegram。
- LinkedIn。
- 微信。
- 电话。

简单联系表单字段：

```text
Name
Company
Country
Email
Message
```

如果第一阶段不做表单，仍然要有清晰的联系方式和一键跳转。

## 7. 多语言策略

### 7.1 语言版本

第一阶段：

```text
/en/   English
/ru/   Русский
/zh/   简体中文
```

后续预留：

```text
/vi/   Vietnamese
/th/   Thai
/id/   Indonesian
```

### 7.2 自动语言适配

访问根路径 `/` 时：

- 如果用户曾手动选择语言，优先进入用户选择语言。
- 浏览器语言为中文，进入 `/zh/`。
- 浏览器语言为俄文，进入 `/ru/`。
- 其他情况进入 `/en/`。

具体语言页面不做强制跳转。例如用户访问 `/en/meat-processing-blades`，应保持英文页面，避免影响 SEO 和链接分享。

### 7.3 手动切换

导航应保留语言切换：

```text
EN | RU | 中文
```

用户切换后记录到 cookie 或 localStorage。

### 7.4 多语言 SEO

每个语言页面必须有独立：

- title。
- description。
- h1。
- canonical。
- hreflang。
- sitemap 条目。

示例：

```html
<link rel="alternate" hreflang="en" href="https://example.com/en/" />
<link rel="alternate" hreflang="ru" href="https://example.com/ru/" />
<link rel="alternate" hreflang="zh-CN" href="https://example.com/zh/" />
<link rel="alternate" hreflang="x-default" href="https://example.com/en/" />
```

## 8. 响应式适配

### 8.1 PC 端

适合客户：

- 采购经理。
- 工程师。
- OEM 厂商。
- 经销商。

设计重点：

- 完整导航。
- 多列产品展示。
- 大图展示产品和工厂。
- 制造流程清晰。
- 联系入口固定在顶部和页尾。

### 8.2 平板端

适合客户：

- 展会现场。
- 客户拜访。
- 工厂或办公室快速浏览。

设计重点：

- 两列产品卡。
- 简化但不隐藏关键内容。
- 图片和文字比例平衡。
- 联系按钮足够明显。

### 8.3 手机端

适合客户：

- 东南亚客户。
- 俄罗斯客户移动访问。
- WhatsApp / Telegram 沟通场景。

设计重点：

- 首屏直接说明产品定位。
- 产品分类快速可见。
- 底部固定联系栏。
- 图片轻量化。
- CTA 按钮大且易点。
- 不堆叠过长文字。

移动端底部固定按钮建议：

英文：

```text
WhatsApp | Email | Contact
```

俄文：

```text
Telegram | Email | Contact
```

中文：

```text
微信 | 电话 | 联系我们
```

## 9. 视觉规划

### 9.1 视觉关键词

```text
精密制造
食品安全
工业可靠
国际供应
真实工厂
```

### 9.2 风格方向

整体应冷静、专业、可靠，避免：

- 廉价外贸模板感。
- 过度科技感。
- 过多渐变。
- 太多素材图库图片。
- 空泛口号堆叠。

视觉应依靠：

- 真实产品照片。
- 真实设备照片。
- 工艺流程。
- 清晰信息层级。
- 稳定排版。

### 9.3 色彩

建议色彩：

```text
主背景深色：#171A1F
工业蓝：#1F4E79
金属银：#C7CDD4
浅灰背景：#F5F7FA
食品安全绿：#2E7D5B
CTA 深红：#B3261E
正文深灰：#2B2F36
边框浅灰：#D9DEE5
```

使用原则：

- 深色用于首屏、页脚和重点区块。
- 白色或浅灰用于主要阅读区。
- 工业蓝用于导航、链接和信息强调。
- 食品安全绿用于质量、卫生、检测相关模块。
- 深红只用于重要 CTA，不大面积使用。

### 9.4 字体

英文和俄文：

```text
Inter
Roboto
Arial
```

中文：

```text
Noto Sans SC
思源黑体
系统黑体
```

字号建议：

```text
PC 首屏标题：48-64px
移动端首屏标题：32-40px
正文：16-18px
产品卡标题：18-22px
说明文字：14-16px
```

### 9.5 图片方向

必须准备：

- 单片刀片白底图。
- 单片刀片深色背景图。
- 异形刀片特写。
- 刃口细节图。
- 孔位、厚度、弧度细节图。
- 多片刀片批量图。
- 磨削设备图。
- 加工过程图。
- 检测过程图。
- 包装图。
- 工厂环境图。

图片要求：

- 背景干净。
- 产品清晰。
- 光线稳定。
- 不使用杂乱桌面、木板、地面照片作为官网主图。
- 可以保留真实感，但必须专业拍摄或后期处理。

## 10. 联系方式策略

### 10.1 英文市场

重点渠道：

- Email。
- WhatsApp。
- LinkedIn。

页面表现：

- 顶部显示 Email 或 Contact。
- 产品页显示 WhatsApp 和 Email。
- 页脚显示完整联系方式。

### 10.2 俄语市场

重点渠道：

- Telegram。
- Email。
- WhatsApp。

页面表现：

- Telegram 在移动端底部优先。
- 联系页要明确支持俄语沟通。

### 10.3 中文市场

重点渠道：

- 微信。
- 电话。
- 邮箱。
- WhatsApp。

页面表现：

- 中文页底部固定微信、电话、联系我们。
- 页脚保留外贸联系方式。

## 11. SEO 规划

### 11.1 英文关键词

核心词：

```text
custom food processing blades
industrial food processing blades
food machine knives
custom industrial knives manufacturer
OEM replacement blades
curved food processing blades
bowl cutter blades
meat processing blades
poultry processing knives
seafood processing blades
vegetable cutting blades
bakery cutting blades
packaging cutting blades
```

### 11.2 俄文关键词

核心词：

```text
промышленные ножи для пищевой промышленности
ножи для пищевого оборудования
ножи для мясопереработки
ножи для куттера
дисковые ножи для пищевой промышленности
ножи для нарезки мяса
ножи для переработки рыбы
изготовление промышленных ножей на заказ
```

### 11.3 中文关键词

核心词：

```text
食品机械刀片
工业食品刀片
食品加工刀片厂家
异形刀片定制
肉类加工刀片
斩拌机刀片
水产加工刀片
果蔬切割刀片
包装机械刀片
非标工业刀片定制
```

### 11.4 页面关键词分配

首页：

```text
custom food processing blades manufacturer
industrial food processing blades
食品机械刀片厂家
```

产品中心：

```text
industrial food processing blades
food machine knives
工业食品刀片
```

异形刀片页：

```text
custom profile blades
curved food processing blades
异形刀片定制
```

斩拌机刀片页：

```text
bowl cutter blades
bowl chopper knives
斩拌机刀片
```

肉类加工页：

```text
meat processing blades
ножи для мясопереработки
肉类加工刀片
```

水产加工页：

```text
seafood processing blades
ножи для переработки рыбы
水产加工刀片
```

包装刀片页：

```text
packaging cutting blades
food packaging blades
包装机械刀片
```

制造能力页：

```text
industrial blade manufacturing capabilities
custom blade manufacturing
工业刀片制造能力
```

质量控制页：

```text
food processing blade quality control
precision blade inspection
刀片质量检测
```

### 11.5 技术 SEO

必须实现：

- 每页唯一 title。
- 每页唯一 description。
- 每页唯一 h1。
- canonical。
- hreflang。
- sitemap.xml。
- robots.txt。
- 图片 alt。
- Open Graph。
- Twitter Card。
- 结构化数据 JSON-LD。
- 404 页面。
- 移动端可用性。
- Core Web Vitals 优化。

结构化数据建议：

- Organization。
- WebSite。
- Product。
- BreadcrumbList。
- FAQPage。

## 12. 数据统计规划

### 12.1 必须接入

- Google Analytics 4。
- Google Search Console。
- Yandex Metrica。
- Yandex Webmaster。
- Bing Webmaster Tools。
- Cloudflare Analytics。

### 12.2 转化事件

必须埋点：

```text
click_whatsapp
click_telegram
click_email
click_phone
click_wechat
click_linkedin
submit_contact_form
switch_language
view_product_category
view_product_detail
view_application_page
click_contact_from_product
click_contact_from_mobile_bar
scroll_90_percent
download_catalog
```

### 12.3 分析目标

上线后需要持续回答：

- 哪些国家访问最多。
- 哪些语言页面效果最好。
- PC、平板、手机哪个转化更高。
- 哪些产品页面最受关注。
- 哪些应用场景带来更多联系点击。
- WhatsApp、Telegram、Email 哪个点击更多。
- Google、Yandex、Bing 哪个来源更有效。
- 哪些关键词带来展示和点击。
- 哪些页面有展示但点击率低，需要改标题和描述。

### 12.4 基础转化漏斗

```text
搜索曝光
进入页面
浏览产品或应用
查看制造能力或质量控制
点击联系方式
实际沟通
```

网站统计至少要覆盖前五步。

## 13. 技术栈规划

### 13.1 推荐技术栈

```text
前端框架：Astro
语言：TypeScript
样式：Tailwind CSS + CSS Variables
内容管理：Astro Content Collections / Markdown / JSON
多语言：Astro i18n
SEO：@astrojs/sitemap + 自定义 SeoHead
统计：GA4 + Yandex Metrica + Cloudflare Analytics
部署：Cloudflare Pages
图片：Astro Image，WebP / AVIF
验证：Lighthouse + Playwright
```

### 13.2 暂不需要独立后端

当前阶段不需要独立后端，原因：

- 主要是展示官网。
- 内容更新频率不高。
- 暂不做图纸上传。
- 暂不做在线报价。
- 暂不做客户后台。
- 静态页面更适合 SEO 和全球 CDN 分发。

如需简单联系表单，可以使用：

```text
Cloudflare Pages Functions
Cloudflare Turnstile
邮件服务
```

这不是独立后端，只是轻量 serverless 能力。

### 13.3 后续需要独立后端的条件

后续如果出现这些需求，再考虑独立后端：

- 图纸和照片上传。
- 自动报价。
- 产品数据库后台管理。
- CRM 对接。
- 多账号内容管理。
- 客户登录。
- 订单追踪。
- 在线支付。
- 报价单生成。

## 14. 部署规划

推荐组合：

```text
域名：.com
DNS：Cloudflare
部署：Cloudflare Pages
邮箱：Google Workspace / Microsoft 365 / Zoho Mail / 企业邮箱
统计：GA4 + GSC + Yandex + Bing
CDN：Cloudflare
```

第一阶段部署不建议走中国大陆备案路线，除非后续明确要重点服务中国大陆用户。

## 15. 参考网站

可参考方向：

- Baucor：工业刀片和食品加工刀片分类。
- KASCO：食品行业刀片、肉类锯条、目录和制造能力。
- LUTZ BLADES：材料、刃口、涂层、技术信任感。
- Bettcher：食品行业和应用场景划分。
- Urschel：食品切割设备、行业、应用和国际化。
- Weber Food Technology：食品切片、包装、自动化、服务和联系表单。

参考链接：

```text
https://www.baucor.com/
https://www.kascocorp.com/
https://lutz-blades.com/
https://www.bettcher.com/
https://www.urschel.com/
https://www.weberweb.com/
```

## 16. 内容资料清单

上线前需要准备：

- 公司英文名。
- 公司中文名。
- 是否需要俄文公司名。
- Logo。
- 品牌色确认。
- 工厂所在城市。
- 工厂面积。
- 成立时间。
- 员工数量。
- 主要设备清单。
- 主要工艺能力。
- 常用材料。
- 可做硬度范围。
- 是否有证书。
- 是否有出口地区。
- Email。
- WhatsApp。
- Telegram。
- LinkedIn。
- 微信。
- 电话。
- 产品高清图。
- 工厂设备图。
- 检测图。
- 包装图。
- 产品目录资料。

暂时不确定的内容可以先不展示，避免夸大。

## 17. 验收标准

### 17.1 内容验收

- 三种语言页面内容完整。
- 首页定位清晰。
- 产品分类清晰。
- 应用场景清晰。
- 制造能力具体。
- 质量控制具体。
- 联系方式准确。
- 没有明显机翻、生硬或不可信表述。

### 17.2 视觉验收

- PC、平板、手机布局均正常。
- 首屏产品和定位明确。
- 文字不重叠。
- 按钮不拥挤。
- 图片清晰、不变形。
- 产品卡片信息可读。
- 移动端底部联系栏可用。

### 17.3 SEO 验收

- 每页 title 正确。
- 每页 description 正确。
- 每页 h1 唯一。
- sitemap.xml 可访问。
- robots.txt 可访问。
- hreflang 正确。
- canonical 正确。
- 图片有 alt。
- 结构化数据无明显错误。

### 17.4 统计验收

- GA4 可收到 page_view。
- GA4 可收到联系方式点击事件。
- Yandex Metrica 可收到访问数据。
- Search Console 可验证站点。
- Yandex Webmaster 可验证站点。
- Bing Webmaster 可验证站点。
- Cloudflare Analytics 可查看流量。

### 17.5 性能验收

- 移动端 Lighthouse Performance 建议不低于 85。
- SEO 建议不低于 95。
- Accessibility 建议不低于 90。
- 首屏图片经过压缩和响应式处理。
- 无明显阻塞脚本。

## 18. 实施里程碑

### 阶段 1：资料确认

输出：

- 公司信息。
- 产品分类。
- 联系方式。
- 图片素材。
- 语言优先级。

### 阶段 2：设计和内容框架

输出：

- 首页结构。
- 产品页结构。
- 应用页结构。
- 制造能力页结构。
- 质量页结构。
- 联系页结构。
- 视觉风格确认。

### 阶段 3：前端开发

输出：

- Astro 项目。
- 多语言路由。
- 响应式布局。
- 组件系统。
- 内容数据结构。
- SEO 组件。
- 统计事件。

### 阶段 4：内容填充

输出：

- 英文内容。
- 俄文内容。
- 中文内容。
- 产品图。
- 工厂图。
- SEO 标题和描述。

### 阶段 5：测试和上线

输出：

- PC / 平板 / 手机检查。
- Lighthouse 检查。
- SEO 检查。
- 统计事件检查。
- Cloudflare Pages 部署。
- 域名绑定。
- Search Console / Yandex / Bing 提交。

### 阶段 6：上线后优化

输出：

- 关键词表现复盘。
- 国家和设备数据分析。
- 联系按钮点击分析。
- 页面内容调整。
- 新增高价值产品页或应用页。

## 19. 当前决策结论

- 网站类型：外贸型工业制造能力展示官网。
- 核心产品：工业食品机械刀片、异形刀片、替换刀片、OEM 刀片。
- 第一语言：英文。
- 重点语言：俄文。
- 补充语言：简体中文。
- 部署方式：Cloudflare Pages。
- 技术栈：Astro + TypeScript + Tailwind CSS。
- 第一阶段不需要独立后端。
- SEO 和统计必须作为基础功能上线。
- 联系方式比复杂表单更重要。
- 视觉必须依赖真实产品和真实工厂能力。

