import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export default function NotFoundPage() {
  return (
    <section className="py-24">
      <Container className="text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-orange">404</p>
        <h1 className="font-heading mt-3 text-4xl font-semibold text-navy">Page not found</h1>
        <p className="mx-auto mt-4 max-w-md text-muted">
          The page you requested does not exist. Return home or send an enquiry and we will help.
        </p>
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <Button href="/">Back to home</Button>
          <Button href="/contact" variant="outline">
            Contact
          </Button>
        </div>
      </Container>
    </section>
  );
}
