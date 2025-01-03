import React from "react"

interface Card {
  /** Label displayed at the top of the card */
  label: string
  /** Main title of the card */
  title: string
  /** Description text shown below the title */
  description: string
  /** URL for the default card image */
  image: string
  /** URL for the image shown on hover */
  hoverImage: string
}

interface CardHoverEffectProps extends Card {
  /** Optional className for additional styling */
  className?: string
}

const CardHoverEffect: React.FC<CardHoverEffectProps> = ({
  label,
  title,
  description,
  image,
  hoverImage,
  className = "",
}) => {
  return (
    <div
      className={`group relative rounded-2xl border border-transparent [background:linear-gradient(theme(colors.slate.900),theme(colors.slate.900))_padding-box,linear-gradient(45deg,theme(colors.slate.800),theme(colors.slate.600/.8),theme(colors.slate.800))_border-box] before:absolute before:inset-0 before:rounded-[inherit] before:bg-[length:352px_382px] ${className}`}
    >
      <div className="relative">
        <div className="px-6 py-5">
          <div className="font-nycd mb-1 text-lg text-indigo-500">{label}</div>
          <div className="mb-1 text-lg font-bold text-slate-200">{title}</div>
          <p className="text-sm text-slate-500">{description}</p>
        </div>
        <div className="relative transition-transform duration-500 ease-in-out group-hover:-translate-y-1">
          <img
            className="transition-opacity duration-500 group-hover:opacity-0"
            src={image}
            width="350"
            height="240"
            alt={`${title} image`}
          />
          <img
            className="absolute left-0 top-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            src={hoverImage}
            width="350"
            height="240"
            alt={`${title} hover image`}
            aria-hidden="true"
          />
        </div>
      </div>
    </div>
  )
}

export default CardHoverEffect
