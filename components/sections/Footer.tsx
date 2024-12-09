import { companyContent } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-4">{companyContent.name}</h3>
            <p className="text-sm sm:text-base text-gray-400">
              Ihr zuverlässiger Elektropartner in der Region Zürich
            </p>
          </div>
          
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm sm:text-base">
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors">
                  Dienstleistungen
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors">
                  Über uns
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors">
                  Kontakt
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-4">Öffnungszeiten</h3>
            <ul className="space-y-2 text-sm sm:text-base text-gray-400">
              <li>Montag - Freitag: 7:00 - 18:00</li>
              <li>Samstag: 8:00 - 12:00</li>
              <li>Sonntag: Geschlossen</li>
              <li className="text-red-500 font-semibold mt-4">
                24-Stunden-Notfalldienst verfügbar
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm sm:text-base text-gray-400">
          <p>© {new Date().getFullYear()} {companyContent.name}. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
}