"use client";

import { useState } from "react";
import Image from "next/image";
import Reveal from "./Reveal";
import { siteConfig } from "@/lib/site";

export default function PaymentSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phone: "",
    senderNumber: "",
    transactionId: "",
    method: "bKash",
    amount: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you'd send this to an API
    console.log("Payment Record:", formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setIsModalOpen(false);
      setFormData({
        name: "",
        address: "",
        phone: "",
        senderNumber: "",
        transactionId: "",
        method: "bKash",
        amount: "",
      });
    }, 3000);
  };

  const paymentMethods = [
    { name: "bKash", icon: "/images/bank/bkash.webp", number: siteConfig.phoneDisplay },
    { name: "Nagad", icon: "/images/bank/nogot.webp", number: siteConfig.phoneDisplay },
    { name: "Rocket", icon: "/images/bank/roket.png", number: siteConfig.phoneDisplay },
  ];

  return (
    <section id="payment" className="bg-slate-50 py-24 scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <Reveal className="mb-16">
          <p className="text-sm font-bold uppercase tracking-widest text-brand-red mb-2">পেমেন্ট মেথড</p>
          <h2 className="text-4xl font-display font-bold text-brand-blue">নিরাপদ পেমেন্ট গেটওয়ে</h2>
          <div className="mx-auto mt-4 h-1 w-20 bg-brand-red" />
          <p className="mt-6 text-slate-600 max-w-2xl mx-auto">
            আপনার বুকিং নিশ্চিত করতে নিচের জনপ্রিয় মাধ্যমগুলোর যেকোনোটি দিয়ে অগ্রিম পেমেন্ট করতে পারেন। 
            পেমেন্ট করার পর ট্রানজেকশন আইডি দিয়ে ফর্মটি পূরণ করুন।
          </p>
        </Reveal>

        <div className="grid gap-8 md:grid-cols-3 mb-12">
          {paymentMethods.map((method, idx) => (
            <Reveal key={method.name} delayMs={idx * 100} className="flex flex-col items-center p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="h-20 w-32 relative mb-6">
                <Image
                  src={method.icon}
                  alt={method.name}
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-brand-blue mb-2">{method.name}</h3>
              <p className="text-brand-red font-bold text-lg font-sans tracking-wider">{method.number}</p>
              <p className="text-xs text-slate-400 mt-1 uppercase tracking-widest">(Personal)</p>
            </Reveal>
          ))}
        </div>

        <Reveal delayMs={300}>
          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-flex h-14 items-center justify-center rounded-xl bg-brand-blue px-10 text-base font-bold text-white shadow-xl transition-all hover:bg-blue-900 hover:-translate-y-1 active:scale-95"
          >
            পেমেন্ট নিশ্চিত করুন (Confirm Payment)
          </button>
        </Reveal>
      </div>

      {/* Payment Dialog */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-brand-blue/60 backdrop-blur-sm transition-opacity"
            onClick={() => setIsModalOpen(false)}
          />
          
          {/* Modal Content */}
          <div className="relative w-full max-w-xl bg-white rounded-[2.5rem] shadow-2xl overflow-hidden animate-fade-in-up">
            <div className="bg-brand-blue p-8 text-white relative">
              <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <h2 className="text-2xl font-display font-bold">পেমেন্ট ইনফরমেশন দিন</h2>
              <p className="text-blue-100/70 text-sm mt-2 font-light">সঠিক তথ্য দিয়ে আপনার বুকিং ভেরিফাই করতে সাহায্য করুন।</p>
            </div>

            <form onSubmit={handleSubmit} className="p-8 space-y-5">
              {isSubmitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="mx-auto h-20 w-20 flex items-center justify-center rounded-full bg-green-100 text-green-600 animate-bounce">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-10 h-10">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-brand-blue">পেমেন্ট রিসিভ হয়েছে!</h3>
                  <p className="text-slate-600">আপনার তথ্য সফলভাবে পাঠানো হয়েছে। আমরা শীঘ্রই আপনার সাথে যোগাযোগ করব।</p>
                </div>
              ) : (
                <>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-500 ml-1">আপনার নাম</label>
                      <input
                        required
                        type="text"
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm transition focus:bg-white focus:ring-2 focus:ring-brand-blue/20 outline-none"
                        placeholder="নাম লিখুন"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-500 ml-1">ফোন নম্বর</label>
                      <input
                        required
                        type="tel"
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm transition focus:bg-white focus:ring-2 focus:ring-brand-blue/20 outline-none"
                        placeholder="01XXXXXXXXX"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-500 ml-1">ঠিকানা</label>
                    <input
                      required
                      type="text"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm transition focus:bg-white focus:ring-2 focus:ring-brand-blue/20 outline-none"
                      placeholder="আপনার পূর্ণাঙ্গ ঠিকানা"
                      value={formData.address}
                      onChange={(e) => setFormData({...formData, address: e.target.value})}
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-500 ml-1">পেমেন্ট মাধ্যম</label>
                      <select
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm transition focus:bg-white focus:ring-2 focus:ring-brand-blue/20 outline-none appearance-none"
                        value={formData.method}
                        onChange={(e) => setFormData({...formData, method: e.target.value})}
                      >
                        <option value="bKash">bKash</option>
                        <option value="Nagad">Nagad</option>
                        <option value="Rocket">Rocket</option>
                      </select>
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-500 ml-1">টাকার পরিমাণ</label>
                      <input
                        required
                        type="number"
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm transition focus:bg-white focus:ring-2 focus:ring-brand-blue/20 outline-none"
                        placeholder="৳ 0.00"
                        value={formData.amount}
                        onChange={(e) => setFormData({...formData, amount: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-500 ml-1">যে নম্বর থেকে টাকা পাঠিয়েছেন</label>
                      <input
                        required
                        type="tel"
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm transition focus:bg-white focus:ring-2 focus:ring-brand-blue/20 outline-none"
                        placeholder="বিকাশ/নগদ/রকেট নম্বর"
                        value={formData.senderNumber}
                        onChange={(e) => setFormData({...formData, senderNumber: e.target.value})}
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-500 ml-1">ট্রানজেকশন আইডি (TrxID)</label>
                      <input
                        required
                        type="text"
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm transition focus:bg-white focus:ring-2 focus:ring-brand-blue/20 outline-none"
                        placeholder="যেমন: A1B2C3D4"
                        value={formData.transactionId}
                        onChange={(e) => setFormData({...formData, transactionId: e.target.value})}
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-xl bg-brand-red py-4 text-base font-bold text-white shadow-xl shadow-brand-red/20 transition hover:bg-red-600 hover:-translate-y-0.5"
                  >
                    তথ্য সাবমিট করুন
                  </button>
                </>
              )}
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
