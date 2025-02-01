import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Your Name - Personal Website",
  description: "Personal website and blog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <header className="bg-white shadow-sm">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between h-16">
                <div className="flex">
                  <Link href="/" className="flex items-center text-xl font-bold">
                    Your Name
                  </Link>
                </div>
                <div className="flex space-x-8">
                  <Link href="/" className="inline-flex items-center px-1 pt-1 text-gray-900">
                    Home
                  </Link>
                  <Link href="/blog" className="inline-flex items-center px-1 pt-1 text-gray-900">
                    Blog
                  </Link>
                  <Link href="/about" className="inline-flex items-center px-1 pt-1 text-gray-900">
                    About
                  </Link>
                  <Link href="/contact" className="inline-flex items-center px-1 pt-1 text-gray-900">
                    Contact
                  </Link>
                </div>
              </div>
            </nav>
          </header>

          <main className="flex-grow">
            {children}
          </main>

          <footer className="bg-white border-t">
            <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
              <p className="text-center text-gray-500">
                © {new Date().getFullYear()} Your Name. All rights reserved.
              </p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
