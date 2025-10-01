import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { LayoutProvider } from "@/components/layout/LayoutProvider";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "vietnamese"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin", "vietnamese"],
});

export const metadata: Metadata = {
  title:
    "Tư tưởng Đoàn kết Quốc tế Hồ Chí Minh | Ho Chi Minh International Solidarity Thought",
  description:
    "Khám phá tư tưởng đoàn kết quốc tế của Chủ tịch Hồ Chí Minh - những giá trị vượt thời gian về hòa bình, hữu nghị và hợp tác giữa các dân tộc trên thế giới.",
  keywords:
    "Hồ Chí Minh, đoàn kết quốc tế, tư tưởng, Việt Nam, hòa bình thế giới, hợp tác quốc tế",
  authors: [{ name: "Ho Chi Minh International Solidarity Thought Project" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    title: "Tư tưởng Đoàn kết Quốc tế Hồ Chí Minh",
    description: "Khám phá tư tưởng đoàn kết quốc tế của Chủ tịch Hồ Chí Minh",
    type: "website",
    locale: "vi_VN",
    siteName: "Ho Chi Minh International Solidarity Thought",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tư tưởng Đoàn kết Quốc tế Hồ Chí Minh",
    description: "Khám phá tư tưởng đoàn kết quốc tế của Chủ tịch Hồ Chí Minh",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className="scroll-smooth">
      <body
  className={`${inter.variable} ${playfairDisplay.variable} font-inter antialiased bg-gray-900 text-white selection:bg-yellow-400 selection:text-black`}
>

        <LayoutProvider>
          <div className="flex flex-col min-h-screen">
            <Navigation />
            <main className="flex-1 pt-16">{children}</main>
            <Footer />
          </div>
        </LayoutProvider>
      </body>
    </html>
  );
}
