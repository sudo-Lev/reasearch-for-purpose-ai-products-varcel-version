"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  BadgeCheck,
  CheckCircle2,
  FilePenLine,
  Gauge,
  MessageCircle,
  Radar,
  RadioTower,
  SearchCheck,
  ShieldAlert,
  UsersRound
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { storySteps } from "@/lib/platforms";
import {
  AnimatePresence,
  motion,
  useReducedMotion
} from "@/components/motion";

gsap.registerPlugin(ScrollTrigger);

const storyIcons = [RadioTower, Radar, UsersRound, FilePenLine, CheckCircle2];
const storyVisuals = [
  {
    eyebrow: "Signal map",
    metric: "218 sources grouped",
    wins: ["See what is changing first", "Collapse scattered channels", "Keep context attached"],
    chips: ["Narratives", "Channels", "Moments"],
    accent: "bg-[#5BC0EB]",
    accentText: "text-[#5BC0EB]",
    border: "border-[#5BC0EB]/45",
    glow: "shadow-[0_30px_90px_rgba(91,192,235,0.15)]"
  },
  {
    eyebrow: "Risk triage",
    metric: "High velocity claim",
    wins: ["Prioritise the risky claim", "Know why it matters", "Move evidence to review"],
    chips: ["Reach spike", "Evidence trail", "Review now"],
    accent: "bg-[#FF7A59]",
    accentText: "text-[#FF7A59]",
    border: "border-[#FF7A59]/45",
    glow: "shadow-[0_30px_90px_rgba(255,122,89,0.14)]"
  },
  {
    eyebrow: "Audience lab",
    metric: "4 persona reactions",
    wins: ["Test message clarity", "Spot likely resistance", "Adapt language before launch"],
    chips: ["Trust", "Resistance", "Language"],
    accent: "bg-[#7BD88F]",
    accentText: "text-[#7BD88F]",
    border: "border-[#7BD88F]/45",
    glow: "shadow-[0_30px_90px_rgba(123,216,143,0.13)]"
  },
  {
    eyebrow: "Editorial desk",
    metric: "Brief ready for review",
    wins: ["Turn findings into copy", "Keep editorial guardrails", "Shorten approval time"],
    chips: ["Draft", "Tone", "Approvals"],
    accent: "bg-brand-offwhite",
    accentText: "text-brand-offwhite",
    border: "border-white/38",
    glow: "shadow-[0_30px_90px_rgba(250,250,248,0.1)]"
  },
  {
    eyebrow: "Action room",
    metric: "Response path selected",
    wins: ["Choose the next move", "Assign ownership", "Track what happens after"],
    chips: ["Decision", "Owner", "Next step"],
    accent: "bg-brand-yellow",
    accentText: "text-brand-yellow",
    border: "border-brand-yellow/45",
    glow: "shadow-[0_30px_90px_rgba(255,215,0,0.13)]"
  }
];

export function ScrollStory() {
  const ref = useRef<HTMLElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(6);

  useEffect(() => {
    const section = ref.current;

    if (!section) {
      return undefined;
    }

    const shouldAnimateScroll = window.matchMedia("(min-width: 1024px)").matches;

    if (!shouldAnimateScroll) {
      return undefined;
    }

    const context = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>("[data-story-card]");

      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: "bottom bottom",
        scrub: 0.45,
        onUpdate: (self) => {
          const nextProgress = Math.max(6, self.progress * 100);
          const nextIndex = Math.min(
            storySteps.length - 1,
            Math.max(0, Math.floor(self.progress * storySteps.length))
          );

          setProgress(nextProgress);
          setActiveIndex(nextIndex);
        }
      });

      cards.forEach((card) => {
        gsap.fromTo(
          card,
          { autoAlpha: 0.58, y: 72, scale: 0.96 },
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 78%",
              end: "center 44%",
              scrub: 0.55
            }
          }
        );
      });
    }, section);

    return () => context.revert();
  }, []);

  const activeStep = storySteps[activeIndex];
  const ActiveIcon = storyIcons[activeIndex];
  const activeVisual = storyVisuals[activeIndex];

  return (
    <section
      id="story"
      ref={ref}
      className="relative scroll-mt-20 bg-brand-black px-4 text-brand-offwhite sm:px-8 lg:px-10"
      aria-labelledby="story-title"
    >
      <div className="mx-auto grid max-w-7xl gap-10 py-14 sm:py-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:py-0">
        <aside className="lg:sticky lg:top-0 lg:flex lg:h-dvh lg:self-start lg:items-center">
          <div className="w-full">
            <p className="mb-5 inline-flex rounded-sm bg-brand-yellow px-2 py-1 text-sm font-bold uppercase text-brand-black">
              Scroll story
            </p>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep.verb}
                initial={{ opacity: 0, y: 18, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -14, filter: "blur(8px)" }}
                transition={{ duration: 0.34, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className={`mb-7 flex h-16 w-16 items-center justify-center rounded-lg border bg-white/[0.035] ${activeVisual.border} ${activeVisual.accentText}`}>
                  <ActiveIcon aria-hidden="true" className="h-7 w-7" />
                </div>
                <h2
                  id="story-title"
                  className="text-balance font-display text-4xl font-bold leading-[1.03] sm:text-6xl lg:text-7xl"
                >
                  {activeStep.verb}
                </h2>
                <div className={`mt-5 h-1 w-28 rounded-full ${activeVisual.accent}`} />
                <p className="mt-5 max-w-xl font-display text-[1.7rem] font-bold leading-tight text-white sm:text-4xl">
                  {activeStep.title}
                </p>
                <p className="mt-4 max-w-lg text-base leading-7 text-white/72 sm:mt-5 sm:text-lg sm:leading-8">
                  {activeStep.copy}
                </p>
              </motion.div>
            </AnimatePresence>

            <div className="mt-7 max-w-xl sm:mt-9">
              <div className="mb-4 flex items-center justify-between text-xs font-semibold uppercase text-white/46">
                <span>Operating flow</span>
                <span>
                  {String(activeIndex + 1).padStart(2, "0")} /{" "}
                  {String(storySteps.length).padStart(2, "0")}
                </span>
              </div>
              <div className="h-1 overflow-hidden rounded-full bg-white/12">
                <div className={`h-full rounded-full transition-[width] duration-200 ${activeVisual.accent}`} style={{ width: `${progress}%` }} />
              </div>
              <div className="mt-5 hidden grid-cols-5 gap-2 sm:grid">
                {storySteps.map((step, index) => (
                  <div key={step.verb} className="grid gap-2">
                    <span
                      className={`h-2 rounded-full transition duration-300 ${
                        index <= activeIndex ? activeVisual.accent : "bg-white/14"
                      }`}
                    />
                    <span
                      className={`text-[11px] font-bold uppercase transition duration-300 ${
                        index === activeIndex ? activeVisual.accentText : "text-white/38"
                      }`}
                    >
                      {step.verb}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-7 hidden max-w-xl grid-cols-3 gap-2 sm:mt-8 sm:grid">
              {activeVisual.chips.map((signal) => (
                <motion.div
                  key={`${activeStep.verb}-${signal}`}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.28 }}
                  className="rounded-md border border-white/10 bg-white/[0.045] px-2 py-2 text-xs font-semibold text-white/78 sm:px-3 sm:py-3 sm:text-sm"
                >
                  {signal}
                </motion.div>
              ))}
            </div>
          </div>
        </aside>

        <div className="relative py-1 lg:py-[18vh]">
          <div className="grid gap-5 sm:gap-8 lg:gap-[18vh]">
            {storySteps.map((step, index) => (
              <StoryScrollCard
                key={step.verb}
                step={step}
                index={index}
                active={index === activeIndex}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function StoryScrollCard({
  step,
  index,
  active
}: {
  step: (typeof storySteps)[number];
  index: number;
  active: boolean;
}) {
  const reduceMotion = useReducedMotion();
  const Icon = storyIcons[index];
  const visual = storyVisuals[index];

  return (
    <motion.article
      data-story-card
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ amount: 0.56, once: false }}
      transition={{ duration: reduceMotion ? 0 : 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="relative flex items-center sm:min-h-[46vh] lg:min-h-[56vh]"
    >
      <div
        className={`relative w-full overflow-hidden rounded-lg border p-4 transition duration-500 sm:p-8 ${
          active
            ? `${visual.border} bg-white/[0.07] ${visual.glow}`
            : "border-white/10 bg-white/[0.035]"
        }`}
      >
        <motion.div
          aria-hidden="true"
          animate={active && !reduceMotion ? { scale: [1, 1.08, 1], opacity: [0.08, 0.18, 0.08] } : undefined}
          transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
          className={`absolute -right-16 -top-16 h-48 w-48 rounded-full blur-3xl ${visual.accent}`}
        />

        <div className="relative z-10 grid gap-5 sm:gap-8 xl:grid-cols-[0.92fr_1fr] xl:items-center">
          <div>
            <div className="mb-5 flex items-center justify-between gap-4 sm:mb-8">
              <div
                className={`flex h-14 w-14 items-center justify-center rounded-lg transition duration-500 ${
                  active ? `${visual.accent} text-brand-black` : `bg-white/8 ${visual.accentText}`
                }`}
              >
                <Icon aria-hidden="true" className="h-6 w-6" />
              </div>
              <span className={`text-sm font-bold uppercase ${visual.accentText}`}>
                {String(index + 1).padStart(2, "0")} / {step.verb}
              </span>
            </div>
            <h3
              className={`font-display text-[1.65rem] font-bold leading-tight transition duration-500 sm:text-4xl ${
                active ? "text-white" : "text-white/78"
              }`}
            >
              {step.title}
            </h3>
            <p
              className={`mt-4 max-w-xl text-base leading-7 transition duration-500 sm:mt-5 sm:text-lg sm:leading-8 ${
                active ? "text-white/78" : "text-white/56"
              }`}
            >
              {step.copy}
            </p>
          </div>

          <StoryCardVisual active={active} index={index} visual={visual} />
        </div>
      </div>
    </motion.article>
  );
}

function StoryCardVisual({
  active,
  index,
  visual
}: {
  active: boolean;
  index: number;
  visual: (typeof storyVisuals)[number];
}) {
  return (
    <div className="relative rounded-md border border-white/10 bg-brand-black/78 p-4">
      <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-4">
        <span className="text-xs font-bold uppercase text-white/48">{visual.eyebrow}</span>
        <span className={`h-2.5 w-2.5 rounded-full ${active ? visual.accent : "bg-white/24"}`} />
      </div>
      {index === 0 ? <SignalMap active={active} visual={visual} /> : null}
      {index === 1 ? <RiskMatrix active={active} visual={visual} /> : null}
      {index === 2 ? <PersonaLab active={active} visual={visual} /> : null}
      {index === 3 ? <EditorialDesk active={active} visual={visual} /> : null}
      {index === 4 ? <ActionTimeline active={active} visual={visual} /> : null}
      <div className="mt-4 rounded-md border border-white/10 bg-white/[0.055] p-4">
        <p className={`mb-2 text-xs font-bold uppercase ${visual.accentText}`}>
          User win
        </p>
        <p className="font-display text-xl font-bold leading-tight text-white">
          {visual.metric}
        </p>
      </div>
    </div>
  );
}

function SignalMap({
  active,
  visual
}: {
  active: boolean;
  visual: (typeof storyVisuals)[number];
}) {
  const nodes = [
    "left-[10%] top-[20%]",
    "left-[38%] top-[8%]",
    "left-[70%] top-[26%]",
    "left-[22%] top-[66%]",
    "left-[58%] top-[72%]"
  ];

  return (
    <div className="relative h-44 overflow-hidden rounded-md border border-white/10 bg-white/[0.035]">
      <div className="absolute inset-6 rounded-full border border-white/10" />
      <div className="absolute left-1/2 top-1/2 h-px w-4/5 -translate-x-1/2 bg-white/12" />
      <div className="absolute left-1/2 top-1/2 h-4/5 w-px -translate-y-1/2 bg-white/12" />
      {nodes.map((position, itemIndex) => (
        <motion.span
          key={position}
          animate={{ scale: active ? [1, 1.22, 1] : 1, opacity: active ? 1 : 0.52 }}
          transition={{ duration: 1.8, repeat: active ? Infinity : 0, delay: itemIndex * 0.16 }}
          className={`absolute h-4 w-4 rounded-full ${position} ${visual.accent}`}
        />
      ))}
      <BenefitList wins={visual.wins} visual={visual} className="absolute bottom-3 left-3 right-3" />
    </div>
  );
}

function RiskMatrix({
  active,
  visual
}: {
  active: boolean;
  visual: (typeof storyVisuals)[number];
}) {
  const riskWins: Array<{ label: string; note: string; Icon: LucideIcon }> = [
    { label: "Find the risk", note: "Velocity and reach are scored first.", Icon: ShieldAlert },
    { label: "Prove the signal", note: "Evidence stays attached for review.", Icon: SearchCheck },
    { label: "Act faster", note: "Escalation is clear before the claim spreads.", Icon: Gauge }
  ];

  return (
    <div className="grid gap-3">
      {riskWins.map(({ label, note, Icon }, itemIndex) => (
        <motion.div
          key={label}
          animate={{ opacity: active ? 1 : 0.55, y: active ? 0 : 8 }}
          transition={{ duration: 0.35, delay: itemIndex * 0.06 }}
          className={`flex gap-3 rounded-md border p-3 ${
            itemIndex === 0 ? `${visual.border} bg-white/[0.1]` : "border-white/10 bg-white/[0.045]"
          }`}
        >
          <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-brand-black ${visual.accent}`}>
            <Icon aria-hidden="true" className="h-5 w-5" />
          </span>
          <span>
            <span className="block text-sm font-bold text-white">{label}</span>
            <span className="mt-1 block text-sm leading-5 text-white/58">{note}</span>
          </span>
        </motion.div>
      ))}
    </div>
  );
}

function PersonaLab({
  active,
  visual
}: {
  active: boolean;
  visual: (typeof storyVisuals)[number];
}) {
  const personaIcons: LucideIcon[] = [UsersRound, MessageCircle, BadgeCheck];

  return (
    <div className="grid gap-2.5">
      {[
        ["Skeptical parent", "Proof needed."],
        ["Local organiser", "Practical language."],
        ["Policy watcher", "Source credibility."]
      ].map(([name, note], itemIndex) => {
        const Icon = personaIcons[itemIndex];

        return (
        <motion.div
          key={name}
          animate={{ x: active ? 0 : 10, opacity: active ? 1 : 0.56 }}
          transition={{ duration: 0.35, delay: itemIndex * 0.06 }}
          className="flex items-center gap-3 rounded-md border border-white/10 bg-white/[0.05] p-3"
        >
          <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-brand-black ${visual.accent}`}>
            <Icon aria-hidden="true" className="h-5 w-5" />
          </span>
          <span>
            <span className="block text-sm font-bold text-white">{name}</span>
            <span className="mt-0.5 block text-sm leading-5 text-white/58">{note}</span>
          </span>
        </motion.div>
      );
      })}
      <BenefitList wins={visual.wins} visual={visual} />
    </div>
  );
}

function EditorialDesk({
  active,
  visual
}: {
  active: boolean;
  visual: (typeof storyVisuals)[number];
}) {
  return (
    <div className="rounded-md border border-white/10 bg-white/[0.04] p-4">
      <div className="mb-4 flex items-center justify-between">
        <span className="text-xs font-bold uppercase text-white/46">Response brief</span>
        <span className={`rounded-full px-2 py-1 text-[11px] font-bold uppercase text-brand-black ${visual.accent}`}>Draft</span>
      </div>
      {visual.wins.map((line, itemIndex) => (
        <motion.div
          key={line}
          animate={{ opacity: active ? 1 : 0.55 }}
          transition={{ duration: 0.32, delay: itemIndex * 0.05 }}
          className="mb-2.5 rounded-sm border-l-2 border-white/22 bg-white/[0.045] px-3 py-2 text-sm font-semibold text-white/74"
        >
          {line}
        </motion.div>
      ))}
    </div>
  );
}

function ActionTimeline({
  active,
  visual
}: {
  active: boolean;
  visual: (typeof storyVisuals)[number];
}) {
  return (
    <div className="relative grid gap-4 pl-5">
      <div className="absolute bottom-4 left-2 top-4 w-px bg-white/14" />
      {visual.wins.map((item, itemIndex) => (
        <motion.div
          key={item}
          animate={{ opacity: active ? 1 : 0.55, x: active ? 0 : 8 }}
          transition={{ duration: 0.35, delay: itemIndex * 0.07 }}
          className="relative rounded-md border border-white/10 bg-white/[0.05] p-4"
        >
          <span className={`absolute -left-[1.45rem] top-5 h-4 w-4 rounded-full border-2 border-brand-black ${visual.accent}`} />
          <span className="text-xs font-bold uppercase text-white/42">Win {itemIndex + 1}</span>
          <p className="mt-2 font-display text-xl font-bold text-white">{item}</p>
        </motion.div>
      ))}
    </div>
  );
}

function BenefitList({
  wins,
  visual,
  className = ""
}: {
  wins: string[];
  visual: (typeof storyVisuals)[number];
  className?: string;
}) {
  return (
    <div className={`grid gap-1.5 ${className}`}>
      {wins.map((win) => (
        <div
          key={win}
          className="flex items-center gap-2 rounded-full bg-brand-black/82 px-3 py-2 text-xs font-bold text-white/82"
        >
          <span className={`h-2 w-2 shrink-0 rounded-full ${visual.accent}`} />
          {win}
        </div>
      ))}
    </div>
  );
}
