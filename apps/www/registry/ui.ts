import { Registry } from "@/registry/schema"

export const ui: Registry = [
  {
    name: "animated-number",
    type: "components:ui",
    dependencies: ["framer-motion"],
    files: ["ui/animated-number.tsx"],
  },
  {
    name: "card-carousel",
    type: "components:ui",
    dependencies: ["framer-motion "],
    files: ["ui/card-carousel.tsx"],
  },
  {
    name: "stacked-dialog",
    type: "components:ui",
    dependencies: ["framer-motion "],
    files: ["ui/stacked-dialog.tsx"],
  },
  {
    name: "minimal-card",
    type: "components:ui",
    dependencies: ["framer-motion "],
    files: ["ui/minimal-card.tsx"],
  },
  {
    name: "blur-vignette",
    type: "components:ui",
    dependencies: ["framer-motion "],
    files: ["ui/blur-vignette.tsx"],
  },
]
