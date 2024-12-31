"use client";

import { useState } from "react";
import { PricingHeader } from "./PricingHeader";
import { PAYMENT_FREQUENCIES, TIERS } from "@/config/site";
import { PricingCard } from "./PricingCard";



export const Pricing = () => {
  const [selectedPaymentFreq, setSelectedPaymentFreq] = useState(
    PAYMENT_FREQUENCIES[0],
  );

  return (
    <section className="flex flex-col items-center gap-10 py-10">
      {/* Section Header */}
      <PricingHeader
        title="Plans and Pricing"
        subtitle="Receive unlimited credits when you pay yearly, and save on your plan."
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
  );
};
