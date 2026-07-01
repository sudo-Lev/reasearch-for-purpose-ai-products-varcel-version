"use client";

import { ArrowUpRight } from "lucide-react";
import type { Platform } from "@/lib/platforms";
import { motion } from "@/components/motion";
import { platformIcons } from "@/components/platformIcons";

export function PlatformCard({
  platform,
  index
}: {
  platform: Platform;
  index: number;
}) {
  const Icon = platformIcons[platform.icon];

  return (
    <motion.article
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.55, delay: index * 0.06 }}
      className="group relative min-h-[300px] overflow-hidden rounded-lg border border-brand-black/10 bg-white p-5 shadow-line transition duration-300 hover:-translate-y-1 hover:border-brand-black/25 hover:shadow-editorial sm:min-h-[360px] sm:p-6"
    >
      <div className="mb-7 flex items-start justify-between sm:mb-10">
        <div className="flex h-12 w-12 items-center justify-center rounded-md bg-brand-black text-brand-yellow">
          <Icon aria-hidden="true" className="h-5 w-5" />
        </div>
        <ArrowUpRight
          aria-hidden="true"
          className="h-5 w-5 text-brand-graphite transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-brand-black"
        />
      </div>
      <PlatformCardSketch variant={platform.icon} />
      <div className="relative z-10 mt-16 sm:mt-24">
        <h3 className="font-display text-[1.7rem] font-medium leading-tight text-brand-black sm:text-3xl">
          {platform.name}
        </h3>
        <p className="mt-5 text-base leading-7 text-brand-graphite">
          {platform.description}
        </p>
        <a
          href={`#${platform.shortName.toLowerCase()}`}
          className="mt-8 inline-flex min-h-11 items-center text-sm font-semibold text-brand-black"
        >
          Learn more
        </a>
      </div>
    </motion.article>
  );
}

function PlatformCardSketch({ variant }: { variant: Platform["icon"] }) {
  const pathByVariant = {
    listening: "M18 74 C48 28 80 102 114 52 C142 14 168 44 184 30",
    detector: "M22 58 C52 58 54 26 82 26 C112 26 104 88 138 88 C160 88 164 52 184 52",
    personas: "M30 92 C44 46 70 46 84 92 M106 92 C120 42 154 42 168 92",
    editorio: "M28 40 H164 M28 66 H132 M28 92 H178"
  };

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 210 130"
      className="absolute right-0 top-18 h-32 w-48 text-brand-black/70 transition duration-500 group-hover:translate-x-1 group-hover:-translate-y-1 sm:right-3 sm:top-20 sm:h-36 sm:w-56"
    >
      <rect x="60" y="8" width="112" height="92" rx="10" fill="#F2EEE6" stroke="currentColor" strokeOpacity="0.12" />
      <rect x="24" y="46" width="118" height="58" rx="8" fill="#FFD700" fillOpacity="0.76" />
      <path
        d={pathByVariant[variant]}
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="5"
        strokeOpacity="0.58"
      />
      <circle cx="34" cy="38" r="5" fill="#0F0F0F" fillOpacity="0.22" />
      <circle cx="178" cy="106" r="7" fill="#0F0F0F" fillOpacity="0.16" />
    </svg>
  );
}
