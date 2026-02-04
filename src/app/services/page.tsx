import { services, siteConfig } from "@/lib/site";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "সেবা | MR Transport Agency",
  description: "MR Transport Agency এর পরিবহন ও লজিস্টিকস সেবা সমূহ।",
};

export default function ServicesPage() {
  return (
    <div className="pt-20">
      <section className="bg-white py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="mb-4 inline-flex items-center rounded-full bg-brand-red/5 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand-red">
              আমাদের পরিধি
            </p>
            <h1 className="text-4xl font-display font-bold text-brand-blue sm:text-6xl">লজিস্টিকস সেবা সমূহ</h1>
            <p className="mt-8 text-lg text-slate-600 leading-relaxed font-light lg:text-xl">
              আপনার ব্যবসার প্রয়োজন অনুযায়ী আধুনিক যানবাহন ও অভিজ্ঞ টিম নিয়ে আমরা প্রস্তুত।
              আমরা প্রতিটি পণ্যকে সর্বোচ্চ গুরুত্ব দিয়ে নিরাপদে গন্তব্যে পৌঁছে দেই।
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-slate-50 py-24">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          {services.map((service, idx) => (
            <Reveal key={service.title} delayMs={idx * 50} className="group rounded-3xl bg-white p-8 shadow-sm border border-slate-100 hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="flex justify-between items-start mb-6">
                <div className="h-14 w-14 rounded-2xl bg-brand-blue/5 flex items-center justify-center text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-colors">
                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                   </svg>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-300 font-sans group-hover:text-brand-red transition-colors">{service.titleEn}</span>
              </div>
              <h2 className="text-2xl font-display font-bold text-brand-blue mb-4">{service.title}</h2>
              <p className="text-slate-600 leading-relaxed font-light">{service.description}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal className="rounded-[2.5rem] bg-brand-blue p-12 lg:p-16 text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <h2 className="text-3xl font-display font-bold mb-12 sm:text-4xl">সহজ ৩ ধাপে সেবা নিন</h2>
            <div className="grid gap-12 md:grid-cols-3 relative z-10">
              {[
                { step: "১", title: "তথ্য সংগ্রহ", desc: "পিকআপ, ডেলিভারি ও পণ্যের বিস্তারিত তথ্য আমাদের জানান।" },
                { step: "২", title: "কোটেশন ও কনফার্ম", desc: "আমরা দ্রুত সেরা ভাড়া প্রদান করব। সম্মতি দিলে বুকিং নিশ্চিত হবে।" },
                { step: "৩", title: "নিরাপদ পরিবহন", desc: "সঠিক সময়ে গাড়ি পৌঁছে পণ্য লোড হয়ে গন্তব্যে রওনা হবে।" }
              ].map((item, i) => (
                <div key={i} className="flex flex-col gap-4">
                  <div className="h-12 w-12 rounded-full border-2 border-brand-red flex items-center justify-center font-bold text-brand-red">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="text-blue-100 text-sm leading-relaxed font-light">{item.desc}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-16 flex flex-wrap gap-6 border-t border-white/10 pt-12">
              <a
                href={`tel:${siteConfig.phone}`}
                className="inline-flex h-14 items-center justify-center rounded-xl bg-brand-red px-10 text-base font-bold text-white shadow-xl hover:bg-red-600 transition-colors"
              >
                সরাসরি কল করুন
              </a>
              <Link
                href="/get-a-quote"
                className="inline-flex h-14 items-center justify-center rounded-xl border border-white/20 bg-white/5 px-10 text-base font-bold text-white hover:bg-white/10 transition-colors"
              >
                অনলাইনে কোটেশন নিন
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
