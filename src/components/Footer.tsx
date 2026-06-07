"use client";

import Link from "next/link";
import Logo from "./Logo";
import { Linkedin, Instagram, Twitter } from "lucide-react";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const serviceLinks = [
  { href: "/services", label: "Media Solutions" },
  { href: "/services", label: "Social Media Presence" },
  { href: "/services", label: "Digital Consulting" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0F] border-t border-white/[0.06]">
      <div className="container py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/">
              <Logo height={36} />
            </Link>
            <p className="mt-4 text-[#9B9B9B] text-sm leading-relaxed max-w-xs">
              Engineering Growth Since Day One. We help small businesses dominate their digital space.
            </p>
            <div className="flex items-center gap-3 mt-6">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="Twitter/X"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[#F0EDE6] font-semibold text-sm uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[#9B9B9B] text-sm hover:text-[#C9A84C] transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[#F0EDE6] font-semibold text-sm uppercase tracking-wider mb-4">
              Services
            </h4>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[#9B9B9B] text-sm hover:text-[#C9A84C] transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-[#F0EDE6] font-semibold text-sm uppercase tracking-wider mb-4">
              Contact
            </h4>
            <ul className="space-y-3 text-[#9B9B9B] text-sm">
              <li className="flex items-start gap-2">
                <span className="text-[#C9A84C]">📧</span>
                <a href="mailto:hello@performancemedia.in" className="hover:text-[#C9A84C] transition-colors">
                  hello@performancemedia.in
                </a>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#C9A84C]">📞</span>
                <span>+91 XXXXX XXXXX</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#C9A84C]">📍</span>
                <span>India (Remote-First Agency)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#C9A84C]">🕐</span>
                <span>Mon–Sat, 10AM–7PM IST</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/[0.06]">
        <div className="container py-6">
          <p className="text-center text-[#9B9B9B] text-sm">
            © 2025 Performance Media. All rights reserved. |{" "}
            <span className="text-[#C9A84C]">performancemedia.in</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
