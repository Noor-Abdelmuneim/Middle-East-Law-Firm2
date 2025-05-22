"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Award,
  Users,
  ShieldCheck,
  Globe,
  Clock,
  Target,
  Lightbulb,
  CheckCircle,
} from "lucide-react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function AboutPage() {
  const { t } = useTranslation("about");
  const coreValueIcons = [
    <ShieldCheck size={32} />,
    <Award size={32} />,
    <Users size={32} />,
    <Globe size={32} />,
    <Clock size={32} />,
  ];
  const stats = [
    { value: "250+", label: t("stats.items.0.label") },
    { value: "200+", label: t("stats.items.1.label") },
    { value: "700+", label: t("stats.items.2.label") },
    { value: "96%", label: t("stats.items.3.label") },
    { value: "50+", label: t("stats.items.4.label") },
    { value: "2012", label: t("stats.items.5.label") },
  ];
  return (
    <div className="font-tajawal">
      {/* Hero Section */}
      <section
        className="relative py-20 text-white md:py-32 bg-fixed bg-center bg-cover"
        style={{
          backgroundImage:
            "url('https://i.pinimg.com/736x/6b/e7/d9/6be7d911950bf0e0a4af793b24eecf59.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60" />
        <motion.div
          className="relative container mx-auto px-4 sm:px-6 lg:px-8"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
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

      {/* Our Story Section */}
      <section className="py-20">
        <motion.div
          className="container mx-auto px-4 sm:px-6 lg:px-8"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
                {t("story.title")}
              </h2>
              <div className="mt-6 space-y-4 text-gray-600">
                {t("story.paragraphs", { returnObjects: true }).map(
                  (para, idx) => (
                    <p key={idx}>{para}</p>
                  )
                )}
              </div>
            </div>
            <div className="relative mx-auto h-[400px] w-full max-w-[500px]">
              <motion.div
                className="absolute inset-0 flex items-center justify-center p-8"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.2 }}
              >
                <Image
                  src="/logo.png"
                  alt="Middle East Law Firm Logo"
                  width={300}
                  height={300}
                  className="h-auto w-auto rounded-lg transition-transform duration-300 ease-in-out hover:scale-110"
                />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="bg-gray-50 py-20">
        <motion.div
          className="container mx-auto px-4 sm:px-6 lg:px-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
        >
          <div className="grid gap-12 md:grid-cols-2">
            {["mission", "vision"].map((key, i) => (
              <Card key={key} className="overflow-hidden">
                <div className="h-2 bg-primary"></div>
                <CardContent className="p-8">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                    {key === "mission" ? (
                      <Target size={32} />
                    ) : (
                      <Lightbulb size={32} />
                    )}
                  </div>
                  <h3 className="mb-4 text-2xl font-bold">
                    {t(`${key}.title`)}
                  </h3>
                  <motion.div
                    className="space-y-4 text-gray-600"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9 }}
                    viewport={{ once: true }}
                  >
                    {t(`${key}.paragraphs`, { returnObjects: true }).map(
                      (p, idx) => (
                        <p key={idx}>{p}</p>
                      )
                    )}
                  </motion.div>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Our Approach Section */}
      <section className="py-20">
        <motion.div
          className="container mx-auto px-4 sm:px-6 lg:px-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
        >
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
              {t("approach.title")}
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              {t("approach.description")}
            </p>
          </div>

          <motion.div
            className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
          >
            {Array.from({ length: 6 }).map((_, i) => (
              <Card
                key={i}
                className="overflow-hidden transition-all duration-300 hover:shadow-lg"
              >
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <CheckCircle size={24} />
                  </div>
                  <h3 className="mb-2 text-xl font-bold">
                    {t(`approach.items.${i}.title`)}
                  </h3>
                  <p className="text-gray-600">
                    {t(`approach.items.${i}.description`)}
                  </p>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        </motion.div>
      </section>
      {/* Core Values Section */}
      <section className="bg-gray-50 py-20">
        <motion.div
          className="container mx-auto px-4 sm:px-6 lg:px-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
              {t("values.title")}
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              {t("values.description")}
            </p>
          </div>
          <motion.div
            className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-5"
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                  {coreValueIcons[i]}
                </div>
                <h3 className="mb-2 text-xl font-bold">
                  {t(`values.items.${i}.title`)}
                </h3>
                <p className="text-gray-600">
                  {t(`values.items.${i}.description`)}
                </p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="mx-auto max-w-3xl text-center"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
              {t("stats.title")}
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              {t("stats.description")}
            </p>
          </motion.div>

          <motion.div
            className="mt-12 grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <p className="text-3xl font-bold text-primary md:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm font-medium text-gray-600 md:text-base">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
      {/* CTA Section */}
     <section className="bg-primary py-20 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="mx-auto max-w-4xl text-center"
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold md:text-4xl">
              {t("cta.title")}
            </h2>
            <p className="mt-4 text-lg text-white/90">
              {t("cta.description")}
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-white text-primary hover:bg-white/90"
              >
                <Link href="/contact">{t("cta.contact")}</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white text-primary hover:bg-white/10"
              >
                <Link href="/services">{t("cta.services")}</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
