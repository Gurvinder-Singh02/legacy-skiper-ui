import { createContentlayerPlugin } from "next-contentlayer"

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com/random/*",
      },
      {
        protocol: "https",
        hostname: "avatar.vercel.sh",
        port: "",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "player.vimeo.com",
        port: "",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "openaicomproductionae4b.blob.core.windows.net",
      },
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
        pathname: "**",
      },
    ],
  },
  redirects() {
    return [
      {
        source: "/components",
        destination: "/docs/components/card-carousel",
        permanent: true,
      },
      {
        source: "/docs/components",
        destination: "/docs/components/card-carousel",
        permanent: true,
      },
    ]
  },
}

const withContentlayer = createContentlayerPlugin({
  // Additional Contentlayer config options
})

export default withContentlayer(nextConfig)
