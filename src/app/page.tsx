import { Hero } from "@/components/home/Hero";
import { SolutionCard } from "@/components/solutions/SolutionCard";
import { Button } from "@/components/ui/Button";
import { CardImage } from "@/components/ui/CardImage";
import { Container } from "@/components/ui/Container";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { WhyChooseCard } from "@/components/ui/WhyChooseCard";
import {
  approach,
  benefits,
  industries,
  oemPartners,
  processSteps,
  whyChoose,
} from "@/content/site";
import { solutions } from "@/content/solutions";

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="border-y border-line bg-surface py-12 sm:py-16 lg:py-20">
        <Container className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <SectionHeading
            eyebrow="Introduction"
            title="Technology That Works. Security You Can Trust."
            description="Tirunova Technologies is a technology solutions company providing end-to-end IT infrastructure, networking, cybersecurity, surveillance, software, cloud, security systems and solar solutions. Our focus is simple — quality products, professional installation, reliable support and long-term customer relationships."
          />
          <div className="min-w-0">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted">
              Our approach
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {approach.map((step, index) => (
                <span
                  key={step}
                  className="rounded-full bg-white px-3 py-2 text-sm font-medium text-navy shadow-sm sm:px-4"
                >
                  {step}
                  {index < approach.length - 1 ? " →" : ""}
                </span>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-12 sm:py-16 lg:py-20">
        <Container>
          <SectionHeading
            eyebrow="Solutions"
            title="One technology partner. Eight focused practices."
            description="We position Tirunova as an integrated IT, security, software and solar company — with dedicated pages for each practice rather than a long product list on the homepage."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 sm:gap-5 xl:grid-cols-3">
            {solutions.map((solution, index) => (
              <SolutionCard
                key={solution.slug}
                solution={solution}
                priority={index < 3}
              />
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-navy py-12 text-white sm:py-16 lg:py-20">
        <Container>
          <SectionHeading
            eyebrow="Why Tirunova"
            title="Why choose Tirunova Technologies"
            light
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 sm:gap-5 xl:grid-cols-3">
            {whyChoose.map((item) => (
              <WhyChooseCard key={item.title} {...item} />
            ))}
          </div>
        </Container>
      </section>

      <section className="py-12 sm:py-16 lg:py-20">
        <Container>
          <SectionHeading
            eyebrow="Industries"
            title="Industries we serve"
            description="Solutions designed around the operational needs of homes, businesses and institutions."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {industries.map((industry) => (
              <article
                key={industry.name}
                className="min-w-0 overflow-hidden rounded-2xl border border-line bg-white"
              >
                <CardImage
                  src={industry.image}
                  alt={industry.name}
                  sizes="(min-width: 1280px) 20vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                />
                <div className="p-4 sm:p-5">
                  <h3 className="font-heading text-base font-semibold text-navy">{industry.name}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted">{industry.description}</p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-line bg-surface py-12 sm:py-16 lg:py-20">
        <Container>
          <SectionHeading
            eyebrow="Process"
            title="A clear path from first conversation to ongoing support"
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {processSteps.map((step) => (
              <article
                key={step.number}
                className="min-w-0 overflow-hidden rounded-3xl bg-white"
              >
                <CardImage
                  src={step.image}
                  alt={step.title}
                  sizes="(min-width: 1280px) 25vw, (min-width: 640px) 50vw, 100vw"
                />
                <div className="p-5 sm:p-6">
                  <p className="text-sm font-semibold tracking-[0.18em] text-orange">{step.number}</p>
                  <h3 className="font-heading mt-3 text-xl font-semibold text-navy">{step.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted">{step.description}</p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-12 sm:py-16 lg:py-20">
        <Container>
          <SectionHeading eyebrow="Client benefits" title="What customers gain" />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {benefits.map((item) => (
              <article key={item.title} className="min-w-0 border-t-2 border-orange pt-4">
                <h3 className="font-heading text-lg font-semibold text-navy">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{item.description}</p>
              </article>
            ))}
          </div>
          <div className="mt-16">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted">
              Technology partners
            </p>
            <p className="mt-2 max-w-2xl text-sm text-muted">
              We work with established OEM platforms according to project requirements. Brands are
              listed as text, not as a logo wall.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {oemPartners.map((partner) => (
                <span
                  key={partner}
                  className="rounded-full border border-line px-4 py-2 text-sm text-navy"
                >
                  {partner}
                </span>
              ))}
            </div>
          </div>
          <div className="mt-10">
            <Button href="/about" variant="outline">
              About Tirunova
            </Button>
          </div>
        </Container>
      </section>

      <CtaBanner />
    </>
  );
}
