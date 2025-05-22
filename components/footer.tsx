"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";


const Footer = () => {
  const { t } = useTranslation("footer");

  return (
    <footer className="bg-primary text-white font-tajawal">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo and About */}
          <div className="space-y-4">
            <div className="flex items-center">
              <Image
                src="/logo.png"
                alt="Middle East Law Firm Logo"
                width={50}
                height={50}
                className="mr-2"
              />
              <span className="text-xl font-bold">{t("middleEastLawFirm")}</span>
            </div>
            <p className="text-sm text-white/80">{t("about")}</p>
            <div className="flex space-x-4">
              <Link href="#" className="text-white hover:text-white/80">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-white hover:text-white/80">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-white hover:text-white/80">
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="#" className="text-white hover:text-white/80">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">{t("quick_links.title")}</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-white/80 hover:text-white">{t("quick_links.home")}</Link></li>
              <li><Link href="/about" className="text-white/80 hover:text-white">{t("quick_links.about")}</Link></li>
              <li><Link href="/services" className="text-white/80 hover:text-white">{t("quick_links.services")}</Link></li>
              <li><Link href="/team" className="text-white/80 hover:text-white">{t("quick_links.team")}</Link></li>
              <li><Link href="/contact" className="text-white/80 hover:text-white">{t("quick_links.contact")}</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">{t("services.title")}</h3>
            <ul className="space-y-2">
              <li><Link href="/services#consultancy" className="text-white/80 hover:text-white">{t("services.consultancy")}</Link></li>
              <li><Link href="/services#corporate" className="text-white/80 hover:text-white">{t("services.corporate")}</Link></li>
              <li><Link href="/services#litigation" className="text-white/80 hover:text-white">{t("services.litigation")}</Link></li>
              <li><Link href="/services#realestate" className="text-white/80 hover:text-white">{t("services.realestate")}</Link></li>
              <li><Link href="/services#contracts" className="text-white/80 hover:text-white">{t("services.contracts")}</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">{t("contact.title")}</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={20} className="mr-2 mt-1 flex-shrink-0" />
                <span>{t("contact.address")}</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-2 flex-shrink-0" />
                <a href="tel:+9647805515535" className="hover:underline">+964 780 551 5535</a>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-2 flex-shrink-0" />
                <a href="mailto:info@mideastls.com" className="hover:underline">info@mideastls.com</a>
              </li>
            </ul>
          </div>
        </div>

        <motion.div
          className="border-t border-muted/20 mt-8 pt-8 text-center text-sm text-muted-foreground"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="">&copy; {new Date().getFullYear()} Powered By <a href="https://swt-iq.com/" target="_blank" className="hover:text-black">SmartWave Technologies.</a></p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
