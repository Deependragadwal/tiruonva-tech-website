import Link from "next/link";
import { CardImage } from "@/components/ui/CardImage";
import type { Solution } from "@/content/solutions";

export function SolutionCard({
  solution,
  description,
  priority = false,
}: {
  solution: Solution;
  description?: string;
  priority?: boolean;
}) {
  return (
    <Link
      href={`/solutions/${solution.slug}`}
      className="group flex min-w-0 flex-col overflow-hidden rounded-3xl border border-line bg-white transition-shadow hover:shadow-lg"
    >
      <CardImage
        src={solution.image}
        alt={solution.name}
        className="transition duration-500 group-hover:brightness-[0.97]"
        priority={priority}
      />
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="font-heading text-xl font-semibold text-pretty text-navy group-hover:text-blue sm:text-2xl">
          {solution.name}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-6 text-muted">
          {description ?? solution.headline}
        </p>
        <p className="mt-4 text-sm font-semibold text-orange">{solution.cta} →</p>
      </div>
    </Link>
  );
}
