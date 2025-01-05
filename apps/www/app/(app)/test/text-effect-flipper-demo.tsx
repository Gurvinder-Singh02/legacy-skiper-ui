'use client';
import React from 'react';

import { Badge } from '@/components/ui/badge';
import { SparklesIcon } from 'lucide-react';

import FlipLink from './text-effect-flipper';

export default function MouseTrailDemo() {
  return (

    <section className="h-4xl mx-auto w-full max-w-4xl rounded-[24px] border border-black/5 p-2 shadow-sm md:rounded-t-[44px]">
      <div className="relative mx-auto h-[40rem] w-full  overflow-scroll   rounded-[24px] border border-black/5 bg-neutral-800/5  shadow-sm  md:gap-8 md:rounded-b-[20px] md:rounded-t-[40px] ">

        <article className=' z-50   flex flex-col mt-20 items-center justify-center '>
          <Badge
            variant="outline"
            className="mb-3 rounded-[14px] border border-black/10 bg-white text-base md:left-6"
          >
            <SparklesIcon className="  fill-[#EEBDE0] stroke-1 text-neutral-800" />{" "}
            Component Preview
          </Badge>
          <h1 className='max-w-2xl text-center text-5xl font-semibold tracking-tight '>
            Hover the Images to Expand
          </h1>
        </article>
        <section className='h-full  ' >

          <section className="grid place-content-center gap-2 bg-green-300 px-8 py-24 text-black">
            <FlipLink href="#">Twitter</FlipLink>
            <FlipLink href="#">Linkedin</FlipLink>
            <FlipLink href="#">Facebook</FlipLink>
            <FlipLink href="#">Instagram</FlipLink>
          </section>

        </section>
      </div>
    </section>
  );
}
