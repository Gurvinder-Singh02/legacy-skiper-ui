"use client"

import React, { useState } from "react"
import { RefreshCcw, Shell, Shuffle, Timer } from "lucide-react"

import { Badge } from "@/components/ui/badge"

import AnimatedNumberRandom from "../ui/animated-number-random"

export default function AnimatedNumberRandomDemo() {
  const numbers = [124.23, 41.75, 2125.95]
  const diffs = [0.0564, -0.114, 0.0029]

  const [currentIndex, setCurrentIndex] = useState(0)

  const handleCustomClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % numbers.length)
  }

  return (
    <div className="flex flex-col items-center justify-center gap-3">
      <Badge
        variant="outline"
        className=" rounded-[14px] border border-black/10 text-base text-neutral-800 md:left-6"
      >
        <Shell className="  fill-[#EEBDE0]  stroke-1 text-neutral-800" />{" "}
        &nbsp;Shuffle component
      </Badge>
      <AnimatedNumberRandom
        value={numbers[currentIndex]}
        diff={diffs[currentIndex]}
      />
      <button
        onClick={handleCustomClick}
        className="duration-[.16s] ease-[cubic-bezier(.4,0,.2,1)] active:duration-[25ms] mx-auto mt-4 flex h-11 w-fit items-center gap-2 rounded-full bg-zinc-900 px-5 text-sm font-medium text-zinc-50 transition hover:brightness-125 active:scale-[98%] active:brightness-[98%]"
      >
        <RefreshCcw className="size-5" />
        Shuffle
      </button>
    </div>
  )
}
