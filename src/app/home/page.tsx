"use client";
import NavBar from "@/components/NavBar/NavBar";
import Recipe from "@/components/Recipe/Recipe";
import SearchBar from "@/components/Search/Search";
import { useSession } from "next-auth/react";
import Denied from "@/components/Denied/Denied";

export default function Home() {
   const { data: session, status } = useSession();
   if (status === "authenticated") {
      return (
         <main>
            <Recipe />
         </main>
      );
   } else if (status === "unauthenticated") {
      return <Denied />;
   }
}
