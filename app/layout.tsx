import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
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
    <html lang="es" className={`${poppins.variable} scroll-smooth`}>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
