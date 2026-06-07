"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import LeadPopup from "@/components/LeadPopup";
import {
  ArrowRight,
  ArrowDown,
  Satellite,
  Rocket,
  Brain,
  Check,
  Star,
  ChevronLeft,
  ChevronRight,
  Phone,
  FileText,
  Zap,
  BarChart3,
} from "lucide-react";

// ─── Animated Counter Hook ───
function useCountUp(end: number, duration: number = 2000) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            let start = 0;
            const step = end / (duration / 16);
            const timer = setInterval(() => {
              start += step;
              if (start >= end) {
                setCount(end);
                clearInterval(timer);
              } else {
                setCount(Math.floor(start));
              }
            }, 16);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration, hasAnimated]);

  return { count, ref };
}

// ─── Testimonial Data ───
const testimonials = [
  {
    quote:
      "Performance Media completely transformed our digital presence. Our ROAS went from 1.2x to 4.5x in just three months. The team truly understands small business growth.",
    name: "Rahul Sharma",
    company: "UrbanCraft Interiors",
    initials: "RS",
    color: "#C9A84C",
  },
  {
    quote:
      "The strategic consulting sessions were eye-opening. They identified gaps we didn't even know existed and built a roadmap that actually works. Highly recommend!",
    name: "Priya Patel",
    company: "Bloom Wellness",
    initials: "PP",
    color: "#7B5EA7",
  },
  {
    quote:
      "Finally, a marketing agency that delivers on promises. Our social media engagement increased 300% and we're seeing real conversions, not just vanity metrics.",
    name: "Amit Kumar",
    company: "TechStart Solutions",
    initials: "AK",
    color: "#4A90A4",
  },
];

// ─── Service Cards Data ───
const services = [
  {
    icon: Satellite,
    title: "Media Solutions",
    description:
      "Precision paid media across Meta, Google & beyond. Every rupee tracked, every impression optimized.",
  },
  {
    icon: Rocket,
    title: "Social Media Presence",
    description:
      "Content strategy, community building, and brand voice development that turns followers into customers.",
  },
  {
    icon: Brain,
    title: "Digital Consulting",
    description:
      "One-on-one strategic sessions to audit, fix, and scale your entire digital presence.",
  },
];

// ─── Stats Data ───
const stats = [
  { value: 3, suffix: "X", label: "Average ROAS for our clients" },
  { value: 150, suffix: "+", label: "Campaigns managed" },
  { value: 40, suffix: "+", label: "Small businesses scaled" },
  { value: 98, suffix: "%", label: "Client retention rate" },
];

// ─── Process Steps ───
const processSteps = [
  {
    number: "01",
    title: "Discovery Call",
    description: "We dive deep into your business, goals, and current challenges to understand exactly what you need.",
    icon: Phone,
  },
  {
    number: "02",
    title: "Strategy Blueprint",
    description: "Our team crafts a tailored growth strategy with clear milestones and measurable outcomes.",
    icon: FileText,
  },
  {
    number: "03",
    title: "Launch & Optimize",
    description: "We execute campaigns with precision, continuously testing and optimizing for peak performance.",
    icon: Zap,
  },
  {
    number: "04",
    title: "Scale & Report",
    description: "Monthly detailed reports, strategy refinements, and scaling what works to maximize your ROI.",
    icon: BarChart3,
  },
];

// ─── Why Us Points ───
const whyUsPoints = [
  "Data-driven decisions backed by real market insights",
  "Transparent reporting — you see every rupee spent",
  "Ambitious growth targets with realistic execution plans",
  "Client-first approach with dedicated account managers",
];

export default function HomePage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const testimonialInterval = useRef<NodeJS.Timeout | null>(null);

  // Auto-rotate testimonials
  useEffect(() => {
    testimonialInterval.current = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 3000);
    return () => {
      if (testimonialInterval.current) clearInterval(testimonialInterval.current);
    };
  }, []);

  const goToTestimonial = (index: number) => {
    setCurrentTestimonial(index);
    if (testimonialInterval.current) clearInterval(testimonialInterval.current);
    testimonialInterval.current = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 3000);
  };

  return (
    <>
      <Navigation />
      <LeadPopup />

      <main>
        {/* ═══════════════════════════════════════════
            SECTION 2: HERO
            ═══════════════════════════════════════════ */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden grain-overlay">
          {/* Background Glow */}
          <div className="absolute inset-0 pointer-events-none">
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-30"
              style={{
                background:
                  "radial-gradient(ellipse at center, rgba(201, 168, 76, 0.2) 0%, rgba(123, 94, 167, 0.15) 40%, transparent 70%)",
              }}
            />
          </div>

          {/* Floating Shapes */}
          <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-[#C9A84C]/10 blur-3xl animate-float" />
          <div
            className="absolute bottom-40 right-20 w-48 h-48 rounded-full bg-[#7B5EA7]/10 blur-3xl animate-float"
            style={{ animationDelay: "2s" }}
          />
          <div
            className="absolute top-1/3 right-1/4 w-24 h-24 rounded-full bg-[#C9A84C]/5 blur-2xl animate-float"
            style={{ animationDelay: "4s" }}
          />

          <div className="container relative z-10 text-center pt-24 pb-20">
            <h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 max-w-4xl mx-auto"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              We Don&apos;t Run Ads.{" "}
              <span className="gradient-text">We Engineer Growth.</span>
            </h1>
            <p className="text-lg md:text-xl text-[#9B9B9B] max-w-2xl mx-auto mb-10 leading-relaxed">
              Performance Media helps small and growing businesses dominate their
              digital space — through precision media buying, social presence, and
              strategic consulting.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/services" className="btn-primary">
                Explore Services
                <ArrowRight size={18} />
              </Link>
              <Link href="#how-it-works" className="btn-ghost">
                See How It Works
              </Link>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
              <ArrowDown size={24} className="text-[#9B9B9B]" />
            </div>
          </div>
        </section>

        <div className="section-divider" />

        {/* ═══════════════════════════════════════════
            SECTION 3: TRUST BAR
            ═══════════════════════════════════════════ */}
        <section className="py-16 md:py-20">
          <div className="container">
            <p className="text-center text-[#9B9B9B] text-sm uppercase tracking-wider mb-10">
              Trusted by growth-focused businesses across India
            </p>
            <div className="flex items-center justify-center gap-8 md:gap-12 overflow-hidden">
              <div className="flex items-center gap-8 md:gap-12 animate-marquee md:animate-none">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="flex-shrink-0 w-32 h-12 bg-[#1A1A28] rounded-lg flex items-center justify-center border border-white/[0.06]"
                  >
                    <span className="text-[#9B9B9B] text-xs font-medium uppercase tracking-wider">
                      Client Logo
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <div className="section-divider" />

        {/* ═══════════════════════════════════════════
            SECTION 4: WHAT WE DO (Services Preview)
            ═══════════════════════════════════════════ */}
        <section className="py-20 md:py-28">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="section-heading">
                Built for Businesses That{" "}
                <span className="gradient-text">Mean Business</span>
              </h2>
              <p className="section-subheading mx-auto">
                Three core pillars designed to take your brand from invisible to
                unstoppable.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {services.map((service, index) => (
                <div
                  key={service.title}
                  className="glass-card group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#C9A84C]/20 to-[#7B5EA7]/20 flex items-center justify-center mb-6 group-hover:from-[#C9A84C]/30 group-hover:to-[#7B5EA7]/30 transition-all duration-300">
                    <service.icon size={28} className="text-[#C9A84C]" />
                  </div>
                  <h3
                    className="text-xl font-bold mb-3 text-[#F0EDE6]"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {service.title}
                  </h3>
                  <p className="text-[#9B9B9B] text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-[#C9A84C] font-medium hover:gap-3 transition-all duration-300"
              >
                View All Services
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>

        <div className="section-divider" />

        {/* ═══════════════════════════════════════════
            SECTION 5: WHY PERFORMANCE MEDIA
            ═══════════════════════════════════════════ */}
        <section className="py-20 md:py-28">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Stats */}
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat) => {
                  const { count, ref } = useCountUp(stat.value, 2000);
                  return (
                    <div
                      key={stat.label}
                      ref={ref}
                      className="glass-card text-center"
                    >
                      <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                        {count}
                        {stat.suffix}
                      </div>
                      <p className="text-[#9B9B9B] text-sm">{stat.label}</p>
                    </div>
                  );
                })}
              </div>

              {/* Content */}
              <div>
                <h2
                  className="section-heading mb-6"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Why We&apos;re{" "}
                  <span className="gradient-text">Different</span>
                </h2>
                <p className="text-[#9B9B9B] mb-8 leading-relaxed">
                  Most agencies promise the moon and deliver mediocrity. We built
                  Performance Media on a simple principle: every rupee you spend
                  must bring measurable growth. No fluff, no vanity metrics — just
                  results that compound.
                </p>
                <ul className="check-list">
                  {whyUsPoints.map((point, index) => (
                    <li key={index}>
                      <Check size={20} />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <div className="section-divider" />

        {/* ═══════════════════════════════════════════
            SECTION 6: HOW IT WORKS
            ═══════════════════════════════════════════ */}
        <section id="how-it-works" className="py-20 md:py-28">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="section-heading">
                From Onboarding to Revenue in{" "}
                <span className="gradient-text">4 Steps</span>
              </h2>
            </div>

            <div className="relative">
              {/* Desktop Connector Line */}
              <div className="hidden md:block absolute top-12 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-[#C9A84C]/30 via-[#7B5EA7]/30 to-[#C9A84C]/30" />

              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6">
                {processSteps.map((step, index) => (
                  <div key={step.number} className="relative text-center">
                    <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-[#C9A84C] to-[#7B5EA7] flex items-center justify-center mb-6 shadow-lg shadow-[#C9A84C]/10">
                      <step.icon size={32} className="text-[#0A0A0F]" />
                    </div>
                    <div className="text-[#C9A84C] font-bold text-sm mb-2">
                      {step.number}
                    </div>
                    <h3
                      className="text-lg font-bold mb-2 text-[#F0EDE6]"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {step.title}
                    </h3>
                    <p className="text-[#9B9B9B] text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <div className="section-divider" />

        {/* ═══════════════════════════════════════════
            SECTION 7: TESTIMONIALS
            ═══════════════════════════════════════════ */}
        <section className="py-20 md:py-28">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="section-heading">
                Results That <span className="gradient-text">Speak</span>
              </h2>
            </div>

            <div className="max-w-3xl mx-auto">
              <div className="relative">
                {/* Testimonial Cards */}
                <div className="overflow-hidden">
                  <div
                    className="flex transition-transform duration-500 ease-out"
                    style={{
                      transform: `translateX(-${currentTestimonial * 100}%)`,
                    }}
                  >
                    {testimonials.map((t, index) => (
                      <div
                        key={index}
                        className="w-full flex-shrink-0 px-4"
                      >
                        <div className="glass-card text-center">
                          {/* Stars */}
                          <div className="flex items-center justify-center gap-1 mb-6">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                size={18}
                                className="text-[#C9A84C] fill-[#C9A84C]"
                              />
                            ))}
                          </div>

                          {/* Quote */}
                          <p
                            className="text-lg md:text-xl italic text-[#F0EDE6] leading-relaxed mb-8"
                            style={{ fontFamily: "var(--font-heading)" }}
                          >
                            &ldquo;{t.quote}&rdquo;
                          </p>

                          {/* Avatar & Info */}
                          <div className="flex items-center justify-center gap-4">
                            <div
                              className="w-12 h-12 rounded-full flex items-center justify-center text-[#0A0A0F] font-bold text-sm"
                              style={{ backgroundColor: t.color }}
                            >
                              {t.initials}
                            </div>
                            <div className="text-left">
                              <p className="font-semibold text-[#F0EDE6]">
                                {t.name}
                              </p>
                              <p className="text-[#9B9B9B] text-sm">{t.company}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Navigation Arrows */}
                <button
                  onClick={() =>
                    goToTestimonial(
                      (currentTestimonial - 1 + testimonials.length) %
                        testimonials.length
                    )
                  }
                  className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-6 p-2 text-[#9B9B9B] hover:text-[#C9A84C] transition-colors"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft size={28} />
                </button>
                <button
                  onClick={() =>
                    goToTestimonial(
                      (currentTestimonial + 1) % testimonials.length
                    )
                  }
                  className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-6 p-2 text-[#9B9B9B] hover:text-[#C9A84C] transition-colors"
                  aria-label="Next testimonial"
                >
                  <ChevronRight size={28} />
                </button>
              </div>

              {/* Dots */}
              <div className="flex items-center justify-center gap-2 mt-8">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToTestimonial(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      index === currentTestimonial
                        ? "bg-[#C9A84C] w-8"
                        : "bg-[#1A1A28] hover:bg-[#9B9B9B]"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        <div className="section-divider" />

        {/* ═══════════════════════════════════════════
            SECTION 8: CTA BANNER
            ═══════════════════════════════════════════ */}
        <section className="py-20 md:py-28 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#C9A84C]/10 via-[#7B5EA7]/10 to-[#C9A84C]/10" />
          <div className="container relative z-10 text-center">
            <h2
              className="text-3xl md:text-5xl font-bold mb-4"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Ready to{" "}
              <span className="gradient-text">10X Your Digital Presence?</span>
            </h2>
            <p className="text-[#9B9B9B] text-lg mb-10 max-w-xl mx-auto">
              Book a free 30-minute strategy call. No fluff, just a plan.
            </p>
            <Link href="/contact" className="btn-white">
              Book Free Call
              <ArrowRight size={18} />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
