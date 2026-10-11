import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { publicAsset } from "@/lib/paths";
import { cn } from "@/lib/cn";

export function PageHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
}: {
  eyebrow: string;
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-line bg-surface">
      <div className="hero-grid pointer-events-none absolute inset-0 opacity-70" />
      <Container
        className={cn(
          "relative py-12 sm:py-16 lg:py-20",
          image && "grid items-center gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12",
        )}
      >
        <div className="min-w-0">
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-orange sm:text-xs sm:tracking-[0.22em]">
            {eyebrow}
          </p>
          <h1 className="font-heading mt-3 max-w-4xl text-3xl font-semibold tracking-tight text-pretty break-words text-navy sm:text-4xl lg:text-5xl">
            {title}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-muted sm:text-lg">{description}</p>
        </div>
        {image ? (
          <div className="relative aspect-[16/10] overflow-hidden rounded-3xl bg-surface-2">
            <Image
              src={publicAsset(image)}
              alt={imageAlt ?? title}
              fill
              priority
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="h-full w-full max-w-none object-cover"
            />
          </div>
        ) : null}
      </Container>
    </section>
  );
}
