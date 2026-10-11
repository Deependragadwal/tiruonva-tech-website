"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { navigation, site } from "@/content/site";
import { solutions } from "@/content/solutions";
import { cn } from "@/lib/cn";
import { publicAsset } from "@/lib/paths";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  const [menuPath, setMenuPath] = useState(pathname);

  if (menuPath !== pathname) {
    setMenuPath(pathname);
    setOpen(false);
    setSolutionsOpen(false);
    setMobileSolutionsOpen(false);
  }

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 bg-white/95 shadow-[0_1px_0_rgba(11,29,54,0.08)] backdrop-blur">
      <div className="border-b border-white/10 bg-navy text-white">
        <Container className="flex h-9 items-center justify-between gap-3 text-[11px] tracking-wide sm:h-10 sm:text-xs">
          <p className="truncate text-white/80">{site.address.city}, {site.address.state}</p>
          <div className="flex min-w-0 items-center justify-end gap-3 sm:gap-5">
            <a href={site.phones[0].href} className="shrink-0 hover:text-orange-500">
              {site.phones[0].display}
            </a>
            <a href={site.phones[1].href} className="hidden shrink-0 hover:text-orange-500 md:inline">
              {site.phones[1].display}
            </a>
            <a href={`mailto:${site.email}`} className="hidden truncate hover:text-orange-500 lg:inline">
              {site.email}
            </a>
          </div>
        </Container>
      </div>

      <Container className="flex items-center justify-between gap-3 py-2 sm:gap-4 sm:py-2.5 xl:gap-6 xl:py-3">
        <Link href="/" className="shrink-0" aria-label={`${site.name} home`}>
          <Image
            src={publicAsset("/logo.jpg")}
            alt={site.name}
            width={1024}
            height={1024}
            priority
            className="h-14 w-14 object-contain sm:h-16 sm:w-16 xl:h-20 xl:w-20"
          />
        </Link>

        <nav className="hidden items-center xl:flex" aria-label="Primary">
          {navigation.map((item) => {
            if ("childrenKey" in item && item.childrenKey === "solutions") {
              const childActive = pathname.startsWith("/solutions");
              return (
                <div
                  key={item.href}
                  className="relative"
                  onMouseEnter={() => setSolutionsOpen(true)}
                  onMouseLeave={() => setSolutionsOpen(false)}
                >
                  <button
                    type="button"
                    className={cn(
                      "flex items-center gap-1 rounded-full px-3 py-2 text-sm font-medium transition-colors",
                      childActive ? "text-blue" : "text-ink hover:text-blue",
                    )}
                    aria-expanded={solutionsOpen}
                    aria-haspopup="true"
                    onClick={() => setSolutionsOpen((current) => !current)}
                  >
                    {item.label}
                    <span aria-hidden="true">▾</span>
                  </button>
                  {solutionsOpen ? (
                    <div className="absolute left-0 top-full z-20 w-[min(22rem,calc(100vw-2rem))] pt-2">
                      <div className="rounded-2xl border border-line bg-white p-3 shadow-xl">
                        <Link
                          href="/solutions"
                          className="mb-1 block rounded-xl px-3 py-2 text-sm font-semibold text-navy hover:bg-surface"
                        >
                          All solutions
                        </Link>
                        {solutions.map((solution) => (
                          <Link
                            key={solution.slug}
                            href={`/solutions/${solution.slug}`}
                            className="block rounded-xl px-3 py-2 text-sm text-ink hover:bg-surface hover:text-blue"
                          >
                            {solution.menuLabel}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : null}
                </div>
              );
            }

            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname === item.href || pathname.startsWith(`${item.href}/`);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-full px-3 py-2 text-sm font-medium whitespace-nowrap transition-colors",
                  active ? "text-blue" : "text-ink hover:text-blue",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <div className="hidden sm:block">
            <Button href="/contact" className="sm:w-auto">
              Get Consultation
            </Button>
          </div>
          <button
            type="button"
            className="relative z-10 inline-flex h-11 w-11 items-center justify-center rounded-full border border-line xl:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((current) => !current)}
          >
            <span className="sr-only">Menu</span>
            <span className="relative flex h-3.5 w-5 flex-col justify-between">
              <span className={cn("block h-0.5 w-5 bg-navy transition", open && "translate-y-[6px] rotate-45")} />
              <span className={cn("block h-0.5 w-5 bg-navy transition", open && "opacity-0")} />
              <span className={cn("block h-0.5 w-5 bg-navy transition", open && "-translate-y-[6px] -rotate-45")} />
            </span>
          </button>
        </div>
      </Container>

      {open ? (
        <div className="border-t border-line bg-white xl:hidden">
          <Container className="flex max-h-[min(70dvh,calc(100dvh-8rem))] flex-col gap-1 overflow-y-auto overscroll-contain py-4 pb-[max(1rem,env(safe-area-inset-bottom))]">
            {navigation.map((item) => {
              if ("childrenKey" in item && item.childrenKey === "solutions") {
                return (
                  <div key={item.href} className="py-1">
                    <div className="flex items-center justify-between gap-2">
                      <Link href="/solutions" className="block min-h-11 px-2 py-2 text-base font-semibold text-navy">
                        Solutions
                      </Link>
                      <button
                        type="button"
                        className="min-h-11 px-3 text-sm font-medium text-blue"
                        aria-expanded={mobileSolutionsOpen}
                        onClick={() => setMobileSolutionsOpen((current) => !current)}
                      >
                        {mobileSolutionsOpen ? "Hide" : "Show"}
                      </button>
                    </div>
                    {mobileSolutionsOpen ? (
                      <div className="ml-3 border-l border-line pl-3">
                        {solutions.map((solution) => (
                          <Link
                            key={solution.slug}
                            href={`/solutions/${solution.slug}`}
                            className="block min-h-11 py-2 text-sm text-muted"
                          >
                            {solution.menuLabel}
                          </Link>
                        ))}
                      </div>
                    ) : null}
                  </div>
                );
              }

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="min-h-11 px-2 py-2 text-base font-medium text-navy"
                >
                  {item.label}
                </Link>
              );
            })}
            <div className="mt-3 grid gap-2 border-t border-line pt-4 sm:hidden">
              {site.phones.map((phone) => (
                <a key={phone.href} href={phone.href} className="min-h-11 px-2 py-2 text-sm font-medium text-blue">
                  {phone.display}
                </a>
              ))}
              <a href={`mailto:${site.email}`} className="min-h-11 px-2 py-2 text-sm font-medium text-blue">
                {site.email}
              </a>
            </div>
            <Button href="/contact" className="mt-3">
              Get a Free Consultation
            </Button>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
