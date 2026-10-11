import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SolutionDetail } from "@/components/solutions/SolutionDetail";
import { getSolution, solutions } from "@/content/solutions";

type SolutionParams = { slug: string };

export function generateStaticParams() {
  return solutions.map((solution) => ({ slug: solution.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<SolutionParams>;
}): Promise<Metadata> {
  const { slug } = await params;
  const solution = getSolution(slug);
  if (!solution) {
    return { title: "Solution" };
  }
  return {
    title: solution.seoTitle,
    description: solution.seoDescription,
  };
}

export default async function SolutionPage({
  params,
}: {
  params: Promise<SolutionParams>;
}) {
  const { slug } = await params;
  const solution = getSolution(slug);
  if (!solution) {
    notFound();
  }
  return <SolutionDetail solution={solution} />;
}
