import React from "react"

import { CardCarousel } from "../ui/card-carousel"

const CardCaroursalDemo = () => {
  const images = [
    { src: "/card/1.png", alt: "Image 1" },
    { src: "/card/2.png", alt: "Image 2" },
    { src: "/card/3.png", alt: "Image 3" },
  ]

  return (
    <div className="w-full">
      <CardCarousel
        images={images}
        autoplayDelay={2000}
        showPagination={true}
        showNavigation={true}
      />
    </div>
  )
}

export default CardCaroursalDemo
