"use client";

import { useState } from "react";
import { siteConfig } from "@/lib/site";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  return (
    <form
      className="grid gap-4"
      onSubmit={(event) => {
        event.preventDefault();

        const lines = [
          "MR Transport Agency - Contact Message",
          `Name: ${form.name}`,
          `Phone: ${form.phone}`,
          `Email: ${form.email || "-"}`,
          `Message: ${form.message || "-"}`,
        ];

        const url = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(lines.join("\n"))}`;
        window.open(url, "_blank", "noopener,noreferrer");
        setSubmitted(true);
      }}
    >
      <div>
        <label className="text-sm font-medium text-slate-700">আপনার নাম</label>
        <input
          required
          type="text"
          className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm"
          placeholder="আপনার নাম লিখুন"
          value={form.name}
          onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
        />
      </div>
      <div>
        <label className="text-sm font-medium text-slate-700">ফোন নম্বর</label>
        <input
          required
          type="tel"
          className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm"
          placeholder="01XXXXXXXXX"
          value={form.phone}
          onChange={(e) => setForm((p) => ({ ...p, phone: e.target.value }))}
        />
      </div>
      <div>
        <label className="text-sm font-medium text-slate-700">ইমেইল</label>
        <input
          type="email"
          className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm"
          placeholder={siteConfig.email}
          value={form.email}
          onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
        />
      </div>
      <div>
        <label className="text-sm font-medium text-slate-700">বার্তা</label>
        <textarea
          rows={5}
          className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm"
          placeholder="আপনার প্রশ্ন বা চাহিদা লিখুন"
          value={form.message}
          onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
        />
      </div>
      <button
        type="submit"
        className="rounded-lg bg-brand-red px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-red-600"
      >
        বার্তা পাঠান
      </button>
      {submitted && (
        <div className="rounded-lg border border-green-200 bg-green-50 p-4 text-sm text-green-800">
          ধন্যবাদ! WhatsApp-এ আপনার বার্তা তৈরি হয়েছে। জরুরি হলে কল করুন: {siteConfig.phoneDisplay}
        </div>
      )}
    </form>
  );
}
