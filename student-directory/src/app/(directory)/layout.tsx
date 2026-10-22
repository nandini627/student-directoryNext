
import { Suspense } from "react";
import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";

export default function DirectoryLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Suspense fallback={<header className="site-header" />}>
        <Navbar />
      </Suspense>
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  );
}
