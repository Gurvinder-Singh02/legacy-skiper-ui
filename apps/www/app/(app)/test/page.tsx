

import React from 'react'
import {CardCarousel} from '@/components/ui/skiper/card-carousal';


const page = () => {

    const images = [
        { src: "/card/1.png", alt: "Image 1" },
        { src: "/card/2.png", alt: "Image 2" },
        { src: "/card/3.png", alt: "Image 3" },
    ];

    return (
        <div className='pt-40' >

            <CardCarousel
                images={images}
                autoplayDelay={2000}
                showPagination={true}
                showNavigation={true}
            />
        </div>
    )
}

export default page