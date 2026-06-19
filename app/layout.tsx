import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mostra Tech Design · CESAR School · 2026.1",
  description:
    "Encontre onde cada disciplina está exposta na Mostra Tech Design 2026.1, dia 20 de junho, na CESAR School.",
  openGraph: {
    title: "Mostra Tech Design 2026.1 · CESAR School",
    description:
      "Confira onde cada disciplina está exposta na Mostra Tech Design. Dia 20 de junho, das 13h às 17h, nos prédios Brum e Tiradentes.",
    url: "https://mostra-tech-design.vercel.app/",
    siteName: "Mostra Tech Design",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "https://d335luupugsy2.cloudfront.net/cms/files/101189/1747079799/$8jwfnlweh5p",
        width: 1200,
        height: 630,
        alt: "Mostra Tech Design 2026.1 · CESAR School",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mostra Tech Design 2026.1 · CESAR School",
    description:
      "Confira onde cada disciplina está exposta na Mostra Tech Design. Dia 20 de junho, das 13h às 17h.",
    images: [
      "https://d335luupugsy2.cloudfront.net/cms/files/101189/1747079799/$8jwfnlweh5p",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
