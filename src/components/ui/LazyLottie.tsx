"use client";

import dynamic from "next/dynamic";
import type { ComponentProps } from "react";

const DotLottieReact = dynamic(
  () =>
    import("@lottiefiles/dotlottie-react").then((mod) => mod.DotLottieReact),
  { ssr: false }
);

type LazyLottieProps = ComponentProps<typeof DotLottieReact>;

export default function LazyLottie(props: LazyLottieProps) {
  return <DotLottieReact {...props} />;
}
