// #WIP
export const siteConfig = {
  // #WIP image
  name: "skiper/ui",
  url: "https://gxuri.in",
  ogImage: "https://skiper.gxuri.in/og.png",
  description:
    "Components components that you can copy and paste into react apps. Customizable. Open Source. Typed.",
  links: {
    twitter: "https://x.com/guri_who",
    github: "https://github.com/gurvinder_singh02",
  },
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
    name: "Starter",
    price: {
      monthly: "Free",
      yearly: "Free",
    },
    description: "Perfect for trying out components",
    features: [
      "5 basic components",
      "Basic documentation",
      "Community support",
      "MIT License",
      "React only",
    ],
    cta: "Get started",
  },
  {
    id: "pro",
    name: "Professional",
    price: {
      monthly: 19,
      yearly: 190,
    },
    description: "For professional developers",
    features: [
      "50+ premium components",
      "Detailed documentation",
      "Priority email support",
      "Figma file access",
      "React & Next.js support",
    ],
    cta: "Subscribe now",
    popular: true,
  },
  {
    id: "business",
    name: "Business",
    price: {
      monthly: 49,
      yearly: 490,
    },
    description: "For teams and businesses",
    features: [
      "100+ premium components",
      "Advanced customization",
      "Priority support",
      "Multiple projects license",
      "All framework support",
    ],
    cta: "Subscribe now",
  },
]
