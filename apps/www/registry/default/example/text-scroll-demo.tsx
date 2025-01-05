"use client"

import { TextScroll } from "../ui/text-scroll"

export default function TextScrollDemo() {
  return (
    <TextScroll
      className="font-display text-center text-4xl font-semibold tracking-tighter  text-black dark:text-white md:text-7xl md:leading-[5rem]"
      text="Skiper UI  "
      default_velocity={5}
    />
  )
}
