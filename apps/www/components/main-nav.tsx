"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"

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
        <span className="rounded-full border border-accent  px-2 text-[12px] text-accent ">
          {" "}
          Beta{" "}
        </span>
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
          href="/newsletter"
          className={cn(
            "font-regular text-base transition-colors hover:text-foreground/80",
            pathname?.startsWith("/newsletter")
              ? "text-foreground"
              : "text-foreground/60"
          )}
        >
          Newsletter
        </a>
       
      </nav>
    </div>
  )
}
