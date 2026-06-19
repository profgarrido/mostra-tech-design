import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mostra Tech Design · CESAR School · 2026.1",
  description:
    "Encontre onde cada disciplina está exposta na Mostra Tech Design 2026.1, dia 20 de junho, na CESAR School.",
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
