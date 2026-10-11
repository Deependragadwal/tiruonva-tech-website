import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { CardImage } from "@/components/ui/CardImage";
import { Container } from "@/components/ui/Container";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { PageHero } from "@/components/ui/PageHero";
import { services } from "@/content/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Installation, configuration, technical support, AMC, repair, remote support, software updates and on-site visits from Tirunova Technologies.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Professional services that keep systems working"
        description="Installation, configuration, support and AMC are a major part of how Tirunova delivers — not an afterthought after the sale."
        image="/images/pages/services.jpg"
      />
      <section className="py-12 sm:py-16 lg:py-20">
        <Container className="grid gap-5 md:grid-cols-2">
          {services.map((service, index) => (
            <article
              key={service.title}
              className="min-w-0 overflow-hidden rounded-3xl border border-line bg-white"
            >
              <CardImage
                src={service.image}
                alt={service.title}
                sizes="(min-width: 768px) 50vw, 100vw"
                priority={index < 2}
              />
              <div className="p-5 sm:p-7">
                <p className="text-xs font-semibold tracking-[0.18em] text-orange">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h2 className="font-heading mt-3 text-2xl font-semibold text-navy">
                  {service.title}
                </h2>
                <p className="mt-3 leading-7 text-muted">{service.description}</p>
              </div>
            </article>
          ))}
        </Container>
        <Container className="mt-10">
          <Button href="/contact">Talk to Our Expert</Button>
        </Container>
      </section>
      <CtaBanner />
    </>
  );
}
