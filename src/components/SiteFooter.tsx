import Link from "next/link";
import { navLinks, services, siteConfig } from "@/lib/site";

export default function SiteFooter() {
  return (
    <footer className="bg-[#0a2240] text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6">
               <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-blue border border-white/10 font-display text-lg font-bold text-white">
                MR
               </div>
               <div>
                  <p className="font-display text-xl font-bold leading-none text-white">MR Transport</p>
                  <p className="text-[10px] uppercase tracking-wider text-blue-200">Agency</p>
               </div>
            </Link>
            <p className="text-sm text-blue-100 leading-relaxed mb-6 font-light">
              চট্টগ্রাম ভিত্তিক বিশ্বস্ত পরিবহন ও লজিস্টিকস পার্টনার। নিরাপদ, দ্রুত এবং সাশ্রয়ী সেবাই আমাদের অঙ্গীকার।
            </p>
            <div className="flex gap-3">
              <a href="#" className="h-9 w-9 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-brand-red hover:border-brand-red transition-all">
                <span className="text-xs">f</span>
              </a>
              <a href="#" className="h-9 w-9 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-brand-red hover:border-brand-red transition-all">
                <span className="text-xs">in</span>
              </a>
              <a href="#" className="h-9 w-9 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-brand-red hover:border-brand-red transition-all">
                <span className="text-xs">X</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-display text-lg font-bold mb-6 text-white border-b border-brand-red w-fit pb-1">প্রধান পেজ</h3>
            <ul className="space-y-3 text-sm text-blue-100 font-light">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-brand-red transition-colors flex items-center gap-2">
                    <span className="h-1 w-1 bg-brand-red rounded-full" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-lg font-bold mb-6 text-white border-b border-brand-red w-fit pb-1">আমাদের সেবা</h3>
            <ul className="space-y-3 text-sm text-blue-100 font-light">
              {services.slice(0, 5).map((service) => (
                <li key={service.title} className="flex items-center gap-2">
                   <span className="h-1 w-1 bg-brand-red rounded-full" />
                   {service.title}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-lg font-bold mb-6 text-white border-b border-brand-red w-fit pb-1">যোগাযোগ করুন</h3>
            <ul className="space-y-4 text-sm text-blue-100 font-light">
               <li className="flex gap-3">
                  <span className="text-brand-red mt-1 flex-shrink-0">📍</span>
                  <span>{siteConfig.address}</span>
               </li>
               <li className="flex gap-3">
                  <span className="text-brand-red mt-1 flex-shrink-0">📞</span>
                  <span>{siteConfig.phoneDisplay}</span>
               </li>
               <li className="flex gap-3">
                  <span className="text-brand-red mt-1 flex-shrink-0">✉️</span>
                  <span>{siteConfig.email}</span>
               </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-blue-300 uppercase tracking-[2px]">
          <p>© {new Date().getFullYear()} MR Transport Agency. All rights reserved.</p>
          <p>Created by Mands IT</p>
        </div>
      </div>
    </footer>
  );
}
