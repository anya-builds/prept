import { DM_Sans, Lora } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import Header from "@/components/header";


const lora= Lora({
  subsets: ["latin"],
  weight: ["400","500"],
  style: ["normal","italic"],
  variable: "--font-serif",
});
const dmSans=DM_Sans({
  subsets: ["latin"],
  weight: ["300","400","500","600"],
  variable: "--font-sans",
})
export const metadata = {
  title: "Prept",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider appearance={{
      theme:dark,
    }}>
     <html lang="en" suppressHydrationWarning>
      <head/>
      <body className={`${lora.variable} ${dmSans.variable} font-sans`}>
      <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
        {/* Header */}
        <Header/>
        <main className="min-h-screen">{children}</main>
        {/* Footer */}
        </ThemeProvider>

      </body>
    </html>
    </ClerkProvider>
  );
}
