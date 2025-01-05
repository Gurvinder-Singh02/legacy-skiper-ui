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
              title: "Card Swiper",
              href: "/docs/components/card-swipe",
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
        {
          title: "Creative UI",
          items: [
            {
              title: "Image CursorTrail",
              href: "/docs/components/image-cursortrail",
              items: [],
              label: "new",
            },
            {
              title: "hover Expand",
              href: "/docs/components/hover-expand",
              items: [],
              label: "new",
            },

          ]
        },
        {
          title: "Buttons",
          items: [
            {
              title: "Slide Button",
              href: "/docs/components/slide-button",
              items: [],
              label: "new",
            },
            {
              title: "Share Button",
              href: "/docs/components/share-button",
              items: [],
              label: "new",
            },
            {
              title: "Badge Button",
              href: "/docs/components/badge-button",
              items: [],
              label: "new",
            },

          ]
        },
        {
          title: "Text effect",
          items: [
            {
              title: "Flipper",
              href: "/docs/components/text-effect-flipper",
              items: [],
              label: "new",
            },
            {
              title: "Text Scroll",
              href: "/docs/components/text-scroll",
              items: [],
              label: "new",
            },

          ]
        },
        {
          title: "3D effect",
          items: [
            {
              title: "image-ripple",
              href: "/docs/components/image-ripple",
              items: [],
              label: "new",
            },

          ]
        },
      ],

    },

  ],
}
