"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface Service {
  title: string;
  description: string;
  details?: string[];
  benefits?: string[];
}

interface ServiceModalProps {
  service: Service;
  onClose: () => void;
}

export default function ServiceModal({ service, onClose }: ServiceModalProps) {
  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">{service.title}</DialogTitle>
        </DialogHeader>
        <div className="mt-4">
          <p className="text-gray-600 mb-6">{service.description}</p>
          
          {service.details && (
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3">Leistungen im Detail:</h3>
              <ul className="list-disc pl-5 space-y-2">
                {service.details.map((detail, index) => (
                  <li key={index} className="text-gray-600">{detail}</li>
                ))}
              </ul>
            </div>
          )}
          
          {service.benefits && (
            <div>
              <h3 className="text-lg font-semibold mb-3">Ihre Vorteile:</h3>
              <ul className="list-disc pl-5 space-y-2">
                {service.benefits.map((benefit, index) => (
                  <li key={index} className="text-gray-600">{benefit}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}