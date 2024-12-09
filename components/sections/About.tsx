"use client";

import { companyContent } from "@/lib/content";
import { motion } from "framer-motion";
import { History, Award } from "lucide-react";
import Timeline from "@/components/ui/Timeline";

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="sticky top-24">
              <div className="flex items-center gap-3 mb-6">
                <History className="h-8 w-8 text-red-600" />
                <h2 className="text-3xl font-bold text-gray-900">
                  Unsere Geschichte
                </h2>
              </div>
              <p className="text-lg text-gray-600 mb-8">
                Seit über 50 Jahren sind wir Ihr zuverlässiger Partner für Elektroinstallationen in der Region Zürich. Eine Geschichte geprägt von Innovation, Qualität und Kundennähe.
              </p>
              <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-r-lg">
                <div className="flex items-center gap-3 mb-4">
                  <Award className="h-6 w-6 text-green-600" />
                  <h3 className="text-xl font-semibold text-gray-900">Zertifizierungen</h3>
                </div>
                <ul className="space-y-3">
                  <motion.li 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-2"
                  >
                    <span className="h-2 w-2 bg-green-600 rounded-full" />
                    <span className="text-gray-700">{companyContent.certifications.esti}</span>
                  </motion.li>
                  <motion.li 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="flex items-center gap-2"
                  >
                    <span className="h-2 w-2 bg-green-600 rounded-full" />
                    <span className="text-gray-700">{companyContent.certifications.inspection}</span>
                  </motion.li>
                </ul>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Timeline />
          </motion.div>
        </div>
      </div>
    </section>
  );
}