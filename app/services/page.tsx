"use client";

import CTASection from "@/components/CTASection";
import ServicesOverview from "@/components/ServicesOverview";
import SuccessStories from "@/components/SuccessStories";
import HeroServices from "@/components/HeroServices";
import ProcessServices from "@/components/ProcessServices";
import { useTranslation } from "react-i18next";


export default function ServicesPage() {
  const { t } = useTranslation("services");

  return (
    <>
      <HeroServices t={t} />
      <ServicesOverview t={t} />
      <SuccessStories t={t} />
      <ProcessServices t={t} />
      <CTASection t={t} />
    </>
  );
}
