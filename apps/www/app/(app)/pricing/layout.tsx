import { Metadata } from "next"

import { Button } from "@/components/ui/button"
import { Announcement } from "@/components/announcement"
import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header"

export const metadata: Metadata = {
  title: "Building Blocks.",
  description:
    "Beautifully designed. Copy and paste into your apps. Open Source.",
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
