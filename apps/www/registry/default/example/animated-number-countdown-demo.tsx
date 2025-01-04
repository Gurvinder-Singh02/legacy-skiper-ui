"Use client"

import React from "react"
import { Puzzle } from "lucide-react"

import { Badge } from "@/components/ui/badge"

import AnimatedNumberCountdown from "../ui/animated-number-countdown"

const AnimatedNumberCountDownDemo = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <Badge
        variant="outline"
        className=" rounded-[14px] border border-black/10 text-base text-neutral-800 md:left-6"
      >
        <Puzzle className=" fill-[#D2F583]  stroke-1 text-neutral-800" /> &nbsp;
        CountDown component
      </Badge>
      <AnimatedNumberCountdown
        endDate={new Date("2025-12-31")}
        className="my-4"
      />
    </div>
  )
}

export default AnimatedNumberCountDownDemo
