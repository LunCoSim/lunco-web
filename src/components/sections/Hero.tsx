"use client";

import { Icons } from "../icons";
import Link from "next/link";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Section } from "../ui/Section";

export default function Hero() {
  return (
    <Section id="hero" className="my-5 mx-2 lg:mx-0">
      <Link
        href="https://juicebox.money/@lunco"
        className="flex flex-col items-center justify-center"
      >
        <div className="px-3 py-2 border rounded-full hover:scale-105 transition-transform duration-75 shine shine-hover backdrop-blur-sm">
          <div className="flex justify-center gap-3 items-center">
            <Icons.logo width={25} height={25} />
            <p className="primary-gradient">Support us ☰Crowdfunding</p>
          </div>
        </div>
      </Link>
      <h1 className="text-lg lg:text-lg max-w-7xl text-center my-5">
        We create an open source software for{" "}
        <span className="primary-gradient">Space Missions Engineering</span>
      </h1>
      <div className="flex justify-center items-center">
        <h1 className="hidden lg:block font-heading tracking-wider leading-relaxed text-7xl lg:text-8xl text-justify">
          Simulate with&nbsp;
        </h1>
        <BigLogo />
      </div>
      <div className="relative">
        <div className="absolute top-0 left-0 container mx-auto -translate-y-[50%]"></div>
        <HeaderVideo />
      </div>
    </Section>
  );
}

const BigLogo = () => {
  return (
    <section id="big-logo" className="flex justify-center items-center">
      <h1 className="font-heading tracking-wider leading-relaxed text-8xl lg:text-8xl text-justify primary-gradient">
        LunC
      </h1>
      <div className="flex -translate-y-2">
        <Icons.logo width={75} height={75} />
      </div>
    </section>
  );
};

const HeaderVideo = () => {
  const scrollRef = useRef<any>(null);
  const { scrollYProgress } = useScroll();

  return (
    <motion.section
      className="max-w-5xl border border-muted rounded-md p-2 backdrop-blur-sm my-6 lg:my-20"
      style={{
        opacity: useTransform(scrollYProgress, [0, 1], [1, 0.3]),
        scale: useTransform(scrollYProgress, [0, 1], [1, 0.4]),
      }}
      ref={scrollRef}
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
      >
        <source src="/videos/main.mp4" type="video/mp4" />
      </video>
    </motion.section>
  );
}; 