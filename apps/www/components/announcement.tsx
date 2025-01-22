"use client"

import { useEffect, useState } from "react"
import NumberFlow from "@number-flow/react"
import { ArrowRightIcon } from "lucide-react"
import AnimatedShinyText from "./ui/animated-shiny-text"

export function Announcement() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const calculateTimeLeft = () => {
      const targetDate = new Date("2025-01-25")
      const now = new Date()
      const difference = targetDate.getTime() - now.getTime()

      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      }
    }

    setTimeLeft(calculateTimeLeft())
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="flex justify-center w-full">
      <a
        href="#"
        className="items-center mt-10  rounded-full border  border-white/20  text-sm p-1 font-medium"
      >
        <AnimatedShinyText className="inline-flex group text-white items-center border justify-center rounded-full px-4 py-1 transition ease-out ">
          <span> 🎉 &nbsp;| New component in </span> &nbsp;
          <NumberFlow value={timeLeft.days} />
          d&nbsp;
          <NumberFlow value={timeLeft.hours} />
          h&nbsp;
          <NumberFlow value={timeLeft.minutes} />
          m&nbsp;
          <NumberFlow value={timeLeft.seconds} />
          s&nbsp;
          <ArrowRightIcon className="ml-1 size-3 group-hover:rotate-180 group-hover:ml-4 transition-all duration-300 ease-in-out group-hover:translate-x-0.5" />
        </AnimatedShinyText>
      </a>
    </div>
  )
}

export function CountDown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const calculateTimeLeft = () => {
      const targetDate = new Date("2025-01-30")
      const now = new Date()
      const difference = targetDate.getTime() - now.getTime()

      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      }
    }

    setTimeLeft(calculateTimeLeft())
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="flex justify-center w-full">
      <div className="inline-flex items-center">
        <NumberFlow value={timeLeft.days} />
        d&nbsp;
        <NumberFlow value={timeLeft.hours} />
        h&nbsp;
        <NumberFlow value={timeLeft.minutes} />
        m&nbsp;
        <NumberFlow value={timeLeft.seconds} />
        s&nbsp;
      </div>
    </div>
  )
}