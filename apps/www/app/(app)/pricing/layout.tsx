import { Metadata } from "next"


export const metadata: Metadata = {
  title: "Pricing.",
  description:
    "Need custom components or websites? We've got you covered , Simple pricing, no hidden fees.",
}

export default function BlocksLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="container relative m-auto w-full ">
      <div className="mt-32"></div>
      {children}
    </div>
  )
}
