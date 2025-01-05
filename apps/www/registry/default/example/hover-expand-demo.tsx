"use client"

import React from "react"
import { SparklesIcon } from "lucide-react"

import { Badge } from "@/components/ui/badge"

import HoverExpand from "../ui/hover-expand"

const images = [
  "https://images.pexels.com/photos/30082445/pexels-photo-30082445.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.unsplash.com/photo-1692606743169-e1ae2f0a960f?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://assets.lummi.ai/assets/QmQLSBeCFHUwCv7WBpGr7T3P67UXaAw8B2vvmtKimyinrL?auto=format&w=1500",
  "https://assets.lummi.ai/assets/QmXe6v7jBF5L2R7FCio8KQdXwTX2uqzRycUJapyjoXaTqd?auto=format&w=1500",
  "https://assets.lummi.ai/assets/QmNfwUDpehZyLWzE8to7QzgbJ164S6fQy8JyUWemHtmShj?auto=format&w=1500",
  "https://images.unsplash.com/photo-1706049379414-437ec3a54e93?q=80&w=1200&auto=format",
  "https://assets.lummi.ai/assets/Qmb2P6tF2qUaFXnXpnnp2sk9HdVHNYXUv6MtoiSq7jjVhQ?auto=format&w=1500",
  "https://images.unsplash.com/photo-1508873881324-c92a3fc536ba?q=80&w=1200&auto=format",
]

export default function MouseTrailDemo() {
  return (
    <section className="mx-auto w-full max-w-4xl rounded-[24px] border border-black/5 p-2 shadow-sm md:rounded-t-[44px]">
      <div className="relative mx-auto flex w-full flex-col items-center justify-center  rounded-[24px] border border-black/5 bg-neutral-800/5  shadow-sm  md:gap-8 md:rounded-b-[20px] md:rounded-t-[40px] ">
        <article className="relative z-50 mt-20 flex flex-col  items-center justify-center ">
          <Badge
            variant="outline"
            className="mb-3 rounded-[14px] border border-black/10 bg-white text-base md:left-6"
          >
            <SparklesIcon className="  fill-[#EEBDE0] stroke-1 text-neutral-800" />{" "}
            Component Preview
          </Badge>
          <h1 className="max-w-2xl text-center text-5xl font-semibold tracking-tight ">
            Hover the Images to Expand
          </h1>
        </article>
        <HoverExpand
          images={images}
          initialSelectedIndex={0}
          thumbnailHeight={200}
          modalImageSize={400}
          maxThumbnails={11}
        />
      </div>
    </section>
  )
}
