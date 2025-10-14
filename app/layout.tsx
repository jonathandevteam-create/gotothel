import type { Metadata } from "next";
import { Geist, Geist_Mono, Baskervville } from "next/font/google";
import "../styles/index.css";
import Provider from "../context";
import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const baskervville = Baskervville({
  variable: "--font-baskervville",
  subsets: ["latin"],
  weight: [
    "400", // Regular
  ],
  //  style: ["normal", "italic"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://gotothel.com";

export const metadata: Metadata = {
  title: "Thel: A Modern Business Growth Consultancy",
  description:
    "We combine precision marketing, operational streamlining, and digital transformation to help brands like yours find their own way forward.",
  icons: {
    icon: [
      { rel: "icon", url: "/assets/images/favicon.png" },
      // { rel: "icon", url: "/assets/images/favicon/favicon-16x16.png", sizes: "16x16" },
    ],
    apple: "/assets/images/favicon/favicon.png",
  },
  openGraph: {
    title: "Thel: A Modern Business Growth Consultancy",
    description:
      "We combine precision marketing, operational streamlining, and digital transformation to help brands like yours find their own way forward.",
    url: `${siteUrl}`,
    siteName: "Your Website Name",
    images: [`${siteUrl}/assets/images/og-image.png`], //recomened sizes 1200x630, 1080 × 566, 600 × 315 | aspect ratio 1.91:1
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Thel: A Modern Business Growth Consultancy",
    description:
      "We combine precision marketing, operational streamlining, and digital transformation to help brands like yours find their own way forward.",
    images: [`${siteUrl}/assets/images/og-image.png`], //recomened sizes 1200x630, 1080 × 566, 600 × 315 | aspect ratio 1.91:1
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-Y0YS7LLL24"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
                 window.dataLayer = window.dataLayer || [];
                 function gtag(){dataLayer.push(arguments);}
                 gtag('js', new Date());
               
                 gtag('config', 'G-Y0YS7LLL24');
            `,
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} ${baskervville.variable} antialiased`}>
        <Provider>
          {children}
          <Toaster />
        </Provider>
      </body>
    </html>
  );
}
