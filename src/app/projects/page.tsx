import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { CardImage } from "@/components/ui/CardImage";
import { Container } from "@/components/ui/Container";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { PageHero } from "@/components/ui/PageHero";
import { projectCategories } from "@/content/site";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Tirunova Technologies project portfolio across CCTV, networking, Wi-Fi, solar, access control, software and more.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Projects"
        title="Work that should be shown with real installations"
        description="This portfolio is structured for actual project photographs. Real site images build more trust than stock photography, and will be published here as documented installations become available."
        image="/images/pages/projects.jpg"
      />
      <section className="py-12 sm:py-16 lg:py-20">
        <Container>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
            {projectCategories.map((category) => (
              <article
                key={category.name}
                className="min-w-0 overflow-hidden rounded-3xl border border-line bg-white"
              >
                <CardImage
                  src={category.image}
                  alt={category.name}
                  sizes="(min-width: 1280px) 20vw, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
                />
                <div className="p-4 sm:p-5">
                  <p className="text-xs uppercase tracking-[0.16em] text-muted">Category</p>
                  <h2 className="font-heading mt-1 text-lg font-semibold text-navy">
                    {category.name}
                  </h2>
                </div>
              </article>
            ))}
          </div>
          <p className="mt-8 max-w-2xl text-sm leading-6 text-muted">
            Category images are illustrative until site photographs are added. If you have completed
            installation photographs, they can replace these by category without changing the page
            structure.
          </p>
          <div className="mt-8">
            <Button href="/contact">Discuss a similar project</Button>
          </div>
        </Container>
      </section>
      <CtaBanner />
    </>
  );
}
