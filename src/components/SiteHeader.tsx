"use client";

import Link from "next/link";
import { useState } from "react";
import { navLinks, siteConfig } from "@/lib/site";

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-blue font-display text-lg text-white">
            MR
          </div>
          <div>
            <p className="font-display text-xl text-brand-blue">MR Transport Agency</p>
            <p className="text-xs text-slate-600">চট্টগ্রাম ভিত্তিক পরিবহন সেবা</p>
          </div>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-700 md:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-brand-blue">
              {link.label}
            </Link>
          ))}
          <Link
            href="/get-a-quote"
            className="rounded-full bg-brand-red px-4 py-2 text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-red-600"
          >
            কোটেশন নিন
          </Link>
        </nav>
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="inline-flex items-center justify-center rounded-lg border border-slate-200 p-2 text-slate-700 md:hidden"
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          <span className="text-lg">☰</span>
        </button>
      </div>
      {open && (
        <div className="border-t border-slate-200 bg-white md:hidden">
          <nav className="flex flex-col gap-3 px-4 py-4 text-sm font-medium text-slate-700">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-2 hover:bg-brand-light"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/get-a-quote"
              className="rounded-lg bg-brand-red px-3 py-2 text-center text-white"
              onClick={() => setOpen(false)}
            >
              কোটেশন নিন
            </Link>
            <a
              href={`tel:${siteConfig.phone}`}
              className="rounded-lg border border-brand-blue px-3 py-2 text-center text-brand-blue"
            >
              কল করুন
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
