import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { site } from "@/content/site";
import { publicAsset } from "@/lib/paths";
import "./globals.css";

const heading = Plus_Jakarta_Sans({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const sans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | IT, Security, Software & Solar`,
    template: `%s | ${site.name}`,
  },
  description:
    "Tirunova Technologies delivers IT infrastructure, networking, cybersecurity, surveillance, software, cloud and solar solutions from Jaipur.",
  keywords: [
    "Tirunova Technologies",
    "IT solutions Jaipur",
    "CCTV installation Jaipur",
    "networking",
    "cybersecurity",
    "solar energy",
    "software development",
  ],
  openGraph: {
    title: `${site.name} | Smart Technology. Secure Future.`,
    description: site.descriptor,
    url: site.url,
    siteName: site.name,
    images: [{ url: publicAsset("/logo.jpg"), width: 1024, height: 1024, alt: site.name }],
    locale: "en_IN",
    type: "website",
  },
  icons: {
    icon: publicAsset("/logo.jpg"),
    apple: publicAsset("/logo.jpg"),
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: site.name,
  description: site.descriptor,
  url: site.url,
  email: site.email,
  telephone: site.phones.map((phone) => phone.href.replace("tel:", "")),
  image: `${site.url}/logo.jpg`,
  foundingDate: "2024-06-07",
  founder: {
    "@type": "Person",
    name: site.founder.name,
    jobTitle: site.founder.title,
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "G-27, Govindam Tower, Kalwar Road, Kardhani",
    addressLocality: "Jaipur",
    addressRegion: "Rajasthan",
    postalCode: "302012",
    addressCountry: "IN",
  },
  areaServed: "IN",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${heading.variable} ${sans.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col overflow-x-clip bg-white font-sans text-ink">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-orange focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
