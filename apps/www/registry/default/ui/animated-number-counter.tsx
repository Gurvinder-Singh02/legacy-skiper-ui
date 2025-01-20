"use client"

import React, { useEffect, useState } from "react"
import NumberFlow from "@number-flow/react"
import { ChevronDown, ChevronUp } from "lucide-react"

export default function AnimatedNumberCounter() {
  const [count, setCount] = useState(0)
  const [activeButton, setActiveButton] = useState<"up" | "down" | null>(null)
  const [flashColor, setFlashColor] = useState<"up" | "down" | null>(null)

  const handleIncrement = () => {
    setCount((prev) => prev + 1)
    setActiveButton("up")
    setFlashColor("up")
  }

  const handleDecrement = () => {
    setCount((prev) => prev - 1)
    setActiveButton("down")
    setFlashColor("down")
  }

  useEffect(() => {
    if (flashColor) {
      const timer = setTimeout(() => {
        setFlashColor(null)
      }, 1000)
      return () => clearTimeout(timer)
    }
  }, [flashColor])

  return (
    <div
      className={`flex items-center gap-4 rounded-2xl  transition-colors duration-300 ${
        flashColor === "up"
          ? " text-green-500 "
          : flashColor === "down"
          ? "text-red-500"
          : ""
      }`}
    >
      <button
        onClick={handleIncrement}
        className="flex size-12 items-center justify-center rounded-md "
      >
        <ChevronUp
          className={`size-8 transition-colors duration-300 ${
            activeButton === "up" ? "text-green-500" : "text-gray-600"
          }`}
        />
      </button>

      <NumberFlow
        value={count}
        className="text-5xl w-14 text-center font-semibold"
      />

      <button
        onClick={handleDecrement}
        className="flex size-12 items-center justify-center rounded-md"
      >
        <ChevronDown
          className={`size-8 transition-colors duration-300 ${
            activeButton === "down" ? "text-red-500" : "text-gray-600"
          }`}
        />
      </button>
    </div>
  )
}
