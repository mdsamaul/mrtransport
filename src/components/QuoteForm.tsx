"use client";

import { useState } from "react";
import { fleet, siteConfig } from "@/lib/site";

export default function QuoteForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    pickup: "",
    delivery: "",
    vehicleType: "",
    goodsType: "",
    weightVolume: "",
    preferredDate: "",
    message: "",
  });

  return (
    <form
      className="grid gap-4"
      onSubmit={(event) => {
        event.preventDefault();

        const lines = [
          "MR Transport Agency - Quote Request",
          `Name: ${form.name}`,
          `Phone: ${form.phone}`,
          `Pickup: ${form.pickup}`,
          `Delivery: ${form.delivery}`,
          `Vehicle: ${form.vehicleType}`,
          `Goods: ${form.goodsType}`,
          `Weight/Volume: ${form.weightVolume}`,
          `Preferred Date: ${form.preferredDate}`,
          `Message: ${form.message || "-"}`,
        ];

        const url = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(lines.join("\n"))}`;

        // WhatsApp doesn't allow true auto-send; this opens a prefilled message.
        window.open(url, "_blank", "noopener,noreferrer");
        setSubmitted(true);
      }}
    >
      <div className="grid gap-4 md:grid-cols-2">
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
            placeholder="যেমন: 01XXXXXXXXX"
            value={form.phone}
            onChange={(e) => setForm((p) => ({ ...p, phone: e.target.value }))}
          />
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="text-sm font-medium text-slate-700">পিকআপ লোকেশন</label>
          <input
            required
            type="text"
            className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm"
            placeholder="পিকআপ ঠিকানা লিখুন"
            value={form.pickup}
            onChange={(e) => setForm((p) => ({ ...p, pickup: e.target.value }))}
          />
        </div>
        <div>
          <label className="text-sm font-medium text-slate-700">ডেলিভারি লোকেশন</label>
          <input
            required
            type="text"
            className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm"
            placeholder="ডেলিভারি ঠিকানা লিখুন"
            value={form.delivery}
            onChange={(e) => setForm((p) => ({ ...p, delivery: e.target.value }))}
          />
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="text-sm font-medium text-slate-700">গাড়ির ধরন</label>
          <select
            required
            className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm"
            value={form.vehicleType}
            onChange={(e) => setForm((p) => ({ ...p, vehicleType: e.target.value }))}
          >
            <option value="">গাড়ি নির্বাচন করুন</option>
            {fleet.map((vehicle) => (
              <option key={vehicle.title} value={vehicle.title}>
                {vehicle.titleBn}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="text-sm font-medium text-slate-700">পণ্যের ধরন</label>
          <input
            required
            type="text"
            className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm"
            placeholder="যেমন: FMCG / নির্মাণসামগ্রী"
            value={form.goodsType}
            onChange={(e) => setForm((p) => ({ ...p, goodsType: e.target.value }))}
          />
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="text-sm font-medium text-slate-700">আনুমানিক ওজন/ভলিউম</label>
          <input
            required
            type="text"
            className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm"
            placeholder="যেমন: 5 টন / 200 সিএফটি"
            value={form.weightVolume}
            onChange={(e) => setForm((p) => ({ ...p, weightVolume: e.target.value }))}
          />
        </div>
        <div>
          <label className="text-sm font-medium text-slate-700">পছন্দের তারিখ</label>
          <input
            required
            type="date"
            className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm"
            value={form.preferredDate}
            onChange={(e) => setForm((p) => ({ ...p, preferredDate: e.target.value }))}
          />
        </div>
      </div>

      <div>
        <label className="text-sm font-medium text-slate-700">বার্তা</label>
        <textarea
          rows={4}
          className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm"
          placeholder="আপনার অতিরিক্ত নির্দেশনা লিখুন"
          value={form.message}
          onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
        />
      </div>

      <button
        type="submit"
        className="rounded-lg bg-brand-blue px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-blue-900"
      >
        কোটেশন পাঠান
      </button>

      {submitted && (
        <div className="rounded-lg border border-green-200 bg-green-50 p-4 text-sm text-green-800">
          ধন্যবাদ! WhatsApp-এ আপনার বার্তা তৈরি হয়েছে। Send করতে না পারলে কল করুন: {siteConfig.phoneDisplay}
        </div>
      )}
    </form>
  );
}
