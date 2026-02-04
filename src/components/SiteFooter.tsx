import Link from "next/link";
import { navLinks, services, siteConfig } from "@/lib/site";

export default function SiteFooter() {
  return (
    <footer className="bg-brand-blue text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-3 lg:px-8">
        <div>
          <h2 className="font-display text-2xl">MR Transport Agency</h2>
          <p className="mt-3 text-sm text-blue-100">
            চট্টগ্রাম ভিত্তিক বিশ্বস্ত পরিবহন ও লজিস্টিকস পার্টনার। নিরাপদ, দ্রুত এবং সাশ্রয়ী
            সেবাই আমাদের অঙ্গীকার।
          </p>
          <div className="mt-4 space-y-2 text-sm text-blue-100">
            <p>প্রোপ্রাইটর: {siteConfig.owner}</p>
            <p>ঠিকানা: {siteConfig.address}</p>
            <p>সময়: {siteConfig.hours}</p>
          </div>
        </div>
        <div>
          <h3 className="font-display text-lg">দ্রুত লিংক</h3>
          <ul className="mt-4 space-y-2 text-sm text-blue-100">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-display text-lg">আমাদের সেবা</h3>
          <ul className="mt-4 space-y-2 text-sm text-blue-100">
            {services.map((service) => (
              <li key={service.title}>{service.title}</li>
            ))}
          </ul>
          <div className="mt-6 flex gap-3">
            <a
              href="https://www.facebook.com"
              aria-label="Facebook"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
            >
              f
            </a>
            <a
              href="https://www.linkedin.com"
              aria-label="LinkedIn"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
            >
              in
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              aria-label="Email"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
            >
              @
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-blue-100">
        © {new Date().getFullYear()} MR Transport Agency. সর্বস্বত্ব সংরক্ষিত।
      </div>
    </footer>
  );
}
