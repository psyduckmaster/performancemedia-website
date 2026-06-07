# Performance Media Website

A premium, dark-themed Next.js website for **Performance Media** — a performance marketing agency helping small businesses dominate their digital space.

## 🚀 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Pure CSS with CSS Custom Properties (no Tailwind dependency conflicts)
- **Icons**: Lucide React
- **Fonts**: Playfair Display (headings) + Inter (body) via Google Fonts
- **Deployment**: Optimized for Vercel (static export)

## 📁 Project Structure

```
performancemedia-nextjs/
├── src/
│   ├── app/
│   │   ├── globals.css          # Global styles & design system
│   │   ├── layout.tsx           # Root layout with metadata
│   │   ├── page.tsx             # Home page
│   │   ├── services/
│   │   │   └── page.tsx         # Services page
│   │   ├── contact/
│   │   │   └── page.tsx         # Contact page
│   │   ├── about/
│   │   │   └── page.tsx         # About page
│   │   └── not-found.tsx        # 404 page
│   └── components/
│       ├── Navigation.tsx       # Sticky nav with mobile hamburger
│       ├── Footer.tsx           # Site footer
│       ├── Logo.tsx             # SVG logo component
│       └── LeadPopup.tsx        # Lead capture popup
├── public/
│   └── assets/                  # Static assets
├── package.json
├── tsconfig.json
├── next.config.js
└── README.md
```

## 🎨 Design System

| Token | Value | Usage |
|-------|-------|-------|
| `--bg-primary` | `#0A0A0F` | Page background |
| `--bg-surface` | `#12121A` | Card backgrounds |
| `--accent-gold` | `#C9A84C` | Primary accent |
| `--accent-violet` | `#7B5EA7` | Secondary accent |
| `--text-primary` | `#F0EDE6` | Main text |
| `--text-muted` | `#9B9B9B` | Secondary text |

## 🛠️ Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production

```bash
npm run build
```

The static export will be generated in the `dist/` folder.

## 🚀 Deploy to Vercel

### Option A: Vercel CLI (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel --prod
```

### Option B: GitHub + Vercel Integration

1. **Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/performancemedia-website.git
   git push -u origin main
   ```

2. **Connect to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Click **"Add New Project"**
   - Import your GitHub repository
   - Vercel will auto-detect Next.js settings
   - Click **"Deploy"**

3. **Custom Domain** (performancemedia.in):
   - In Vercel Dashboard → Project Settings → Domains
   - Add `performancemedia.in`
   - Add the provided DNS records to your domain registrar
   - Enable HTTPS (auto-enabled by Vercel)

## ⚙️ Configuration Checklist

Before going live, update these placeholders:

| File | Placeholder | What to Replace With |
|------|-------------|---------------------|
| `src/components/LeadPopup.tsx` | `YOUR_FORM_ID` | Your Formspree form ID |
| `src/app/contact/page.tsx` | `YOUR_FORM_ID` | Your Formspree form ID |
| `src/app/contact/page.tsx` | `+91 XXXXX XXXXX` | Your actual phone number |
| `src/components/Footer.tsx` | `+91 XXXXX XXXXX` | Your actual phone number |
| `src/components/Footer.tsx` | Social links | Your actual social URLs |
| `src/app/about/page.tsx` | Team details | Real team member info |
| `src/app/page.tsx` | Testimonials | Real client testimonials |
| `src/app/page.tsx` | Client logos | Real client logos |

### Formspree Setup

1. Go to [formspree.io](https://formspree.io)
2. Create a new form
3. Copy your form endpoint (e.g., `https://formspree.io/f/xnqkvevp`)
4. Replace `YOUR_FORM_ID` in both `LeadPopup.tsx` and `contact/page.tsx`

## 📱 Features

- ✅ **Lead Capture Popup** — Auto-shows on first visit (7-day cooldown via localStorage)
- ✅ **Sticky Navigation** — Glassmorphism effect on scroll
- ✅ **Mobile Hamburger Menu** — Smooth slide-down animation
- ✅ **Animated Stats** — Count-up animation on scroll (IntersectionObserver)
- ✅ **Testimonial Carousel** — Auto-rotating with dot indicators
- ✅ **Glassmorphism Cards** — Premium frosted glass effect throughout
- ✅ **Fully Responsive** — Mobile-first design, breakpoints at 480px, 768px, 1200px
- ✅ **Smooth Scroll** — Native CSS smooth scrolling
- ✅ **Form Validation** — Client-side + Formspree integration
- ✅ **404 Page** — Custom not-found page
- ✅ **SEO Optimized** — Meta tags, Open Graph, Twitter Cards

## 🏗️ Built For

- **Team**: Pankaj (admin), Abhishek, Akansha, Harshita, Aishwarya, Shubhangini, Chaitanya
- **Domain**: performancemedia.in
- **Mission**: Help small businesses add tasks, leads, and everything they need to grow

## 📄 License

Proprietary — Performance Media. All rights reserved.

---

Built with ❤️ for businesses that mean business.
"# performancemedia-website" 
