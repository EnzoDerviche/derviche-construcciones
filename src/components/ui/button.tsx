import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink/40 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-4 [&_svg]:shrink-0 cursor-pointer",
  {
    variants: {
      variant: {
        primary:
          "bg-ink text-white shadow-sm hover:bg-graphite hover:shadow-md hover:-translate-y-0.5",
        outline:
          "border border-ink/15 bg-white/60 text-ink backdrop-blur hover:border-ink/30 hover:bg-white hover:-translate-y-0.5",
        ghost: "text-ink hover:bg-cloud",
        light:
          "bg-white/10 text-white border border-white/25 backdrop-blur hover:bg-white/20 hover:-translate-y-0.5",
      },
      size: {
        sm: "h-9 px-4",
        md: "h-11 px-6",
        lg: "h-13 px-8 text-base",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

/**
 * Slot mínimo (sin @radix): fusiona las clases del botón con el hijo cuando
 * se usa `asChild`, útil para renderizar enlaces (<a>) con estilo de botón.
 */
function Slot({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  if (!React.isValidElement(children)) return null;
  const child = children as React.ReactElement<{ className?: string }>;
  return React.cloneElement(child, {
    ...props,
    className: cn(className, child.props.className),
  } as React.HTMLAttributes<HTMLElement>);
}

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const classes = cn(buttonVariants({ variant, size, className }));
    if (asChild) {
      return <Slot className={classes} {...(props as React.HTMLAttributes<HTMLElement>)} />;
    }
    return <button ref={ref} className={classes} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
