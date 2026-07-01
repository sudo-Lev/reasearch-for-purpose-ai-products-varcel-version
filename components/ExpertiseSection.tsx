"use client";

import { CheckCircle2 } from "lucide-react";
import { AccentTitle } from "@/components/AccentTitle";
import { motion, reveal, stagger } from "@/components/motion";
import { SectionEyebrow } from "@/components/SectionEyebrow";

const supports = [
  "Setup and onboarding configured around your objectives",
  "Training and ongoing support from R4P researchers and specialists",
  "Interpretation and advisory from insight to action"
];

export function ExpertiseSection() {
  return (
    <section id="expertise" className="scroll-mt-20 bg-brand-paper px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.35 }}
        className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center"
      >
        <div>
          <SectionEyebrow>Human expertise</SectionEyebrow>
          <motion.h2
            variants={reveal}
            className="text-balance font-display text-4xl font-bold leading-tight text-brand-black sm:text-5xl lg:text-7xl"
          >
            The platform does the processing. Our people provide the{" "}
            <AccentTitle>analysis.</AccentTitle>
          </motion.h2>
          <motion.p
            variants={reveal}
            className="mt-7 max-w-2xl text-lg leading-8 text-brand-graphite"
          >
            R4P is not just SaaS. Each platform is paired with researchers,
            communications specialists, and AI engineers who configure the
            deployment, support onboarding, and help teams interpret what the
            outputs mean for their audience, mandate, and risk.
          </motion.p>
        </div>
        <motion.div
          variants={reveal}
          className="rounded-lg border border-brand-black/10 bg-brand-offwhite p-5 shadow-line sm:p-7"
        >
          <div className="mb-7 border-b border-brand-black/10 pb-5">
            <p className="text-sm font-semibold uppercase text-brand-graphite">
              Advisory layer
            </p>
            <p className="mt-3 font-display text-3xl font-bold text-brand-black">
              The platform is a tool. The expertise behind it is what makes it work.
            </p>
          </div>
          <ul className="grid gap-4">
            {supports.map((support) => (
              <li key={support} className="flex gap-3 text-base leading-7 text-brand-ink">
                <CheckCircle2
                  aria-hidden="true"
                  className="mt-1 h-5 w-5 shrink-0 text-brand-black"
                />
                <span>{support}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </motion.div>
    </section>
  );
}
