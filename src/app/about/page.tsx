"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Eye,
  Target,
  Heart,
  Linkedin,
  Calendar,
  Rocket,
  TrendingUp,
  Award,
} from "lucide-react";

const values = [
  {
    icon: BarChart3,
    title: "Data-Driven",
    description:
      "Every decision is backed by numbers. We measure twice, optimize once, and never guess.",
  },
  {
    icon: Eye,
    title: "Transparent",
    description:
      "No hidden fees, no vanity metrics. You see exactly where every rupee goes and what it returns.",
  },
  {
    icon: Target,
    title: "Ambitious",
    description:
      "We set aggressive targets and work relentlessly to hit them. Mediocrity is not in our vocabulary.",
  },
  {
    icon: Heart,
    title: "Client-First",
    description:
      "Your success is our success. We treat your business like our own — because it is.",
  },
];

const team = [
  {
    name: "Pankaj",
    role: "Founder & Strategy Lead",
    initials: "PK",
    color: "#C9A84C",
  },
  {
    name: "Abhishek",
    role: "Media Buying Expert",
    initials: "AB",
    color: "#7B5EA7",
  },
  {
    name: "Akansha",
    role: "Creative Director",
    initials: "AK",
    color: "#4A90A4",
  },
];

const timeline = [
  {
    year: "2024",
    title: "The Beginning",
    description:
      "Performance Media was founded with a clear mission: make world-class performance marketing accessible to small businesses in India.",
    icon: Rocket,
  },
  {
    year: "2024",
    title: "First Clients",
    description:
      "Launched our first campaigns for 5 small businesses. Average ROAS of 3.2x in the first quarter — proving our model works.",
    icon: TrendingUp,
  },
  {
    year: "2025",
    title: "Expanding Services",
    description:
      "Added Social Media Presence and Digital Consulting to our core Media Solutions offering. Full-funnel growth engine, activated.",
    icon: Calendar,
  },
  {
    year: "2025",
    title: "The Future",
    description:
      "Targeting 100+ small business partners, AI-powered optimization tools, and becoming India's most trusted growth partner.",
    icon: Award,
  },
];

export default function AboutPage() {
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
              The People Behind the{" "}
              <span className="gradient-text">Performance</span>
            </h1>
            <p className="text-lg text-[#9B9B9B] max-w-2xl mx-auto leading-relaxed">
              We&apos;re a team of marketers, strategists, and creatives who believe
              small businesses deserve big results. No enterprise budgets required.
            </p>
          </div>
        </section>

        <div className="section-divider" />

        {/* Mission */}
        <section className="py-20 md:py-28">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2
                className="section-heading mb-6"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Our <span className="gradient-text">Mission</span>
              </h2>
              <p className="text-lg text-[#9B9B9B] leading-relaxed">
                To democratize performance marketing for small and growing
                businesses in India. We believe that world-class digital growth
                shouldn&apos;t be reserved for companies with million-rupee budgets.
                Every business deserves a partner that treats their success as
                seriously as they do.
              </p>
            </div>
          </div>
        </section>

        <div className="section-divider" />

        {/* Values */}
        <section className="py-20 md:py-28">
          <div className="container">
            <div className="text-center mb-16">
              <h2
                className="section-heading"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Our <span className="gradient-text">Values</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <div
                  key={value.title}
                  className="glass-card text-center"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-14 h-14 mx-auto rounded-xl bg-gradient-to-br from-[#C9A84C]/20 to-[#7B5EA7]/20 flex items-center justify-center mb-5">
                    <value.icon size={28} className="text-[#C9A84C]" />
                  </div>
                  <h3
                    className="text-xl font-bold mb-3 text-[#F0EDE6]"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {value.title}
                  </h3>
                  <p className="text-[#9B9B9B] text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="section-divider" />

        {/* Team */}
        <section className="py-20 md:py-28">
          <div className="container">
            <div className="text-center mb-16">
              <h2
                className="section-heading"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Meet the <span className="gradient-text">Team</span>
              </h2>
              <p className="section-subheading mx-auto">
                Small team, big impact. Every member is a specialist in their
                domain.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {team.map((member, index) => (
                <div
                  key={member.name}
                  className="glass-card text-center group"
                >
                  <div
                    className="w-20 h-20 mx-auto rounded-full flex items-center justify-center text-[#0A0A0F] font-bold text-xl mb-5 transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundColor: member.color }}
                  >
                    {member.initials}
                  </div>
                  <h3
                    className="text-xl font-bold mb-1 text-[#F0EDE6]"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {member.name}
                  </h3>
                  <p className="text-[#9B9B9B] text-sm mb-4">{member.role}</p>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[#C9A84C] text-sm hover:underline"
                  >
                    <Linkedin size={16} />
                    Connect on LinkedIn
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="section-divider" />

        {/* Timeline */}
        <section className="py-20 md:py-28">
          <div className="container">
            <div className="text-center mb-16">
              <h2
                className="section-heading"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Our <span className="gradient-text">Journey</span>
              </h2>
            </div>

            <div className="max-w-3xl mx-auto relative">
              {/* Timeline Line */}
              <div className="absolute left-6 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#C9A84C] via-[#7B5EA7] to-[#C9A84C]" />

              <div className="space-y-12">
                {timeline.map((item, index) => (
                  <div
                    key={item.title}
                    className={`relative flex items-start gap-6 md:gap-0 ${
                      index % 2 === 0
                        ? "md:flex-row"
                        : "md:flex-row-reverse"
                    }`}
                  >
                    {/* Timeline Dot */}
                    <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-br from-[#C9A84C] to-[#7B5EA7] flex items-center justify-center z-10 shadow-lg shadow-[#C9A84C]/20">
                      <item.icon size={20} className="text-[#0A0A0F]" />
                    </div>

                    {/* Content */}
                    <div
                      className={`ml-20 md:ml-0 md:w-1/2 ${
                        index % 2 === 0
                          ? "md:pr-12 md:text-right"
                          : "md:pl-12 md:text-left"
                      }`}
                    >
                      <span className="text-[#C9A84C] font-bold text-sm uppercase tracking-wider">
                        {item.year}
                      </span>
                      <h3
                        className="text-xl font-bold mt-1 mb-2 text-[#F0EDE6]"
                        style={{ fontFamily: "var(--font-heading)" }}
                      >
                        {item.title}
                      </h3>
                      <p className="text-[#9B9B9B] text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    {/* Spacer for opposite side */}
                    <div className="hidden md:block md:w-1/2" />
                  </div>
                ))}
              </div>
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
                Ready to join our{" "}
                <span className="gradient-text">growth story?</span>
              </h2>
              <p className="text-[#9B9B9B] mb-8">
                Let&apos;s discuss how we can help your business reach its full
                potential.
              </p>
              <Link href="/contact" className="btn-primary">
                Start a Conversation
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
