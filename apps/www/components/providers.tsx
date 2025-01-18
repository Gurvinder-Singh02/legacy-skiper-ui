"use client"

import * as React from "react"
import { usePathname } from "next/navigation"
import { Provider as JotaiProvider } from "jotai"

import { ThemeProvider as NextThemesProvider } from "next-themes"

import { ThemeProviderProps } from "next-themes/dist/types"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  
  const pathname = usePathname()

  const forcedThemeFromPathname = pathname === "/" ? "light" : ""

  return (
    <JotaiProvider>
      <NextThemesProvider
        {...props}
        forcedTheme={forcedThemeFromPathname}
        defaultTheme="light"
      >
        {children}
      </NextThemesProvider>
    </JotaiProvider>
  )
}
