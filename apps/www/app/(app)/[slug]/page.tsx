import { GradientHeading } from '@/registry/default/ui/gradient-heading'
import React from 'react'


const page = ({ params }: any) => {
    return (
        <div className='h-screen w-screen flex items-center justify-center' >
            <div className="space-y-4">
                <GradientHeading
                    size="xll"
                    weight="bold"
                    className="text-center text-xl font-bold    tracking-tighter lg:leading-[0.5rem] "
                > {params.slug}
                    <br className="hidden md:block" />
                </GradientHeading>
                <p className="text-center text-base  leading-2 opacity-60  text-foreground md:pt-8 md:text-xl md:font-normal md:leading-6">
                    Need custom components or websites? We've got you covered
                    <br />
                    From custom components to complete website tailored to your needs. Simple pricing, no hidden fees.
                </p>
            </div>
        </div>
    )
}

export default page