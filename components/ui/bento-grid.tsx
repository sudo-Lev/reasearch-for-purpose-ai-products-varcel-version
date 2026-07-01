import { type ComponentPropsWithoutRef, type ReactNode } from "react";
import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";

interface BentoGridProps extends ComponentPropsWithoutRef<"div"> {
  children: ReactNode;
  className?: string;
}

interface BentoCardProps extends ComponentPropsWithoutRef<"div"> {
  name: string;
  className: string;
  background: ReactNode;
  Icon: React.ElementType;
  description: string;
  href: string;
  cta: string;
}

const BentoGrid = ({ children, className, ...props }: BentoGridProps) => {
  return (
    <div
      className={cn(
        "grid w-full auto-rows-[22rem] grid-cols-1 gap-4 lg:grid-cols-3",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

const BentoCard = ({
  name,
  className,
  background,
  Icon,
  description,
  href,
  cta,
  ...props
}: BentoCardProps) => (
  <article
    key={name}
    className={cn(
      "group relative col-span-1 flex flex-col justify-between overflow-hidden rounded-lg border border-brand-black/10 bg-white",
      "shadow-line transform-gpu transition duration-500 hover:-translate-y-1 hover:border-brand-black/25 hover:shadow-editorial",
      className
    )}
    {...props}
  >
    <div className="absolute inset-0">{background}</div>
    <div className="relative z-10 mt-auto p-5 sm:p-6">
      <div className="pointer-events-none z-10 flex transform-gpu flex-col gap-1 transition-all duration-300 lg:group-hover:-translate-y-10">
        <Icon className="mb-2 h-11 w-11 origin-left transform-gpu rounded-md bg-brand-black p-3 text-brand-yellow transition-all duration-300 ease-in-out group-hover:scale-75" />
        <h3 className="font-display text-2xl font-semibold leading-tight text-brand-black">
          {name}
        </h3>
        <p className="max-w-lg text-base leading-7 text-brand-graphite">
          {description}
        </p>
      </div>

      <div
        className={cn(
          "pointer-events-none flex w-full translate-y-0 transform-gpu flex-row items-center transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 lg:hidden"
        )}
      >
        <a
          href={href}
          className="pointer-events-auto mt-4 inline-flex min-h-10 items-center gap-2 text-sm font-semibold text-brand-black"
        >
          {cta}
          <ArrowRight aria-hidden="true" className="h-4 w-4" />
        </a>
      </div>
    </div>

    <div
      className={cn(
        "pointer-events-none absolute bottom-0 hidden w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 lg:flex"
      )}
    >
      <a
        href={href}
        className="pointer-events-auto inline-flex min-h-10 items-center gap-2 text-sm font-semibold text-brand-black"
      >
        {cta}
        <ArrowRight aria-hidden="true" className="h-4 w-4 transition group-hover:translate-x-1" />
      </a>
    </div>

    <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-brand-yellow/[0.03]" />
  </article>
);

export { BentoCard, BentoGrid };
