import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "猫格测试 - CatMBTI",
  description: "重生之我变成了一只猫，这一次，我要活出自己的猫生",
  openGraph: {
    title: "猫格测试 - CatMBTI",
    description: "12道题测出你是哪种猫",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh">
      <body className="min-h-screen" style={{ background: "#f5f4ed" }}>
        <div className="max-w-[480px] mx-auto min-h-screen relative">
          {children}
        </div>
      </body>
    </html>
  );
}
