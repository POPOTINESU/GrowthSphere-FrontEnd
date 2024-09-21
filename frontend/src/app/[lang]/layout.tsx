import "./globals.css";
import { Noto_Sans_JP } from "next/font/google";

const notoSansJP = Noto_Sans_JP({ subsets: ["latin"], weight: ["400"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={notoSansJP.className}>
        <main>{children}</main>
      </body>
    </html>
  );
}
