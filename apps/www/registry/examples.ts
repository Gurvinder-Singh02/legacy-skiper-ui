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
  }
]
