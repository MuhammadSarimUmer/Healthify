<div align="center">

<img src="public/images/logo-dark.png" alt="Healthify logo" width="220" />

# Healthify

**A responsive landing page for a healthy meal-plan delivery service in Dubai.**

![Next.js](https://img.shields.io/badge/Next.js_16-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS_4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)

**Live URL:** _add your Vercel URL here after deploying_

</div>

---

## Overview

Healthify is a single-page marketing site for a meal-plan delivery brand. The page walks a visitor from the hero through the services and pricing to the FAQ and a closing call to action. It has a light and dark theme, works from phone to desktop, and handles offline, 404 and error states.

### What we built

| Section | What it does |
| --- | --- |
| **Navbar** | Sticky header with logo, anchor links, theme toggle, "Get Started" button and a mobile menu |
| **Hero** | Headline, supporting copy, two CTAs, benefit badges, full-width food photo and a floating "Nutritious Meals" card |
| **Stats** | Four trust indicators: meals delivered, happy customers, satisfaction score and corporate clients |
| **About** | Brand introduction with a two-photo collage and an overlapping "Nourishing Lives Daily" card |
| **Meal Plans** | Four service cards with images and arrow links |
| **Why Choose Us** | Advantage tiles with icons |
| **Pricing** | Three plans in AED with a "Most Popular" badge, plus an image card |
| **How It Works** | Three-step process with connecting arrows |
| **Testimonials** | Customer review cards with avatars |
| **FAQ** | Accessible accordion (`aria-expanded`, `aria-controls`) |
| **CTA banner and Footer** | Closing call to action, link columns, contact details and social icons |
| **WhatsApp button** | Floating chat shortcut |
| **Dark theme** | Toggle saved in `localStorage`, with a matching dark hero image and light/dark logo swap |
| **Status pages** | Custom 404, error page, route loader and an offline notice with a retry button |

---

## Tools and tech

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-16.4-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-19.3-087EA4?style=for-the-badge&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Lucide](https://img.shields.io/badge/Lucide_Icons-1.57-F56565?style=for-the-badge&logo=lucide&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-9-4B32C3?style=for-the-badge&logo=eslint&logoColor=white)
![Turbopack](https://img.shields.io/badge/Turbopack-bundler-EF4444?style=for-the-badge&logo=webpack&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-deploy-000000?style=for-the-badge&logo=vercel&logoColor=white)
![Node](https://img.shields.io/badge/Node.js-20+-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Google Fonts](https://img.shields.io/badge/Google_Fonts-typography-4285F4?style=for-the-badge&logo=googlefonts&logoColor=white)

</div>

| Tool | Used for |
| --- | --- |
| **Next.js 16 (App Router)** | Routing, static rendering, `next/image` optimisation, `next/font`, 404/error/loading conventions |
| **React 19** | Component-based UI |
| **TypeScript** | Typed components and content data |
| **Tailwind CSS v4** | Utility styling; design tokens are defined in `@theme` in `globals.css` |
| **Lucide React** | Icon set (social and WhatsApp icons are inline SVGs, because Lucide has no brand icons) |
| **next/font/google** | Self-hosted Inter, Source Serif 4, Caveat and Aref Ruqaa |
| **ESLint (`eslint-config-next`)** | Linting |

### Design notes
- **Theming:** CSS variables in `:root` and `.dark` are mapped to Tailwind colour tokens. A small inline script in `<head>` applies the saved or system theme before first paint, so there is no flash.
- **Motion:** Only hover and press effects. Buttons lift slightly, and cards glide up with a soft shadow. These use transform and opacity only so they stay smooth. `prefers-reduced-motion` is respected.
- **Accessibility:** Semantic landmarks, `aria` attributes on the accordion and menu, alt text on images, visible focus rings and `role="alert"` on the offline notice.
- **Content:** All copy, prices, links and lists live in `src/data/content.ts`, so sections stay free of hard-coded text.

---

## Project structure

```
Healthify/
├── public/
│   └── images/                 # Photos, logos and avatars (see Assets below)
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Fonts, metadata, theme init script, offline notice
│   │   ├── page.tsx            # Home page, which composes all sections
│   │   ├── globals.css         # Theme tokens, base styles, card-lift hover
│   │   ├── loading.tsx         # Route loading screen with spinner
│   │   ├── not-found.tsx       # Custom 404 page
│   │   ├── error.tsx           # Error boundary page with retry
│   │   └── icon.png            # Favicon (light logo)
│   ├── components/
│   │   ├── Navbar.tsx          # Header, links, mobile menu
│   │   ├── Hero.tsx
│   │   ├── Stats.tsx
│   │   ├── About.tsx
│   │   ├── MealPlans.tsx
│   │   ├── WhyChoose.tsx
│   │   ├── Pricing.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── Testimonials.tsx
│   │   ├── Faq.tsx             # Accordion
│   │   ├── CtaBanner.tsx
│   │   ├── Footer.tsx
│   │   ├── WhatsAppButton.tsx
│   │   ├── ThemeToggle.tsx     # Light/dark switch
│   │   ├── OfflineNotice.tsx   # No-internet toast with retry
│   │   ├── StatusPage.tsx      # Shared layout for 404 and error pages
│   │   ├── SocialIcons.tsx     # Inline brand SVGs
│   │   └── ui/                 # Reusable building blocks
│   │       ├── Button.tsx      # primary / dark / outline / white variants
│   │       ├── Container.tsx   # Page-width wrapper
│   │       ├── Icon.tsx        # Name to Lucide icon map
│   │       ├── Logo.tsx        # Light/dark logo swap
│   │       ├── SectionHeading.tsx
│   │       ├── Reveal.tsx      # Plain wrapper element used by sections
│   │       └── Spinner.tsx     # Loading indicator
│   └── data/
│       └── content.ts          # All page copy and lists
├── next.config.ts
├── tsconfig.json
├── eslint.config.mjs
└── package.json
```

---

## Assets and where they came from

No asset pack was provided, so the images were sourced or created as follows.

| Asset | Files | Source |
| --- | --- | --- |
| **Hero images (light and dark)** | `hero-bowl-generated.jpg`, `hero-bowl-generated-dark.jpg` | AI-generated by the project owner |
| **About section collage** | `about-chefs-generated.jpg` | AI-generated by the project owner |
| **Logos** | `logo-dark.png`, `logo-light.png` | Created by the project owner. The dark-ink logo is used on light backgrounds and the light logo on dark backgrounds and in the footer. The light logo is also the favicon. |
| **About bowl photo** | `about-bowl.jpg` | [Unsplash](https://unsplash.com) (free licence) |
| **Meal plan photos** | `plan-customized.jpg`, `plan-protein.jpg`, `plan-ready-to-eat.jpg`, `plan-weight.jpg` | [Unsplash](https://unsplash.com) (free licence) |
| **Pricing and CTA photos** | `invest.jpg`, `cta-bg.jpg` | [Unsplash](https://unsplash.com) (free licence) |
| **Testimonial avatars** | `avatar-ahmed.jpg`, `avatar-fatima.jpg`, `avatar-sara.jpg` | [Unsplash](https://unsplash.com) portraits (free licence) |
| **Icons** | n/a | [Lucide](https://lucide.dev) (ISC licence), plus hand-written inline SVGs for social and WhatsApp |
| **Fonts** | n/a | [Google Fonts](https://fonts.google.com): Inter, Source Serif 4, Caveat, Aref Ruqaa (Open Font Licence) |

Images are served through `next/image`, so they are resized and compressed automatically.

---

## Getting started

**Requirements:** Node.js 20 or newer and npm.

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server at http://localhost:3000
npm run dev

# 3. Lint
npm run lint

# 4. Build and run a production version
npm run build
npm run start
```

### Environment variables
None are needed. The site has no backend, API keys or secrets. If you add any later, put the names in a `.env.example` file, keep real values in `.env.local` (already git-ignored), and set them in Vercel under **Project Settings → Environment Variables**.

---

## Deployment

1. Push the repository to GitHub.
2. Import it in [Vercel](https://vercel.com/new). The Next.js preset is detected automatically.
3. Click **Deploy**, then paste the live URL at the top of this README.

Every push to the main branch redeploys automatically.
