import { DM_Sans, Lora } from "next/font/google";
import "./globals.css";


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
    <html
      lang="en" suppressContentEditableWarning
    >
      <body className={`${lora.variable} ${dmSans.variable} font-sans`}>
        {/* Header */}
        <main className="min-h-screen">{children}</main>
        {/* Footer */}

      </body>
    </html>
  );
}
