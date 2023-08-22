import React from "react";
import Image from "next/image";
import Logo from "../../../public/logo/logo.jpg";
import Link from "next/link";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function NavBar() {
   const router = useRouter();
   const onSignOut = async () => {
      await signOut({ callbackUrl: "/" });
   };

   return (
      <nav className="flex items-center justify-between flex-wrap bg-black p-6 top-0 w-full">
         <div className="flex items-center flex-shrink-0 text-white mr-6">
            <Link href={"/home"}>
               <span className="font-semibold text-xl tracking-tight">
                  <Image
                     src={Logo}
                     width={200}
                     height={200}
                     className="w-40 h-10 lg:w-20 object-cover hover:scale-110 duration-500"
                     alt="logo"
                  />
               </span>
            </Link>
         </div>
         <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
            <div className="text-sm lg:flex-grow">
               <Link href={"/home"}>
                  <button className="capitalize block mt-4 lg:inline-block lg:mt-0 text-white hover:text-yellow-400 mr-4">
                     home
                  </button>
               </Link>
               <Link href={"/create"}>
                  <button className="capitalize block mt-4 lg:inline-block lg:mt-0 text-white hover:text-yellow-400 mr-4">
                     create
                  </button>
               </Link>
               <Link href={"/my-recipes"}>
                  <button className="capitalize block mt-4 lg:inline-block lg:mt-0 text-white hover:text-yellow-400 mr-4">
                     my recipes
                  </button>
               </Link>
            </div>
            <div>
               <button
                  onClick={onSignOut}
                  className="capitalize inline-block text-sm px-4 py-2 leading-none border rounded  border-white hover:border-transparent text-white hover:text-yellow-400  mt-4 lg:mt-0"
               >
                  Logout
               </button>
            </div>
         </div>
      </nav>
   );
}
