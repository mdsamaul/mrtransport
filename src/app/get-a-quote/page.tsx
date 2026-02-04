import QuoteForm from "@/components/QuoteForm";
import { siteConfig } from "@/lib/site";

export const metadata = {
  title: "কোটেশন",
  description: "MR Transport Agency থেকে দ্রুত কোটেশন নিন।",
};

export default function QuotePage() {
  return (
    <div>
      <section className="bg-white py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-display text-brand-blue">কোটেশন নিন</h1>
          <p className="mt-4 text-slate-600">
            আপনার পিকআপ, ডেলিভারি এবং পণ্যের তথ্য দিয়ে দ্রুত কোটেশন পান।
          </p>
        </div>
      </section>

      <section className="bg-brand-light py-16">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="rounded-3xl bg-white p-6 shadow-soft">
            <QuoteForm />
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-soft">
            <h2 className="text-2xl font-display text-brand-blue">সরাসরি যোগাযোগ</h2>
            <p className="mt-3 text-sm text-slate-600">তাৎক্ষণিক সহায়তার জন্য কল করুন।</p>
            <a
              href={`tel:${siteConfig.phone}`}
              className="mt-5 inline-flex rounded-full bg-brand-red px-5 py-2 text-sm font-semibold text-white"
            >
              {siteConfig.phoneDisplay}
            </a>
            <div className="mt-6 text-sm text-slate-600">
              <p>ইমেইল: {siteConfig.email}</p>
              <p>ঠিকানা: {siteConfig.address}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
