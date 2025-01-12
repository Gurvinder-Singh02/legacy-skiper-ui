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
