"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { companyContent } from "@/lib/content";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-sm z-50 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-xl sm:text-2xl font-bold text-red-600">
              {companyContent.name}
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
            <Link href="#services" className="text-gray-800 hover:text-red-600 transition-colors">
              Dienstleistungen
            </Link>
            <Link href="#about" className="text-gray-800 hover:text-red-600 transition-colors">
              Über uns
            </Link>
            <Link href="#contact" className="text-gray-800 hover:text-red-600 transition-colors">
              Kontakt
            </Link>
            <a 
              href={`tel:${companyContent.emergency.phone}`}
              className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors"
            >
              Notfall: {companyContent.emergency.phone}
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-gray-800 hover:text-red-600 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden absolute w-full bg-white border-b">
          <div className="px-4 pt-2 pb-3 space-y-2">
            <Link 
              href="#services" 
              className="block px-3 py-2 text-gray-800 hover:text-red-600 hover:bg-gray-50 rounded-md transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Dienstleistungen
            </Link>
            <Link 
              href="#about" 
              className="block px-3 py-2 text-gray-800 hover:text-red-600 hover:bg-gray-50 rounded-md transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Über uns
            </Link>
            <Link 
              href="#contact" 
              className="block px-3 py-2 text-gray-800 hover:text-red-600 hover:bg-gray-50 rounded-md transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Kontakt
            </Link>
            <a 
              href={`tel:${companyContent.emergency.phone}`}
              className="block px-3 py-2 text-red-600 font-semibold hover:bg-red-50 rounded-md transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Notfall: {companyContent.emergency.phone}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}