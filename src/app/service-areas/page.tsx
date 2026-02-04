import Image from "next/image";
import { serviceAreas } from "@/lib/site";

export const metadata = {
  title: "সার্ভিস এরিয়া",
  description: "MR Transport Agency কোন কোন এলাকায় সেবা প্রদান করে।",
};

export default function ServiceAreasPage() {
  return (
    <div>
      <section className="bg-white py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-display text-brand-blue">সার্ভিস এরিয়া</h1>
          <p className="mt-4 text-slate-600">
            চট্টগ্রাম ভিত্তিক হলেও আমরা সারাদেশের গুরুত্বপূর্ণ শহর ও শিল্প এলাকায় পরিবহন সেবা প্রদান করি।
          </p>
        </div>
      </section>

      <section className="bg-brand-light py-16">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="rounded-3xl bg-white p-6 shadow-soft">
            <h2 className="text-2xl font-display text-brand-blue">সেবার এলাকা তালিকা</h2>
            <div className="mt-4 grid grid-cols-2 gap-3 text-sm text-slate-700">
              {serviceAreas.map((area) => (
                <span key={area} className="rounded-full bg-brand-light px-3 py-2">
                  {area}
                </span>
              ))}
            </div>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-soft">
            <Image
              src="/images/map-placeholder.svg"
              alt="Service area map"
              width={520}
              height={360}
              className="h-full w-full rounded-2xl object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
