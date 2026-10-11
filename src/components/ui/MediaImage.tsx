"use client";

import { useLayoutEffect, useRef } from "react";
import { publicAsset } from "@/lib/paths";
import { cn } from "@/lib/cn";

export function MediaImage({
  src,
  alt,
  className,
  priority = false,
  tone = "light",
  fit = "cover",
  objectClassName,
}: {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
  tone?: "light" | "dark";
  fit?: "cover" | "contain";
  objectClassName?: string;
}) {
  const imgRef = useRef<HTMLImageElement>(null);

  useLayoutEffect(() => {
    const img = imgRef.current;
    if (!img) return;

    const reveal = () => {
      img.dataset.loaded = "true";
    };

    if (img.complete && img.naturalWidth > 0) {
      reveal();
      return;
    }

    img.addEventListener("load", reveal);
    img.addEventListener("error", reveal);
    return () => {
      img.removeEventListener("load", reveal);
      img.removeEventListener("error", reveal);
    };
  }, [src]);

  return (
    <div
      className={cn(
        "media-frame relative overflow-hidden",
        tone === "dark" ? "bg-white/10" : "bg-surface-2",
        className,
      )}
    >
      <div
        aria-hidden
        className={cn(
          "absolute inset-0 transition-opacity duration-300",
          tone === "dark" ? "image-shimmer-dark" : "image-shimmer",
        )}
      />
      <img
        ref={imgRef}
        src={publicAsset(src)}
        alt={alt}
        decoding={priority ? "sync" : "async"}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
        onLoad={(event) => {
          event.currentTarget.dataset.loaded = "true";
        }}
        className={cn(
          "absolute inset-0 h-full w-full max-w-none opacity-0 transition-opacity duration-500 ease-out data-[loaded=true]:opacity-100",
          fit === "contain" ? "object-contain" : "object-cover",
          objectClassName,
        )}
      />
    </div>
  );
}
