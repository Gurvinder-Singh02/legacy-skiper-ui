'use client';

import React, { useState } from "react";
import { AnimatedNumberCounter } from "./animated-number-counter";
import {  Shell } from "lucide-react";
import { Badge } from "@/components/ui/badge";


export default function AnimatedNumberCounterDemo() {
    const [value, setValue] = useState(0);
    return (
      <>
            <div className="flex flex-col items-center justify-center">
                <Badge
                    variant="outline"
                    className=" rounded-[14px] border border-black/10 text-base text-neutral-800 md:left-6"
                >
                    <Shell className="  fill-[#EEBDE0]  stroke-1 text-neutral-800" />{" "}
                    &nbsp;Shuffle Componenet
                </Badge>
                <AnimatedNumberCounter value={value} min={0} max={99} onChange={setValue} />
                <div /
      </>

            );
  }
