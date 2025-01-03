import React from "react"

import MaskedDiv from "./masked-div"
import Image from "next/image"


function page() {

  return (
    <div className="mt-40 flex flex-wrap items-center justify-center gap-10">
      <MaskedDiv variant="type-1"   >
        <Image width={200} height={200} className="size-full " src="https://assets.lummi.ai/assets/Qmd3mKcLXtRGoiiXL28yGKjtAkixE56NP4apjMQwLCxbon?auto=format&w=1500" alt="hero" />
      </MaskedDiv>

      <MaskedDiv variant="type-1"   >
        <Image width={200} height={200} className="size-full  " src="https://assets.lummi.ai/assets/QmafN4h8zxioSnTepYKq84oW9s64nJCnFr34Xvbm8KhxG2?auto=format&w=1500" alt="hero" />
      </MaskedDiv>

      <MaskedDiv variant="type-2" className=" background-url" >
        <Image width={200} height={200} className="size-full  " src="https://assets.lummi.ai/assets/QmTzeVUaWapKLHh6f6xCCnzajZYMY1aQYd7etxQR9JK9tG?auto=format&w=1500" alt="hero" />
      </MaskedDiv>
      <MaskedDiv variant="type-3" >
        <div className="size-full " />
      </MaskedDiv>
      <MaskedDiv variant="type-4" >
        <div className="size-full " />
      </MaskedDiv>

    </div>
  )
}

export default page
