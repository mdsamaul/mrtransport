import Image from "next/image";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import QuoteForm from "@/components/QuoteForm";
import Reveal from "@/components/Reveal";
import {
  faqs,
  fleet,
  services,
  serviceAreas,
  siteConfig,
  testimonials,
  whyChooseUs,
} from "@/lib/site";

export const metadata = {
  title: "হোম",
  description:
    "MR Transport Agency চট্টগ্রাম ভিত্তিক দ্রুত, নিরাপদ ও সাশ্রয়ী পরিবহন ও লজিস্টিকস সেবা প্রদান করে।",
};

export default function HomePage() {
  return (
    <div>
      <section className="relative overflow-hidden bg-white">
        <div className="absolute inset-0 section-pattern opacity-40" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8">
          <Reveal>
            <p className="mb-4 inline-flex items-center rounded-full bg-brand-light px-4 py-1 text-xs font-semibold text-brand-blue">
              চট্টগ্রামের বিশ্বস্ত ট্রান্সপোর্ট পার্টনার
            </p>
            <h1 className="text-4xl font-display text-brand-blue sm:text-5xl">
              দ্রুত, নিরাপদ ও সাশ্রয়ী পরিবহন সেবা
            </h1>
            <p className="mt-5 text-base text-slate-600">
              MR Transport Agency আপনার ব্যবসার জন্য নির্ভরযোগ্য লজিস্টিকস সাপোর্ট দেয়। কভার্ড ভ্যান,
              ট্রাক, কন্টেইনার ও ট্রেইলারে দেশব্যাপী পণ্য পরিবহন করি।
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <a
                href={`tel:${siteConfig.phone}`}
                className="rounded-full bg-brand-red px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-red-600"
              >
                Call Now
              </a>
              <Link
                href="#quote"
                className="rounded-full border border-brand-blue px-6 py-3 text-sm font-semibold text-brand-blue transition hover:-translate-y-0.5 hover:bg-brand-blue hover:text-white"
              >
                Get a Quote
              </Link>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="glass-panel rounded-2xl p-4">
                <p className="text-sm font-semibold text-brand-blue">দ্রুত কোটেশন</p>
                <p className="text-xs text-slate-600">১৫-৩০ মিনিটে রেসপন্স</p>
              </div>
              <div className="glass-panel rounded-2xl p-4">
                <p className="text-sm font-semibold text-brand-blue">নিরাপদ পরিবহন</p>
                <p className="text-xs text-slate-600">পণ্যের সুরক্ষা নিশ্চিত</p>
              </div>
              <div className="glass-panel rounded-2xl p-4">
                <p className="text-sm font-semibold text-brand-blue">লোকাল এক্সপার্ট</p>
                <p className="text-xs text-slate-600">চট্টগ্রাম রুট স্পেশালিস্ট</p>
              </div>
            </div>
          </Reveal>

          <Reveal delayMs={120}>
            <div className="relative">
              <div className="float-soft absolute -left-8 -top-8 h-40 w-40 rounded-full bg-brand-red/10" />
              <div className="float-soft-delayed absolute -bottom-6 -right-6 h-32 w-32 rounded-full bg-brand-blue/10" />
              <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-soft">
                <Image
                  src="/images/hero-transport.svg"
                  alt="Transport fleet"
                  width={700}
                  height={500}
                  className="h-full w-full object-cover"
                  priority
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-brand-light py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mb-10 flex flex-col gap-3">
            <h2 className="text-3xl font-display text-brand-blue">আমাদের প্রধান সেবা</h2>
            <p className="text-slate-600">আপনার প্রয়োজন অনুযায়ী সঠিক গাড়ি ও সেবা নির্বাচন করুন।</p>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, idx) => (
              <Reveal
                key={service.title}
                delayMs={idx * 70}
                className="rounded-2xl bg-white p-6 shadow-soft"
              >
                <h3 className="text-lg font-semibold text-brand-blue">{service.title}</h3>
                <p className="mt-2 text-xs uppercase tracking-wide text-brand-red">{service.titleEn}</p>
                <p className="mt-4 text-sm text-slate-600">{service.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <Reveal>
            <h2 className="text-3xl font-display text-brand-blue">কেন আমাদের নির্বাচন করবেন</h2>
            <p className="mt-3 text-slate-600">
              ব্যবসার ধারাবাহিকতা ধরে রাখতে আমরা নির্ভরযোগ্য, সময়নিষ্ঠ এবং সেবামুখী পরিবহন সাপোর্ট প্রদান করি।
            </p>
          </Reveal>

          <Reveal delayMs={120}>
            <ul className="grid gap-3 rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
              {whyChooseUs.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-slate-700">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-blue text-xs text-white">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <Reveal>
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
              <p className="text-sm font-semibold text-brand-blue">মোঃ সোহেল উদ্দিন</p>
              <p className="text-xs text-slate-500">স্বত্বাধিকারী</p>
              <p className="mt-4 text-sm text-slate-600">
                “আমাদের প্রতিষ্ঠানের মূল লক্ষ্য হলো গ্রাহকদের সর্বোচ্চ সন্তুষ্টি প্রদান করা। প্রতিটি পণ্য আমাদের কাছে
                গুরুত্বপূর্ণ এবং আমরা তা যত্নের সাথে গন্তব্যে পৌঁছে দিই। বিশ্বাসই আমাদের সবচেয়ে বড় সম্পদ।”
              </p>
            </div>
          </Reveal>

          <Reveal delayMs={120}>
            <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-brand-light shadow-soft">
              <Image
                src="/images/owner.svg"
                alt="Owner"
                width={700}
                height={520}
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mb-10 flex flex-col gap-3">
            <h2 className="text-3xl font-display text-brand-blue">ফ্লিট হাইলাইটস</h2>
            <p className="text-slate-600">বিভিন্ন ক্যাটাগরির আধুনিক ও সেফটি চেকড গাড়ি।</p>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {fleet.map((vehicle, idx) => (
              <Reveal
                key={vehicle.title}
                delayMs={idx * 70}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft"
              >
                <Image
                  src={vehicle.image}
                  alt={vehicle.titleBn}
                  width={320}
                  height={200}
                  className="mb-4 h-40 w-full rounded-xl object-cover"
                />
                <h3 className="text-lg font-semibold text-brand-blue">{vehicle.titleBn}</h3>
                <p className="text-sm text-slate-600">{vehicle.capacity}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-light py-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <Reveal>
            <h2 className="text-3xl font-display text-brand-blue">সার্ভিস এরিয়া</h2>
            <p className="mt-3 text-slate-600">
              চট্টগ্রাম থেকে ঢাকা, সিলেট, কক্সবাজারসহ সারাদেশে নির্ভরযোগ্য পরিবহন সেবা।
            </p>
            <div className="mt-6 grid grid-cols-2 gap-2 text-sm text-slate-700">
              {serviceAreas.map((area) => (
                <span key={area} className="rounded-full bg-white px-3 py-1">
                  {area}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delayMs={140}>
            <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-soft">
              <Image
                src="/images/map-placeholder.svg"
                alt="Service area map"
                width={520}
                height={360}
                className="h-full w-full rounded-2xl object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mb-10 flex flex-col gap-3">
            <h2 className="text-3xl font-display text-brand-blue">ক্লায়েন্টদের মতামত</h2>
            <p className="text-slate-600">আমাদের সাথে কাজ করা গ্রাহকদের অভিজ্ঞতা।</p>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((item, idx) => (
              <Reveal
                key={item.name}
                delayMs={idx * 70}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft"
              >
                <p className="text-sm text-slate-600">“{item.quote}”</p>
                <p className="mt-4 text-sm font-semibold text-brand-blue">{item.name}</p>
                <p className="text-xs text-slate-500">{item.company}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-light py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mb-10 text-center">
            <h2 className="text-3xl font-display text-brand-blue">প্রশ্নোত্তর</h2>
            <p className="mt-3 text-slate-600">সাধারণ কিছু প্রশ্নের উত্তর এখানে দেওয়া হলো।</p>
          </Reveal>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <Reveal key={faq.q} delayMs={idx * 60}>
                <details className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft">
                  <summary className="cursor-pointer text-sm font-semibold text-brand-blue">
                    {faq.q}
                  </summary>
                  <p className="mt-3 text-sm text-slate-600">{faq.a}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="quote" className="py-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <Reveal>
            <h2 className="text-3xl font-display text-brand-blue">কোটেশন নিন</h2>
            <p className="mt-3 text-slate-600">
              আপনার প্রয়োজনীয় তথ্য দিন, সাবমিট করার সাথে সাথে WhatsApp-এ ফর্মের তথ্য প্রস্তুত হয়ে যাবে।
            </p>
            <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
              <p className="text-sm text-slate-600">সরাসরি কথা বলতে কল করুন</p>
              <a
                href={`tel:${siteConfig.phone}`}
                className="mt-3 inline-flex items-center rounded-full bg-brand-blue px-5 py-2 text-sm font-semibold text-white"
              >
                {siteConfig.phoneDisplay}
              </a>
            </div>
          </Reveal>
          <Reveal delayMs={120}>
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
              <QuoteForm />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <Reveal>
            <h2 className="text-3xl font-display text-brand-blue">দ্রুত যোগাযোগ</h2>
            <p className="mt-3 text-slate-600">
              ফর্ম সাবমিট করলে WhatsApp-এ বার্তা তৈরি হয়ে যাবে (আপনি শুধু Send চাপলেই হবে)।
            </p>
            <div className="mt-6 rounded-2xl border border-slate-200 bg-brand-light p-6">
              <p className="text-sm font-semibold text-brand-blue">হেল্পলাইন</p>
              <p className="mt-1 text-sm text-slate-600">{siteConfig.phoneDisplay}</p>
              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="rounded-full bg-brand-red px-5 py-2 text-sm font-semibold text-white"
                >
                  কল করুন
                </a>
                <a
                  href={`https://wa.me/${siteConfig.whatsapp}`}
                  className="rounded-full border border-green-600 px-5 py-2 text-sm font-semibold text-green-700"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delayMs={120}>
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
