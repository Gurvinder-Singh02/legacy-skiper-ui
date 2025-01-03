import NumberFlow from "@number-flow/react"
import { ArrowRight, BadgeCheck } from "lucide-react"

import { TIERS } from "@/config/site"
import { cn } from "@/lib/utils"

import { Badge } from "./ui/badge"
import { Button } from "./ui/button"

export const PricingCard = ({
  tier,
  paymentFrequency,
}: {
  tier: (typeof TIERS)[0]
  paymentFrequency: string
}) => {
  const price = tier.price[paymentFrequency]
  const isHighlighted = tier.highlighted
  const isPopular = tier.popular

  return (
    <div
      className={cn(
        "relative flex flex-col gap-8 overflow-hidden rounded-2xl  border p-6 shadow transition-all ease-in-out hover:drop-shadow-xl",
        isHighlighted
          ? "bg-foreground text-background"
          : "bg-background text-foreground",
        isPopular
          ? " w-[350px] scale-100 outline outline-[#ff4017] xl:w-[400px] xl:scale-110 "
          : " w-[350px] "
      )}
    >
      {/* Background Decoration */}
      {isHighlighted && <HighlightedBackground />}
      {isPopular && <PopularBackground />}

      {/* Card Header */}
      <h2 className="flex items-center gap-3 text-xl font-medium capitalize">
        {tier.name}
        {isPopular && (
          <Badge className="mt-1 bg-[#ff4017] px-1 py-0 text-white ">
            Most Popular
          </Badge>
        )}
      </h2>

      {/* Price Section */}
      <div className="relative h-12">
        {typeof price === "number" ? (
          <>
            <NumberFlow
              format={{
                style: "currency",
                currency: "USD",
                trailingZeroDisplay: "stripIfInteger",
              }}
              value={price}
              className="text-4xl font-medium"
            />
            <p className="-mt-2 text-xs font-medium">Per month/user</p>
          </>
        ) : (
          <h1 className="text-4xl font-medium">{price}</h1>
        )}
      </div>

      {/* Features */}
      <div className="flex-1 space-y-2">
        <h3 className="text-sm font-medium">{tier.description}</h3>
        <ul className="space-y-2">
          {tier.features.map((feature, index) => (
            <li
              key={index}
              className={cn(
                "flex items-center gap-2 text-sm font-medium",
                isHighlighted ? "text-background" : "text-foreground/60"
              )}
            >
              <BadgeCheck strokeWidth={1} size={16} />
              {feature}
            </li>
          ))}
        </ul>
      </div>

      {/* Call to Action Button */}
      <Button
        variant="expandIcon"
        Icon={ArrowRight}
        iconPlacement="right"
        className={cn(
          "h-fit w-full rounded-lg",
          isHighlighted && "bg-accent text-foreground hover:bg-accent/95"
        )}
      >
        {tier.cta}
      </Button>
    </div>
  )
}

// Highlighted Background Component
const HighlightedBackground = () => (
  <div className="absolute inset-0  dark:opacity-30" />
)

// Popular Background Component
const PopularBackground = () => <div className="absolute inset-0 " />
