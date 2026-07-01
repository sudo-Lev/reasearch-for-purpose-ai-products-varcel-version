import { CTASection } from "@/components/CTASection";
import { AccentTitle } from "@/components/AccentTitle";
import { ExpertiseSection } from "@/components/ExpertiseSection";
import { HeroSection } from "@/components/HeroSection";
import { NavigationDock } from "@/components/NavigationDock";
import { PlatformBentoGrid } from "@/components/PlatformBentoGrid";
import { ProductSection } from "@/components/ProductSection";
import { ScrollStory } from "@/components/ScrollStory";
import { TrustStrip } from "@/components/TrustStrip";
import { platforms } from "@/lib/platforms";

export default function AIPlatformsPage() {
  return (
    <main id="main-content" className="bg-brand-offwhite">
      <NavigationDock />
      <HeroSection />
      <section
        id="platforms"
        aria-labelledby="platform-overview-title"
        className="relative scroll-mt-20 px-4 py-14 sm:px-8 sm:py-20 lg:px-10 lg:py-28"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col gap-5 md:mb-16 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <p className="mb-4 text-sm font-semibold uppercase text-brand-graphite">
                Platform overview
              </p>
              <h2
                id="platform-overview-title"
                className="font-display text-4xl font-bold leading-tight text-brand-black sm:text-5xl lg:text-6xl"
              >
                Four platforms. One team. Built for insight to{" "}
                <AccentTitle>action.</AccentTitle>
              </h2>
            </div>
            <p className="max-w-md text-base leading-7 text-brand-graphite">
              Disinformation spreads faster than institutions can respond.
              Community concerns shift constantly. R4P helps organisations
              understand and navigate this complexity with tools, setup,
              support, and expert interpretation.
            </p>
          </div>
          <PlatformBentoGrid platforms={platforms} />
        </div>
      </section>
      <ScrollStory />
      <ExpertiseSection />
      <section className="bg-brand-offwhite px-4 py-14 sm:px-8 sm:py-20 lg:px-10 lg:py-28">
        <div className="mx-auto flex max-w-7xl flex-col gap-14 sm:gap-20 lg:gap-28">
          {platforms.map((platform, index) => (
            <ProductSection
              key={platform.name}
              platform={platform}
              align={index % 2 === 0 ? "left" : "right"}
            />
          ))}
        </div>
      </section>
      <TrustStrip />
      <CTASection />
    </main>
  );
}
