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
    "skiper - ui",
    "gxuri",
    "tailwind css components",
    "nextjs react js",
    "modern minimal components",
    "clean components",
    "snippets",
    "aceternity ui",
    "gxuri latest nextjs components",
    "responsive UI elements",
    "accessible design components",
    "minimalist Tailwind CSS templates",
    "modern UI frameworks",
    "nextjs reusable components",
    "react js dynamic components",
    "custom Tailwind components",
    "optimized nextjs libraries",
    "streamlined react UI kits",
    "lightweight component libraries",
    "modular design components"
  ]
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
      monthly: 899,
      yearly: 499,
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
      monthly: 1399,
      yearly: 999,
    },
    description: "Best for small businesses",
    features: [
      "6 custom pages with  ",
      "Advanced customization",
      "Priority support",
      "Custom Animations",
      "All framework support",
    ],
    cta: "Comming Soon",
  },
]
