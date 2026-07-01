"use client";

import { ArrowUpRight, CircleAlert, FileText, MessageSquareText, Network, RadioTower, Sparkles, UsersRound } from "lucide-react";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import { platformIcons } from "@/components/platformIcons";
import type { Platform } from "@/lib/platforms";

const layoutClasses = [
  "lg:col-span-1",
  "lg:col-span-2",
  "lg:col-span-2",
  "lg:col-span-1"
];

const accentColors = ["#5BC0EB", "#FF7A59", "#7BD88F", "#FFD700"];

const capabilityHighlights = [
  ["Live signals", "Evidence map", "Research context"],
  ["Risk triage", "Pattern detection", "Evidence trail"],
  ["Persona lab", "Reaction testing", "Message fit"],
  ["Draft support", "Guardrails", "Approval flow"]
];

export function PlatformBentoGrid({ platforms }: { platforms: Platform[] }) {
  return (
    <BentoGrid className="auto-rows-[23rem] sm:auto-rows-[24rem]">
      {platforms.map((platform, index) => {
        const Icon = platformIcons[platform.icon];

        return (
          <BentoCard
            key={platform.name}
            name={platform.name}
            Icon={Icon}
            description={platform.description}
            href={`#${platform.shortName.toLowerCase()}`}
            cta="Open platform"
            className={`${layoutClasses[index]} bg-brand-offwhite`}
            background={
              <PlatformBentoBackground
                platform={platform}
                index={index}
                accent={accentColors[index]}
              />
            }
          />
        );
      })}
    </BentoGrid>
  );
}

function PlatformBentoBackground({
  platform,
  index,
  accent
}: {
  platform: Platform;
  index: number;
  accent: string;
}) {
  const isWide = index === 1 || index === 2;

  return (
    <div className="absolute inset-0 overflow-hidden">
      <div
        className="absolute inset-0 opacity-80"
        style={{
          background:
            "radial-gradient(circle at 24% 10%, rgba(255,215,0,0.22), transparent 20rem), linear-gradient(140deg, rgba(255,255,255,0.94), rgba(242,238,230,0.84))"
        }}
      />
      <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-white to-transparent" />
      <div
        className="absolute -right-12 top-8 h-56 w-56 rounded-full opacity-20 blur-3xl transition duration-700 group-hover:scale-125"
        style={{ backgroundColor: accent }}
      />
      {isWide ? (
        <WideSignalScene platform={platform} accent={accent} index={index} />
      ) : (
        <TallSignalScene platform={platform} accent={accent} index={index} />
      )}
      <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-white via-white/96 via-65% to-transparent sm:h-44 sm:via-white/92" />
    </div>
  );
}

function WideSignalScene({
  platform,
  accent,
  index
}: {
  platform: Platform;
  accent: string;
  index: number;
}) {
  const nodes = [
    { label: "Source", Icon: RadioTower },
    { label: "Evidence", Icon: FileText },
    { label: platform.shortName, Icon: Sparkles },
    { label: "Decision", Icon: ArrowUpRight }
  ];

  return (
    <div className="absolute inset-x-5 top-8 hidden h-56 sm:block">
      <svg
        aria-hidden="true"
        viewBox="0 0 760 220"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full text-brand-black/15 transition duration-500 group-hover:text-brand-black/22"
      >
        <defs>
          <linearGradient id={`wide-flow-${index}`} x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="currentColor" stopOpacity="0.08" />
            <stop offset="45%" stopColor="currentColor" stopOpacity="0.34" />
            <stop offset="100%" stopColor={accent} stopOpacity="0.48" />
          </linearGradient>
          <filter id={`wide-glow-${index}`} x="-20%" y="-80%" width="140%" height="260%">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <path
          className="signal-flow-breathe"
          d="M58 105 C170 88 230 92 315 104 S470 126 596 116"
          fill="none"
          stroke={`url(#wide-flow-${index})`}
          strokeLinecap="round"
          strokeWidth="2"
          filter={`url(#wide-glow-${index})`}
        />
        <path
          className="signal-flow-breathe signal-flow-breathe-delay"
          d="M292 106 C390 72 477 46 596 62"
          fill="none"
          stroke={`url(#wide-flow-${index})`}
          strokeLinecap="round"
          strokeWidth="1.5"
          strokeOpacity="0.68"
        />
        <path
          className="signal-flow-breathe signal-flow-breathe-late"
          d="M292 108 C410 150 505 153 604 142"
          fill="none"
          stroke={`url(#wide-flow-${index})`}
          strokeLinecap="round"
          strokeWidth="1.5"
          strokeOpacity="0.62"
        />
        {[58, 292, 604].map((cx, nodeIndex) => (
          <circle
            className="signal-node-breathe"
            key={cx}
            cx={cx}
            cy={nodeIndex === 2 ? 124 : 106}
            r="3"
            fill="currentColor"
            opacity="0.24"
          />
        ))}
      </svg>
      {nodes.map(({ label, Icon }, nodeIndex) => (
        <div
          key={label}
          className="absolute flex items-center gap-3 rounded-full border border-brand-black/10 bg-white/88 px-3 py-2 shadow-[0_16px_50px_rgba(15,15,15,0.08)] backdrop-blur transition duration-500 group-hover:-translate-y-1"
          style={{
            left: `${nodeIndex * 24}%`,
            top: nodeIndex === 2 ? "3.2rem" : nodeIndex === 3 ? "7.4rem" : "5rem",
            transitionDelay: `${nodeIndex * 45}ms`
          }}
        >
          <span
            className="flex h-9 w-9 items-center justify-center rounded-full text-brand-black"
            style={{ backgroundColor: nodeIndex === 2 ? accent : "#F2EEE6" }}
          >
            <Icon aria-hidden="true" className="h-4 w-4" />
          </span>
          <span className="text-xs font-bold uppercase text-brand-black">
            {label}
          </span>
        </div>
      ))}
      <div
        data-capability-panel="true"
        className="absolute bottom-2 right-2 grid w-64 max-w-[42%] gap-2 rounded-lg border border-white/10 bg-brand-black/[0.92] p-2.5 text-white shadow-editorial backdrop-blur transition duration-500 group-hover:-translate-x-2"
      >
        {capabilityHighlights[index].map((capability, capabilityIndex) => (
          <div
            key={capability}
            className="flex items-center gap-2 rounded-md bg-white/[0.08] px-2.5 py-2 text-[11px] font-semibold uppercase leading-4 tracking-[0.02em] text-white/90"
          >
            <span
              className="h-2 w-2 shrink-0 rounded-full"
              style={{ backgroundColor: capabilityIndex === index ? accent : "#FFD700" }}
            />
            <span className="min-w-0">{capability}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function TallSignalScene({
  platform,
  accent,
  index
}: {
  platform: Platform;
  accent: string;
  index: number;
}) {
  const Icon = index === 0 ? Network : index === 3 ? MessageSquareText : CircleAlert;

  return (
    <div className="absolute inset-x-5 top-7 h-60">
      <svg
        aria-hidden="true"
        viewBox="0 0 300 220"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full text-brand-black/14 transition duration-500 group-hover:text-brand-black/22"
      >
        <defs>
          <linearGradient id={`tall-flow-${index}`} x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="currentColor" stopOpacity="0.08" />
            <stop offset="54%" stopColor="currentColor" stopOpacity="0.28" />
            <stop offset="100%" stopColor={accent} stopOpacity="0.52" />
          </linearGradient>
        </defs>
        <path
          className="signal-flow-breathe"
          d="M58 112 C86 68 142 45 218 48"
          fill="none"
          stroke={`url(#tall-flow-${index})`}
          strokeLinecap="round"
          strokeWidth="2"
        />
        <path
          className="signal-flow-breathe signal-flow-breathe-delay"
          d="M58 112 C110 138 156 170 240 178"
          fill="none"
          stroke={`url(#tall-flow-${index})`}
          strokeLinecap="round"
          strokeWidth="2"
          strokeOpacity="0.72"
        />
        <path
          className="signal-flow-breathe signal-flow-breathe-late"
          d="M58 112 C120 112 160 112 218 112"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="1"
          strokeOpacity="0.22"
          strokeDasharray="5 8"
        />
        <circle className="signal-node-breathe" cx="58" cy="112" r="3" fill="currentColor" opacity="0.28" />
        <circle className="signal-node-breathe signal-flow-breathe-delay" cx="218" cy="48" r="3" fill={accent} opacity="0.7" />
        <circle className="signal-node-breathe signal-flow-breathe-late" cx="240" cy="178" r="3" fill="#FFD700" opacity="0.78" />
      </svg>
      <div className="absolute right-0 top-0 grid w-44 gap-3 rounded-lg border border-brand-black/10 bg-white/82 p-3 shadow-[0_18px_60px_rgba(15,15,15,0.08)] backdrop-blur transition duration-500 group-hover:-translate-y-2">
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-bold uppercase text-brand-graphite">
            {platform.signal}
          </span>
          <span className="h-2 w-2 rounded-full" style={{ backgroundColor: accent }} />
        </div>
        {[78, 56, 88, 44].map((value) => (
          <div key={value} className="h-2 rounded-full bg-brand-black/[0.08]">
            <div
              className="h-full rounded-full transition-[width] duration-700 group-hover:w-[92%]"
              style={{ width: `${value}%`, backgroundColor: accent }}
            />
          </div>
        ))}
      </div>
      <div className="absolute left-0 top-16 flex h-24 w-24 items-center justify-center rounded-full border border-brand-black/10 bg-white shadow-[0_16px_50px_rgba(15,15,15,0.08)] transition duration-500 group-hover:scale-105">
        <Icon aria-hidden="true" className="h-9 w-9 text-brand-black" />
      </div>
      <div className="absolute bottom-0 right-5 hidden h-16 w-16 items-center justify-center rounded-full border border-brand-black/10 bg-brand-yellow shadow-[0_18px_50px_rgba(255,215,0,0.22)] transition duration-500 group-hover:-translate-y-2 sm:flex">
        <UsersRound aria-hidden="true" className="h-6 w-6 text-brand-black" />
      </div>
    </div>
  );
}
