import { MainNavItem, SidebarNavItem } from "types/nav"

interface DocsConfig {
  mainNav: MainNavItem[]
  sidebarNav: SidebarNavItem[]
}

// # WIP
export const docsConfig: DocsConfig = {
  mainNav: [
    {
      title: "Components",
      href: "/docs/components/dynamic-island",
    },
    {
      title: "Themes",
      href: "/themes",
    },
  ],
  sidebarNav: [
    {
      title: "Getting Started",
      items: [
        {
          title: "Introduction",
          href: "/docs",
          items: [],
        },
        {
          title: "Installation",
          href: "/docs/installation",
          items: [],
        },
      ],
    },
    {
      title: "Components",
      items: [
        {
          title: "App UI",
          items: [
            {
              title: "Animated Number",
              href: "/docs/components/animated-number",
              items: [],
              label: "new",
            },
            {
              title: "Card Carousel",
              href: "/docs/components/card-carousel",
              items: [],
              label: "new",
            },
            {
              title: "Stacked Dialog",
              href: "/docs/components/stacked-dialog",
              items: [],
              label: "new",
            },
            {
              title: "Minimal Card",
              href: "/docs/components/minimal-card",
              items: [],
              label: "new",
            },
            {
              title: "Blur Vignette",
              href: "/docs/components/blur-vignette",
              items: [],
              label: "new",
            },
            {
              title: "Maksed Div",
              href: "/docs/components/masked-div",
              items: [],
              label: "new",
            },
            {
              title: "Expandable",
              href: "/docs/components/expandable",
              items: [],
              label: "new",
            },
          ],
        },
      ],
    },
  ],
}
