import * as React from "react";
import { cn } from "@/lib/utils";

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-2xl border border-mist/80 bg-white p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)]",
      className,
    )}
    {...props}
  />
));
Card.displayName = "Card";

export { Card };
