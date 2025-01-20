"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { CommandMenu } from "@/components/command-menu"
import { Icons } from "@/components/icons"
import { MainNav } from "@/components/main-nav"
import { MobileNav } from "@/components/mobile-nav"


import { DistortedGlass } from "./distorted-glass"
import ThemeToggler from "@/theme/theme-toggler"
import ThemeToggleButton from "@/registry/default/ui/theme-toggle-button"

export function SiteHeader() {
  let pathname = usePathname()
  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 w-full backdrop-blur-sm sm:backdrop-blur-none ",
          pathname?.includes("/docs")
            ? "-mb-12 bg-[#FAFAFA]  backdrop-blur supports-[backdrop-filter]:bg-background/60  lg:backdrop-blur-xl"
            : "-mb-14"
        )}
      >
        {/* <header className="sticky top-0 z-50 w-full -mb-12  lg:backdrop-blur-xl backdrop-filter bg-gradientTopRightLightHeaderSm/70  md:bg-gradientTopRightLightHeader  backdrop-blur supports-[backdrop-filter]:bg-background/60 "> */}
        <div className="container m-auto flex h-14 max-w-screen-2xl items-center  ">
          <MainNav />
          <MobileNav />
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            {!pathname?.includes("/docs") ? (
              <div className="hidden lg:block  lg:w-full">
                <DistortedGlass />
              </div>
            ) : null}

            <div className="w-full flex-1 md:w-auto md:flex-none">
              <CommandMenu />
            </div>
            <nav className="flex items-center ">

              <Link
                href={siteConfig.links.github}
                target="_blank"
                rel="noreferrer"
              >
                <div
                  className={cn(
                    buttonVariants({
                      variant: "ghost",
                    }),
                    "w-9 p-0 h-9 "
                  )}
                >
                  <Icons.gitHub className="size-4" />
                </div>
              </Link>
              <Link
                href={siteConfig.links.twitter}
                target="_blank"
                rel="noreferrer"
              >
                <div
                  className={cn(
                    buttonVariants({
                      variant: "ghost",
                    }),
                    "w-9 p-0 h-9 "
                  )}
                >
                  <Icons.twitter className="size-3 fill-current" />
                  <span className="sr-only">Twitter</span>
                </div>
              </Link>
              <div>
                <ThemeToggleButton  />
              </div>

            </nav>
          </div>
        </div >
      </header >
      {/* <div className="animate-slide-up fixed inset-x-1/2 top-0 z-50 md:absolute">
        <div className=" flex w-full flex-col items-center justify-center">
          <DistortedGlass></DistortedGlass>
        </div>
      </div> */}
    </>
  )
}
