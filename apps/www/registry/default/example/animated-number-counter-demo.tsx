"use client"

import React, { useState } from "react"
import { IceCream } from "lucide-react"

import { Badge } from "@/components/ui/badge"

import AnimatedNumberCounter from "../ui/animated-number-counter"

export default function AnimatedNumberCounterDemo() {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <Badge
        variant="outline"
        className=" rounded-[14px] border border-black/10 dark:border-white/20 text-base text-neutral-800 dark:text-white/80 md:left-6"
      >
        <IceCream className="  fill-[#A3C0E0] stroke-1 text-neutral-800" />{" "}
        &nbsp; CountDown Componenet
      </Badge>

      <AnimatedNumberCounter />
    </div>
  )
}
