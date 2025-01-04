import React from "react"

import MaskedDiv from "../ui/masked-div"

function MaksedDivDemo() {
  return (
    <div className="items-between m-auto mt-40 flex max-w-5xl flex-wrap justify-between gap-5">
      <MaskedDiv maskType="type-1" size={0.45} className="my-4">
        <video
          className="cursor-pointer transition-all duration-300 hover:scale-105"
          autoPlay
          loop
          muted
        >
          <source
            src="https://videos.pexels.com/video-files/7710243/7710243-uhd_2560_1440_30fps.mp4"
            type="video/mp4"
          />
        </video>
      </MaskedDiv>
      <MaskedDiv maskType="type-1" size={0.45} className="rotate-180 ">
        <video
          className="cursor-pointer transition-all duration-300 hover:scale-105"
          autoPlay
          loop
          muted
        >
          <source
            src="https://videos.pexels.com/video-files/18069803/18069803-uhd_1440_2560_24fps.mp4"
            type="video/mp4"
          />
        </video>
      </MaskedDiv>
      <MaskedDiv maskType="type-3" className="my-4">
        <video
          className="cursor-pointer transition-all duration-300 hover:scale-105"
          autoPlay
          loop
          muted
        >
          <source
            src="https://videos.pexels.com/video-files/18069166/18069166-uhd_2560_1440_24fps.mp4"
            type="video/mp4"
          />
        </video>
      </MaskedDiv>
      <MaskedDiv maskType="type-4" className="my-4">
        <video
          className="cursor-pointer transition-all duration-300 hover:scale-105"
          autoPlay
          loop
          muted
        >
          <source
            src="https://videos.pexels.com/video-files/18069701/18069701-uhd_2560_1440_24fps.mp4"
            type="video/mp4"
          />
        </video>
      </MaskedDiv>
      <MaskedDiv maskType="type-2" className="my-4">
        <video
          className="cursor-pointer transition-all duration-300 hover:scale-105"
          autoPlay
          loop
          muted
        >
          <source
            src="https://videos.pexels.com/video-files/18069232/18069232-uhd_2560_1440_24fps.mp4"
            type="video/mp4"
          />
        </video>
      </MaskedDiv>
    </div>
  )
}

export default MaksedDivDemo
