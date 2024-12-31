"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"

import Image from "next/image"
import { Icons } from "./icons"


export function MainNav() {
  const pathname = usePathname()

  return (
    <div className=" ml-4  hidden md:flex ">
      <Link href="/" className="mr-6 flex items-center space-x-2">

        <Icons.logo_dark className="size-6" />
        <span className="hidden text-xl font-bold tracking-tight sm:inline-block">
          {siteConfig.name}
        </span>
        <span className="rounded-full border border-accent bg-[#ff411720] px-2 text-[12px] text-accent " > Beta </span>
      </Link>
      <nav className="flex items-center gap-4 text-sm lg:gap-6">
        <Link
          href="/docs/components/minimal-card"
          className={cn(
            "font-regular text-base transition-colors hover:text-foreground/80",
            pathname?.startsWith("/docs/components")
              ? "text-foreground"
              : "text-foreground/60"
          )}
        >
          Components
        </Link>
        <Link
          href="/pricing"
          className={cn(
            "font-regular text-base transition-colors hover:text-foreground/80",
            pathname?.startsWith("/pricing")
              ? "text-foreground"
              : "text-foreground/60"
          )}
        >
          Pricing
        </Link>
        <a
          href="/showcase"
          className={cn(
            "font-regular text-base transition-colors hover:text-foreground/80",
            pathname?.startsWith("/showcase")
              ? "text-foreground"
              : "text-foreground/60"
          )}
        >
          Showcase
        </a>
        {/* <Link
          href="/blocks"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/blocks")
              ? "text-foreground"
              : "text-foreground/60"
          )}
        >
          Blocks
        </Link> */}
        {/* <Link
          href={siteConfig.links.github}
          className={cn(
            "hidden text-foreground/60 transition-colors hover:text-foreground/80 lg:block"
          )}
        >
          GitHub
        </Link> */}
      </nav>
    </div>
  )
}
