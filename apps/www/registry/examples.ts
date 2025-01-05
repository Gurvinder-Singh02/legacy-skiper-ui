import { Registry } from "@/registry/schema"

export const examples: Registry = [
  {
    name: "animated-number-countdown-demo",
    type: "components:example",
    registryDependencies: ["animated-number-countdown"],
    files: ["example/animated-number-countdown-demo.tsx"],
  },
  {
    name: "animated-number-counter-demo",
    type: "components:example",
    registryDependencies: ["animated-number-counter"],
    files: ["example/animated-number-counter-demo.tsx"],
  },
  {
    name: "animated-number-random-demo",
    type: "components:example",
    registryDependencies: ["animated-number-random"],
    files: ["example/animated-number-random-demo.tsx"],
  },
  {
    name: "card-carousel-demo",
    type: "components:example",
    registryDependencies: ["card-carousel-demo"],
    files: ["example/card-carousel-demo.tsx"],
  },
  {
    name: "stacked-dialog-demo",
    type: "components:example",
    registryDependencies: ["stacked-dialog-demo"],
    files: ["example/stacked-dialog-demo.tsx"],
  },
  {
    name: "minimal-card-demo",
    type: "components:example",
    registryDependencies: ["minimal-card-demo"],
    files: ["example/minimal-card-demo.tsx"],
  },
  {
    name: "blur-vignette-demo",
    type: "components:example",
    registryDependencies: ["blur-vignette-demo"],
    files: ["example/blur-vignette-demo.tsx"],
  },
  {
    name: "masked-div-demo",
    type: "components:example",
    registryDependencies: ["masked-div-demo"],
    files: ["example/masked-div-demo.tsx"],
  },
  {
    name: "expandable-demo",
    type: "components:example",
    registryDependencies: ["expandable"],
    files: ["example/expandable-demo.tsx"],
  },
  {
    name: "image-cursortrail-demo",
    type: "components:example",
    registryDependencies: ["image-cursortrail"],
    files: ["example/image-cursortrail-demo.tsx"],
  },
  {
    name: "hover-expand-demo",
    type: "components:example",
    registryDependencies: ["hover-expand"],
    files: ["example/hover-expand-demo.tsx"],
  },
  {
    name: "text-effect-flipper-demo",
    type: "components:example",
    registryDependencies: ["text-effect-flipper"],
    files: ["example/text-effect-flipper-demo.tsx"],
  },
]
