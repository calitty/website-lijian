# 利坚食品机械刀片网站 SEO 与数据分析执行方案

## 1. 网站性质判断

该站不是标准零售电商，也不是只展示品牌形象的企业官网。它更接近 B2B 外贸询盘型工厂站，核心目标是让海外采购、设备厂、维修商或食品加工企业快速确认三件事：

1. 是否能做食品机械刀片、替换刀片、非标刀片和 OEM 刀片。
2. 是否具备可信的制造、质量控制和交付能力。
3. 是否能低阻力联系到人，并发送图纸、旧刀照片、设备型号或关键尺寸。

因此 SEO 和数据分析不能只追求访问量。更重要的是看“高意向访问是否进入产品/应用/质量内容，并最终通过表单、WhatsApp、邮箱或电话联系”。

## 2. 核心转化定义

### 主要转化

- `generate_lead`：询盘表单成功发送。
- `click_whatsapp`：点击 WhatsApp 直接沟通。
- `click_email`：点击企业邮箱。
- `click_phone`：点击电话。

### 辅助转化

- `view_product_detail`：查看具体产品详情。
- `view_application_page`：查看应用场景页面。
- `click_contact_from_product`：从产品卡片或产品详情进入联系。
- `click_contact_from_header`：从导航联系按钮进入联系。
- `submit_inquiry_form`：用户尝试提交主询盘表单。
- `submit_floating_inquiry_form`：提交浮动询盘表单。
- `open_floating_inquiry`：展开浮动询盘表单。
- `inquiry_form_sent`：表单发送成功。
- `view_product_category`：查看产品列表页（产品中心）。
- `click_contact_from_mobile_bar`：从移动端底部联系栏进入联系。
- `click_contact_from_about`：从关于页进入联系。
- `scroll_90_percent`：用户深度阅读页面。
- `switch_language`：切换语言。

> 实现说明：
>
> - 表单成功时会同时触发 `inquiry_form_sent`（漏斗中间指标）与 `generate_lead`（主转化）。建议在 GA4 中仅将 `generate_lead` 标记为 Key event，避免重复统计转化。
> - `download_catalog` 用于产品目录 PDF 下载，下载按钮已通过 `data-track="download_catalog"` 接入；RFQ 模板下载使用 `download_rfq_template`。
> - `click_telegram` / `click_wechat` / `click_linkedin` 仅在 `src/data/site.ts` 中配置了对应渠道后才会出现（当前为空，已自动隐藏，不会产生空点击数据）。

### 转化漏斗

推荐在 GA4 / Yandex Metrica 中按以下漏斗看：

1. 进入首页、产品页或应用页。
2. 查看产品中心或应用场景。
3. 查看制造能力或质量控制。
4. 点击 WhatsApp / Email / Contact。
5. 表单提交成功或外部联系点击。

如果第 2 步到第 3 步流失高，说明内容信任不足；如果第 4 步到第 5 步流失高，说明表单、联系方式或客户意图匹配存在问题。

## 3. 关键数据维度

### 国家和地区

重点看：

- Russia
- Kazakhstan
- Belarus
- Kyrgyzstan
- Uzbekistan
- Indonesia
- Thailand
- Vietnam
- Malaysia
- Philippines
- India
- Middle East countries

中国访问可以先不作为主要目标，但要保留中文页面用于客户沟通和内部展示。

### 语言

需要分开看：

- 英文页面访问和转化。
- 俄文页面访问和转化。
- 中文页面访问和转化。

俄语地区如果访问英文页多，说明自动语言识别可能不够精准，或搜索入口仍以英文关键词为主。

### 来源渠道

重点区分：

- Organic Search：自然搜索。
- Direct：直接访问。
- Referral：外链、B2B 平台、社媒资料页。
- WhatsApp shared links：客户转发链接。
- Paid Search：未来如投放 Google Ads / Yandex Direct。

### 页面类型

建议按页面分组：

- Home：首页。
- Product Index：产品中心。
- Product Detail：产品详情。
- Application Index：应用场景。
- Application Detail：应用详情。
- Manufacturing：制造能力。
- Quality：质量控制。
- About：关于工厂。
- Contact：联系我们。

## 4. 产品特性对应 SEO 策略

### 站点主关键词

英文：

- food machine blades
- food processing blades
- custom food processing blades
- industrial food blades
- food machinery knives
- OEM replacement blades
- food processing machine knives

俄文：

- ножи для пищевого оборудования
- промышленные ножи для пищевой промышленности
- сменные ножи для пищевого оборудования
- ножи для мясопереработки
- ножи для куттера
- дисковые ножи для пищевого оборудования

中文：

- 食品机械刀片
- 食品加工刀片
- 非标食品刀片
- 工业食品刀片
- 斩拌机刀片
- 食品设备替换刀片

### 产品页长尾关键词

每个产品详情页应围绕“刀片类型 + 设备/场景 + 定制/替换”展开：

- Custom Food Processing Blades：custom blade by drawing, replacement blade by sample, OEM food machine blade.
- Bowl Cutter Blades：bowl cutter knives, meat bowl chopper blades, sausage cutter blades.
- Meat Processing Blades：meat slicer blades, meat dicer blades, portion cutter blades.
- Poultry Processing Knives：poultry deboning knives, poultry cut-up line blades.
- Seafood Processing Blades：fish processing blades, seafood stainless blades, fish filleting knives.
- Vegetable & Fruit Cutting Blades：vegetable slicer blades, fruit dicing knives, peeling machine blades.
- Bakery & Bread Blades：bread slicer blades, serrated bakery blades, snack cutting blades.
- Packaging Blades：food packaging blades, film cutting knives, perforation blades.
- Circular Blades：circular slitting blades, rotary cutting knives.
- Straight Blades：guillotine blades, straight food machine knives.
- Serrated Blades：serrated cutting blades, tooth profile knives.

### 应用页关键词

应用页更适合承接客户“不知道刀片名称，只知道生产线”的搜索：

- meat processing blade solutions
- poultry processing knives
- seafood processing stainless blades
- frozen food cutting blades
- vegetable and fruit processing knives
- bakery bread slicing blades
- food packaging cutting blades

应用页内容要避免空泛介绍，应重点回答：

- 这类产线常见切割问题是什么。
- 刀片规格通常由哪些参数决定。
- 需要客户提供哪些信息。
- 常见匹配刀片有哪些。
- 为什么材料、硬度、刃口和孔位会影响装机。

## 5. 页面内容优先级

### 第一优先级

1. 首页：建立工厂可信度和产品范围。
2. 产品中心：首页可扫描，详情页承接长尾关键词。
3. 联系我们：低阻力提交需求。
4. 质量控制：强化专业信任，尤其对海外客户。

### 第二优先级

1. 应用场景：按肉类、水产、禽类、果蔬、包装等承接行业搜索。
2. 制造能力：说明非标定制、孔位、硬度、磨削和批量一致性。
3. 关于工厂：提供工厂年限、产能、位置、物流便利性。

### 第三优先级

1. FAQ：解答图纸、样品、材料、打样、交期、付款、包装、运输。
2. 案例或解决方案：按产品线写 5-10 篇专业内容。
3. 质量报告解读：把检测图片转成客户能理解的专业说明。

## 6. 技术 SEO 当前状态

已具备：

- 多语言静态页面。
- `canonical`。
- `hreflang`。
- `x-default`。
- `robots.txt`。
- `sitemap-index.xml`。
- 404 页面 noindex。
- Organization / WebPage / Product / Service / BreadcrumbList 结构化数据。
- `www` 到根域名的主域名统一。

后续建议：

- 在 Google Search Console 提交 sitemap。
- 在 Bing Webmaster Tools 提交 sitemap。
- 在 Yandex Webmaster 提交 sitemap。
- 定期看索引量、抓取错误、搜索词和国家分布。

## 7. 数据看板建议

### 总览看板

- Users / Sessions
- Country
- Language
- Source / Medium
- Landing page
- Key events
- Lead conversion rate

### 外贸询盘看板

- `generate_lead`
- `inquiry_form_sent`
- `click_whatsapp`
- `click_email`
- `click_phone`
- 表单提交成功率：`inquiry_form_sent / submit_inquiry_form`
- 联系按钮点击率：联系点击 / 页面访问

### 产品意向看板

- 产品页访问量。
- 产品页到联系点击率。
- 哪些产品带来最多表单。
- 哪些国家更关注肉类、水产、包装、圆刀、齿刀等品类。

### 语言和国家看板

- 俄语页面访问国家分布。
- 英文页面访问国家分布。
- 自动语言是否和国家匹配。
- 语言切换事件 `switch_language`。

## 8. 需要配置的平台

### Google Analytics 4

用途：

- 看整体访问来源、国家、页面、转化。
- 适合英文和东南亚市场。
- 将 `generate_lead` 设置为 Key event。

需要变量：

```text
PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

### Yandex Metrica

用途：

- 看俄语地区访问行为。
- 支持热图、点击图和回放。
- 对俄罗斯、哈萨克斯坦、白俄罗斯等市场更友好。

需要变量：

```text
PUBLIC_YANDEX_METRICA_ID=12345678
```

### Microsoft Clarity

用途：

- 免费热图和录屏。
- 看客户是否看懂页面、表单是否有阻塞、移动端是否不顺。

需要变量：

```text
PUBLIC_CLARITY_PROJECT_ID=xxxxxxxxxx
```

### 搜索引擎站点验证

用途：

- 让 Google Search Console、Bing Webmaster、Yandex Webmaster 能验证网站所有权。
- 验证后可以提交 sitemap、查看搜索词、曝光、点击、国家和页面索引状态。

需要变量：

```text
PUBLIC_GOOGLE_SITE_VERIFICATION=Google 提供的 content 值
PUBLIC_BING_SITE_VERIFICATION=Bing 提供的 content 值
PUBLIC_YANDEX_SITE_VERIFICATION=Yandex 提供的 content 值
```

注意：

- 这些 `PUBLIC_` 变量属于前端构建变量，需要在 Cloudflare 的构建变量中配置后重新部署，不能只当作普通运行时 secret 使用。
- `RESEND_API_KEY` 这类密钥才放在 runtime secret，不要放到 `PUBLIC_` 变量。
- Search Console / Webmaster 验证成功后，提交 sitemap：`https://lijianblades.com/sitemap-index.xml`。

### Cloudflare 填写位置

前端统计和搜索验证变量：

```text
Workers & Pages
website-lijian
Settings
Build
Variables and secrets / Build variables
```

运行时密钥和邮件变量：

```text
Workers & Pages
website-lijian
Settings
Variables and Secrets
```

## 9. 30 天执行节奏

### 第 1 周

- 接入 GA4、Yandex Metrica、Microsoft Clarity。
- 提交 Google / Bing / Yandex sitemap。
- 确认表单、WhatsApp、邮箱点击事件能被记录。

### 第 2 周

- 观察国家、语言、入口页面。
- 看客户是否从首页进入产品、质量、联系模块。
- 优化跳出率高的产品卡片和联系入口。

### 第 3 周

- 针对高访问产品补充详情内容。
- 补 FAQ：材料、硬度、图纸、样品、打样、交期、运输。
- 根据搜索词调整标题和描述。

### 第 4 周

- 复盘询盘来源、国家和产品类别。
- 把有转化的页面作为后续内容模板。
- 决定是否做 Google Ads / Yandex Direct 小预算测试。

## 10. 判断 SEO 是否有效

不要只看排名。该站更应该看：

- 是否有目标国家访问。
- 是否有产品页和应用页访问。
- 是否有人点击 WhatsApp / Email / Phone。
- 是否有表单提交成功。
- 是否有真实客户邮件往来。
- 是否出现具体刀片、设备型号、图纸、样品、尺寸等高意向内容。

真正有效的 SEO 结果不是“访问量增加”，而是“海外采购更快看懂你能做什么，并愿意发图纸、旧刀照片或设备型号”。
