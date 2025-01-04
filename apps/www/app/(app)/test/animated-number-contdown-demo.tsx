"Use client"

import React from 'react'
import AnimatedNumberCountdown from './animated-number-countdown'
import { Badge } from '@/components/ui/badge'
import { Puzzle } from 'lucide-react'

const AnimatedNumberCountDownDemo = () => {
    return (
        <div className='flex flex-col items-center justify-center' >
            <Badge
                variant="outline"
                className=" rounded-[14px] border border-black/10 text-base text-neutral-800 md:left-6"
            >
                <Puzzle className=" fill-[#D2F583]  stroke-1 text-neutral-800" />{" "}
                &nbsp; CountDown Componenet
            </Badge>
            <AnimatedNumberCountdown
                endDate={new Date('2025-12-31')}
                className="my-4" />
        </div>
    )
}

export default AnimatedNumberCountDownDemo