// animations.ts
export type AnimationVariant = "circle" | "circle-blur" | "polygon";
export type AnimationStart = "top-left" | "top-right" | "bottom-left" | "bottom-right";

interface Animation {
  name: string;
  css: string;
}

const getPositionCoords = (position: AnimationStart) => {
  switch (position) {
    case "top-left": return { cx: "0", cy: "0" };
    case "top-right": return { cx: "40", cy: "0" };
    case "bottom-left": return { cx: "0", cy: "40" };
    case "bottom-right": return { cx: "40", cy: "40" };
  }
};

const generateSVG = (variant: AnimationVariant, start: AnimationStart) => {
  const { cx, cy } = getPositionCoords(start);
  
  if (variant === "circle") {
    return `data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40"><circle cx="${cx}" cy="${cy}" r="20" fill="white"/></svg>`;
  }
  
  if (variant === "circle-blur") {
    return `data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40"><defs><filter id="blur"><feGaussianBlur stdDeviation="2"/></filter></defs><circle cx="${cx}" cy="${cy}" r="18" fill="white" filter="url(%23blur)"/></svg>`;
  }
  
  return ''; 
};


const getTransformOrigin = (start: AnimationStart) => {
  switch (start) {
    case "top-left": return "top left";
    case "top-right": return "top right";
    case "bottom-left": return "bottom left";
    case "bottom-right": return "bottom right";
  }
};

export const createAnimation = (variant: AnimationVariant, start: AnimationStart): Animation => {
  const svg = generateSVG(variant, start);
  const transformOrigin = getTransformOrigin(start);

  if (variant === "polygon") {
    return {
      name: `${variant}-${start}`,
      css: `
        ::view-transition-group(root) {
          animation-duration: 0.7s;
          animation-timing-function: var(--expo-out);
          transform-origin: ${transformOrigin};
        }
        ::view-transition-new(root) {
          animation-name: reveal-${start}-light;
        }
        ::view-transition-old(root),
        .dark::view-transition-old(root) {
          animation: none;
          z-index: -1;
        }
        .dark::view-transition-new(root) {
          animation-name: reveal-${start}-dark;
        }
        @keyframes reveal-${start}-dark {
          from {
            clip-path: polygon(var(--start-point));
          }
          to {
            clip-path: polygon(var(--end-point));
          }
        }
        @keyframes reveal-${start}-light {
          from {
            clip-path: polygon(var(--end-point));
          }
          to {
            clip-path: polygon(var(--start-point));
          }
        }
      `
    };
  }

  return {
    name: `${variant}-${start}`,
    css: `
      ::view-transition-group(root) {
        animation-timing-function: var(--expo-out);
      }
      ::view-transition-new(root) {
        mask: url('${svg}') ${start.replace('-', ' ')} / 0 no-repeat;
        mask-origin: content-box;
        animation: scale-${start} 1s;
        transform-origin: ${transformOrigin};
      }
      ::view-transition-old(root),
      .dark::view-transition-old(root) {
        animation: scale-${start} 1s;
        transform-origin: ${transformOrigin};
        z-index: -1;
      }
      @keyframes scale-${start} {
        to {
          mask-size: 350vmax;
        }
      }
    `
  };
};