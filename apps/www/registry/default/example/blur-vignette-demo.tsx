import React from "react"
import Image from "next/image"

import BlurVignette from "@/components/skiper/BlurVignette"

function BlurVignetteDemo() {
  return (
    <div className="relative max-w-4xl">
      <BlurVignette
        radius="24px"
        inset="10px"
        transitionLength="100px"
        blur="15px"
        className=" rounded-[2.5rem]"
        switchView={true}
      >
        <video
          autoPlay={true}
          muted
          loop
          content="true"
          className="size-full  object-cover transition-all "
        >
          <source
            src="https://cdn.pixabay.com/video/2023/10/19/185726-876210695_large.mp4"
            type="video/mp4"
          />
        </video>
      </BlurVignette>

      <div className="flex flex-wrap gap-4 py-4">
        <BlurVignette
          radius="24px"
          inset="20px"
          transitionLength="120px"
          blur="35px"
          switchView={true}
          className="aspect-square max-w-[calc(50%-1rem)] flex-1 rounded-[2.5rem]"
        >
          <Image
            width={200}
            height={200}
            className="size-full rounded-[2.5rem] object-cover"
            src="https://assets.lummi.ai/assets/QmWk5SDFexL89Cky4JrmnALBKyJ82Ny1cqckSGaFu72nRn?auto=format&w=1500"
            alt=""
          />
        </BlurVignette>
        <BlurVignette
          radius="24px"
          inset="20px"
          transitionLength="120px"
          blur="35px"
          switchView={true}
          className="aspect-square max-w-[calc(50%-1rem)] flex-1 rounded-[2.5rem]"
        >
          <Image
            width={200}
            height={200}
            className="size-full rounded-[2.5rem] object-cover"
            src="https://assets.lummi.ai/assets/QmNfVLFxAkjRQRHunvFEYgQmJKNtLg64qtfZu1WuZ77p2e?auto=format&w=640"
            alt=""
          />
        </BlurVignette>
      </div>
    </div>
  )
}

export default BlurVignetteDemo
