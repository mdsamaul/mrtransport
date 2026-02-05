import { siteConfig } from "@/lib/site";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "আমাদের সম্পর্কে | MR Transport Agency",
  description: "MR Transport Agency সম্পর্কে জানুন। চট্টগ্রামের বিশ্বস্ত পরিবহন সেবা।",
};

export default function AboutPage() {
  return (
    <div className="pt-20">
      <section className="bg-white py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="mb-4 inline-flex items-center rounded-full bg-brand-blue/5 px-4 py-1 text-xs font-bold uppercase tracking-widest text-brand-blue">
              আমাদের সম্পর্কে
            </p>
            <h1 className="text-4xl font-display font-bold text-brand-blue sm:text-6xl">MR Transport Agency</h1>
            <p className="mt-8 text-lg text-slate-600 leading-relaxed font-light lg:text-xl">
              MR Transport Agency চট্টগ্রাম ভিত্তিক একটি পেশাদার পরিবহন ও লজিস্টিকস সেবা প্রদানকারী প্রতিষ্ঠান।
              আমরা ব্যবসার প্রয়োজন অনুযায়ী দ্রুত, নিরাপদ এবং সাশ্রয়ী পরিবহন ব্যবস্থা নিশ্চিত করি। 
              পণ্য পরিবহনকে সহজ ও ঝুঁকিমুক্ত রাখাই আমাদের প্রধান লক্ষ্য।
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-slate-50 py-24">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          {[
            { 
              title: "আমাদের মিশন", 
              desc: "ক্লায়েন্টদের জন্য নির্ভরযোগ্য, সময়নিষ্ঠ এবং দক্ষ পরিবহন সেবা নিশ্চিত করা। প্রতিটি ডেলিভারিতে আমরা গুণগত মান ধরে রাখতে সচেষ্ট।" 
            },
            { 
              title: "আমাদের ভিশন", 
              desc: "চট্টগ্রাম এবং সারাদেশে ট্রান্সপোর্ট সেবায় একটি বিশ্বস্ত ও আধুনিক লজিস্টিকস লিডার হিসেবে প্রতিষ্ঠিত হওয়া।" 
            },
            { 
              title: "মূল্যবোধ", 
              list: ["স্বচ্ছতা ও পেশাদারিত্ব", "গ্রাহক সন্তুষ্টি", "নিরাপত্তা ও দায়িত্বশীলতা"] 
            },
            { 
              title: "প্রোপ্রাইটর", 
              desc: `${siteConfig.owner} দীর্ঘদিনের পরিবহন অভিজ্ঞতা নিয়ে তিনি MR Transport Agency পরিচালনা করে আসছেন। তার সুযোগ্য নেতৃত্বে আমাদের টীম প্রতিটি কাজ নিখুঁতভাবে সম্পন্ন করে।` 
            },
          ].map((item, i) => (
            <Reveal key={i} delayMs={i * 100} className="rounded-3xl bg-white p-10 shadow-sm border border-slate-100 hover:shadow-xl transition-shadow">
              <h2 className="text-2xl font-display font-bold text-brand-blue mb-4">{item.title}</h2>
              {item.desc && <p className="text-slate-600 leading-relaxed">{item.desc}</p>}
              {item.list && (
                <ul className="space-y-3">
                  {item.list.map((li) => (
                    <li key={li} className="flex items-center gap-3 text-slate-600">
                      <span className="h-2 w-2 rounded-full bg-brand-red" />
                      {li}
                    </li>
                  ))}
                </ul>
              )}
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
