import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { site } from "@/content/site";
import { publicAsset } from "@/lib/paths";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="hero-grid pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-blue/10 blur-3xl sm:h-80 sm:w-80" />
      <div className="pointer-events-none absolute bottom-0 left-1/3 h-40 w-40 rounded-full bg-orange/10 blur-3xl sm:h-64 sm:w-64" />
      <Container className="relative grid items-center gap-8 py-10 sm:gap-12 sm:py-16 lg:grid-cols-[1.15fr_0.85fr] lg:py-24">
        <div className="min-w-0">
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-orange sm:text-xs sm:tracking-[0.24em]">
            {site.tagline}
          </p>
          <h1 className="font-heading mt-4 max-w-3xl text-[2rem] font-semibold leading-[1.1] tracking-tight text-pretty break-words text-navy sm:text-5xl lg:text-6xl">
            Smart Technology.
            <span className="block text-blue">Secure Future.</span>
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-muted sm:mt-6 sm:text-lg sm:leading-8">
            Complete IT, Security, Networking, Software & Solar Solutions Under One Roof.
          </p>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-ink/80 sm:text-base">
            Tirunova Technologies delivers reliable technology solutions for homes, offices,
            hotels, hospitals, schools, industries, retail businesses and other organizations.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button href="/contact">Get a Free Consultation</Button>
            <Button href="/contact?intent=quote" variant="outline">
              Request a Quote
            </Button>
            <Button href={site.phones[0].href} variant="ghost">
              Talk to Our Expert
            </Button>
          </div>
        </div>

        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-3xl bg-surface-2">
          <Image
            src={publicAsset("/images/home/hero.jpg")}
            alt="Tirunova technicians installing networking and security systems"
            fill
            priority
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="h-full w-full max-w-none object-cover"
          />
        </div>
      </Container>
    </section>
  );
}
