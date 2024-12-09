"use client";

import { useState } from "react";
import { Lightbulb, Network, Lamp, Phone, Shield } from "lucide-react";
import { companyContent } from "@/lib/content";
import ServiceModal from "@/components/ui/ServiceModal";
import { motion } from "framer-motion";

const serviceIcons = {
  "Elektroinstallationen": Lightbulb,
  "Netzwerkinstallationen": Network,
  "Beleuchtungsanlagen": Lamp,
  "Telekommunikation": Phone,
  "Elektrische Kontrollen": Shield,
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function Services() {
  const [selectedService, setSelectedService] = useState<typeof companyContent.services[0] | null>(null);

  return (
    <section id="services" className="py-16 sm:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Unsere Dienstleistungen
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Umfassende Elektrolösungen für alle Ihre Bedürfnisse
          </p>
        </motion.div>
        
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {companyContent.services.map((service, index) => {
            const Icon = serviceIcons[service.title as keyof typeof serviceIcons];
            return (
              <motion.div
                key={index}
                variants={item}
                whileHover={{ scale: 1.02 }}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedService(service)}
              >
                <div className="mb-4">
                  {Icon && <Icon className="h-8 w-8 text-red-600" />}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm sm:text-base">{service.description}</p>
                <button
                  className="mt-4 text-red-600 hover:text-red-700 font-medium inline-flex items-center text-sm sm:text-base"
                  onClick={() => setSelectedService(service)}
                >
                  Mehr erfahren
                </button>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 sm:mt-16 bg-red-600 text-white p-6 sm:p-8 rounded-lg"
        >
          <div className="text-center">
            <h3 className="text-xl sm:text-2xl font-bold mb-4">
              {companyContent.emergency.title}
            </h3>
            <p className="mb-4 text-sm sm:text-base">
              {companyContent.emergency.description}
            </p>
            <p className="text-xl sm:text-2xl font-bold">
              Notfallnummer: {companyContent.emergency.phone}
            </p>
          </div>
        </motion.div>
      </div>

      {selectedService && (
        <ServiceModal
          service={selectedService}
          onClose={() => setSelectedService(null)}
        />
      )}
    </section>
  );
}