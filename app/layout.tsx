import "./globals.css";

export const metadata = {
  title: "CedarStaffing",
  description: "On-Call Janitorial & Industrial Workforce Solutions",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white antialiased">
        {children}
      </body>
    </html>
  );
}