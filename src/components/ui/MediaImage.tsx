"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { mediaAsset } from "@/lib/paths";
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
  const frameRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const resolvedSrc = mediaAsset(src);
  const [activeSrc, setActiveSrc] = useState<string | undefined>(
    priority ? resolvedSrc : undefined,
  );

  useLayoutEffect(() => {
    if (priority) {
      setActiveSrc(resolvedSrc);
      return;
    }

    const frame = frameRef.current;
    if (!frame) return;

    const show = () => setActiveSrc(resolvedSrc);

    if (typeof IntersectionObserver === "undefined") {
      show();
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        show();
        observer.disconnect();
      },
      { rootMargin: "720px 0px", threshold: 0.01 },
    );

    observer.observe(frame);
    return () => observer.disconnect();
  }, [priority, resolvedSrc]);

  useLayoutEffect(() => {
    const img = imgRef.current;
    if (!img || !activeSrc) return;

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
  }, [activeSrc]);

  return (
    <div
      ref={frameRef}
      className={cn(
        "media-frame relative overflow-hidden",
        tone === "dark" ? "bg-white/10" : "bg-surface-2",
        className,
      )}
    >
      {!priority ? (
        <div
          aria-hidden
          className={cn(
            "absolute inset-0 transition-opacity duration-200",
            tone === "dark" ? "image-shimmer-dark" : "image-shimmer",
          )}
        />
      ) : null}
      {activeSrc ? (
        <img
          ref={imgRef}
          src={activeSrc}
          alt={alt}
          data-nimg="fill"
          decoding="async"
          loading={priority ? "eager" : "lazy"}
          fetchPriority={priority ? "high" : "low"}
          onLoad={(event) => {
            event.currentTarget.dataset.loaded = "true";
          }}
          className={cn(
            "absolute inset-0 h-full w-full max-w-none",
            priority
              ? "opacity-100"
              : "opacity-0 transition-opacity duration-200 ease-out data-[loaded=true]:opacity-100",
            fit === "contain" ? "object-contain" : "object-cover",
            objectClassName,
          )}
        />
      ) : null}
    </div>
  );
}
