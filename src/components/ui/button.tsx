import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 rounded-md",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 rounded-md",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground rounded-md",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 rounded-md",
        ghost: "hover:bg-accent hover:text-accent-foreground rounded-md",
        link: "text-primary underline-offset-4 hover:underline",
        // Luxury variants
        luxury: 
          "relative bg-transparent border border-[hsl(var(--champagne))]/40 text-foreground font-[Inter] font-light tracking-[0.15em] uppercase text-xs px-8 py-4 hover:bg-[hsl(var(--champagne))] hover:text-background hover:border-[hsl(var(--champagne))]",
        "luxury-solid":
          "relative bg-[hsl(var(--champagne))] text-background font-[Inter] font-light tracking-[0.15em] uppercase text-xs px-8 py-4 hover:bg-[hsl(var(--champagne))]/90",
        "luxury-minimal":
          "relative bg-transparent text-muted-foreground font-[Inter] font-light tracking-[0.1em] uppercase text-xs hover:text-foreground after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-[hsl(var(--champagne))] after:transition-all after:duration-500 hover:after:w-full",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
        luxury: "h-auto px-8 py-4",
        "luxury-lg": "h-auto px-12 py-5",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
