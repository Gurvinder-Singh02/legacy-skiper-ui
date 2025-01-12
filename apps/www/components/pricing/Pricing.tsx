"use client"

import { useState } from "react"

import { PAYMENT_FREQUENCIES, TIERS } from "@/config/site"

import { PricingCard } from "./PricingCard"
import { PricingHeader } from "./PricingHeader"
import { GradientHeading } from "@/registry/default/ui/gradient-heading"

export const Pricing = () => {
  const [selectedPaymentFreq, setSelectedPaymentFreq] = useState(
    PAYMENT_FREQUENCIES[0]
  )

  return (
    <section className="flex flex-col items-center gap-10 py-10">
      {/* Section Header */}

      <div className="space-y-4">
        <GradientHeading
          size="xll"
          weight="bold"
          className="text-center text-xl font-bold    tracking-tighter lg:leading-[0.5rem] "
        > Need Custom Components ?
          <br className="hidden md:block" />
        </GradientHeading>
        <p className="text-center text-base  leading-3  text-foreground md:pt-8 md:text-xl md:font-normal md:leading-6">
          Need custom components or websites? We've got you covered
          <br />
          From custom components to complete website tailored to your needs. Simple pricing, no hidden fees.
        </p>
      </div>
      <PricingHeader
        frequencies={PAYMENT_FREQUENCIES}
        selectedFrequency={selectedPaymentFreq}
        onFrequencyChange={setSelectedPaymentFreq}
      />

      {/* Pricing Cards */}
      <div className="flex w-full flex-wrap items-center justify-center gap-10 ">
        {TIERS.map((tier, i) => (
          <PricingCard
            key={i}
            tier={tier}
            paymentFrequency={selectedPaymentFreq}
          />
        ))}
      </div>
    </section>
  )
}
