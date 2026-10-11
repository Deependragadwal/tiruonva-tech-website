import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { site } from "@/content/site";
import { solutions } from "@/content/solutions";
import { publicAsset } from "@/lib/paths";

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/solutions", label: "Solutions" },
  { href: "/services", label: "Services" },
  { href: "/products", label: "Products" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

const serviceLinks = [
  { href: "/services", label: "Installation" },
  { href: "/services", label: "Configuration" },
  { href: "/services", label: "Technical Support" },
  { href: "/services", label: "AMC" },
  { href: "/services", label: "Repair" },
  { href: "/services", label: "Remote Support" },
];

export function Footer() {
  return (
    <footer className="bg-navy text-white">
      <Container className="grid gap-12 py-12 sm:py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Image
            src={publicAsset("/logo.jpg")}
            alt={site.name}
            width={1024}
            height={1024}
            className="h-20 w-20 rounded-2xl bg-white object-contain p-1 sm:h-24 sm:w-24"
          />
          <p className="mt-5 font-heading text-lg font-semibold">{site.name}</p>
          <p className="mt-2 text-sm text-orange-500">{site.tagline}</p>
          <p className="mt-3 max-w-xs text-sm leading-6 text-white/70">{site.descriptor}</p>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-white/50">
            Quick Links
          </h2>
          <ul className="mt-4 space-y-2 text-sm">
            {footerLinks.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="text-white/80 hover:text-orange-500">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-white/50">
            Solutions
          </h2>
          <ul className="mt-4 space-y-2 text-sm">
            {solutions.map((solution) => (
              <li key={solution.slug}>
                <Link
                  href={`/solutions/${solution.slug}`}
                  className="text-white/80 hover:text-orange-500"
                >
                  {solution.menuLabel}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-white/50">
            Contact
          </h2>
          <address className="mt-4 space-y-3 text-sm not-italic leading-6 text-white/80">
            <p>{site.address.full}</p>
            {site.phones.map((phone) => (
              <p key={phone.href}>
                <a href={phone.href} className="hover:text-orange-500">
                  {phone.display}
                </a>
              </p>
            ))}
            <p>
              <a href={`mailto:${site.email}`} className="hover:text-orange-500">
                {site.email}
              </a>
            </p>
          </address>
          <h3 className="mt-8 text-sm font-semibold uppercase tracking-[0.18em] text-white/50">
            Services
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            {serviceLinks.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="text-white/80 hover:text-orange-500">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
      <div className="border-t border-white/10 pb-[env(safe-area-inset-bottom)]">
        <Container className="flex flex-col gap-2 py-5 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {site.name}. All Rights Reserved.</p>
          <p>{site.founder.title}: {site.founder.name}</p>
        </Container>
      </div>
    </footer>
  );
}
