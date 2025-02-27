"use client"
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation"; // Next.js hook for detecting pathname changes
import { NavbarProvider } from "./context/NavbarContext";
import Navbar from "./components/Navbar";
import "./globals.css"; 
import Footer from "./components/Footer";
import Loader from "./components/Loader"; 



export default function RootLayout({ children }) {
  const [loading, setLoading] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleComplete = () => setLoading(false);

    
    handleStart();
    setTimeout(handleComplete, 1000); 

    return () => {
      handleComplete();
    };
  }, [pathname]);

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100..700;1,100..700&family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Sniglet:wght@400;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <NavbarProvider>
          <Navbar />
        
          {loading && <Loader />}
          <main>{children}</main>
        </NavbarProvider>
        <Footer />
      </body>
    </html>
  );
}
