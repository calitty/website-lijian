# Industrial Blades Website

工业食品机械刀片外贸官网项目。

本项目用于建设一个面向海外客户的多语言响应式官网，重点展示工业食品刀片制造能力、产品范围、应用场景、质量控制和联系方式。第一阶段以能力展示、搜索发现和快速联系为核心，不做商城、在线支付、客户后台或复杂报价系统。

## 项目定位

英文定位：

> Custom Industrial Food Processing Blades Manufacturer

中文定位：

> 工业食品机械刀片定制制造商

俄文定位：

> Производитель промышленных ножей для пищевого оборудования

## 第一阶段目标

- 建设英文、俄文、简体中文三语言官网。
- 支持 PC、平板、手机响应式访问。
- 展示产品、应用场景、制造能力、质量控制、工厂介绍和联系方式。
- 内置 SEO 基础能力，支持 Google、Yandex、Bing 收录。
- 内置数据统计和联系方式点击事件追踪。
- 使用海外访问友好的部署方案。
- 暂不引入独立后端。

## 目标客户

- 海外食品加工厂。
- 食品机械设备维护和工程人员。
- 食品机械 OEM 厂商。
- 海外经销商和进口商。
- 国内客户、供应商和合作方。

## 计划页面

第一阶段页面：

- Home / 首页
- Products / 产品中心
- Applications / 应用场景
- Manufacturing / 制造能力
- Quality / 质量控制
- About / 关于工厂
- Contact / 联系我们

计划语言路径：

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

## 推荐技术栈

第一阶段建议：

```text
前端框架：Astro
开发语言：TypeScript
样式方案：Tailwind CSS + CSS Variables
内容管理：Astro Content Collections / Markdown / JSON
多语言：Astro i18n
SEO：@astrojs/sitemap + 自定义 SeoHead
统计：GA4 + Yandex Metrica + Cloudflare Analytics
部署：Cloudflare Pages
图片：Astro Image，WebP / AVIF
验证：Lighthouse + Playwright
```

当前阶段不需要独立后端。如后续需要图纸上传、在线报价、客户后台、CRM 对接或订单跟踪，再规划后端服务。

## SEO 要求

SEO 从第一版开始内置，不作为上线后补丁。

必须支持：

- 每页独立 `title`。
- 每页独立 `description`。
- 每页唯一 `h1`。
- `canonical`。
- 多语言 `hreflang`。
- `sitemap.xml`。
- `robots.txt`。
- 图片 `alt`。
- Open Graph。
- 结构化数据 JSON-LD。
- Google Search Console。
- Yandex Webmaster。
- Bing Webmaster Tools。

核心关键词方向：

```text
custom food processing blades
industrial food processing blades
food machine knives
custom industrial knives manufacturer
OEM replacement blades
curved food processing blades
bowl cutter blades
meat processing blades
seafood processing blades
食品机械刀片
工业食品刀片
异形刀片定制
肉类加工刀片
斩拌机刀片
промышленные ножи для пищевой промышленности
ножи для пищевого оборудования
ножи для мясопереработки
```

## 数据统计要求

必须接入：

- Google Analytics 4。
- Google Search Console。
- Yandex Metrica。
- Yandex Webmaster。
- Bing Webmaster Tools。
- Cloudflare Analytics。

必须追踪的事件：

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

## 联系方式策略

英文市场重点：

- Email
- WhatsApp
- LinkedIn

俄语市场重点：

- Telegram
- Email
- WhatsApp

中文市场重点：

- 微信
- 电话
- 邮箱
- WhatsApp

移动端需要底部固定联系入口，并根据语言版本突出不同渠道。

## 视觉方向

视觉关键词：

```text
精密制造
食品安全
工业可靠
国际供应
真实工厂
```

建议风格：

- 冷静、专业、可靠。
- 使用真实产品图和真实工厂图。
- 避免廉价外贸模板感。
- 避免过度科技感和大面积渐变。
- 避免使用杂乱车间照片作为官网主图。

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

## 资料准备

开发前需要准备：

- 公司英文名。
- 公司中文名。
- Logo。
- 工厂所在城市。
- 成立时间。
- 工厂面积。
- 员工数量。
- 主要设备清单。
- 主要工艺能力。
- 常用材料。
- 产品高清图。
- 工厂设备图。
- 检测图。
- 包装图。
- Email。
- WhatsApp。
- Telegram。
- LinkedIn。
- 微信。
- 电话。

不确定的信息先不展示，避免夸大。

## 推荐项目结构

Astro 初始化后建议结构：

```text
src/
  components/
    Header.astro
    Footer.astro
    SeoHead.astro
    ContactBar.astro
    ProductCard.astro
  content/
    products/
    applications/
    pages/
  data/
    contact.ts
    locales.ts
    navigation.ts
    seo.ts
  layouts/
    BaseLayout.astro
  pages/
    index.astro
    en/
    ru/
    zh/
public/
  images/
  favicon.svg
docs/
  product-planning.zh-CN.md
```

## 开发命令

当前还未初始化 Astro 工程。初始化后建议使用：

```bash
npm install
npm run dev
npm run build
npm run preview
```

后续如加入测试和检查，建议补充：

```bash
npm run lint
npm run format
npm run check
```

实际命令以 `package.json` 为准。

## 部署规划

推荐部署组合：

```text
域名：.com
DNS：Cloudflare
部署：Cloudflare Pages
邮箱：Google Workspace / Microsoft 365 / Zoho Mail / 企业邮箱
统计：GA4 + GSC + Yandex + Bing
CDN：Cloudflare
```

Cloudflare Pages 计划配置：

```text
Build command: npm run build
Output directory: dist
```

## 文档

产品规划文档：

```text
docs/product-planning.zh-CN.md
```

该文档是当前产品、SEO、统计、视觉、技术和部署决策的基准。

## 当前状态

当前处于产品规划和项目准备阶段。

已完成：

- 产品规划文档。
- README 项目入口文档。

下一步：

- 初始化 Astro 工程。
- 建立多语言路由和内容结构。
- 实现基础页面和响应式布局。
- 接入 SEO 和统计框架。

