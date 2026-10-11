import type { Metadata } from "next";
import { SolutionCard } from "@/components/solutions/SolutionCard";
import { Container } from "@/components/ui/Container";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { PageHero } from "@/components/ui/PageHero";
import { solutions } from "@/content/solutions";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "IT and networking, CCTV, access control, cloud, cybersecurity, software, solar and IT consultancy from Tirunova Technologies.",
};

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Solutions"
        title="Integrated technology solutions under one roof"
        description="Tirunova Technologies — your single technology partner for IT, security, software and solar solutions. Explore each practice in detail rather than a long product catalogue on one page."
        image="/images/pages/solutions.jpg"
      />
      <section className="py-12 sm:py-16 lg:py-20">
        <Container className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {solutions.map((solution, index) => (
            <SolutionCard
              key={solution.slug}
              solution={solution}
              description={solution.description}
              priority={index < 3}
            />
          ))}
        </Container>
      </section>
      <CtaBanner />
    </>
  );
}
