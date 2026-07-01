import Link from "next/link";
import { ArrowRight } from "lucide-react";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "light";
};

export function ButtonLink({
  href,
  children,
  variant = "primary"
}: ButtonLinkProps) {
  const styles = {
    primary:
      "bg-brand-black text-brand-offwhite hover:bg-brand-warm focus-visible:outline-brand-yellow",
    secondary:
      "border border-brand-black/15 bg-brand-offwhite text-brand-black hover:border-brand-black/40 hover:bg-white",
    light:
      "bg-brand-yellow text-brand-black hover:bg-[#FFE45A] focus-visible:outline-white"
  };

  return (
    <Link
      href={href}
      className={`inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full px-6 text-center text-sm font-semibold transition duration-300 ease-editorial sm:w-auto ${styles[variant]}`}
    >
      {children}
      <ArrowRight aria-hidden="true" className="h-4 w-4" />
    </Link>
  );
}
