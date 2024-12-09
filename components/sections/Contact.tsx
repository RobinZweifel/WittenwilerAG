"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { companyContent } from "@/lib/content";
import { motion } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Kontakt</h2>
            <p className="text-base sm:text-lg text-gray-600 mb-8">
              Kontaktieren Sie uns für alle Ihre elektrischen Bedürfnisse.
            </p>
            
            <div className="space-y-6">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex items-center"
              >
                <MapPin className="h-6 w-6 text-red-600 mr-3 flex-shrink-0" />
                <span className="text-gray-700">
                  {companyContent.contact.address}, {companyContent.contact.city}
                </span>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex items-center"
              >
                <Phone className="h-6 w-6 text-red-600 mr-3 flex-shrink-0" />
                <span className="text-gray-700">{companyContent.contact.phone}</span>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="flex items-center"
              >
                <Mail className="h-6 w-6 text-red-600 mr-3 flex-shrink-0" />
                <span className="text-gray-700">{companyContent.contact.email}</span>
              </motion.div>
            </div>
          </motion.div>
          
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="bg-white p-6 sm:p-8 rounded-lg shadow-sm"
          >
            <div className="mb-6">
              <label htmlFor="name" className="block text-gray-700 mb-2 text-sm font-medium">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border rounded-md focus:ring-red-500 focus:border-red-500 text-base"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="email" className="block text-gray-700 mb-2 text-sm font-medium">
                E-Mail
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border rounded-md focus:ring-red-500 focus:border-red-500 text-base"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-700 mb-2 text-sm font-medium">
                Nachricht
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 border rounded-md focus:ring-red-500 focus:border-red-500 text-base"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
              />
            </div>
            
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition-colors text-base font-semibold"
            >
              Nachricht senden
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}