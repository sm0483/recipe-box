"use client";
import "./globals.css";
import { SessionProvider } from "next-auth/react";
import NavBar from "@/components/NavBar/NavBar";

export default function RootLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   return (
      <html lang="en">
         <SessionProvider>
            <body>{children}</body>
         </SessionProvider>
      </html>
   );
}
