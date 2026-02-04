import { siteConfig } from "@/lib/site";

export default function FloatingActions() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 md:hidden">
      <a
        href={`https://wa.me/${siteConfig.whatsapp}`}
        className="flex items-center gap-2 rounded-full bg-green-600 px-4 py-3 text-sm font-semibold text-white shadow-soft hover:bg-green-700"
      >
        WhatsApp
      </a>
      <a
        href={`tel:${siteConfig.phone}`}
        className="flex items-center gap-2 rounded-full bg-brand-red px-4 py-3 text-sm font-semibold text-white shadow-soft hover:bg-red-600"
      >
        Call Now
      </a>
    </div>
  );
}
