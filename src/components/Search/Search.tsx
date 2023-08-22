import React from "react";
import Image from "next/image";
import Logo from "../../../public/logo/logo.jpg";
import Link from "next/link";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useSession } from "next-auth/react";

const SearchBar = () => {
   const router = useRouter();
   const onSignOut = async () => {
      await signOut({ callbackUrl: "/" });
   };
   const { data: session, status } = useSession();
   const [query, setQuery] = useState("");
   const handleSubmit = (event: any) => {
      event.preventDefault();
   };
   if (session?.user) {
      return (
         <section className="my-4 flex justify-center">
            <div className="navbar bg-base-100">
               <div className="flex-1">
                  <a className="btn btn-ghost normal-case text-xl">RecipeBox</a>
                  <ul className="flex gap-4 ml-16 capitalize">
                     <li>
                        <Link href={"/home"}>Home</Link>
                     </li>
                     <li>
                        <Link href={"/my-recipes"}>My recipes</Link>
                     </li>
                     <li>
                        <Link href={"/create"}>Create</Link>
                     </li>
                  </ul>
               </div>
               <div className="flex-none gap-2">
                  <div className="form-control">
                     <input
                        type="text"
                        placeholder="Search"
                        className="input input-bordered w-24 md:w-auto"
                     />
                  </div>
                  <div className="dropdown dropdown-end">
                     <label
                        tabIndex={0}
                        className="btn btn-ghost btn-circle avatar"
                     >
                        {session?.user && session?.user.image && (
                           <div className="w-10 rounded-full">
                              <Image
                                 src={session?.user.image}
                                 alt="some image"
                                 width={40}
                                 height={40}
                              />
                           </div>
                        )}
                     </label>
                     <ul
                        tabIndex={0}
                        className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
                     >
                        <button onClick={onSignOut}>
                           <li>
                              <a>Logout</a>
                           </li>
                        </button>
                     </ul>
                  </div>
               </div>
            </div>
         </section>
      );
   }
};

export default SearchBar;
