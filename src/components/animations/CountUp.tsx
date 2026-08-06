"use client";

import { useEffect, useRef, useState } from "react";

type CountUpProps = {
  value: number;
  suffix?: string;
  decimals?: number;
  label: string;
};

export function CountUp({ value, suffix = "", decimals = 0, label }: CountUpProps) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [current, setCurrent] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element || started) {
      return;
    }

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      setCurrent(value);
      setStarted(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          return;
        }

        setStarted(true);
        observer.disconnect();
        const start = performance.now();
        const duration = 900;

        function tick(now: number) {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setCurrent(value * eased);

          if (progress < 1) {
            requestAnimationFrame(tick);
          } else {
            setCurrent(value);
          }
        }

        requestAnimationFrame(tick);
      },
      { threshold: 0.35 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [started, value]);

  return (
    <span ref={ref} aria-label={label}>
      {current.toFixed(decimals)}
      {suffix}
    </span>
  );
}
