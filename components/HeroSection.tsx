"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { ChevronDown, Play, RadioTower, ScanLine } from "lucide-react";
import { AccentTitle } from "@/components/AccentTitle";
import { ButtonLink } from "@/components/ButtonLink";
import { motion, reveal, stagger } from "@/components/motion";
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";
import { BorderBeam } from "@/components/ui/border-beam";
import { ShimmerButton } from "@/components/ui/shimmer-button";

export function HeroSection() {
  return (
    <section className="noise relative px-4 pb-8 pt-5 sm:px-8 lg:min-h-dvh lg:px-10 lg:pb-10 lg:pt-6">
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col">
        <header className="flex min-h-14 items-center justify-between">
          <Link href="/aiplatforms" className="font-semibold text-brand-black">
            Research for Purpose
          </Link>
          <a
            href="mailto:hello@researchforpurpose.com?subject=AI%20Platforms%20demo"
            className="hidden min-h-11 items-center rounded-full border border-brand-black/15 px-5 text-sm font-semibold text-brand-black transition hover:border-brand-black/35 hover:bg-white sm:inline-flex"
          >
            Request a demo
          </a>
        </header>

        <div className="grid gap-8 py-10 sm:py-14 lg:min-h-[calc(100dvh-5rem)] lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:gap-12 lg:py-20">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="max-w-4xl"
          >
            <motion.p
              variants={reveal}
              className="mb-6 inline-flex rounded-full border border-brand-black/10 bg-white/70 px-4 py-2 text-xs font-semibold uppercase"
            >
              <AnimatedShinyText
                shimmerWidth={120}
                className="text-brand-graphite"
              >
                Research for Purpose · AI Platforms
              </AnimatedShinyText>
            </motion.p>
            <motion.h1
              variants={reveal}
              className="text-balance break-words font-display text-[2.65rem] font-bold leading-[1.04] text-brand-black sm:text-6xl md:text-7xl 2xl:text-8xl"
            >
              Intelligence tools built for{" "}
              <AccentTitle>complex</AccentTitle> information environments
            </motion.h1>
            <motion.p
              variants={reveal}
              className="mt-6 max-w-2xl text-lg leading-8 text-brand-graphite sm:text-xl"
            >
              Four platforms. One team. Configured, supported, and interpreted
              by R4P researchers and specialists, not dashboards you deploy
              alone.
            </motion.p>
            <motion.div variants={reveal} className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="mailto:hello@researchforpurpose.com?subject=AI%20Platforms%20demo">
                Request a demo
              </ButtonLink>
              <ButtonLink href="#platforms" variant="secondary">
                Explore our AI platforms
              </ButtonLink>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.18 }}
            className="lg:pl-4"
          >
            <HeroVideoPanel />
          </motion.div>
        </div>

        <a
          href="#platforms"
          aria-label="Scroll to platform overview"
          className="absolute bottom-3 left-0 hidden min-h-11 items-center gap-2 text-sm font-semibold text-brand-graphite transition hover:text-brand-black md:flex"
        >
          <ChevronDown aria-hidden="true" className="h-4 w-4" />
          Scroll
        </a>
      </div>
    </section>
  );
}

function HeroVideoPanel() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isFullVideo, setIsFullVideo] = useState(false);

  const playFullVideo = () => {
    setIsFullVideo(true);

    window.setTimeout(() => {
      const video = videoRef.current;

      if (!video) {
        return;
      }

      video.muted = false;
      video.currentTime = 0;
      void video.play();
    }, 0);
  };

  return (
    <div className="relative overflow-hidden rounded-lg border border-brand-black/10 bg-brand-black p-2 shadow-editorial sm:p-3">
      <BorderBeam
        size={180}
        duration={9}
        colorFrom="#FFD700"
        colorTo="#FFFFFF"
        borderWidth={2}
        className="opacity-70"
      />
      <div className="relative aspect-[16/11] overflow-hidden rounded-md bg-brand-black sm:aspect-[16/10]">
        <video
          ref={videoRef}
          key={isFullVideo ? "full-intro" : "preview-loop"}
          className="h-full w-full object-cover"
          src={isFullVideo ? "/r4p-ai-platforms-intro-full.mp4" : "/hero-loop.mp4"}
          poster="/hero-video-poster.jpg"
          autoPlay
          muted={!isFullVideo}
          loop={!isFullVideo}
          controls={isFullVideo}
          playsInline
          preload={isFullVideo ? "auto" : "metadata"}
          aria-label={isFullVideo ? "Full R4P AI platforms intro video" : "R4P AI platforms intro preview"}
        />
        {!isFullVideo ? (
          <>
            <div className="hero-video-grain pointer-events-none absolute inset-0 mix-blend-screen opacity-35" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-brand-black via-brand-black/50 to-transparent" />
            <div className="absolute left-1/2 top-1/2 z-30 -translate-x-1/2 -translate-y-1/2">
              <ShimmerButton
                type="button"
                onClick={playFullVideo}
                shimmerColor="#FFFFFF"
                shimmerDuration="3.5s"
                background="#FFD700"
                foreground="#0F0F0F"
                className="h-20 w-20 border-white/40 shadow-[0_18px_60px_rgba(15,15,15,0.34)] [--button-padding-x:0rem] [--button-padding-y:0rem] hover:scale-105 focus-visible:outline-brand-yellow"
                aria-label="Play full intro video"
              >
                <Play aria-hidden="true" className="ml-1 h-9 w-9 fill-current" />
              </ShimmerButton>
            </div>
            <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-white/12 bg-black/48 px-3 py-2 text-xs font-semibold uppercase text-white/86 backdrop-blur">
              <Play aria-hidden="true" className="h-3.5 w-3.5 fill-brand-yellow text-brand-yellow" />
              Intro preview
            </div>
            <div className="absolute right-4 top-4 z-30 hidden sm:block">
              <ShimmerButton
                type="button"
                onClick={playFullVideo}
                shimmerColor="#FFD700"
                shimmerSize="0.04em"
                shimmerDuration="4s"
                background="rgba(255, 255, 255, 0.9)"
                foreground="#0F0F0F"
                className="min-h-10 gap-2 border-brand-black/10 text-xs font-bold uppercase shadow-[0_14px_40px_rgba(15,15,15,0.12)] [--button-padding-x:1rem] [--button-padding-y:0.5rem] backdrop-blur hover:border-brand-yellow"
              >
                Watch full intro
                <Play aria-hidden="true" className="h-3.5 w-3.5 fill-current" />
              </ShimmerButton>
            </div>
            <div className="absolute bottom-3 left-3 right-3 hidden gap-3 sm:grid sm:grid-cols-2">
              <div className="rounded-md border border-white/14 bg-brand-black/70 p-4 text-white shadow-[0_18px_60px_rgba(0,0,0,0.24)] backdrop-blur-md">
                <div className="mb-3 flex items-center gap-2 text-xs font-bold uppercase text-brand-yellow">
                  <RadioTower aria-hidden="true" className="h-4 w-4" />
                  Signals
                </div>
                <p className="text-sm font-semibold leading-5 text-white">
                  Social listening, misinformation detection, audience
                  simulation, and evidence-led content creation.
                </p>
                <div className="mt-4 grid grid-cols-3 gap-2">
                  {["Listen", "Detect", "Act"].map((signal) => (
                    <span
                      key={signal}
                      className="rounded-full border border-white/10 bg-white/10 px-2 py-1 text-center text-[11px] font-bold uppercase text-white/82"
                    >
                      {signal}
                    </span>
                  ))}
                </div>
              </div>
              <div className="rounded-md border border-brand-yellow/30 bg-brand-yellow p-4 text-brand-black">
                <div className="mb-3 flex items-center gap-2 text-xs font-bold uppercase">
                  <ScanLine aria-hidden="true" className="h-4 w-4" />
                  Analysis ready
                </div>
                <p className="text-sm font-semibold leading-5">
                  Watch the full introduction to R4P AI platforms in this panel.
                </p>
              </div>
            </div>
            <div className="absolute bottom-3 left-3 right-3 rounded-md border border-white/14 bg-brand-black/74 p-3 text-white backdrop-blur-md sm:hidden">
              <p className="text-xs font-bold uppercase text-brand-yellow">
                Signals ready
              </p>
              <p className="mt-1 text-sm font-semibold leading-5">
                Watch the intro or jump straight into the platforms below.
              </p>
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
}
