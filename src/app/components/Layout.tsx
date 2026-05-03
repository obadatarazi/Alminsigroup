import { useState } from "react";
import { Outlet, useNavigate, useLocation } from "react-router";
import { Menu, X } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { WhatsAppButton } from "./WhatsAppButton";
import mcoLogo from "../../imports/MCO_Logo.png";


const navContent = {
  en: {
    home: "Home",
    about: "About",
    services: "Services",
    partners: "Partners",
    facilities: "Facilities",
    presence: "Global Presence",
    contact: "Contact",
    cta: "Contact Us",
  },
  ar: {
    home: "الرئيسية",
    about: "من نحن",
    services: "الخدمات",
    partners: "شركاتنا",
    facilities: "المنشآت",
    presence: "الانتشار العالمي",
    contact: "اتصل بنا",
    cta: "تواصل معنا",
  },
};

const footerContent = {
  en: {
    brand: "Ayman Al-Mansi Group",
    tagline: "Pioneers in fruit and vegetable trade since 1994",
    quickLinks: "Quick Links",
    links: ["About Us", "Our Services", "Products", "Contact Us"],
    services: "Our Services",
    servicesItems: ["Import & Export", "Cold Storage", "Distribution", "Banana Ripening"],
    contactTitle: "Contact Us",
    location: "Dubai, United Arab Emirates",
    copyright: "© 2024 Ayman Al-Mansi Trading Group. All rights reserved.",
  },
  ar: {
    brand: "مجموعة أيمن المنسي",
    tagline: "رواد تجارة الخضار والفواكه منذ 1994",
    quickLinks: "روابط سريعة",
    links: ["من نحن", "خدماتنا", "منتجاتنا", "اتصل بنا"],
    services: "خدماتنا",
    servicesItems: ["استيراد وتصدير", "التخزين والتبريد", "التوزيع", "تخمير الموز"],
    contactTitle: "تواصل معنا",
    location: "دبي، الإمارات العربية المتحدة",
    copyright: "© 2024 مجموعة أيمن المنسي التجارية. جميع الحقوق محفوظة.",
  },
};

export function Layout() {
  const { language, setLanguage, isRTL } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const t = navContent[language];
  const ft = footerContent[language];
  const isContactPage = location.pathname === "/contact";

  const handleHomeNavClick = (anchor: string) => {
    setMobileMenuOpen(false);
    if (isContactPage) {
      navigate("/");
      setTimeout(() => {
        const el = document.getElementById(anchor);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const el = document.getElementById(anchor);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className="size-full overflow-y-auto"
      dir={isRTL ? "rtl" : "ltr"}
      style={{ fontFamily: "'Tajawal', sans-serif" }}
    >
      {/* Sticky Header / Navbar */}
      <header className="sticky top-0 z-[99999] bg-white border-b-2 border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between h-20 md:h-24">
            {/* Logo */}
            <div
              className="flex items-center gap-3 cursor-pointer"
              onClick={() => { navigate("/"); setMobileMenuOpen(false); }}
            >
              <img
                src={mcoLogo}
                alt="Ayman Al-Mansi Logo"
                className="h-12 md:h-12 w-auto object-contain"
              />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
              <button
                onClick={() => { navigate("/"); setMobileMenuOpen(false); }}
                className="text-gray-700 hover:text-emerald-600 transition-colors text-sm font-semibold bg-transparent border-none cursor-pointer"
              >
                {t.home}
              </button>
              <button
                onClick={() => handleHomeNavClick("about")}
                className="text-gray-700 hover:text-emerald-600 transition-colors text-sm font-semibold bg-transparent border-none cursor-pointer"
              >
                {t.about}
              </button>
              <button
                onClick={() => handleHomeNavClick("services")}
                className="text-gray-700 hover:text-emerald-600 transition-colors text-sm font-semibold bg-transparent border-none cursor-pointer"
              >
                {t.services}
              </button>
              <button
                onClick={() => handleHomeNavClick("partners")}
                className="text-gray-700 hover:text-emerald-600 transition-colors text-sm font-semibold bg-transparent border-none cursor-pointer"
              >
                {t.partners}
              </button>
              <button
                onClick={() => handleHomeNavClick("facilities")}
                className="text-gray-700 hover:text-emerald-600 transition-colors text-sm font-semibold bg-transparent border-none cursor-pointer"
              >
                {t.facilities}
              </button>
              <button
                onClick={() => handleHomeNavClick("global")}
                className="text-gray-700 hover:text-emerald-600 transition-colors text-sm font-semibold bg-transparent border-none cursor-pointer"
              >
                {t.presence}
              </button>
              <button
                onClick={() => { navigate("/contact"); setMobileMenuOpen(false); }}
                className={`text-sm font-semibold transition-colors bg-transparent border-none cursor-pointer ${isContactPage ? "text-emerald-600" : "text-gray-700 hover:text-emerald-600"}`}
              >
                {t.contact}
              </button>
            </nav>

            {/* CTA & Language Switcher */}
            <div className="flex items-center gap-3 md:gap-4">
              {/* Language Switcher */}
              <div className="flex items-center gap-1 bg-gray-100 rounded-lg p-1">
                <button
                  onClick={() => setLanguage("en")}
                  className={`px-2.5 py-1.5 rounded-md text-xs font-bold transition-all ${
                    language === "en"
                      ? "bg-emerald-600 text-white shadow-sm"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  EN
                </button>
                <button
                  onClick={() => setLanguage("ar")}
                  className={`px-2.5 py-1.5 rounded-md text-xs font-bold transition-all ${
                    language === "ar"
                      ? "bg-emerald-600 text-white shadow-sm"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  AR
                </button>
              </div>

              {/* CTA Button */}
              <button
                onClick={() => navigate("/contact")}
                className="hidden lg:block px-5 py-2.5 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-all duration-200 text-sm font-bold shadow-sm"
              >
                {t.cta}
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-gray-700 hover:text-emerald-600 transition-colors"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <nav className="lg:hidden py-4 border-t border-gray-100 space-y-2">
              <button
                onClick={() => { navigate("/"); setMobileMenuOpen(false); }}
                className="block w-full text-start py-2 text-gray-700 hover:text-emerald-600 transition-colors font-medium bg-transparent border-none cursor-pointer"
              >
                {t.home}
              </button>
              <button
                onClick={() => handleHomeNavClick("about")}
                className="block w-full text-start py-2 text-gray-700 hover:text-emerald-600 transition-colors font-medium bg-transparent border-none cursor-pointer"
              >
                {t.about}
              </button>
              <button
                onClick={() => handleHomeNavClick("services")}
                className="block w-full text-start py-2 text-gray-700 hover:text-emerald-600 transition-colors font-medium bg-transparent border-none cursor-pointer"
              >
                {t.services}
              </button>
              <button
                onClick={() => handleHomeNavClick("partners")}
                className="block w-full text-start py-2 text-gray-700 hover:text-emerald-600 transition-colors font-medium bg-transparent border-none cursor-pointer"
              >
                {t.partners}
              </button>
              <button
                onClick={() => handleHomeNavClick("facilities")}
                className="block w-full text-start py-2 text-gray-700 hover:text-emerald-600 transition-colors font-medium bg-transparent border-none cursor-pointer"
              >
                {t.facilities}
              </button>
              <button
                onClick={() => handleHomeNavClick("global")}
                className="block w-full text-start py-2 text-gray-700 hover:text-emerald-600 transition-colors font-medium bg-transparent border-none cursor-pointer"
              >
                {t.presence}
              </button>
              <button
                onClick={() => { navigate("/contact"); setMobileMenuOpen(false); }}
                className={`block w-full text-start py-2 transition-colors font-medium bg-transparent border-none cursor-pointer ${isContactPage ? "text-emerald-600" : "text-gray-700 hover:text-emerald-600"}`}
              >
                {t.contact}
              </button>
              <button
                onClick={() => { navigate("/contact"); setMobileMenuOpen(false); }}
                className="w-full mt-4 px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-all duration-200 text-sm font-bold shadow-sm"
              >
                {t.cta}
              </button>
            </nav>
          )}
        </div>
      </header>

      {/* Page Content */}
      <Outlet />

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 md:py-14">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 mb-10">
            <div>
              <h3
                className="mb-3 text-lg md:text-xl"
                style={{ fontFamily: "'Cairo', sans-serif", fontWeight: 700 }}
              >
                {ft.brand}
              </h3>
              <p className="text-gray-400 leading-relaxed text-sm">{ft.tagline}</p>
            </div>
            <div>
              <h4
                className="mb-3 text-base"
                style={{ fontFamily: "'Cairo', sans-serif", fontWeight: 700 }}
              >
                {ft.quickLinks}
              </h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                {ft.links.map((link, idx) => (
                  <li
                    key={idx}
                    className="hover:text-emerald-400 cursor-pointer transition-colors"
                  >
                    {link}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4
                className="mb-3 text-base"
                style={{ fontFamily: "'Cairo', sans-serif", fontWeight: 700 }}
              >
                {ft.services}
              </h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                {ft.servicesItems.map((service, idx) => (
                  <li
                    key={idx}
                    className="hover:text-emerald-400 cursor-pointer transition-colors"
                  >
                    {service}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4
                className="mb-3 text-base"
                style={{ fontFamily: "'Cairo', sans-serif", fontWeight: 700 }}
              >
                {ft.contactTitle}
              </h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>{ft.location}</li>
                <li>info@almansi-group.com</li>
                <li dir="ltr">+971 XX XXX XXXX</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-6 text-center text-gray-400 text-xs">
            <p>{ft.copyright}</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <WhatsAppButton />
    </div>
  );
}
