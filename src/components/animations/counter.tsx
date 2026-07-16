"use client";

import { animate, useInView } from "framer-motion";
import * as React from "react";

interface CounterProps {
  to: number;
  from?: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}

/** Contador que cuenta de `from` a `to` cuando entra en el viewport. */
export function Counter({
  to,
  from = 0,
  duration = 2,
  prefix = "",
  suffix = "",
  className,
}: CounterProps) {
  const ref = React.useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const [value, setValue] = React.useState(from);

  React.useEffect(() => {
    if (!inView) return;
    const controls = animate(from, to, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (latest) => setValue(latest),
    });
    return () => controls.stop();
  }, [inView, from, to, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {Math.round(value).toLocaleString("es-AR")}
      {suffix}
    </span>
  );
}
