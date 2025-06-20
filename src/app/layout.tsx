import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { ThemeProvider } from 'next-themes'
import "./globals.css";
import QueryProvider from "@/providers/queryClient";
import Footer from "@/components/ui/sections/footer";
import { Toaster } from "sonner";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"]
});



export const metadata: Metadata = {
  title: "Ngbookings.com",
  description: "Ngbookings.com",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.variable} antialiased bg-cover bg-center bg-no-repeat bg-fixed`}>
        <ThemeProvider defaultTheme="light">
          <QueryProvider>
            <Toaster visibleToasts={4} position="top-center" />
            {children}
            <Footer />
          </QueryProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
