import React from "react"
import Image from "next/image"

import BlurVignette from "@/components/skiper/BlurVignette"

function BlurVignetteDemo() {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="w-[500px] ">
        <BlurVignette
          radius="24px"
          inset="10px"
          transitionLength="100px"
          blur="15px"
          className=" rounded-xl"
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
        <BlurVignette
          radius="24px"
          inset="20px"
          transitionLength="120px"
          blur="35px"
          className=" rounded-xl"
        >
          <Image
            width={200}
            height={200}
            className="w-full"
            src="/placeholders/lummi.jpeg"
            alt=""
          />
        </BlurVignette>
      </div>
    </div>
  )
}

export default BlurVignetteDemo
