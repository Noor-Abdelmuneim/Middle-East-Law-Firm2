"use client";

import { motion } from "framer-motion";

export default function ProcessSection({ t }) {
  const steps = t("process.steps", { returnObjects: true });

  return (
    <section className="py-20 font-tajawal">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">{t("process.title")}</h2>
          <p className="mt-4 text-lg text-gray-600">{t("process.description")}</p>
        </motion.div>

        <motion.div
          className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white">
                <span className="text-xl font-bold">{index + 1}</span>
              </div>
              <h3 className="mb-2 text-xl font-bold">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
              {index !== 3 && (
                <div className="absolute right-0 top-8 hidden h-1 w-full bg-primary/30 lg:block"></div>
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
