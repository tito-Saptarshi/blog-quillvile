import {
    ClerkProvider,
    SignedIn,
    SignedOut,
    SignInButton,
    UserButton,
  } from "@clerk/nextjs";
  import { Inter } from "next/font/google";
  

  
  import "../globals.css";
  import { Metadata } from "next";
  
  export const metadata: Metadata = {
    title: "Threads",
    description: "A Next.js app",
  };
  
  const inter = Inter({ subsets: ["latin"] });
  
  export default function RootLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <ClerkProvider>
        <html lang="en">
          <body className={`${inter.className} bg-dark-1`}>
            {/* <Header /> */}
            {children}
          </body>
        </html>
      </ClerkProvider>
    );
  }
  
