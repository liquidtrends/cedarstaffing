import "./globals.css";

export const metadata = {
  title: {
  default: "Cedar Staffing | Indigenous Workforce Solutions",
  template: "%s | Cedar Staffing",
  },
  icons: {
  icon: "/favicon.ico",
  apple: "/apple-touch-icon.png",
  },
  description:
    "Cedar Staffing provides reliable, Indigenous-led workforce solutions across construction, energy, industrial trades, and remote operations.",
  keywords: [
    "Indigenous staffing",
    "construction staffing",
    "industrial labour",
    "energy workforce",
    "remote camp staffing",
    "Indigenous employment Canada",
  ],
  authors: [{ name: "Cedar Staffing" }],
  creator: "Cedar Staffing",
  metadataBase: new URL("https://www.cedarstaffing.ca"),

openGraph: {
    title: "Cedar Staffing | Indigenous Workforce Solutions",
    description:
      "Reliable, Indigenous-led workforce solutions across construction, energy, industrial trades, and remote operations.",
    url: "https://www.cedarstaffing.ca",
    siteName: "Cedar Staffing",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Cedar Staffing – Indigenous Workforce Solutions",
      },
    ],
    locale: "en_CA",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Cedar Staffing | Indigenous Workforce Solutions",
    description:
      "Indigenous-led workforce solutions for construction, energy, and industrial projects.",
    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },

};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      </head>
      <body className="min-h-screen bg-white antialiased">
        {children}
      </body>
    </html>
  );
}