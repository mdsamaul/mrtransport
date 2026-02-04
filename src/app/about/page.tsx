import { siteConfig } from "@/lib/site";

export const metadata = {
  title: "আমাদের সম্পর্কে",
  description: "MR Transport Agency সম্পর্কে জানুন।",
};

export default function AboutPage() {
  return (
    <div>
      <section className="bg-white py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <p className="mb-4 inline-flex items-center rounded-full bg-brand-light px-4 py-1 text-xs font-semibold text-brand-blue">
            আমাদের সম্পর্কে
          </p>
          <h1 className="text-4xl font-display text-brand-blue">MR Transport Agency</h1>
          <p className="mt-5 text-slate-600">
            MR Transport Agency চট্টগ্রাম ভিত্তিক একটি পেশাদার পরিবহন ও লজিস্টিকস সেবা প্রদানকারী প্রতিষ্ঠান।
            আমরা ব্যবসার প্রয়োজন অনুযায়ী দ্রুত, নিরাপদ এবং সাশ্রয়ী পরিবহন ব্যবস্থা নিশ্চিত করি।
          </p>
        </div>
      </section>

      <section className="bg-brand-light py-16">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="rounded-3xl bg-white p-8 shadow-soft">
            <h2 className="text-2xl font-display text-brand-blue">আমাদের মিশন</h2>
            <p className="mt-3 text-sm text-slate-600">
              ক্লায়েন্টদের জন্য নির্ভরযোগ্য, সময়নিষ্ঠ এবং দক্ষ পরিবহন সেবা নিশ্চিত করা।
            </p>
          </div>
          <div className="rounded-3xl bg-white p-8 shadow-soft">
            <h2 className="text-2xl font-display text-brand-blue">আমাদের ভিশন</h2>
            <p className="mt-3 text-sm text-slate-600">
              চট্টগ্রাম এবং সারাদেশে ট্রান্সপোর্ট সেবায় একটি বিশ্বস্ত ও আধুনিক প্রতিষ্ঠান হিসেবে প্রতিষ্ঠিত হওয়া।
            </p>
          </div>
          <div className="rounded-3xl bg-white p-8 shadow-soft">
            <h2 className="text-2xl font-display text-brand-blue">মূল্যবোধ</h2>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li>স্বচ্ছতা ও পেশাদারিত্ব</li>
              <li>গ্রাহক সন্তুষ্টি</li>
              <li>নিরাপত্তা ও দায়িত্বশীলতা</li>
            </ul>
          </div>
          <div className="rounded-3xl bg-white p-8 shadow-soft">
            <h2 className="text-2xl font-display text-brand-blue">প্রোপ্রাইটর</h2>
            <p className="mt-3 text-sm text-slate-600">{siteConfig.owner}</p>
            <p className="mt-2 text-sm text-slate-600">
              দীর্ঘদিনের পরিবহন অভিজ্ঞতা নিয়ে তিনি MR Transport Agency পরিচালনা করে আসছেন।
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
