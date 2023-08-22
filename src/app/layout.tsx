"use client";
import "./globals.css";
import { SessionProvider } from "next-auth/react";
import SearchBar from "@/components/Search/Search";

export default function RootLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   return (
      <html lang="en">
         <SessionProvider>
            <body>
               <SearchBar />
               {children}
            </body>
         </SessionProvider>
      </html>
   );
}
