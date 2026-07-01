"use client";

import { DemoRequestButton } from "@/components/DemoRequestButton";

const dockItems = [
  { label: "Platforms", href: "#platforms" },
  { label: "Flow", href: "#story" },
  { label: "Expertise", href: "#expertise" },
  { label: "Clients", href: "#trust" }
];

export function NavigationDock() {
  return (
    <nav
      aria-label="Primary"
      className="pointer-events-none fixed inset-x-0 top-3 z-50 flex justify-center px-3 sm:top-4"
    >
      <div className="pointer-events-auto grid max-w-full grid-cols-[6.75rem_minmax(0,1fr)_6.75rem] items-center gap-1 overflow-x-auto rounded-full border border-brand-black/10 bg-white/86 p-1.5 shadow-[0_16px_54px_rgba(15,15,15,0.12)] backdrop-blur-xl max-[520px]:grid-cols-[minmax(0,1fr)_auto] max-[420px]:w-full">
        <a
          href="#main-content"
          className="hidden min-h-8 items-center justify-center rounded-full px-3 text-xs font-bold uppercase text-brand-black/64 transition hover:bg-brand-offwhite hover:text-brand-black sm:inline-flex max-[520px]:hidden"
        >
          R4P AI
        </a>
        <div className="flex min-w-0 items-center justify-center gap-1 overflow-x-auto max-[520px]:justify-start">
          {dockItems.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="inline-flex min-h-8 shrink-0 items-center whitespace-nowrap rounded-full px-3 text-xs font-semibold text-brand-graphite transition hover:bg-brand-offwhite hover:text-brand-black max-[390px]:px-2"
            >
              {label}
            </a>
          ))}
        </div>
        <DemoRequestButton variant="dock">
          Demo
        </DemoRequestButton>
      </div>
    </nav>
  );
}
