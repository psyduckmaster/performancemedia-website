"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";
import {
  ArrowRight,
  Satellite,
  Rocket,
  Brain,
  Check,
} from "lucide-react";

const servicesData = [
  {
    id: "media-solutions",
    icon: Satellite,
    title: "Media Solutions",
    description:
      "Precision paid media campaigns that turn every rupee into measurable revenue. We don't just run ads — we engineer acquisition systems that scale.",
    deliverables: [
      "Meta Ads (Facebook & Instagram)",
      "Google Search & Display",
      "YouTube Pre-roll",
      "Retargeting & Funnel Building",
      "Weekly performance reports",
    ],
  },
  {
    id: "social-media",
    icon: Rocket,
    title: "Social Media Presence",
    description:
      "Your brand deserves a voice that resonates. We build communities, not just followers — turning engagement into real business outcomes.",
    deliverables: [
      "Content Calendar & Strategy",
      "Reels / Short-form Video Concepts",
      "Copywriting & Creative Direction",
      "Hashtag & Audience Research",
      "Monthly Analytics Review",
    ],
  },
  {
    id: "digital-consulting",
    icon: Brain,
    title: "Digital Presence Consulting",
    description:
      "A comprehensive audit and strategic roadmap to fix what's broken and scale what's working. One-on-one sessions with our growth experts.",
    deliverables: [
      "Website & Landing Page Audit",
      "SEO Health Check",
      "Competitor Benchmarking",
      "Ad Account Audit",
      "90-Day Growth Roadmap",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <Navigation />

      <main>
        {/* Hero */}
        <section className="relative min-h-[50vh] flex items-center justify-center pt-20 grain-overlay">
          <div className="absolute inset-0 pointer-events-none">
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-20"
              style={{
                background:
                  "radial-gradient(ellipse at center, rgba(201, 168, 76, 0.15) 0%, rgba(123, 94, 167, 0.1) 40%, transparent 70%)",
              }}
            />
          </div>

          <div className="container relative z-10 text-center py-20">
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Our <span className="gradient-text">Services</span>
            </h1>
            <p className="text-lg text-[#9B9B9B] max-w-2xl mx-auto leading-relaxed">
              Every service is built on a foundation of data, creativity, and
              relentless optimization. We don&apos;t do cookie-cutter — we build
              custom growth engines for your business.
            </p>
          </div>
        </section>

        <div className="section-divider" />

        {/* Services List */}
        <section className="py-20 md:py-28">
          <div className="container">
            <div className="space-y-24">
              {servicesData.map((service, index) => (
                <div
                  key={service.id}
                  id={service.id}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
                >
                  {/* Content */}
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#C9A84C]/20 to-[#7B5EA7]/20 flex items-center justify-center">
                        <service.icon size={28} className="text-[#C9A84C]" />
                      </div>
                      <span className="badge-coming-soon">
                        <span className="w-2 h-2 rounded-full bg-[#C9A84C] animate-pulse" />
                        Coming Soon
                      </span>
                    </div>

                    <h2
                      className="text-3xl md:text-4xl font-bold mb-4 text-[#F0EDE6]"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {service.title}
                    </h2>
                    <p className="text-[#9B9B9B] leading-relaxed mb-8">
                      {service.description}
                    </p>

                    <h3 className="text-sm font-semibold uppercase tracking-wider text-[#C9A84C] mb-4">
                      What You Get
                    </h3>
                    <ul className="check-list mb-8">
                      {service.deliverables.map((item, i) => (
                        <li key={i}>
                          <Check size={18} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Visual Card */}
                  <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                    <div className="glass-card h-full min-h-[300px] flex flex-col items-center justify-center text-center">
                      <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#C9A84C]/10 to-[#7B5EA7]/10 flex items-center justify-center mb-6">
                        <service.icon size={40} className="text-[#C9A84C]" />
                      </div>
                      <h3
                        className="text-2xl font-bold mb-2 text-[#F0EDE6]"
                        style={{ fontFamily: "var(--font-heading)" }}
                      >
                        {service.title}
                      </h3>
                      <p className="text-[#9B9B9B] text-sm max-w-xs">
                        Launching Q1 2025. Be among the first to experience
                        premium performance marketing.
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="section-divider" />

        {/* Bottom CTA */}
        <section className="py-20 md:py-28">
          <div className="container">
            <div className="glass-card text-center max-w-2xl mx-auto">
              <h2
                className="text-2xl md:text-3xl font-bold mb-4 text-[#F0EDE6]"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Be among our first clients — get{" "}
                <span className="gradient-text">founding member pricing</span>
              </h2>
              <p className="text-[#9B9B9B] mb-8">
                Early adopters get exclusive pricing, priority support, and direct
                access to our founding team.
              </p>
              <Link href="/contact" className="btn-primary">
                Claim Early Access
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
