import WrapButton from '@/components/skiper/wrap-button'
import { ArrowRight, Globe } from 'lucide-react'
import React from 'react'


const page = () => {
    return (
        <div className='mt-40 flex' >

            <WrapButton href="guri" >
                Get started
            </WrapButton>
        </div>
    )
}

export default page