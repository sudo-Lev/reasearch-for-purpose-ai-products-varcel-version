"use client";

import { FormEvent, useCallback, useEffect, useId, useState } from "react";
import { createPortal } from "react-dom";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Clock3,
  Mail,
  MessageSquareText,
  Send,
  UserRound,
  X
} from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "@/components/motion";

type DemoRequestButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "light" | "header" | "dock";
  className?: string;
};

const demoRequestWorkerEndpoint = "/api/demo-requests";

type DemoRequestStatus = "idle" | "submitting" | "sent";

type DemoRequestPayload = {
  name: string;
  email: string;
  company: string;
  interest: string;
  message: string;
  source: "ai-platforms-page";
  submittedAt: string;
};

async function mockSubmitDemoRequest(payload: DemoRequestPayload) {
  await new Promise((resolve) => window.setTimeout(resolve, 650));

  console.info("Mock demo request Worker submission", {
    endpoint: demoRequestWorkerEndpoint,
    method: "POST",
    payload
  });

  return { ok: true };
}

export function DemoRequestButton({
  children,
  variant = "primary",
  className = ""
}: DemoRequestButtonProps) {
  const [isOpen, setIsOpen] = useState(false);

  const styles = {
    primary:
      "inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-brand-black px-6 text-center text-sm font-semibold text-brand-offwhite transition duration-300 ease-editorial hover:bg-brand-warm focus-visible:outline-brand-yellow sm:w-auto",
    light:
      "inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-brand-yellow px-6 text-center text-sm font-semibold text-brand-black transition duration-300 ease-editorial hover:bg-[#FFE45A] focus-visible:outline-white sm:w-auto",
    header:
      "hidden min-h-11 items-center rounded-full border border-brand-black/15 px-5 text-sm font-semibold text-brand-black transition hover:border-brand-black/35 hover:bg-white sm:inline-flex",
    dock:
      "inline-flex min-h-8 shrink-0 items-center justify-center gap-1.5 rounded-full bg-brand-black px-3 text-xs font-bold text-white transition hover:bg-brand-yellow hover:text-brand-black max-[390px]:px-2.5"
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className={`${styles[variant]} ${className}`}
      >
        {children}
        {variant === "dock" ? (
          <ArrowRight aria-hidden="true" className="h-3.5 w-3.5" />
        ) : variant === "header" ? null : (
          <ArrowRight aria-hidden="true" className="h-4 w-4" />
        )}
      </button>
      {typeof document !== "undefined"
        ? createPortal(
            <DemoRequestModal isOpen={isOpen} onClose={() => setIsOpen(false)} />,
            document.body
          )
        : null}
    </>
  );
}

function DemoRequestModal({
  isOpen,
  onClose
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const titleId = useId();
  const descriptionId = useId();
  const reduceMotion = useReducedMotion();
  const [status, setStatus] = useState<DemoRequestStatus>("idle");
  const closeModal = useCallback(() => {
    setStatus("idle");
    onClose();
  }, [onClose]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [closeModal, isOpen]);

  const submitRequest = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const payload: DemoRequestPayload = {
      name: String(formData.get("name") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      company: String(formData.get("company") ?? "").trim(),
      interest: String(formData.get("interest") ?? "").trim(),
      message: String(formData.get("message") ?? "").trim(),
      source: "ai-platforms-page",
      submittedAt: new Date().toISOString()
    };

    setStatus("submitting");
    await mockSubmitDemoRequest(payload);
    setStatus("sent");
  };

  return (
    <AnimatePresence>
      {isOpen ? (
        <motion.div
          className="fixed inset-0 z-[100] flex items-end justify-center overflow-y-auto bg-brand-black/42 px-3 py-3 backdrop-blur-sm sm:items-center sm:px-5 sm:py-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reduceMotion ? 0 : 0.22 }}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              closeModal();
            }
          }}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            aria-describedby={descriptionId}
            className="relative max-h-[94dvh] w-full max-w-xl overflow-y-auto rounded-lg border border-brand-black/10 bg-brand-offwhite text-brand-black shadow-[0_24px_72px_rgba(15,15,15,0.24)]"
            initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 24, scale: 0.98 }}
            animate={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 18, scale: 0.98 }}
            transition={{ duration: reduceMotion ? 0 : 0.32, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="absolute inset-x-0 top-0 h-1 bg-brand-yellow" />
            <button
              type="button"
              onClick={closeModal}
              aria-label="Close demo request"
              className="absolute right-3 top-3 z-20 inline-flex h-9 w-9 items-center justify-center rounded-full border border-brand-black/10 bg-white/86 text-brand-black shadow-[0_8px_24px_rgba(15,15,15,0.10)] backdrop-blur transition hover:bg-brand-yellow"
            >
              <X aria-hidden="true" className="h-4 w-4" />
            </button>

            <div className="p-5 pt-12 sm:p-7 sm:pt-12">
              <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-brand-black/10 bg-white px-3 py-1.5 text-[11px] font-bold uppercase text-brand-graphite">
                <Clock3 aria-hidden="true" className="h-4 w-4 text-brand-yellow" />
                30-minute demo
              </p>
              <h2
                id={titleId}
                className="max-w-lg font-display text-2xl font-bold leading-tight text-brand-black sm:text-3xl"
              >
                Request a demo tailored to your work.
              </h2>
              <p
                id={descriptionId}
                className="mt-3 max-w-lg text-sm leading-6 text-brand-graphite sm:text-base"
              >
                Share the essentials and we will route your request to the R4P
                team.
              </p>

              <form onSubmit={submitRequest} className="mt-5 grid gap-3">
                <div className="grid gap-3 sm:grid-cols-2">
                  <Field icon={UserRound} label="Your name" name="name" autoComplete="name" required />
                  <Field icon={Mail} label="Work email" name="email" type="email" autoComplete="email" required />
                </div>
                <Field icon={Building2} label="Organisation" name="company" autoComplete="organization" />
                <label className="grid gap-2 text-sm font-semibold text-brand-black">
                  Main interest
                  <select
                    name="interest"
                    className="min-h-11 rounded-md border border-brand-black/12 bg-white px-4 text-sm text-brand-black shadow-line outline-none transition focus:border-brand-yellow focus:ring-4 focus:ring-brand-yellow/20"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Choose a focus area
                    </option>
                    <option>Social listening and intelligence</option>
                    <option>Misinformation detection</option>
                    <option>Audience simulation</option>
                    <option>Evidence-led content creation</option>
                    <option>Not sure yet</option>
                  </select>
                </label>
                <label className="grid gap-2 text-sm font-semibold text-brand-black">
                  Context
                  <span className="relative">
                    <MessageSquareText
                      aria-hidden="true"
                      className="pointer-events-none absolute left-4 top-4 h-4 w-4 text-brand-graphite"
                    />
                    <textarea
                      name="message"
                      rows={3}
                      placeholder="What are you hoping to understand or improve?"
                      className="min-h-24 w-full resize-none rounded-md border border-brand-black/12 bg-white py-3 pl-11 pr-4 text-sm leading-6 text-brand-black shadow-line outline-none transition placeholder:text-brand-graphite/62 focus:border-brand-yellow focus:ring-4 focus:ring-brand-yellow/20"
                    />
                  </span>
                </label>

                <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <button
                    type="submit"
                    disabled={status === "submitting" || status === "sent"}
                    className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-brand-black px-5 text-sm font-bold text-white transition hover:bg-brand-yellow hover:text-brand-black disabled:cursor-default disabled:bg-brand-black disabled:text-white disabled:opacity-74"
                  >
                    {status === "submitting"
                      ? "Sending..."
                      : status === "sent"
                        ? "Request sent"
                        : "Send request"}
                    {status === "sent" ? (
                      <CheckCircle2 aria-hidden="true" className="h-4 w-4" />
                    ) : (
                      <Send aria-hidden="true" className="h-4 w-4" />
                    )}
                  </button>
                  <p className="flex items-center gap-2 text-sm font-medium text-brand-graphite">
                    <CheckCircle2 aria-hidden="true" className="h-4 w-4 text-brand-yellow" />
                    {status === "sent"
                      ? "Mocked Worker handoff complete."
                      : "Short and human."}
                  </p>
                </div>
              </form>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

function Field({
  icon: Icon,
  label,
  name,
  type = "text",
  autoComplete,
  required = false
}: {
  icon: typeof UserRound;
  label: string;
  name: string;
  type?: string;
  autoComplete?: string;
  required?: boolean;
}) {
  return (
    <label className="grid gap-2 text-sm font-semibold text-brand-black">
      {label}
      <span className="relative">
        <Icon
          aria-hidden="true"
          className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-brand-graphite"
        />
        <input
          name={name}
          type={type}
          autoComplete={autoComplete}
          required={required}
          className="min-h-12 w-full rounded-md border border-brand-black/12 bg-white py-3 pl-11 pr-4 text-sm text-brand-black shadow-line outline-none transition placeholder:text-brand-graphite/62 focus:border-brand-yellow focus:ring-4 focus:ring-brand-yellow/24"
        />
      </span>
    </label>
  );
}
