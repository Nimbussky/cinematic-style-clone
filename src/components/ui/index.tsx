"use client"

import { cn } from "@/lib/utils"
import Image from "next/image"
import { useState, type ButtonHTMLAttributes } from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost"
  size?: "sm" | "md" | "lg"
}

export function Button({
  className,
  variant = "primary",
  size = "md",
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "relative inline-flex items-center justify-center font-medium transition-all duration-300 cursor-pointer",
        "hover:scale-[1.02] active:scale-[0.98]",
        "disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100",
        size === "sm" && "px-4 py-2 text-sm rounded-lg",
        size === "md" && "px-6 py-3 text-base rounded-xl",
        size === "lg" && "px-8 py-4 text-lg rounded-2xl",
        variant === "primary" && "bg-[#1A1A2E] text-[#FAFAF6] hover:bg-[#2A2A3E] shadow-lg shadow-black/10",
        variant === "secondary" && "bg-[#C9A84C] text-[#1A1A2E] hover:bg-[#D4B85A] shadow-lg shadow-[#C9A84C]/20",
        variant === "outline" && "border-2 border-[#E8E4DC] text-[#1A1A2E] hover:border-[#C9A84C] hover:text-[#C9A84C]",
        variant === "ghost" && "text-[#5A5A6E] hover:text-[#1A1A2E] hover:bg-[#F5F0E8]/50",
        className
      )}
      {...props}
    />
  )
}

export function ProductCard({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        "group relative bg-[#FAFAF6] rounded-3xl overflow-hidden",
        "transition-all duration-500 hover:shadow-2xl hover:shadow-black/5",
        "border border-[#E8E4DC] hover:border-[#C9A84C]/30",
        className
      )}
    >
      {children}
    </div>
  )
}

export function Badge({
  children,
  variant = "default",
}: {
  children: React.ReactNode
  variant?: "default" | "sale" | "organic"
}) {
  return (
    <span
      className={cn(
        "inline-block px-3 py-1 text-xs font-medium rounded-full",
        variant === "default" && "bg-[#F5F0E8] text-[#5A5A6E]",
        variant === "sale" && "bg-[#C44A4A] text-white",
        variant === "organic" && "bg-[#6B8E5A] text-white"
      )}
    >
      {children}
    </span>
  )
}

export function ProductImage({
  src,
  alt,
  className,
  imgClassName,
  emoji = "🧄",
  priority,
}: {
  src?: string
  alt: string
  className?: string
  imgClassName?: string
  emoji?: string
  priority?: boolean
}) {
  const [failed, setFailed] = useState(false)

  if (failed || !src) {
    return (
      <div className={cn("flex items-center justify-center bg-[#F5F0E8]", className)}>
        <span className="text-8xl opacity-40 select-none">{emoji}</span>
      </div>
    )
  }

  return (
    <div className={cn("relative", className)}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className={cn("object-cover", imgClassName)}
        onError={() => setFailed(true)}
      />
    </div>
  )
}
