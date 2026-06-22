# Lijian Blades Deployment Checklist

## Production Domain

Primary domain:

```text
https://lijianblades.com
```

Recommended secondary domain:

```text
https://www.lijianblades.com
```

Use `https://lijianblades.com` as the canonical domain. Redirect `www.lijianblades.com` to the primary domain after both domains are active.

## Cloudflare Pages

Recommended deployment target:

```text
Cloudflare Pages
```

Project settings:

```text
Framework preset: Astro
Build command: npm run build
Build output directory: dist
Production branch: main
Environment variable: PUBLIC_SITE_URL=https://lijianblades.com
```

The inquiry endpoint is in:

```text
functions/api/inquiry.js
```

Because the site uses Cloudflare Pages Functions for `/api/inquiry`, deploy through Git integration or Wrangler. Do not use simple dashboard direct upload if the contact form must send email.

## DNS

After the Pages project is deployed:

1. Add `lijianblades.com` in Cloudflare Pages custom domains.
2. Add `www.lijianblades.com` in Cloudflare Pages custom domains.
3. If the domain is managed outside Cloudflare, change the domain nameservers to Cloudflare nameservers, or follow the CNAME record shown by Cloudflare.
4. Wait for SSL certificate activation.
5. Test these URLs:

```text
https://lijianblades.com/
https://lijianblades.com/zh/
https://lijianblades.com/en/
https://lijianblades.com/ru/
https://lijianblades.com/robots.txt
https://lijianblades.com/sitemap-index.xml
```

## Inquiry Email

The website form sends inquiries to:

```text
yijiangyaoqu@gmail.com
```

Required Cloudflare Pages environment variables:

```text
RESEND_API_KEY=your_resend_api_key
INQUIRY_FROM_EMAIL=Website Inquiry <inquiry@send.lijianblades.com>
INQUIRY_TO_EMAIL=yijiangyaoqu@gmail.com
PUBLIC_SITE_URL=https://lijianblades.com
```

Recommended sending domain:

```text
send.lijianblades.com
```

Verify the sending domain in Resend and add the DNS records provided by Resend before enabling the form in production.

## Final Checks

Run before deployment:

```text
npm run build
```

After deployment:

```text
curl -I https://lijianblades.com/zh/
curl -I https://lijianblades.com/sitemap-index.xml
curl -I https://lijianblades.com/robots.txt
```

Then submit one test inquiry from the website and confirm the email arrives in `yijiangyaoqu@gmail.com`.
