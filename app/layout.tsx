import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LanguageProvider } from "./contexts/LanguageContext";

export const metadata: Metadata = {
  title: "Ion Think - Transformando Ideias em Realidade Digital",
  description: "Na Ion Think, desenvolvemos soluções tecnológicas inovadoras que impulsionam o crescimento do seu negócio. Conectamos estratégia, design e tecnologia para criar experiências extraordinárias.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <ThemeProvider>
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

