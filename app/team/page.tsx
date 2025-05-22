"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function TeamPage() {
  const { t } = useTranslation("teamMember");

  return (
    <div className="font-tajawal">
      {/* Hero Section */}
      <section className="hero-pattern bg-primary py-20 text-white md:py-32">
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

      {/* Team Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="mx-auto max-w-3xl text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
              {t("overview.title")}
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              {t("overview.description")}
            </p>
          </motion.div>

          <motion.div
            className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Team Member 1 */}
            <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
              <div className="h-2 bg-primary"></div>
              <CardContent className="p-6">
                <div className="mb-4 aspect-square overflow-hidden rounded-full bg-primary/10">
                  <div className="flex h-full w-full items-center justify-center text-4xl font-bold text-primary">
                    AM
                  </div>
                </div>
                <h3 className="mb-1 text-xl font-bold">Ahmed Mohammed</h3>
                <p className="mb-3 text-primary">Managing Partner</p>
                <p className="mb-4 text-gray-600">
                  With over 20 years of experience in corporate law, Ahmed leads
                  our firm with vision and expertise.
                </p>
                <div className="flex space-x-3">
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full"
                  >
                    <Mail size={18} />
                    <span className="sr-only">Email</span>
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full"
                  >
                    <Phone size={18} />
                    <span className="sr-only">Phone</span>
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full"
                  >
                    <Linkedin size={18} />
                    <span className="sr-only">LinkedIn</span>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Team Member 2 */}
            <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
              <div className="h-2 bg-primary"></div>
              <CardContent className="p-6">
                <div className="mb-4 aspect-square overflow-hidden rounded-full bg-primary/10">
                  <div className="flex h-full w-full items-center justify-center text-4xl font-bold text-primary">
                    SA
                  </div>
                </div>
                <h3 className="mb-1 text-xl font-bold">Sarah Al-Jabouri</h3>
                <p className="mb-3 text-primary">Senior Litigation Attorney</p>
                <p className="mb-4 text-gray-600">
                  Sarah specializes in complex litigation with a remarkable
                  track record of successful cases.
                </p>
                <div className="flex space-x-3">
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full"
                  >
                    <Mail size={18} />
                    <span className="sr-only">Email</span>
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full"
                  >
                    <Phone size={18} />
                    <span className="sr-only">Phone</span>
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full"
                  >
                    <Linkedin size={18} />
                    <span className="sr-only">LinkedIn</span>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Team Member 3 */}
            <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
              <div className="h-2 bg-primary"></div>
              <CardContent className="p-6">
                <div className="mb-4 aspect-square overflow-hidden rounded-full bg-primary/10">
                  <div className="flex h-full w-full items-center justify-center text-4xl font-bold text-primary">
                    KH
                  </div>
                </div>
                <h3 className="mb-1 text-xl font-bold">Khalid Hassan</h3>
                <p className="mb-3 text-primary">Corporate Law Specialist</p>
                <p className="mb-4 text-gray-600">
                  Khalid provides expert guidance on corporate structuring,
                  compliance, and transactions.
                </p>
                <div className="flex space-x-3">
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full"
                  >
                    <Mail size={18} />
                    <span className="sr-only">Email</span>
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full"
                  >
                    <Phone size={18} />
                    <span className="sr-only">Phone</span>
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full"
                  >
                    <Linkedin size={18} />
                    <span className="sr-only">LinkedIn</span>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Team Member 4 */}
            <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
              <div className="h-2 bg-primary"></div>
              <CardContent className="p-6">
                <div className="mb-4 aspect-square overflow-hidden rounded-full bg-primary/10">
                  <div className="flex h-full w-full items-center justify-center text-4xl font-bold text-primary">
                    LK
                  </div>
                </div>
                <h3 className="mb-1 text-xl font-bold">Layla Karim</h3>
                <p className="mb-3 text-primary">Real Estate Law Expert</p>
                <p className="mb-4 text-gray-600">
                  Layla specializes in all aspects of real estate law, from
                  transactions to dispute resolution.
                </p>
                <div className="flex space-x-3">
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full"
                  >
                    <Mail size={18} />
                    <span className="sr-only">Email</span>
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full"
                  >
                    <Phone size={18} />
                    <span className="sr-only">Phone</span>
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full"
                  >
                    <Linkedin size={18} />
                    <span className="sr-only">LinkedIn</span>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Team Member 5 */}
            <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
              <div className="h-2 bg-primary"></div>
              <CardContent className="p-6">
                <div className="mb-4 aspect-square overflow-hidden rounded-full bg-primary/10">
                  <div className="flex h-full w-full items-center justify-center text-4xl font-bold text-primary">
                    MA
                  </div>
                </div>
                <h3 className="mb-1 text-xl font-bold">Mohammed Al-Saadi</h3>
                <p className="mb-3 text-primary">
                  Intellectual Property Specialist
                </p>
                <p className="mb-4 text-gray-600">
                  Mohammed helps clients protect their intellectual property and
                  navigate complex IP laws.
                </p>
                <div className="flex space-x-3">
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full"
                  >
                    <Mail size={18} />
                    <span className="sr-only">Email</span>
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full"
                  >
                    <Phone size={18} />
                    <span className="sr-only">Phone</span>
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full"
                  >
                    <Linkedin size={18} />
                    <span className="sr-only">LinkedIn</span>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Team Member 6 */}
            <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
              <div className="h-2 bg-primary"></div>
              <CardContent className="p-6">
                <div className="mb-4 aspect-square overflow-hidden rounded-full bg-primary/10">
                  <div className="flex h-full w-full items-center justify-center text-4xl font-bold text-primary">
                    ZA
                  </div>
                </div>
                <h3 className="mb-1 text-xl font-bold">Zainab Ali</h3>
                <p className="mb-3 text-primary">Family Law Attorney</p>
                <p className="mb-4 text-gray-600">
                  Zainab handles family law matters with sensitivity, expertise,
                  and a focus on client well-being.
                </p>
                <div className="flex space-x-3">
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full"
                  >
                    <Mail size={18} />
                    <span className="sr-only">Email</span>
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full"
                  >
                    <Phone size={18} />
                    <span className="sr-only">Phone</span>
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full"
                  >
                    <Linkedin size={18} />
                    <span className="sr-only">LinkedIn</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Button asChild size="lg">
              <Link href="/contact">{t("cta.buttonContact")}</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Team Structure */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="mx-auto max-w-3xl text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
              {t("structure.title")}
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              {t("structure.description")}
            </p>
          </motion.div>

          <motion.div
            className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
              <div className="h-2 bg-primary"></div>
              <CardContent className="p-6 text-center">
                <h3 className="mb-2 text-xl font-bold">
                  {t("structure.leadership")}
                </h3>
                <p className="text-gray-600">{t("structure.leadershipDesc")}</p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
              <div className="h-2 bg-primary"></div>
              <CardContent className="p-6 text-center">
                <h3 className="mb-2 text-xl font-bold">
                  {t("structure.practiceLeaders")}
                </h3>
                <p className="text-gray-600">
                  {t("structure.practiceLeadersDesc")}
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
              <div className="h-2 bg-primary"></div>
              <CardContent className="p-6 text-center">
                <h3 className="mb-2 text-xl font-bold">
                  {t("structure.associates")}
                </h3>
                <p className="text-gray-600">{t("structure.associatesDesc")}</p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
              <div className="h-2 bg-primary"></div>
              <CardContent className="p-6 text-center">
                <h3 className="mb-2 text-xl font-bold">
                  {t("structure.support")}
                </h3>
                <p className="text-gray-600">{t("structure.supportDesc")}</p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Expertise Areas */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="mx-auto max-w-3xl text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
              {t("expertise.title")}
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              {t("expertise.description")}
            </p>
          </motion.div>

          <motion.div
            className="mt-12 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="rounded-lg bg-primary/5 p-4 text-center">
              <p className="font-medium">{t("expertise.corporateLaw")}</p>
            </div>
            <div className="rounded-lg bg-primary/5 p-4 text-center">
              <p className="font-medium">{t("expertise.litigation")}</p>
            </div>
            <div className="rounded-lg bg-primary/5 p-4 text-center">
              <p className="font-medium">{t("expertise.realEstate")}</p>
            </div>
            <div className="rounded-lg bg-primary/5 p-4 text-center">
              <p className="font-medium">
                {t("expertise.intellectualProperty")}
              </p>
            </div>
            <div className="rounded-lg bg-primary/5 p-4 text-center">
              <p className="font-medium">{t("expertise.familyLaw")}</p>
            </div>
            <div className="rounded-lg bg-primary/5 p-4 text-center">
              <p className="font-medium">{t("expertise.taxLaw")}</p>
            </div>
            <div className="rounded-lg bg-primary/5 p-4 text-center">
              <p className="font-medium">{t("expertise.constitutionalLaw")}</p>
            </div>
            <div className="rounded-lg bg-primary/5 p-4 text-center">
              <p className="font-medium">{t("expertise.criminalLaw")}</p>
            </div>
            <div className="rounded-lg bg-primary/5 p-4 text-center">
              <p className="font-medium">{t("expertise.administrativeLaw")}</p>
            </div>
            <div className="rounded-lg bg-primary/5 p-4 text-center">
              <p className="font-medium">{t("expertise.laborLaw")}</p>
            </div>
            <div className="rounded-lg bg-primary/5 p-4 text-center">
              <p className="font-medium">{t("expertise.contractLaw")}</p>
            </div>
            <div className="rounded-lg bg-primary/5 p-4 text-center">
              <p className="font-medium">{t("expertise.ngoCompliance")}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-20 text-white">
        <motion.div
          className="container mx-auto px-4 sm:px-6 lg:px-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold md:text-4xl">{t("cta.title")}</h2>
            <p className="mt-4 text-lg text-white/90">{t("cta.description")}</p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-white text-primary hover:bg-white/90"
              >
                <Link href="/contact">{t("cta.buttonContact")}</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white text-primary hover:bg-white/10"
              >
                <Link href="/services">{t("cta.buttonServices")}</Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
