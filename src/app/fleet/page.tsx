import Image from "next/image";
import { fleet } from "@/lib/site";

export const metadata = {
  title: "ফ্লিট",
  description: "MR Transport Agency এর গাড়ির তালিকা ও ক্যাপাসিটি।",
};

export default function FleetPage() {
  return (
    <div>
      <section className="bg-white py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-display text-brand-blue">ফ্লিট / যানবাহন</h1>
          <p className="mt-4 text-slate-600">
            বিভিন্ন ক্যাটাগরির যানবাহন ও নির্ধারিত ক্যাপাসিটির মাধ্যমে আমরা আপনার সাপ্লাই চেইন সহজ করি।
          </p>
        </div>
      </section>

      <section className="bg-brand-light py-16">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          {fleet.map((vehicle) => (
            <div key={vehicle.title} className="rounded-3xl bg-white p-6 shadow-soft">
              <Image
                src={vehicle.image}
                alt={vehicle.titleBn}
                width={420}
                height={240}
                className="mb-4 h-48 w-full rounded-2xl object-cover"
              />
              <h2 className="text-2xl font-display text-brand-blue">{vehicle.titleBn}</h2>
              <p className="mt-2 text-sm text-slate-600">{vehicle.capacity}</p>
              <p className="mt-3 text-sm text-slate-600">
                নিয়মিত রক্ষণাবেক্ষণ ও অভিজ্ঞ চালকের মাধ্যমে নিরাপদ পরিবহন নিশ্চিত করা হয়।
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
