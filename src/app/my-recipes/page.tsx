"use client";
import NavBar from "@/components/NavBar/NavBar";
import MyRecipe from "@/components/MyRecipe/MyRecipe";
import { useSession } from "next-auth/react";
import Denied from "@/components/Denied/Denied";

export default function Page() {
   const { data: session, status } = useSession();
   if (status === "authenticated") {
      return (
         <main>
            <NavBar />
            <MyRecipe />
         </main>
      );
   } else if (status === "unauthenticated") {
      return <Denied />;
   }
}

