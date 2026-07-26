"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { navLinks, siteConfig } from "@/lib/site";

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-blue font-display text-lg font-bold text-white">
            MR
          </div>
          <div>
            <p className={`font-display text-xl font-bold leading-none ${scrolled ? "text-brand-blue" : "text-white"}`}>
              MR Transport
            </p>
            <p className={`text-[10px] uppercase tracking-wider ${scrolled ? "text-slate-500" : "text-blue-100"}`}>
              Agency
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-semibold md:flex">
          {navLinks.map((link) => (
            <Link 
              key={link.href} 
              href={link.href} 
              className={`transition-colors hover:text-brand-red ${
                scrolled ? "text-slate-700" : "text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={`tel:${siteConfig.phone}`}
            className="rounded-full bg-brand-red px-6 py-2.5 text-sm font-bold text-white shadow-lg transition-transform hover:scale-105 active:scale-95"
          >
            কল করুন
          </a>
          <a
            href="https://transport.bmhbd.org/mrtransportagency/login"
            className="rounded-full bg-green-600 px-6 py-2.5 text-sm font-bold text-white shadow-lg transition-transform hover:scale-105 hover:bg-green-700 active:scale-95"
          >
            অ্যাডমিন লগইন
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className={`inline-flex items-center justify-center rounded-lg p-2 md:hidden ${
            scrolled ? "text-slate-700" : "text-white"
          }`}
          aria-label="Toggle navigation"
        >
          <span className="text-2xl">{open ? "✕" : "☰"}</span>
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="absolute top-full left-0 w-full bg-white shadow-xl md:hidden animate-fade-in">
          <nav className="flex flex-col border-t border-slate-100 p-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={`tel:${siteConfig.phone}`}
              className="mt-4 rounded-xl bg-brand-red py-3 text-center text-sm font-bold text-white"
              onClick={() => setOpen(false)}
            >
              কল করুন
            </a>
            <a
              href="https://transport.bmhbd.org/mrtransportagency/login"
              className="mt-2 rounded-xl bg-green-600 py-3 text-center text-sm font-bold text-white hover:bg-green-700"
              onClick={() => setOpen(false)}
            >
              অ্যাডমিন লগইন
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
