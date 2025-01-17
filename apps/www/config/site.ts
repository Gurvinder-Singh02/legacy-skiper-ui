// #WIP
export const siteConfig = {

  name: "skiper/ui",
  url: "https://skiper-ui.com",
  ogImage: "https://skiper-ui.com/og.png",
  description:
    "Components crafted for Modern Websites | Bringing minimalism to the future Reusable components for unstoppable developers ",
  links: {
    twitter: "https://x.com/guri_who",
    github: "https://github.com/gurvinder_singh02",
  },
  keywords: [
    "gurvinder singh",
    "guri",
    "gurvinder singh 02",
    "portfolio",
    "guri portfolio",
    "guri 100x dev",
    "full stack developer",
    "designer",
    "web developer",
    "web designer",
    "react developer",
    "react designer",
    "next.js developer",
    "next.js designer",
    "gurvinder singh portfolio",
    "gurvinder singh website",
    "gurvinder singh portfolio website",
    "gurvinder singh portfolio website 2024",
    "gurvinder singh portfolio 2024",
    "gxuri",
    "gxuri in",
    "gxuri.in", 
    "gxuri portfolio",
    "gxuri portfolio 2024",
    "gxuri portfolio website",
    "gxuri portfolio website 2024",
    "gxuri portfolio 2024 website",
    "gxuri portfolio 2024 website 2024",
    "gxuri portfolio 2024 website 2025",
    "gxuri portfolio 2025",
    "gxuri portfolio 2025 website",
    "gxuri portfolio 2025 website 2025",
  ],
}

export type SiteConfig = typeof siteConfig

export const PAYMENT_FREQUENCIES = ["monthly", "yearly"]

export interface PricingTier {
  name: string
  id: string
  price: Record<string, number | string>
  description: string
  features: string[]
  cta: string
  highlighted?: boolean
  popular?: boolean
}

export const TIERS: PricingTier[] = [
  {
    id: "free",
    name: "Existing Components",
    price: {
      monthly: "Free",
      yearly: "Free",
    },
    description: "All the components that are freely available",
    features: [
      "A growing library of awesome components",
      "React / Next.js / Tailwind CSS code",
      "MIT Licence. Personal or commercial projects.",
      "Contact over chat for support",
    ],
    cta: "Current",
  },
  {
    id: "pro",
    name: "Custom Components",
    price: {
      monthly: 499,
      yearly: 5299,
    },
    description: "For professional developers",
    features: [
      "50+ premium components",
      "Detailed documentation",
      "Priority email support",
      "Figma file access",
      "React & Next.js support",
    ],
    cta: "Comming Soon",
    popular: true,
  },
  {
    id: "business",
    name: "Custom Pages",
    price: {
      monthly: 799,
      yearly: 6200,
    },
    description: "Best for small businesses",
    features: [
      "100+ premium components",
      "Advanced customization",
      "Priority support",
      "Multiple projects license",
      "All framework support",
    ],
    cta: "Comming Soon",
  },
]
