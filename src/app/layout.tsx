import type { Metadata } from "next";
import { Hind_Siliguri, Saira_Condensed } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import FloatingActions from "@/components/FloatingActions";
import { siteConfig } from "@/lib/site";

const bodyFont = Hind_Siliguri({
  subsets: ["bengali", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
});

const displayFont = Saira_Condensed({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: {
    default: "MR Transport Agency | চট্টগ্রামের বিশ্বস্ত পরিবহন সেবা",
    template: "%s | MR Transport Agency",
  },
  description:
    "MR Transport Agency চট্টগ্রাম ভিত্তিক একটি বিশ্বস্ত পরিবহন ও লজিস্টিকস সেবা প্রদানকারী প্রতিষ্ঠান। কভার্ড ভ্যান, ট্রাক, কন্টেইনার ও ট্রেইলার সার্ভিস।",
  metadataBase: new URL(siteConfig.website),
  openGraph: {
    title: "MR Transport Agency",
    description:
      "চট্টগ্রাম ভিত্তিক দ্রুত, নিরাপদ ও সাশ্রয়ী পরিবহন ও লজিস্টিকস সেবা।",
    url: siteConfig.website,
    siteName: "MR Transport Agency",
    locale: "bn_BD",
    type: "website",
  },
  alternates: {
    canonical: siteConfig.website,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bn">
      <body className={`${bodyFont.variable} ${displayFont.variable} font-body bg-slate-50 text-slate-900`}>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
        <FloatingActions />
      </body>
    </html>
  );
}
