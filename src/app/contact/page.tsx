"use client";

import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Linkedin,
  Instagram,
  Send,
  Loader2,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";

const serviceOptions = [
  "Media Solutions",
  "Social Media Presence",
  "Digital Consulting",
  "All Services",
  "Not Sure Yet",
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (status !== "idle") {
      setStatus("idle");
      setErrorMsg("");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("idle");
    setErrorMsg("");

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          ...formData,
          _subject: "New Contact Form Submission - Performance Media",
        }),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          company: "",
          service: "",
          message: "",
        });
      } else {
        setStatus("error");
        setErrorMsg("Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Navigation />

      <main>
        {/* Hero */}
        <section className="relative min-h-[40vh] flex items-center justify-center pt-20 grain-overlay">
          <div className="absolute inset-0 pointer-events-none">
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full opacity-20"
              style={{
                background:
                  "radial-gradient(ellipse at center, rgba(201, 168, 76, 0.15) 0%, rgba(123, 94, 167, 0.1) 40%, transparent 70%)",
              }}
            />
          </div>

          <div className="container relative z-10 text-center py-16">
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Let&apos;s Build Something{" "}
              <span className="gradient-text">Great</span>
            </h1>
            <p className="text-lg text-[#9B9B9B] max-w-xl mx-auto">
              Have a project in mind? Fill out the form and we&apos;ll get back to you
              within 24 hours.
            </p>
          </div>
        </section>

        <div className="section-divider" />

        {/* Contact Section */}
        <section className="py-20 md:py-28">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Form */}
              <div>
                <div className="glass-card">
                  <h2
                    className="text-2xl font-bold mb-6 text-[#F0EDE6]"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    Send us a message
                  </h2>

                  {status === "success" && (
                    <div className="success-message mb-6 flex items-center gap-2">
                      <CheckCircle size={18} />
                      <span>
                        Message sent successfully! We&apos;ll be in touch soon.
                      </span>
                    </div>
                  )}

                  {status === "error" && (
                    <div className="error-message mb-6 flex items-center gap-2">
                      <AlertCircle size={18} />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div className="form-group">
                        <label className="form-label">Full Name *</label>
                        <input
                          type="text"
                          name="fullName"
                          required
                          value={formData.fullName}
                          onChange={handleChange}
                          className="form-input"
                          placeholder="Your name"
                        />
                      </div>
                      <div className="form-group">
                        <label className="form-label">Email Address *</label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="form-input"
                          placeholder="you@company.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div className="form-group">
                        <label className="form-label">Phone Number</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="form-input"
                          placeholder="+91 XXXXX XXXXX"
                        />
                      </div>
                      <div className="form-group">
                        <label className="form-label">Company Name</label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="form-input"
                          placeholder="Your company"
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="form-label">Service Interested In</label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="form-select"
                      >
                        <option value="">Select a service</option>
                        {serviceOptions.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="form-group">
                      <label className="form-label">Message</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="form-textarea"
                        placeholder="Tell us about your project..."
                        rows={4}
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-primary w-full"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 size={18} className="animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send size={18} />
                        </>
                      )}
                    </button>
                  </form>
                </div>
              </div>

              {/* Contact Info */}
              <div className="space-y-8">
                <div>
                  <h2
                    className="text-2xl font-bold mb-6 text-[#F0EDE6]"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    Get in touch
                  </h2>
                  <p className="text-[#9B9B9B] leading-relaxed mb-8">
                    We&apos;re a remote-first agency serving clients across India.
                    Whether you&apos;re a startup or an established business, we&apos;d
                    love to hear from you.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#C9A84C]/20 to-[#7B5EA7]/20 flex items-center justify-center flex-shrink-0">
                      <Mail size={20} className="text-[#C9A84C]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#F0EDE6] mb-1">Email</h3>
                      <a
                        href="mailto:hello@performancemedia.in"
                        className="text-[#9B9B9B] hover:text-[#C9A84C] transition-colors"
                      >
                        hello@performancemedia.in
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#C9A84C]/20 to-[#7B5EA7]/20 flex items-center justify-center flex-shrink-0">
                      <Phone size={20} className="text-[#C9A84C]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#F0EDE6] mb-1">Phone</h3>
                      <span className="text-[#9B9B9B]">+91 XXXXX XXXXX</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#C9A84C]/20 to-[#7B5EA7]/20 flex items-center justify-center flex-shrink-0">
                      <MapPin size={20} className="text-[#C9A84C]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#F0EDE6] mb-1">
                        Location
                      </h3>
                      <span className="text-[#9B9B9B]">
                        India (Remote-First Agency)
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#C9A84C]/20 to-[#7B5EA7]/20 flex items-center justify-center flex-shrink-0">
                      <Clock size={20} className="text-[#C9A84C]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#F0EDE6] mb-1">
                        Office Hours
                      </h3>
                      <span className="text-[#9B9B9B]">
                        Mon–Sat, 10AM–7PM IST
                      </span>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="pt-4">
                  <h3 className="font-semibold text-[#F0EDE6] mb-4">
                    Follow Us
                  </h3>
                  <div className="flex items-center gap-3">
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
                  </div>
                </div>

                {/* Map Placeholder */}
                <div className="glass-card mt-4 min-h-[200px] flex flex-col items-center justify-center text-center">
                  <MapPin size={32} className="text-[#C9A84C] mb-3" />
                  <p className="text-[#F0EDE6] font-medium mb-1">
                    Remote-First Team
                  </p>
                  <p className="text-[#9B9B9B] text-sm max-w-xs">
                    Our team works remotely across India, bringing diverse
                    perspectives and local insights to every project.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
