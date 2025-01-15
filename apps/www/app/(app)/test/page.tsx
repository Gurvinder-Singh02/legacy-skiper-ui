"use client"

import { cn } from '@/lib/utils'
import { GradientHeading } from '@/registry/default/ui/gradient-heading'
import PopoverForm, { PopoverFormButton, PopoverFormSuccess } from '@/registry/default/ui/popover-form'
import { ArrowRight, Globe, Mail } from 'lucide-react'

import React, { useEffect, useState } from 'react'


const page = () => {
    return (
        <div className='mt-40 flex items-center justify-center' >
            <div className="space-y-4">
                <GradientHeading
                    size="xll"
                    weight="bold"
                    className="text-center text-xl font-bold    tracking-tighter lg:leading-[0.5rem] "
                > Join our Newsletter
                    <br className="hidden md:block" />
                </GradientHeading>
                <p className="text-center text-base  leading-2 opacity-60  text-foreground md:pt-8 md:text-xl md:font-normal md:leading-6">
                    Be the First one to know about the latest component from skiper-ui <br />
                    don't worry we won't send unnecessary emails to overwhelm your inbox i know it sucks!!
                </p>
                <div className='flex items-center justify-center '>
                    <div className={cn("group cursor-pointer border group border-[#3B3A3A] bg-[#151515] gap-2  h-[64px] flex items-center p-[11px] rounded-full",)} >
                        <div className={cn('border border-[#3B3A3A] bg-[#ff3f17]  h-[43px] rounded-full flex items-center justify-center text-white',)}>
                            <p className='font-medium tracking-tight mr-3 ml-2 flex items-center gap-2 justify-center ' > <Globe className="animate-spin " /> Subscribe</p>
                        </div>
                        <div className='text-[#3b3a3a] group-hover:ml-6  ease-in-out transition-all size-[26px] flex items-center justify-center rounded-full border-2 border-[#3b3a3a]  ' >
                            <ArrowRight size={18} className='group-hover:rotate-180 ease-in-out transition-all ' />
                        </div>
                    </div>
                </div >

            </div>
        </div>
    )
}

export default page