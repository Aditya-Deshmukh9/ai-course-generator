
import { Inter } from 'next/font/google'
import "./globals.css";
import { cn } from "@/lib/utils";

const fontHeading = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-heading',
})

const fontBody = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
})
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={cn(
        'antialiased',
        fontHeading.variable,
        fontBody.variable
      )}>{children}</body>
    </html>
  );
}
