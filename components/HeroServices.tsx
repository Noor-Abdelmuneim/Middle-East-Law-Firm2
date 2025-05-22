"use client";

import { motion } from "framer-motion";

export default function HeroSection({ t }) {
  return (
    <section className="font-tajawal hero-pattern bg-primary py-20 text-white md:py-32">
      <motion.div
        className="container mx-auto px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl">
            {t("hero.title")}
          </h1>
          <p className="mt-6 text-lg text-white/90 md:text-xl">
            {t("hero.description")}
          </p>
        </div>
      </motion.div>
    </section>
  );
}
