import React from "react"

import MaskedDiv from "./masked-div"

function page() {
  return (
    <div className="mt-40 flex h-screen w-screen items-center justify-center">
      <MaskedDiv variant="type-3" >
        <div className="size-full bg-red-500" />
      </MaskedDiv>
    </div>
  )
}

export default page
