'use client';

import React, { useState } from 'react';

import AnimatedNumberCounter from './animated-number-counter';
import { Badge } from '@/components/ui/badge';
import { IceCream } from 'lucide-react';


export default function AnimatedNumberCounterDemo() {


    return (
        <div className='flex flex-col items-center justify-center gap-4' >
            <Badge
                variant="outline"
                className=" rounded-[14px] border border-black/10 text-base text-neutral-800 md:left-6"
            >
                <IceCream className="  fill-[#A3C0E0] stroke-1 text-neutral-800" />{" "}
                &nbsp; CountDown Componenet
            </Badge>

            <AnimatedNumberCounter />

        </div>
    );
}