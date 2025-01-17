import { type } from 'os'
import { SoftwareApplication, WithContext } from 'schema-dts'


export function generateCompleteLibraryJsonLd(
libraryName: string = "Modern UI Component Library", version: string = "1.0.0", p0: string): WithContext<SoftwareApplication> {
  const componentCategories = {
    appUI: {
      name: "App UI",
      components: [
        {
          name: "AI Input",
          description: "Intelligent input component with AI-powered features",
          href: "/docs/components/ai-input"
        },
        {
          name: "Special Card",
          description: "Enhanced card component with special interactions",
          href: "/docs/components/skiper-card"
        },
        {
          name: "Expanded Tabs",
          description: "Advanced tab interface with expansion capabilities",
          href: "/docs/components/expanded-tabs"
        },
        {
          name: "Skiper Marquee",
          description: "Smooth scrolling marquee component",
          href: "/docs/components/skiper-marquee"
        },
        {
          name: "Animated Number",
          description: "Number animation component with smooth transitions",
          href: "/docs/components/animated-number"
        },
        {
          name: "Card Carousel",
          description: "Interactive card carousel with smooth animations",
          href: "/docs/components/card-carousel"
        },
        {
          name: "Card Swiper",
          description: "Swipeable card interface for mobile-friendly interactions",
          href: "/docs/components/card-swipe"
        },
        {
          name: "Stacked Dialog",
          description: "Dialog component with stacking capabilities",
          href: "/docs/components/stacked-dialog"
        },
        {
          name: "Popover Form",
          description: "Form component with popover functionality",
          href: "/docs/components/popover-form"
        },
        {
          name: "Minimal Card",
          description: "Minimalist card design for clean interfaces",
          href: "/docs/components/minimal-card"
        }
      ]
    },
    creativeUI: {
      name: "Creative UI",
      components: [
        {
          name: "Image CursorTrail",
          description: "Interactive cursor trail effect with image elements",
          href: "/docs/components/image-cursortrail"
        },
        {
          name: "Hover Expand",
          description: "Expansion animation effect on hover interaction",
          href: "/docs/components/hover-expand"
        },
        {
          name: "Masked Div",
          description: "Division with masking effects for creative layouts",
          href: "/docs/components/masked-div"
        },
        {
          name: "Blur Vignette",
          description: "Blur effect with vignette styling",
          href: "/docs/components/blur-vignette"
        }
      ]
    },
    buttons: {
      name: "Buttons",
      components: [
        {
          name: "Slide Button",
          description: "Button with sliding animation effects",
          href: "/docs/components/slide-button"
        },
        {
          name: "Share Button",
          description: "Social media sharing button component",
          href: "/docs/components/share-button"
        },
        {
          name: "Badge Button",
          description: "Button with integrated badge functionality",
          href: "/docs/components/badge-button"
        },
        {
          name: "Wrap Button",
          description: "Wrappable button component for flexible layouts",
          href: "/docs/components/wrap-button"
        }
      ]
    },
    textEffect: {
      name: "Text Effect",
      components: [
        {
          name: "Flipper",
          description: "Text flipping animation effect",
          href: "/docs/components/text-effect-flipper"
        },
        {
          name: "Text Scroll",
          description: "Smooth text scrolling animation",
          href: "/docs/components/text-scroll"
        }
      ]
    },
    threeDEffect: {
      name: "3D Effect",
      components: [
        {
          name: "Image Ripple",
          description: "3D ripple effect for images",
          href: "/docs/components/image-ripple"
        }
      ]
    }
  }

  const jsonLd: WithContext<SoftwareApplication> = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: libraryName,
    applicationCategory: "DeveloperApplication",
    version: version,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD"
    },
    downloadUrl: "https://yourdomain.com/docs/installation",
    softwareRequirements: "Next.js 13+, React 18+, TypeScript 5+",
    operatingSystem: "Any",
    description: `A comprehensive modern UI component library featuring ${Object.keys(componentCategories).length} categories and ${Object.values(componentCategories).reduce((acc, cat) => acc + cat.components.length, 0)} components for building beautiful web applications.`,
    about: {
      "@type": "CreativeWork",
      abstract: Object.values(componentCategories).map(category => `${category.name}: ${category.components.map(comp => comp.name).join(', ')}`).join('; ')
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://yourdomain.com/docs",
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            item: {
              "@id": "https://yourdomain.com/docs",
              name: "Documentation"
            }
          },
          {
            "@type": "ListItem",
            position: 2,
            item: {
              "@id": "https://yourdomain.com/docs/components",
              name: "Components"
            }
          }
        ]
      }
    }
  }

  return jsonLd
}

// JSON-LD Component with proper typing
export function JsonLd({ data }: { data: any }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}