import { Registry } from "@/registry/schema"

export const examples: Registry = [
  {
    name: "animated-number-demo",
    type: "components:example",
    registryDependencies: ["animated-number"],
    files: ["example/animated-number-demo.tsx"],
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
]
