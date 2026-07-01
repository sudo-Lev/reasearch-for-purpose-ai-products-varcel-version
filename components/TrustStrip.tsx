import { BadgeCheck, Clock3, ShieldCheck } from "lucide-react";
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";

const logos = [
  "UNICEF",
  "World Bank",
  "WHO Foundation",
  "UNESCO",
  "ICRC",
  "Devex",
  "Focus2030",
  "WOAH",
  "The Pacific Community"
];

const proofPoints = [
  {
    label: "Credibility",
    copy: "Evidence-led outputs with R4P review",
    Icon: ShieldCheck
  },
  {
    label: "Speed",
    copy: "Shorter path from signal to brief",
    Icon: Clock3
  },
  {
    label: "Judgement",
    copy: "Human interpretation around the data",
    Icon: BadgeCheck
  }
];

export function TrustStrip() {
  const marqueeLogos = [...logos, ...logos, ...logos];
  const reverseLogos = [...logos].reverse();

  return (
    <section
      id="trust"
      className="scroll-mt-20 overflow-hidden border-y border-brand-black/10 bg-white py-16 sm:py-20"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="inline-flex rounded-full border border-brand-black/10 bg-brand-offwhite px-4 py-2 text-sm font-semibold uppercase">
              <AnimatedShinyText className="text-brand-graphite" shimmerWidth={110}>
                They already trust us
              </AnimatedShinyText>
            </p>
            <h2 className="mt-3 max-w-3xl font-display text-3xl font-medium leading-tight text-brand-black sm:text-4xl">
              Built for teams that need credibility, speed, and judgement.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-brand-graphite">
            Global institutions use R4P work to support communications,
            humanitarian, public health, and policy decisions.
          </p>
        </div>

        <div className="mb-6 grid gap-3 md:grid-cols-3">
          {proofPoints.map(({ label, copy, Icon }) => (
            <article
              key={label}
              className="group flex min-h-28 items-center gap-4 rounded-lg border border-brand-black/10 bg-brand-offwhite p-4 shadow-line transition duration-300 hover:-translate-y-1 hover:border-brand-black/25 hover:bg-brand-yellow"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-white text-brand-black shadow-line transition group-hover:bg-brand-black group-hover:text-brand-yellow">
                <Icon aria-hidden="true" className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-display text-2xl font-semibold leading-tight text-brand-black">
                  {label}
                </h3>
                <p className="mt-1 text-sm leading-6 text-brand-graphite group-hover:text-brand-black/72">
                  {copy}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="relative grid gap-3">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-white to-transparent" />

        <div className="marquee-track flex w-max gap-3 px-5">
          {marqueeLogos.map((logo, index) => (
            <LogoTile key={`${logo}-${index}`} logo={logo} index={index} />
          ))}
        </div>

        <div className="marquee-track-reverse flex w-max gap-3 px-5">
          {[...reverseLogos, ...reverseLogos, ...reverseLogos].map((logo, index) => (
            <LogoTile key={`${logo}-reverse-${index}`} logo={logo} index={index + 3} />
          ))}
        </div>
      </div>
    </section>
  );
}

function LogoTile({ logo, index }: { logo: string; index: number }) {
  const highlighted = index % 5 === 0;

  return (
    <div
      className={`flex min-h-24 min-w-56 items-center justify-center rounded-lg border px-8 text-center font-display text-3xl font-medium shadow-line transition duration-300 hover:-translate-y-1 ${
        highlighted
          ? "border-brand-yellow bg-brand-yellow text-brand-black"
          : "border-brand-black/10 bg-brand-offwhite text-brand-black hover:border-brand-black/25 hover:bg-white"
      }`}
    >
      {logo}
    </div>
  );
}
