import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cn } from "@/lib/utils"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "default" | "sm" | "lg" | "icon";
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "default", asChild = false, ...props }, ref) => {
    
    const baseStyles = "inline-flex items-center justify-center whitespace-nowrap rounded-sm text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-champagne disabled:pointer-events-none disabled:opacity-50"
    
    const variants = {
      primary: "bg-deep-brown text-warm-ivory shadow hover:bg-walnut",
      secondary: "bg-taupe text-white shadow-sm hover:bg-warm-brown",
      outline: "border border-deep-brown/20 bg-transparent hover:bg-deep-brown hover:text-warm-ivory",
      ghost: "hover:bg-warm-brown/10 hover:text-deep-brown",
    }
    
    const sizes = {
      default: "h-12 px-8 py-3",
      sm: "h-9 px-4 text-xs",
      lg: "h-14 px-10 text-base",
      icon: "h-12 w-12",
    }

    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
