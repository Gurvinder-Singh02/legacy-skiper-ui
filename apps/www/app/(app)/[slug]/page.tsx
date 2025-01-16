import { TEMPLATES_GRID } from '@/components/landing/template-grid'
import { GradientHeading } from '@/registry/default/ui/gradient-heading'

import Image from 'next/image'
import React from 'react'



const page = ({ params }: any) => {


    const data = TEMPLATES_GRID.find((item) => (
        item.slug == params.slug
    ))

    return (
        <div className='mt-40 flex items-center justify-center' >
            <div className="space-y-4">
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

                <Image src={data?.gif || ''} height={1080} width={1080} alt='100' className='w-4xl rounded-2xl' />

            </div>
        </div>
    )
}

export default page