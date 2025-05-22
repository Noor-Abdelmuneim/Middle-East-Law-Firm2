"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function CTASection({ t }) {
  return (
    <section className="bg-primary py-20 text-white font-tajawal">
      <motion.div
        className="container mx-auto px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold md:text-4xl">{t("ctaFinal.title")}</h2>
          <p className="mt-4 text-lg text-white/90">{t("ctaFinal.description")}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
              <Link href="/contact">{t("ctaFinal.contactButton")}</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-primary hover:bg-white/10"
            >
              <Link href="/team">{t("ctaFinal.teamButton")}</Link>
            </Button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
