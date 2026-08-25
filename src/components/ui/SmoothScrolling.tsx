"use client"

import { ReactNode, useEffect } from "react"

export function SmoothScrolling({ children }: { children: ReactNode }) {
  useEffect(() => {
    // Lenis-style smooth scroll can be added later; keep simple for stability
    document.documentElement.style.scrollBehavior = "smooth"
  }, [])

  return <>{children}</>
}
