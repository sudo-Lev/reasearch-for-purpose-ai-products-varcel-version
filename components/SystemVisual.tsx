"use client";

import { ArrowRight, CheckCircle2, FileText, Globe2, MessageSquareText, UsersRound } from "lucide-react";
import { motion, useReducedMotion } from "@/components/motion";

type SystemVisualProps = {
  compact?: boolean;
  label?: string;
};

const sources = [
  { label: "Public conversations", icon: MessageSquareText },
  { label: "Open channels", icon: Globe2 },
  { label: "Audience context", icon: UsersRound },
  { label: "Research inputs", icon: FileText }
];

const platformFlow = ["Listen", "Detect", "Simulate", "Create", "Act"];

export function SystemVisual({ compact = false, label = "Platform system visual" }: SystemVisualProps) {
  const reduceMotion = useReducedMotion();

  return (
    <div
      aria-label={label}
      role="img"
      className={`relative overflow-hidden rounded-lg border border-brand-black/10 bg-brand-warm p-4 text-brand-offwhite shadow-editorial ${
        compact ? "min-h-[300px]" : "min-h-[420px] lg:min-h-[500px]"
      }`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_12%,rgba(255,215,0,0.14),transparent_18rem)]" />
      <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-4 text-xs uppercase text-white/60">
        <span>R4P platform workflow</span>
        <span>Human-led AI</span>
      </div>

      <div className="relative z-10 grid gap-4 pt-5 lg:grid-cols-[0.9fr_auto_1.1fr] lg:items-stretch">
        <div className="grid gap-2">
          <p className="mb-1 text-xs font-semibold uppercase text-white/48">Information environment</p>
          {sources.map((source, index) => {
            const Icon = source.icon;

            return (
              <motion.div
                key={source.label}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.45 }}
                transition={{ duration: reduceMotion ? 0 : 0.45, delay: index * 0.06 }}
                className="flex items-center gap-3 rounded-md border border-white/10 bg-white/[0.06] p-3"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded bg-white/[0.08] text-brand-yellow">
                  <Icon aria-hidden="true" className="h-4 w-4" />
                </span>
                <span className="text-sm font-semibold leading-tight text-white/82">{source.label}</span>
              </motion.div>
            );
          })}
        </div>

        <div className="hidden w-14 items-center justify-center lg:flex">
          <motion.div
            aria-hidden="true"
            animate={reduceMotion ? undefined : { opacity: [0.45, 1, 0.45] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
            className="flex h-14 w-14 items-center justify-center rounded-full border border-brand-yellow/50 bg-brand-yellow/15 text-brand-yellow"
          >
            <ArrowRight className="h-5 w-5" />
          </motion.div>
        </div>

        <div className="rounded-md border border-brand-yellow/30 bg-brand-yellow/[0.08] p-4">
          <p className="text-xs font-semibold uppercase text-brand-yellow">AI platform sequence</p>
          <div className="mt-4 grid gap-2">
            {platformFlow.map((step, index) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.45 }}
                transition={{ duration: reduceMotion ? 0 : 0.45, delay: 0.16 + index * 0.06 }}
                className="grid grid-cols-[72px_1fr] items-center gap-3"
              >
                <span className="text-xs font-semibold uppercase text-white/50">{step}</span>
                <span className="h-2 rounded-full bg-white/12">
                  <motion.span
                    className="block h-full rounded-full bg-brand-yellow"
                    initial={{ width: "18%" }}
                    whileInView={{ width: `${42 + index * 10}%` }}
                    viewport={{ once: true, amount: 0.55 }}
                    transition={{ duration: reduceMotion ? 0 : 0.8, delay: 0.24 + index * 0.08 }}
                  />
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="relative z-10 mt-4 grid gap-3 md:grid-cols-[1fr_auto_1fr] md:items-center">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: reduceMotion ? 0 : 0.5, delay: 0.42 }}
          className="rounded-md border border-white/10 bg-white/[0.07] p-4"
        >
          <div className="mb-5 flex items-center justify-between">
            <span className="text-xs font-semibold uppercase text-white/48">Machine processing</span>
            <span className="h-2 w-2 rounded-full bg-brand-yellow" />
          </div>
          <div className="space-y-2">
            <div className="h-2 w-11/12 rounded-full bg-white/14" />
            <div className="h-2 w-7/12 rounded-full bg-white/14" />
            <div className="h-2 w-9/12 rounded-full bg-white/14" />
          </div>
        </motion.div>

        <ArrowRight aria-hidden="true" className="mx-auto hidden h-5 w-5 text-brand-yellow md:block" />

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: reduceMotion ? 0 : 0.5, delay: 0.52 }}
          className="rounded-md border border-brand-yellow/40 bg-brand-yellow p-4 text-brand-black"
        >
          <div className="mb-5 flex items-center justify-between">
            <span className="text-xs font-bold uppercase">Expert analysis</span>
            <CheckCircle2 aria-hidden="true" className="h-4 w-4" />
          </div>
          <p className="font-display text-2xl font-medium leading-tight">
            Clear briefings, risks, and recommended action.
          </p>
        </motion.div>
      </div>

      <motion.div
        aria-hidden="true"
        className="absolute -bottom-10 -right-10 h-44 w-44 rounded-full border border-brand-yellow/30 bg-brand-yellow/10 blur-2xl"
        animate={reduceMotion ? undefined : { scale: [1, 1.08, 1], opacity: [0.32, 0.5, 0.32] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
