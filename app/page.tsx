"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion, useInView, useAnimation } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import {
  ChevronRight,
  Scale,
  Briefcase,
  FileText,
  Building,
  Users,
  Award,
  Globe,
  ShieldCheck,
} from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation("home");
  const controls = useAnimation();
  const statsRef = useRef(null);
  const isInView = useInView(statsRef, { once: true, amount: 0.3 });
  const testimonials = t("testimonials.list", { returnObjects: true });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const services = [
    {
      title: "Corporate Law",
      description:
        "Comprehensive legal support for businesses, including compliance, documentation, and strategic guidance.",
      icon: <Building className="h-10 w-10 text-blue-600" />,
      link: "/services#corporate",
    },
    {
      title: "Litigation",
      description:
        "Expert representation in civil, commercial, corporate disputes, and criminal lawsuits.",
      icon: <Scale className="h-10 w-10 text-blue-600" />,
      link: "/services#litigation",
    },
    {
      title: "Real Estate",
      description:
        "End-to-end legal support for property transactions, regulatory compliance, and dispute resolution.",
      icon: <Briefcase className="h-10 w-10 text-blue-600" />,
      link: "/services#real-estate",
    },
    {
      title: "Contracts",
      description:
        "Drafting, reviewing, and negotiating contracts across all sectors with meticulous attention to detail.",
      icon: <FileText className="h-10 w-10 text-blue-600" />,
      link: "/services#contracts",
    },
    {
      title: "NGO Support",
      description:
        "Specialized legal assistance for non-governmental organizations ensuring compliance and operational efficiency.",
      icon: <Users className="h-10 w-10 text-blue-600" />,
      link: "/services#ngo",
    },
    {
      title: "Consultancy",
      description:
        "Expert legal advice to guide strategic decisions and ensure compliance with applicable laws.",
      icon: <Award className="h-10 w-10 text-blue-600" />,
      link: "/services#consultancy",
    },
  ];

  return (
    <div className="font-tajawal flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="hero-pattern bg-primary relative overflow-hidden py-20 text-white md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="space-y-6">
                <h1 className=" text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
                  {t("hero.title")}
                </h1>
                <p className="text-lg text-white/90 md:text-xl">
                  {t("hero.description")}
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button
                    asChild
                    size="lg"
                    className="bg-white text-primary hover:bg-white/90"
                  >
                    <Link href="/contact">{t("hero.cta.contact")}</Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="border-white text-primary hover:bg-white/10"
                  >
                    <Link href="/about">{t("hero.cta.learn")}</Link>
                  </Button>
                </div>
              </div>
            </motion.div>
            <div className="relative mx-auto h-[300px] w-[300px] md:h-[400px] md:w-[400px]">
              <div className="absolute inset-0 flex items-center justify-center rounded-full bg-white/10 p-8">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="block"
                >
                  <Image
                    src="/logo.png"
                    alt="Middle East Law Firm Logo"
                    priority={false}
                    width={300}
                    height={300}
                    className="h-auto w-auto border-2 rounded-lg transition-transform duration-300 ease-in-out hover:scale-110"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              {t("services.title")}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {t("services.description")}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="mb-4">{service.icon}</div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900">
                      {t(`services.items.${index}.title`)}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {t(`services.items.${index}.description`)}
                    </p>
                    <Link
                      href={service.link}
                      className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center group"
                    >
                      {t("services.learn_more")}
                      <ChevronRight className="h-4 w-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-blue-700 text-white" ref={statsRef}>
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={controls}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          >
            {Array.from({ length: 4 }).map((_, i) => (
              <motion.div key={i} variants={fadeInUp} className="p-6">
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  {t(`stats.items.${i}.value`)}
                </div>
                <div className="text-blue-100">
                  {t(`stats.items.${i}.label`)}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="mx-auto max-w-3xl text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
              {t("why.title")}
            </h2>
            <p className="mt-4 text-lg text-gray-600">{t("why.description")}</p>
          </motion.div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: <Award size={32} />,
                title: "Excellence",
                desc: "Striving for unparalleled quality and precision in every service we provide.",
              },
              {
                icon: <ShieldCheck size={32} />,
                title: "Integrity",
                desc: "Adhering to the highest standards of honesty, fairness, and ethical conduct.",
              },
              {
                icon: <Users size={32} />,
                title: "Client-Centric",
                desc: "Putting our clients' needs at the forefront and delivering tailored solutions.",
              },
              {
                icon: <Globe size={32} />,
                title: "Global Perspective",
                desc: "Combining local expertise with international standards and practices.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                className="text-center"
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeInUp}
              >
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                  {item.icon}
                </div>
                <h3 className="mb-2 text-xl font-bold">
                  {t(`why.items.${i}.title`)}
                </h3>
                <p className="text-gray-600">
                  {t(`why.items.${i}.description`)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}

      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">
            {t("testimonials.title")}
          </h2>

          <Swiper
            modules={[Navigation, Autoplay]}
            navigation
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            spaceBetween={30}
            slidesPerView={3}
            loop={true}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {testimonials.map((t, index) => (
              <SwiperSlide key={index}>
                <Card className="h-full min-h-[350px] flex flex-col justify-between border border-gray-200 bg-white shadow-sm">
                  <CardContent className="p-6 flex flex-col justify-between h-full">
                    <div className="text-yellow-400 mb-4">{"★".repeat(5)}</div>
                    <p className="text-gray-600 italic mb-6 flex-grow">
                      "{t.feedback}"
                    </p>
                    <div className="flex items-center mt-auto">
                      <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center font-bold text-blue-600 mr-4">
                        {t.initials}
                      </div>
                      <div>
                        <p className="font-bold text-gray-800">{t.name}</p>
                        <p className="text-sm text-gray-500">{t.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                {t("cta.title")}
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                {t("cta.description")}
              </p>
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                {t("cta.button")}
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
