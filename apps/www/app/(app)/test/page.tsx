import React from 'react'
import { ShareButtonDemo } from './share-button-demo'
import SlideButtonDemo from './badge-button'
import { SlideButton } from './slide-button'
import BadgeButton from './badge-button'

const page = () => {
    return (
        <div className='mt-40 flex w-screen flex-col items-center justify-center' >
            <ShareButtonDemo />
            <SlideButton />
            <BadgeButton/>
        </div>
    )
}

export default page