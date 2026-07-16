import * as React from "react";
import { cn } from "@/lib/utils";

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className, ...props }, ref) => (
  <textarea
    ref={ref}
    className={cn(
      "flex min-h-32 w-full resize-y rounded-xl border border-mist bg-cloud/50 px-4 py-3 text-sm text-ink transition-colors placeholder:text-steel focus-visible:border-ink/40 focus-visible:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink/10 disabled:opacity-50",
      className,
    )}
    {...props}
  />
));
Textarea.displayName = "Textarea";

export { Textarea };
