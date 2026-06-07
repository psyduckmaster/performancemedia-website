"use client";

import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <>
      <Navigation />
      <main className="min-h-[70vh] flex items-center justify-center pt-20">
        <div className="container text-center">
          <div className="mb-8">
            <span
              className="text-[120px] md:text-[180px] font-bold leading-none gradient-text block"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              404
            </span>
          </div>
          <h1
            className="text-3xl md:text-4xl font-bold mb-4 text-[#F0EDE6]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Page Not Found
          </h1>
          <p className="text-[#9B9B9B] text-lg mb-10 max-w-md mx-auto">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
            Let&apos;s get you back on track.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/" className="btn-primary">
              <Home size={18} />
              Back to Home
            </Link>
            <button
              onClick={() => window.history.back()}
              className="btn-ghost"
            >
              <ArrowLeft size={18} />
              Go Back
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
