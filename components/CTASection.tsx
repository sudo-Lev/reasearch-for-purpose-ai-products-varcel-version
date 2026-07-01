import { DemoRequestButton } from "@/components/DemoRequestButton";

export function CTASection() {
  return (
    <section className="bg-brand-warm px-5 py-20 text-brand-offwhite sm:px-8 lg:px-10 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
        <div className="max-w-4xl">
          <p className="mb-5 text-sm font-semibold uppercase text-white/58">
            Next step
          </p>
          <h2 className="font-display text-4xl font-medium leading-tight sm:text-5xl lg:text-7xl">
            Not sure which platform fits your needs?
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/68">
            Reach out to our team. We will scope the right solution for your
            context and discuss your needs.
          </p>
        </div>
        <div className="lg:pb-3">
          <DemoRequestButton variant="light">
            Talk to our team
          </DemoRequestButton>
        </div>
      </div>
    </section>
  );
}
