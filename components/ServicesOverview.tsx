"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, GraduationCap, Building, Scale, Home, Users, FileText } from "lucide-react";

const iconComponents = [GraduationCap, Building, Scale, Home, Users, FileText];

export default function ServicesOverview({ t }) {
  const items = t("items", { returnObjects: true });

  return (
    <section id="overview" className="font-tajawal py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">{t("overview.title")}</h2>
          <p className="mt-4 text-lg text-gray-600">{t("overview.description")}</p>
        </motion.div>

        <motion.div
          className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {items.map((item, idx) => {
            const Icon = iconComponents[idx];
            return (
              <Card key={item.id} className="overflow-hidden transition-all duration-300 hover:shadow-lg">
                <div className="h-2 bg-primary" />
                <CardContent className="p-6">
                  <div className="mb-4 rounded-full bg-primary/10 p-3 text-primary w-fit">
                    <Icon size={24} />
                  </div>
                  <h3 className="mb-2 text-xl font-bold">{item.title}</h3>
                  <p className="mb-4 text-gray-600">{item.description}</p>
                  <ul className="mb-4 space-y-2">
                    {item.bullets.map((b, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle size={16} className="mr-2 mt-1 text-primary flex-shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
