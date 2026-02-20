import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/30 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-white text-black shadow hover:bg-white/90",
        destructive:
          "bg-red-500 text-white shadow-sm hover:bg-red-500/90",
        outline:
          "border border-white/20 bg-transparent shadow-sm hover:bg-white/10 hover:text-white",
        secondary:
          "bg-white/10 text-white shadow-sm hover:bg-white/20 backdrop-blur-md border border-white/10",
        ghost: "hover:bg-white/10 hover:text-white",
        link: "text-white underline-offset-4 hover:underline",
        glass:
          "bg-white/5 backdrop-blur-lg border border-white/20 text-white shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:bg-white/10 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-all duration-300",
      },
      size: {
        default: "h-10 px-6 py-2",
        sm: "h-9 rounded-md px-3 text-xs",
        lg: "h-12 rounded-md px-8 text-lg",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
