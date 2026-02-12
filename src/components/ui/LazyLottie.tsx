"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import type { ComponentProps } from "react";

const DotLottieReact = dynamic(
  () =>
    import("@lottiefiles/dotlottie-react").then((mod) => mod.DotLottieReact),
  { ssr: false }
);

type LazyLottieProps = ComponentProps<typeof DotLottieReact>;

export default function LazyLottie(props: LazyLottieProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} style={{ minHeight: 200 }}>
      {inView && <DotLottieReact {...props} />}
    </div>
  );
}
