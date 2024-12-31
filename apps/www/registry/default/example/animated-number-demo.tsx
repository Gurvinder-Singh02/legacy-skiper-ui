"use client"

import { useEffect, useState } from "react"
import { Plus } from "lucide-react"
import { toast } from "sonner"

import { Button } from "@/components/ui/button"

import { GradientHeading } from "@/registry/default/ui/gradient-heading"

import {
  TextureCardContent,
  TextureCardHeader,
  TextureCardStyled,
} from "@/registry/default/ui/texture-card"

import NumberFlow from "@number-flow/react"


function CountDown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    const calculateTimeLeft = () => {
      const targetDate = new Date("2025-02-01")
      const now = new Date()
      const difference = targetDate.getTime() - now.getTime()

      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000)
      }
    }

    setTimeLeft(calculateTimeLeft())
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="w-full text-center text-6xl font-bold text-accent" >
      <NumberFlow value={timeLeft.days} />d&nbsp;
      <NumberFlow value={timeLeft.hours} />h&nbsp;
      <NumberFlow value={timeLeft.minutes} />m&nbsp;
      <NumberFlow value={timeLeft.seconds} />s&nbsp;
    </div>

  )
}

function PrecisionExample() {

  const [value, setValue] = useState(14.5678)

  return (
    <TextureCardStyled>
      <TextureCardHeader className="pl-3">
        <GradientHeading size="xxs">Precision</GradientHeading>
      </TextureCardHeader>
      <TextureCardContent>
        <div className="flex gap-2">
          <div
            className="text-2xl font-bold"
            style={{ minWidth: "80px", textAlign: "left" }}
          >
            <NumberFlow value={value} />
          </div>
          <Button
            size="sm"
            variant="ghost"
            className="ml-auto rounded-full border border-primary/10 py-5"
            onClick={() => setValue(value + 13.456)}
          >
            <Plus className="size-4" />
          </Button>
        </div>
      </TextureCardContent>
    </TextureCardStyled>
  )
}

function FormatExample() {
  const [value, setValue] = useState(10)

  return (
    <TextureCardStyled>
      <TextureCardHeader className="pl-3">
        <GradientHeading size="xxs">Format</GradientHeading>
      </TextureCardHeader>
      <TextureCardContent>
        <div className="flex gap-2">
          <div
            className="text-2xl font-bold"
            style={{ minWidth: "120px", textAlign: "left" }}
          >
            <NumberFlow value={value} />.00
          </div>
          <Button
            size="sm"
            variant="ghost"
            className="ml-auto rounded-full border border-primary/10 py-5"
            onClick={() => setValue(value + 50)}
          >
            <Plus className="size-4" />
          </Button>
        </div>
      </TextureCardContent>
    </TextureCardStyled>
  )
}

function HooksExample() {
  const [value, setValue] = useState(10)

  const handleAnimationStart = () => {
    toast("🏁 Animation started ")
  }

  const handleAnimationComplete = () => {
    toast("✅ Animation completed ")
  }

  return (
    <TextureCardStyled>
      <TextureCardHeader className="pl-3">
        <GradientHeading size="xxs">Callbacks</GradientHeading>
      </TextureCardHeader>
      <TextureCardContent>
        <div className="flex gap-2">
          <div
            className="text-2xl font-bold"
            style={{ minWidth: "50px", textAlign: "left" }}
          >
            <NumberFlow
              value={value}

            />
          </div>
          <Button
            size="sm"
            variant="ghost"
            className="ml-auto rounded-full border border-primary/10 py-5"
            onClick={() => setValue(value + 20)}
          >
            <Plus className="size-4" />
          </Button>
        </div>
      </TextureCardContent>
    </TextureCardStyled>
  )
}

function CustomSpringExample() {


  return (
    <TextureCardStyled className="w-full">
      <TextureCardHeader className="px-3  ">
        <GradientHeading size="sm" className="w-full text-center" > CountDown </GradientHeading>
      </TextureCardHeader>
      <CountDown />
    </TextureCardStyled>
  )
}


export default function AnimatedNumberExamples() {
  return (
    <div className="  mx-auto max-w-xl gap-4 py-6 ">
      <div className="flex w-full flex-col justify-between gap-2">
        <CustomSpringExample />
        <div className="flex   flex-col gap-2 sm:flex-row">
          <PrecisionExample />
          <FormatExample />
          <HooksExample />
        </div>
      </div>
    </div>
  )
}
