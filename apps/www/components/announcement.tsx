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
      const targetDate = new Date("2025-01-15")
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
    <a
      href="#"
      className="inline-flex items-center rounded-full border bg-muted px-3 py-1 text-sm font-medium"
    >
      <AnimatedShinyText className="inline-flex items-center justify-center rounded-full px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
        <span>✨ Coming in </span> &nbsp;
        <NumberFlow value={timeLeft.days} />
        d&nbsp;
        <NumberFlow value={timeLeft.hours} />
        h&nbsp;
        <NumberFlow value={timeLeft.minutes} />
        m&nbsp;
        <NumberFlow value={timeLeft.seconds} />
        s&nbsp;
        <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
      </AnimatedShinyText>
    </a>
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
      const targetDate = new Date("2025-02-01")
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
    <>
      <NumberFlow value={timeLeft.days} />
      d&nbsp;
      <NumberFlow value={timeLeft.hours} />
      h&nbsp;
      <NumberFlow value={timeLeft.minutes} />
      m&nbsp;
      <NumberFlow value={timeLeft.seconds} />
      s&nbsp;
    </>
  )
}
