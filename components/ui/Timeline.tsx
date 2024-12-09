"use client";

import { motion } from "framer-motion";
import { companyContent } from "@/lib/content";
import { Calendar, Building2, MapPin, Users, HomeIcon } from "lucide-react";

const timelineEvents = [
  {
    year: "1971",
    title: "Gründung",
    description: companyContent.history.founding,
    icon: Calendar
  },
  {
    year: "1975",
    title: "Umwandlung zur AG",
    description: companyContent.history.incorporation,
    icon: Building2
  },
  {
    year: "1979",
    title: "Neuer Standort",
    description: companyContent.history.location,
    icon: MapPin
  },
  {
    year: "2012",
    title: "Neue Generation",
    description: companyContent.history.succession,
    icon: Users
  },
  {
    year: "2020-2021",
    title: "Modernisierung",
    description: companyContent.history.renovation,
    icon: HomeIcon
  }
];

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
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0 }
};

export default function Timeline() {
  return (
    <motion.div 
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="space-y-6"
    >
      {timelineEvents.map((event, index) => {
        const Icon = event.icon;
        return (
          <motion.div
            key={event.year}
            variants={item}
            className="relative flex gap-4"
          >
            <div className="flex flex-col items-center">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center shadow-md"
              >
                <Icon className="w-6 h-6" />
              </motion.div>
              {index !== timelineEvents.length - 1 && (
                <div className="w-0.5 h-full bg-gradient-to-b from-red-600/50 to-transparent mt-2" />
              )}
            </div>

            <motion.div
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2 }}
              className="flex-1 bg-white p-4 rounded-lg shadow-sm border border-gray-100"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="text-sm font-bold text-red-600 bg-red-50 px-2 py-0.5 rounded">
                  {event.year}
                </span>
                <h3 className="text-lg font-semibold text-gray-900">
                  {event.title}
                </h3>
              </div>
              <p className="text-sm text-gray-600">
                {event.description}
              </p>
            </motion.div>
          </motion.div>
        );
      })}
    </motion.div>
  );
}