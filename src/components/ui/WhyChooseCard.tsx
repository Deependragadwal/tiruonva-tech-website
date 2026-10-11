import { CardImage } from "@/components/ui/CardImage";
import { cn } from "@/lib/cn";

export function WhyChooseCard({
  title,
  description,
  image,
  light = false,
}: {
  title: string;
  description: string;
  image: string;
  light?: boolean;
}) {
  return (
    <article
      className={cn(
        "min-w-0 overflow-hidden rounded-3xl",
        light ? "border border-line bg-white" : "border border-white/10 bg-white/5",
      )}
    >
      <CardImage
        src={image}
        alt={title}
        sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
      />
      <div className="p-5 sm:p-6">
        <h3
          className={cn(
            "font-heading text-xl font-semibold text-pretty",
            light ? "text-navy" : "text-white",
          )}
        >
          {title}
        </h3>
        <p className={cn("mt-3 text-sm leading-6", light ? "text-muted" : "text-white/70")}>
          {description}
        </p>
      </div>
    </article>
  );
}
