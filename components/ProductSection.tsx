"use client";

import { ArrowRight } from "lucide-react";
import { AccentTitle } from "@/components/AccentTitle";
import type { Platform } from "@/lib/platforms";
import { motion, reveal, stagger } from "@/components/motion";
import { platformIcons } from "@/components/platformIcons";

export function ProductSection({
  platform,
  align
}: {
  platform: Platform;
  align: "left" | "right";
}) {
  const Icon = platformIcons[platform.icon];
  const isRight = align === "right";

  return (
    <motion.article
      id={platform.shortName.toLowerCase()}
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.28 }}
      className={`grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-10 ${
        isRight ? "lg:[&>*:first-child]:order-2" : ""
      }`}
    >
      <div>
        <motion.div
          variants={reveal}
          className="mb-6 inline-flex items-center gap-3 rounded-full border border-brand-black/10 bg-white px-4 py-2 text-sm font-semibold text-brand-graphite"
        >
          <Icon aria-hidden="true" className="h-4 w-4 text-brand-black" />
          {platform.shortName}
        </motion.div>
        <motion.h2
          variants={reveal}
          className="font-display text-4xl font-bold leading-tight text-brand-black sm:text-5xl lg:text-6xl"
        >
          <AccentTitle>{platform.shortName}</AccentTitle>
          {" "}
          <span className="mt-2 block text-3xl sm:text-5xl lg:text-6xl">
            {platform.name}
          </span>
        </motion.h2>
        <motion.p
          variants={reveal}
          className="mt-5 max-w-xl text-base leading-7 text-brand-graphite sm:mt-6 sm:text-lg sm:leading-8"
        >
          {platform.positioning}
        </motion.p>
        <motion.ul variants={stagger} className="mt-6 grid gap-3 sm:mt-8">
          {platform.capabilities.map((capability) => (
            <motion.li
              variants={reveal}
              key={capability}
              className="flex gap-3 border-t border-brand-black/10 pt-4 text-base leading-7 text-brand-ink"
            >
              <ArrowRight aria-hidden="true" className="mt-1 h-5 w-5 shrink-0" />
              <span>{capability}</span>
            </motion.li>
          ))}
        </motion.ul>
      </div>

      <motion.div
        variants={reveal}
        className="rounded-lg border border-brand-black/10 bg-white p-3 shadow-editorial sm:p-4"
      >
        <div className="rounded-md bg-brand-warm p-4 text-brand-offwhite sm:p-5">
          <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-4 sm:mb-7">
            <span className="text-xs font-semibold uppercase text-white/60">
              {platform.signal}
            </span>
            <span className="rounded-full bg-brand-yellow px-3 py-1 text-xs font-semibold text-brand-black">
              Active
            </span>
          </div>
          <div className="grid gap-4">
            <div className="rounded-md border border-white/10 bg-white/[0.06] p-4">
              <div className="mb-8 h-2 w-2/5 rounded-full bg-brand-yellow" />
              <div className="h-3 w-11/12 rounded-full bg-white/16" />
              <div className="mt-3 h-3 w-7/12 rounded-full bg-white/16" />
            </div>
            <div className="grid grid-cols-3 gap-3">
              {[72, 54, 88].map((value, index) => (
                <div
                  key={value}
                className="flex h-24 flex-col justify-end rounded-md border border-white/10 bg-white/[0.05] p-3 sm:h-32"
                >
                  <div
                    className="rounded-sm bg-brand-yellow"
                    style={{ height: `${value}%`, opacity: 0.9 - index * 0.13 }}
                  />
                </div>
              ))}
            </div>
            <div className="grid gap-2">
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="flex items-center justify-between rounded-md bg-white/[0.05] px-3 py-3"
                >
                  <span className="h-2 w-2 rounded-full bg-brand-yellow" />
                  <span className="h-2 w-1/2 rounded-full bg-white/14" />
                  <span className="h-2 w-12 rounded-full bg-white/14" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.article>
  );
}
