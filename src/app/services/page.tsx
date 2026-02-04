import { services, siteConfig } from "@/lib/site";
import Link from "next/link";

export const metadata = {
  title: "সেবা",
  description: "MR Transport Agency এর পরিবহন ও লজিস্টিকস সেবা সমূহ।",
};

export default function ServicesPage() {
  return (
    <div>
      <section className="bg-white py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-display text-brand-blue">আমাদের সেবা</h1>
          <p className="mt-4 text-slate-600">
            আপনার ব্যবসার প্রয়োজন অনুযায়ী সঠিক যানবাহন ও অভিজ্ঞ টিম নিয়ে আমরা প্রস্তুত।
          </p>
        </div>
      </section>

      <section className="bg-brand-light py-16">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          {services.map((service) => (
            <div key={service.title} className="rounded-3xl bg-white p-6 shadow-soft">
              <h2 className="text-2xl font-display text-brand-blue">{service.title}</h2>
              <p className="mt-2 text-xs uppercase tracking-wide text-brand-red">{service.titleEn}</p>
              <p className="mt-4 text-sm text-slate-600">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-soft">
            <h2 className="text-2xl font-display text-brand-blue">কাজের ধাপ</h2>
            <div className="mt-6 grid gap-6 md:grid-cols-3">
              <div>
                <p className="text-sm font-semibold text-brand-blue">১. তথ্য সংগ্রহ</p>
                <p className="mt-2 text-sm text-slate-600">পিকআপ, ডেলিভারি ও পণ্যের তথ্য নিন।</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-brand-blue">২. কোটেশন</p>
                <p className="mt-2 text-sm text-slate-600">দ্রুত কোটেশন দিয়ে সম্মতি নিন।</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-brand-blue">৩. পরিবহন সম্পন্ন</p>
                <p className="mt-2 text-sm text-slate-600">সময়ে পণ্য পৌঁছে দিন।</p>
              </div>
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={`tel:${siteConfig.phone}`}
                className="rounded-full bg-brand-red px-6 py-3 text-sm font-semibold text-white"
              >
                কল করুন
              </a>
              <Link
                href="/get-a-quote"
                className="rounded-full border border-brand-blue px-6 py-3 text-sm font-semibold text-brand-blue"
              >
                কোটেশন নিন
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
