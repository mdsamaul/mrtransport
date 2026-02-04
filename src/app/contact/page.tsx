import ContactForm from "@/components/ContactForm";
import { siteConfig } from "@/lib/site";

export const metadata = {
  title: "যোগাযোগ",
  description: "MR Transport Agency এর সাথে যোগাযোগ করুন।",
};

export default function ContactPage() {
  return (
    <div>
      <section className="bg-white py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-display text-brand-blue">যোগাযোগ করুন</h1>
          <p className="mt-4 text-slate-600">
            যে কোনো পরিবহন প্রয়োজন বা প্রশ্নের জন্য আমাদের সাথে যোগাযোগ করুন।
          </p>
        </div>
      </section>

      <section className="bg-brand-light py-16">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="rounded-3xl bg-white p-6 shadow-soft">
            <ContactForm />
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
            <h2 className="text-2xl font-display text-brand-blue">অফিস ঠিকানা</h2>
            <div className="mt-4 space-y-2 text-sm text-slate-600">
              <p>{siteConfig.address}</p>
              <p>ফোন: {siteConfig.phoneDisplay}</p>
              <p>ইমেইল: {siteConfig.email}</p>
              <p>ব্যবসার সময়: {siteConfig.hours}</p>
            </div>
            <a
              href={`tel:${siteConfig.phone}`}
              className="mt-5 inline-flex rounded-full bg-brand-red px-5 py-2 text-sm font-semibold text-white"
            >
              কল করুন
            </a>
            <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200">
              <iframe
                title="Google Map"
                src="https://www.google.com/maps?q=Songit%20Cinema%20Road%20Hamjarbag%20Panchlaish%20Chattogram&output=embed"
                className="h-64 w-full"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
