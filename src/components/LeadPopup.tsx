"use client";

import { useState, useEffect } from "react";
import { X, CheckCircle, Loader2 } from "lucide-react";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";

export default function LeadPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    budget: "",
    challenge: "",
  });

  useEffect(() => {
    const lastShown = localStorage.getItem("pm_popup_last_shown");
    const now = Date.now();
    const sevenDays = 7 * 24 * 60 * 60 * 1000;

    if (!lastShown || now - parseInt(lastShown) > sevenDays) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsClosing(true);
    localStorage.setItem("pm_popup_last_shown", Date.now().toString());
    setTimeout(() => {
      setIsVisible(false);
      setIsClosing(false);
    }, 300);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          ...formData,
          _subject: "New Lead from Performance Media Website",
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        localStorage.setItem("pm_popup_last_shown", Date.now().toString());
        setTimeout(() => {
          handleClose();
        }, 3000);
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center p-4 transition-opacity duration-300 ${
        isClosing ? "opacity-0" : "opacity-100"
      }`}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-[#0A0A0F]/90 backdrop-blur-sm"
        onClick={handleClose}
      />

      {/* Popup */}
      <div
        className={`relative w-full max-w-lg bg-[#12121A] border border-white/[0.08] rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 ${
          isClosing ? "scale-95 opacity-0" : "scale-100 opacity-100"
        }`}
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 text-[#9B9B9B] hover:text-[#F0EDE6] transition-colors z-10"
          aria-label="Close popup"
        >
          <X size={20} />
        </button>

        <div className="p-8 md:p-10">
          {submitted ? (
            <div className="text-center py-8 animate-scaleIn">
              <CheckCircle size={56} className="text-[#C9A84C] mx-auto mb-4" />
              <h3
                className="text-2xl font-bold mb-2"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                We&apos;ll be in touch within 24 hours
              </h3>
              <p className="text-3xl">🎯</p>
            </div>
          ) : (
            <>
              <h2
                className="text-3xl font-bold mb-2 text-[#F0EDE6]"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Let&apos;s Talk Growth
              </h2>
              <p className="text-[#9B9B9B] text-sm mb-8">
                Tell us about your business and we&apos;ll reach out within 24 hours
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="form-group">
                    <label className="form-label">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="form-input"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Company Name *</label>
                    <input
                      type="text"
                      name="company"
                      required
                      value={formData.company}
                      onChange={handleChange}
                      className="form-input"
                      placeholder="Your company"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Monthly Marketing Budget</label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="form-select"
                  >
                    <option value="">Select budget range</option>
                    <option value="Under ₹50K">Under ₹50K</option>
                    <option value="₹50K–₹2L">₹50K – ₹2L</option>
                    <option value="₹2L–₹10L">₹2L – ₹10L</option>
                    <option value="₹10L+">₹10L+</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Current Challenge</label>
                  <textarea
                    name="challenge"
                    value={formData.challenge}
                    onChange={handleChange}
                    className="form-textarea"
                    placeholder="What's your biggest marketing challenge?"
                    rows={3}
                  />
                </div>

                {error && (
                  <div className="error-message text-sm">{error}</div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full mt-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    "Get a Free Consultation"
                  )}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
