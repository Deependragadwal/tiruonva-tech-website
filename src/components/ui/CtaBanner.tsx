import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { site } from "@/content/site";

export function CtaBanner({
  title = "Looking for a Reliable Technology Partner?",
  description = "From IT infrastructure to smart security, software, cloud and solar — Tirunova Technologies is ready to help.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="bg-navy py-12 text-white sm:py-16 lg:py-20">
      <Container className="flex flex-col items-stretch justify-between gap-8 lg:flex-row lg:items-center">
        <div className="max-w-2xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-orange-500 sm:text-xs sm:tracking-[0.22em]">
            Get a free consultation & site survey
          </p>
          <h2 className="font-heading mt-3 text-2xl font-semibold tracking-tight text-pretty sm:text-3xl lg:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-base leading-7 text-white/75">{description}</p>
        </div>
        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <Button href="/contact">Get a Free Consultation</Button>
          <Button href={site.phones[0].href} variant="light">
            Call {site.phones[0].display}
          </Button>
        </div>
      </Container>
    </section>
  );
}
