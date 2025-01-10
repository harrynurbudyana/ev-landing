import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Torsi EV",
  description: "Torsi EV is crucial in supporting the establishment of an Electric Vehicle ecosystem through activities encompassing, but not limited to, conversion, production, redesign, and development of supporting devices, such as charging stations and supporting applications. These activities are realized through research, dissemination of research findings via community service and teaching, and publication and Intellectual Property Rights registration.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={"Torsi EV | "}>{children}</body>
    </html>
  );
}
