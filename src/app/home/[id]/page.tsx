"use client";
import NavBar from "@/components/NavBar/NavBar";
import Details from "@/components/Details/Details";
import { useSession } from "next-auth/react";
import Denied from "@/components/Denied/Denied";

export default function Page({ params }: { params: { id: string } }) {
   const { data: session, status } = useSession();
   if (status === "unauthenticated") {
      return <Denied />;
   }
   if (status === "authenticated") {
      return (
         <main>
            <NavBar />
            <Details id={params.id} />
         </main>
      );
   }
}
