"use client";
import NavBar from "@/components/NavBar/NavBar";
import Create from "@/components/Create/Create";
import { useSession } from "next-auth/react";
import Denied from "@/components/Denied/Denied";

export default function Page() {
   const { data: session, status } = useSession();
   if (status === "unauthenticated") {
      return <Denied />;
   } else if (status === "authenticated") {
      return (
         <main>
            <NavBar />
            <Create props={{ title: "", ingredients: "", steps: "" }} />
         </main>
      );
   }
}
