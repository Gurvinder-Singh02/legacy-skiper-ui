import { TEMPLATES_GRID } from '@/components/landing/template-grid'
import WrapButton from '@/components/skiper/wrap-button'

import { GradientHeading } from '@/registry/default/ui/gradient-heading'
import { Metadata } from 'next'

import Image from 'next/image'
import React from 'react'


export const metadata: Metadata = {
    title: "Building Blocks.",
    description:
        "Beautifully designed. Copy and paste into your apps. Open Source.",
}


const page = ({ params }: any) => {


    const data = TEMPLATES_GRID.find((item) => (
        item.slug == params.slug
    ))

    return (
        <div className='mt-40 ' >
            <div className="space-y-4 flex flex-col items-center justify-center">
                <GradientHeading
                    size="xll"
                    weight="bold"
                    className="text-center text-xl font-bold    tracking-tighter lg:leading-[0.5rem] "
                > {params.slug}
                    <br className="hidden md:block" />
                </GradientHeading>
                <p className="text-center text-base  leading-2 opacity-60  text-foreground md:pt-8 md:text-xl md:font-normal md:leading-6">
                    From custom components to complete website tailored to your needs.
                </p>

                {data?.videoUrl ? 
                    <video height={1080} width={1000} muted autoPlay loop className='rounded-2xl'>
                        <source src={data.videoUrl} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video> :
                    <Image src={data?.gif || ''} height={1080} width={1080} alt='100' className='w-4xl rounded-2xl' /> 
                }


                <WrapButton href={data?.liveUrl}  >
                    Show preview
                </WrapButton>
            </div>
        </div>
    )
}

export default page