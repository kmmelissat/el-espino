import type { Metadata } from "next";
import { Cause, Climate_Crisis } from "next/font/google";
import "./globals.css";

const cause = Cause({
  variable: "--font-cause",
  subsets: ["latin"],
  // variable font — carga el eje wght completo (100–900)
});

const climateCrisis = Climate_Crisis({
  variable: "--font-climate",
  subsets: ["latin"],
  // variable font — eje YEAR 1979–2050, un solo peso real
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://salvemoselespino.sv"),
  title: "Salvemos El Espino | Protege el Pulmón de San Salvador",
  description:
    "Únete al movimiento ciudadano para salvar El Espino del proyecto CIFCO. Firma la petición y protege el pulmón verde de San Salvador.",
  keywords: ["El Espino", "CIFCO", "San Salvador", "ambiente", "protesta", "naturaleza", "medio ambiente"],
  openGraph: {
    title: "Salvemos El Espino | Protege el Pulmón de San Salvador",
    description:
      "Únete al movimiento ciudadano para salvar El Espino del proyecto CIFCO. 91 hectáreas de bosque en peligro.",
    type: "website",
    locale: "es_SV",
    siteName: "Salvemos El Espino",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Salvemos El Espino — Protege el Pulmón Verde de San Salvador" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Salvemos El Espino",
    description: "Protege el pulmón verde de San Salvador. Firma la petición.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${cause.variable} ${climateCrisis.variable} scroll-smooth`}>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
