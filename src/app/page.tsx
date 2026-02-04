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
  title: "হোম | MR Transport Agency",
  description:
    "MR Transport Agency চট্টগ্রাম ভিত্তিক দ্রুত, নিরাপদ ও সাশ্রয়ী পরিবহন ও লজিস্টিকস সেবা প্রদান করে।",
};

export default function HomePage() {
  return (
    <div className="overflow-x-hidden">
      {/* Hero Section - Full Image Background */}
      <section id="home" className="relative h-screen min-h-[600px] w-full overflow-hidden flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-bg.jpg"
            alt="Logistic Trucks"
            fill
            className="object-cover brightness-[0.4]"
            priority
          />
        </div>
        
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
          <Reveal className="max-w-3xl">
            <div className="mb-6 inline-block rounded-full bg-brand-red px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-white">
              চট্টগ্রাম ভিত্তিক লজিস্টিকস সেবা
            </div>
            <h1 className="text-4xl font-display font-bold leading-tight text-white sm:text-6xl lg:text-7xl">
              নিরাপদ ও সময়মতো <br />
              <span className="text-brand-red italic">পণ্য পরিবহন</span> সেবা
            </h1>
            <p className="mt-6 max-w-xl text-lg text-blue-50 leading-relaxed font-light">
              সারাদেশে যেকোনো স্থানে আপনার গুরুত্বপূর্ণ পণ্য পৌঁছে দিতে আমরা প্রস্তুত। দ্রুত ও নির্ভরযোগ্য সেবাই আমাদের অঙ্গীকার।
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href={`tel:${siteConfig.phone}`}
                className="inline-flex h-14 items-center justify-center rounded-lg bg-brand-red px-8 text-base font-bold text-white shadow-xl transition-all hover:bg-red-600 hover:-translate-y-1 active:scale-95"
              >
                কল করুন
              </a>
              <Link
                href="#quote"
                className="inline-flex h-14 items-center justify-center rounded-lg border-2 border-white/30 bg-white/10 px-8 text-base font-bold text-white backdrop-blur-md transition-all hover:bg-white/20 hover:border-white/50 hover:-translate-y-1"
              >
                কোটেশন নিন
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-slate-50 py-24 scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mb-16 text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-brand-red mb-2">সার্ভিসস</p>
            <h2 className="text-4xl font-display font-bold text-brand-blue">সকল প্রকার পরিবহন সমাধান</h2>
            <div className="mx-auto mt-4 h-1 w-20 bg-brand-red" />
          </Reveal>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, idx) => (
              <Reveal
                key={service.title}
                delayMs={idx * 100}
                className="group relative rounded-2xl bg-white p-8 shadow-sm transition-all hover:shadow-xl hover:-translate-y-1"
              >
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-brand-blue/5 text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-brand-blue mb-3">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm">{service.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* About / Specialty Section */}
      <section id="about" className="bg-[#0B2B52] py-24 text-white scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mb-16 text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-brand-red mb-2">কেন আমাদের সাথে কাজ করবেন?</p>
            <h2 className="text-4xl font-display font-bold text-white">আমাদের বিশেষত্ব</h2>
            <div className="mx-auto mt-4 h-1 w-20 bg-brand-red" />
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "নিরাপদ পরিবহন", desc: "আপনার মালামাল অত্যন্ত যত্নের সাথে পরিবহন করা হয়।" },
              { title: "সময়মতো ডেলিভারি", desc: "আমরা সঠিক সময়ে গন্তব্যে পৌঁছাতে বদ্ধপরিকর।" },
              { title: "২৪/৭ সাপোর্ট", desc: "আমরা যেকোনো প্রয়োজনে সব সময় আপনার পাশে আছি।" },
              { title: "অভিজ্ঞ টিম", desc: "আমাদের রয়েছে দক্ষ এবং অভিজ্ঞ পরিবহন চালক দল।" },
              { title: "সাশ্রয়ী মূল্য", desc: "আমরা বাজারের সেরা রেটে গুণগত মান নিশ্চিত করি।" },
              { title: "দ্রুত বুকিং", desc: "খুব সহজেই ফোন বা অনলাইনে আমাদের বুক করতে পারবেন।" },
            ].map((item, i) => (
              <Reveal key={i} delayMs={i * 50} className="rounded-xl bg-white/10 p-6 border border-white/20 hover:bg-white/20 transition-all">
                 <div className="flex gap-4 items-center">
                    <div className="h-12 w-12 flex shrink-0 items-center justify-center rounded-lg bg-brand-red text-white shadow-lg">
                       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                       </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-white mb-1 leading-none">{item.title}</h4>
                      <p className="text-blue-100/90 text-[13px] leading-relaxed">{item.desc}</p>
                    </div>
                 </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-24 max-w-5xl mx-auto border-t border-white/10 pt-20">
             <div className="flex flex-col lg:flex-row gap-12 lg:items-center">
                <div className="h-80 w-64 shrink-0 rounded-[2rem] overflow-hidden border-4 border-white/10 shadow-2xl relative group bg-brand-blue/20">
                   <Image 
                     src="/images/Mdsoheluddin.jpeg" 
                     alt="Proprietor" 
                     fill 
                     className="object-cover object-top transition-transform duration-700 group-hover:scale-110"
                     priority
                   />
                   {/* Gradient overlay for better text contrast/premium feel */}
                   <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/60 via-transparent to-transparent opacity-0 group-hover:opacity-40 transition-opacity duration-500" />
                   
                   <div className="absolute bottom-0 left-0 w-full z-20">
                     <div className="bg-brand-red py-3 text-center text-[11px] font-bold uppercase tracking-[3px] text-white shadow-xl transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                       Proprietor
                     </div>
                   </div>
                </div>
                <div className="text-left">
                   <h3 className="text-3xl font-display font-bold mb-3 text-white">মোঃ সোহেল উদ্দিন</h3>
                   <div className="inline-block px-3 py-1 rounded bg-brand-red/10 border border-brand-red/20 text-brand-red font-bold text-xs uppercase tracking-[2px] mb-6">
                     MR Transport Agency
                   </div>
                   <div className="relative">
                     <svg className="absolute -top-4 -left-6 h-12 w-12 text-white/5" fill="currentColor" viewBox="0 0 32 32"><path d="M10 8v8H6v-8h4zm12 0v8h-4v-8h4zM10 4c-4.418 0-8 3.582-8 8v8h12v-8h-4v-8h4c0-4.418-3.582-8-8-8zm12 0c-4.418 0-8 3.582-8 8v8h12v-8h-4v-8h4c0-4.418-3.582-8-8-8z"/></svg>
                     <blockquote className="text-xl lg:text-2xl font-display italic text-white leading-relaxed font-medium">
                       “আমাদের প্রতিষ্ঠানের মূল লক্ষ্য হলো গ্রাহকদের সর্বোচ্চ সন্তুষ্টি প্রদান করা। প্রতিটি পণ্য আমাদের কাছে
                       গুরুত্বপূর্ণ এবং আমরা তা যত্নের সাথে গন্তব্যে পৌঁছে দিই। বিশ্বাসই আমাদের সবচেয়ে বড় সম্পদ।”
                     </blockquote>
                   </div>
                </div>
             </div>
          </Reveal>
        </div>
      </section>

      {/* Fleet Section */}
      <section id="fleet" className="bg-white py-24 scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mb-16 text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-brand-red mb-2">আমাদের কালেকশন</p>
            <h2 className="text-4xl font-display font-bold text-brand-blue">আধুনিক ও সুসজ্জিত ফ্লিট</h2>
            <div className="mx-auto mt-4 h-1 w-20 bg-brand-red" />
          </Reveal>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {fleet.map((vehicle, idx) => (
              <Reveal
                key={vehicle.title}
                delayMs={idx * 80}
                className="group flex flex-col items-center rounded-2xl border border-slate-50 bg-white p-6 text-center transition-all hover:shadow-2xl hover:shadow-brand-blue/10 hover:-translate-y-2"
              >
                <div className="relative mb-6 flex h-32 w-full items-center justify-center overflow-hidden rounded-xl bg-slate-50/50 p-4 transition-colors group-hover:bg-slate-100/80">
                  <Image
                    src={vehicle.image}
                    alt={vehicle.titleBn}
                    fill
                    className="object-contain p-2 transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-xl font-bold text-brand-blue mb-1">{vehicle.titleBn}</h3>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[2px] mb-4">{vehicle.title}</p>
                 <div className="mt-auto inline-flex items-center gap-1.5 rounded-full bg-slate-50 px-4 py-1.5 text-[11px] font-bold text-slate-500 border border-slate-100">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-red animate-pulse" />
                  {vehicle.capacity}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Network / Service Area Section */}
      <section id="service-areas" className="bg-slate-50 py-24 scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <p className="text-sm font-bold uppercase tracking-widest text-brand-red mb-2">সার্ভিস এরিয়া</p>
            <h2 className="text-4xl font-display font-bold text-brand-blue mb-6">সারাদেশে আমাদের নেটওয়ার্ক</h2>
            <p className="text-slate-600 mb-8 leading-relaxed">
              চট্টগ্রাম মূল কেন্দ্র হলেও আমরা সারাদেশের গুরুত্বপূর্ণ সকল জেলায় পণ্য পরিবহন সেবা প্রদান করি। আমাদের বর্তমান এলাকাগুলো চেক করে নিন।
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-8">
              {serviceAreas.map((area) => (
                <div key={area} className="flex items-center gap-2 rounded-lg bg-white border border-slate-100 px-4 py-2 text-xs font-semibold text-slate-700">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-red" />
                  {area}
                </div>
              ))}
            </div>
            <div className="rounded-2xl bg-brand-blue p-6 text-white">
               <h4 className="font-bold mb-2">বিশেয় দ্রষ্টব্য:</h4>
               <p className="text-sm text-blue-100">তালিকার বাইরের কোনো প্রয়োজনেও আমাদের কল করতে পারেন।</p>
            </div>
          </Reveal>

          <Reveal delayMs={200} className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
            <Image
              src="/images/map-placeholder.svg"
              alt="Map"
              fill
              className="object-cover"
            />
          </Reveal>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <Reveal className="mb-16">
            <p className="text-sm font-bold uppercase tracking-widest text-brand-red mb-2">গ্রাহক সন্তুষ্টি</p>
            <h2 className="text-4xl font-display font-bold text-brand-blue">তারা আমাদের সম্পর্কে কী বলেন</h2>
            <div className="mx-auto mt-4 h-1 w-20 bg-brand-red" />
          </Reveal>

          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map((item, idx) => (
              <Reveal
                key={item.name}
                delayMs={idx * 100}
                className="rounded-2xl bg-white p-8 border border-slate-100 shadow-sm text-left hover:shadow-xl transition-shadow"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#eab308" className="w-4 h-4">
                      <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                    </svg>
                  ))}
                </div>
                <p className="text-slate-600 mb-6 italic">“{item.quote}”</p>
                <div>
                  <p className="font-bold text-brand-blue uppercase text-xs tracking-wider">{item.name}</p>
                  <p className="text-[10px] text-slate-400 font-sans">{item.company}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mb-12 text-center">
             <p className="text-sm font-bold uppercase tracking-widest text-brand-red mb-2">প্রশ্নোত্তর</p>
             <h2 className="text-3xl font-display font-bold text-brand-blue">আপনার প্রশ্নের উত্তর</h2>
          </Reveal>
          
          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <Reveal key={faq.q} delayMs={idx * 50}>
                <details className="group rounded-xl border border-slate-200 bg-white shadow-sm overflow-hidden">
                  <summary className="flex cursor-pointer items-center justify-between p-5 text-sm font-bold text-brand-blue hover:bg-slate-50 transition-colors">
                    {faq.q}
                    <span className="transition-transform duration-300 group-open:-rotate-180">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-3 h-3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                      </svg>
                    </span>
                  </summary>
                  <div className="px-5 pb-5 text-slate-600 text-sm leading-relaxed border-t border-slate-50 py-4">
                    {faq.a}
                  </div>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Form Section */}
      <section id="quote" className="bg-white py-24 scroll-mt-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:px-8 lg:grid-cols-2">
          <Reveal>
            <p className="text-sm font-bold uppercase tracking-widest text-brand-red mb-2">কোটেশন</p>
            <h2 className="text-4xl font-display font-bold text-brand-blue mb-4">বুকিং কোটেশন নিন</h2>
            <p className="text-slate-600 mb-8 leading-relaxed">
              আপনার প্রয়োজনীয় তথ্য দিন, আমরা সঠিক ভাড়া এবং গাড়ির ডিটেইলস নিয়ে আপনার সাথে দ্রুত যোগাযোগ করব।
            </p>
            
            <div className="grid gap-6">
               <div className="flex gap-4 items-center rounded-xl bg-slate-50 p-5">
                  <div className="h-12 w-12 flex shrink-0 items-center justify-center rounded-full bg-brand-blue/5 text-brand-blue">
                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                     </svg>
                  </div>
                  <div>
                    <h5 className="font-bold text-brand-blue">দ্রুত কোটেশন</h5>
                    <p className="text-sm text-slate-500">১৫ মিনিটের মধ্যে আপনি রেসপন্স পাবেন।</p>
                  </div>
               </div>
            </div>
          </Reveal>
          
          <Reveal delayMs={150}>
            <div className="rounded-3xl border border-slate-100 bg-white p-8 shadow-2xl">
              <QuoteForm />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-slate-50 py-24 scroll-mt-20">
        <div className="mx-auto grid max-w-7xl gap-16 px-4 sm:px-6 lg:px-8 lg:grid-cols-2">
          <Reveal>
            <p className="text-sm font-bold uppercase tracking-widest text-brand-red mb-2">যোগাযোগ</p>
            <h2 className="text-4xl font-display font-bold text-brand-blue mb-4">দ্রুত যোগাযোগ</h2>
            <p className="text-lg text-slate-600 mb-8">
              যেকোনো প্রশ্ন বা বিস্তারিত জানতে আমাদের মেসেজ দিন বা অফিসে আসুন।
            </p>
            
            <div className="space-y-6">
               <div className="flex gap-4 items-start">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-brand-blue shadow-sm">
                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6">
                        <path fillRule="evenodd" d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 103 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 002.273 1.765 11.842 11.842 0 00.976.544l.062.029.006.003.002.001.003.001a.75.75 0 01-.01-.003zM10 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z" clipRule="evenodd" />
                     </svg>
                  </div>
                  <div>
                    <h5 className="font-bold text-brand-blue">ঠিকানা</h5>
                    <p className="text-slate-600">{siteConfig.address}</p>
                  </div>
               </div>

               <div className="flex gap-4 items-start">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-brand-blue shadow-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6">
                      <path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z" />
                      <path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="font-bold text-brand-blue">ইমেইল</h5>
                    <p className="text-slate-600 font-sans">{siteConfig.email}</p>
                  </div>
               </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={`tel:${siteConfig.phone}`}
                className="btn-primary"
              >
                কল করুন
              </a>
              <a
                href={`https://wa.me/${siteConfig.whatsapp}`}
                className="inline-flex items-center justify-center rounded-full border-2 border-green-600 bg-white px-8 py-3.5 text-sm font-bold text-green-700 transition hover:bg-green-50"
              >
                WhatsApp
              </a>
            </div>
          </Reveal>

          <Reveal delayMs={150}>
            <div className="rounded-3xl border border-slate-100 bg-white p-8 shadow-2xl">
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
