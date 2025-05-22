"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Building2, Scale } from "lucide-react";

export default function SuccessStories({ t }) {
  const stories = t("success.items", { returnObjects: true });

  return (
    <section className="bg-gray-50 py-20 font-tajawal">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">{t("success.title")}</h2>
          <p className="mt-4 text-lg text-gray-600">{t("success.description")}</p>
        </motion.div>

        <motion.div
          className="mt-12 grid gap-8 md:grid-cols-2"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {stories.map((story, idx) => (
            <Card key={idx} className="overflow-hidden transition-all duration-300 hover:shadow-lg">
              <div className="h-2 bg-primary" />
              <CardContent className="p-6">
                <div className="mb-4 rounded-full bg-primary/10 p-3 text-primary w-fit">
                  {idx === 0 ? <Building2 size={24} /> : <Scale size={24} />}
                </div>
                <h3 className="mb-2 text-xl font-bold">{story.title}</h3>
                <p className="mb-4 text-gray-600">{story.description}</p>
                <div className="flex items-center">
                  <div className="mr-4 h-12 w-12 overflow-hidden rounded-full bg-primary/20 flex items-center justify-center text-primary">
                    {story.initials}
                  </div>
                  <div>
                    <p className="font-bold">{story.client}</p>
                    <p className="text-sm text-gray-600">{story.location}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
