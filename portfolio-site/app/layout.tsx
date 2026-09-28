import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Surya Nandan — Software Engineer & Frontend Developer",
  description: "Portfolio of Surya Nandan, a software engineer building thoughtful web, mobile and AI products.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
