import Image from "next/image";
import { fleet, siteConfig } from "@/lib/site";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "ফ্লিট | MR Transport Agency",
  description: "MR Transport Agency এর গাড়ির তালিকা ও ক্যাপাসিটি। আমাদের আধুনিক যানবাহন সমূহ দেখুন।",
};

export default function FleetPage() {
  return (
    <div className="pt-20">
      <section className="bg-white py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="mb-4 inline-flex items-center rounded-full bg-brand-blue/5 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand-blue">
              ফ্লিট কালেকশন
            </p>
            <h1 className="text-4xl font-display font-bold text-brand-blue sm:text-6xl text-brand-blue">আধুনিক যানবাহন</h1>
            <p className="mt-8 text-lg text-slate-600 leading-relaxed font-light lg:text-xl">
              বিভিন্ন ক্যাটাগরির যানবাহন ও নির্ধারিত ক্যাপাসিটির মাধ্যমে আমরা আপনার সাপ্লাই চেইন সহজ করি।
              আমাদের প্রতিটি গাড়ি নিয়মিত রক্ষণাবেক্ষণ ও সেফটি চেক করা হয়।
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-slate-50 py-24">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          {fleet.map((vehicle, idx) => (
            <Reveal key={vehicle.title} delayMs={idx * 100} className="group overflow-hidden rounded-[2.5rem] bg-white shadow-sm border border-slate-50 hover:shadow-2xl transition-all">
              <div className="aspect-[16/10] overflow-hidden bg-slate-50/50 p-12 transition-colors group-hover:bg-slate-100/50">
                <Image
                  src={vehicle.image}
                  alt={vehicle.titleBn}
                  width={600}
                  height={400}
                  className="h-full w-full object-contain transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-8 lg:p-10">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-3xl font-display font-bold text-brand-blue">{vehicle.titleBn}</h2>
                  <span className="text-xs font-bold uppercase tracking-widest text-brand-red font-sans">{vehicle.title}</span>
                </div>
                
                <div className="flex items-center gap-3 mb-6 bg-slate-50 rounded-xl p-4 border border-slate-100">
                   <div className="h-8 w-8 rounded-lg bg-brand-blue/5 flex items-center justify-center text-brand-blue">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.35 1.5a3 3 0 100 6 3 3 0 000-6zM15.75 3a3 3 0 110 6 3 3 0 010-6zM3.75 7.5a3 3 0 110 6 3 3 0 010-6zM8.25 10.5a3 3 0 110 6 3 3 0 010-6zM19.5 7.5a3 3 0 110 6 3 3 0 010-6zM15.75 13.5a3 3 0 110 6 3 3 0 010-6zM3.75 16.5a3 3 0 110 6 3 3 0 010-6zM8.25 19.5a3 3 0 110 6 3 3 0 010-6z" />
                      </svg>
                   </div>
                   <span className="font-bold text-slate-700">{vehicle.capacity}</span>
                </div>
                
                <p className="text-slate-600 leading-relaxed font-light mb-8">
                  আপনার যেকোনো ধরণের ভারী বা হালকা পণ্য পরিবহনে আমরা এই নির্ভরযোগ্য বাহনটি সরবরাহ করি।
                  নিয়মিত রক্ষণাবেক্ষণ ও অভিজ্ঞ চালকের মাধ্যমে নিরাপদ পরিবহন নিশ্চিত করা হয়।
                </p>
                
                <a 
                  href={`tel:${siteConfig.phone}`}
                  className="inline-flex items-center gap-2 text-brand-blue font-bold group/link"
                >
                  এখনই বুক করুন 
                  <span className="w-8 h-[2px] bg-brand-red transition-all group-hover/link:w-12" />
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
      
      {/* Fleet Banner CTA */}
      <section className="bg-brand-blue py-20 text-white overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-10">
           <Reveal>
              <h2 className="text-3xl font-display font-bold sm:text-4xl">সঠিক গাড়ি নির্বাচনে সাহায্য লাগবে?</h2>
              <p className="text-blue-100 mt-4 max-w-xl font-light">আপনার পণ্যের ওজন ও ভলিউম অনুযায়ী সেরা গাড়ি কোনটি হবে তা জানতে আমাদের কল দিন।</p>
           </Reveal>
           <Reveal delayMs={150}>
              <div className="flex flex-wrap gap-4">
                 <a href={`tel:${siteConfig.phone}`} className="btn-primary bg-brand-red hover:bg-red-600">কল করুন</a>
                 <a href="https://wa.me/8801711992616" className="btn-secondary bg-white text-brand-blue">WhatsApp মেসেজ</a>
              </div>
           </Reveal>
        </div>
      </section>
    </div>
  );
}
