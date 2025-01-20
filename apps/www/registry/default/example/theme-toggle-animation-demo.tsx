import React from "react"

import ThemeToggleButton from "../ui/theme-toggle-button"

const ThemeToggleAnimationsDemo = () => {
  return (
    <div className="h-full w-full flex items-center justify-center ">

      <ThemeToggleButton
        showLabel
        variant="gif"
        url="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMWI1ZmNvMGZyemhpN3VsdWp4azYzcWUxcXIzNGF0enp0eW1ybjF0ZyZlcD12MV9zdGlja2Vyc19zZWFyY2gmY3Q9cw/Fa6uUw8jgJHFVS6x1t/giphy.gif"
      />
      <ThemeToggleButton
        showLabel
        variant="gif"
        url="https://media.giphy.com/media/ArfrRmFCzYXsC6etQX/giphy.gif?cid=ecf05e47kn81xmnuc9vd5g6p5xyjt14zzd3dzwso6iwgpvy3&ep=v1_stickers_search&rid=giphy.gif&ct=s"
      />

      <ThemeToggleButton showLabel />
      <ThemeToggleButton showLabel variant="circle-blur" start="top-right" />
      <ThemeToggleButton showLabel variant="circle-blur" start="bottom-left" />
      <ThemeToggleButton showLabel variant="circle-blur" start="bottom-right" />

      <ThemeToggleButton showLabel variant="circle" start="top-left" />
      <ThemeToggleButton showLabel variant="circle" start="top-right" />
      <ThemeToggleButton showLabel variant="circle" start="bottom-left" />
      <ThemeToggleButton showLabel variant="circle" start="bottom-right" />

      <ThemeToggleButton showLabel variant="circle" start="center" />


    </div>
  )
}

export default ThemeToggleAnimationsDemo
