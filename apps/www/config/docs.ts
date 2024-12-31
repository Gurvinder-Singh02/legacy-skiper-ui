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

            // {
            //   title: "Direction Aware Tabs",
            //   href: "/docs/components/direction-aware-tabs",
            //   items: [],
            // },

            {
              title: "Expandable",
              href: "/docs/components/expandable",
              items: [],
              label: "new",
            },
            {
              title: "Family Button",
              href: "/docs/components/family-button",
              items: [],
              label: "new",
            },
            // {
            //   title: "Floating Panel",
            //   href: "/docs/components/floating-panel",
            //   items: [],
            // },

            {
              title: "Minimal Card",
              href: "/docs/components/minimal-card",
              items: [],
              label: "new",
            },
            // {
            //   title: "Loading Carousel",
            //   href: "/docs/components/loading-carousel",
            //   items: [],
            //   label: "new",
            // },
            // {
            //   title: "Logo Carousel",
            //   href: "/docs/components/logo-carousel",
            //   items: [],
            //   label: "new",
            // },

            {
              title: "Popover Form",
              href: "/docs/components/popover-form",
              items: [],
              label: "new",
            },
            {
              title: "Text Animate",
              href: "/docs/components/text-animate",
              items: [],
              label: "new",
            },

            // update with kalpso btns
            {
              title: "Texture Button",
              href: "/docs/components/texture-button",
              items: [],
              label: "new",
            },
            {
              title: "Texture Card",
              href: "/docs/components/texture-card",
              items: [],
              label: "new",
            },
          ],
        },
        {
          title: "Bespoke UI",
          items: [
            {
              title: "3D Carousel",
              href: "/docs/components/three-d-carousel",
              items: [],
              label: "new",
            },
            {
              title: "Tweet Grid",
              href: "/docs/components/tweet-grid",
              items: [],
              label: "new",
            },
          ],
        },
      ],
    },
  ],
}
