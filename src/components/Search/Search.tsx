import React, { useState } from "react";

const SearchBar = () => {
   const [query, setQuery] = useState("");

   const handleSubmit = (event: any) => {
      event.preventDefault();
   };

   return (
    <section className="my-4 flex justify-center">
      <form onSubmit={handleSubmit} className="flex w-[50%] ">
         <input
            type="text"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            className="border rounded-l p-2 w-[90%]"
         />
         <button
            type="submit"
            className="bg-yellow-500 text-white py-2 px-4 rounded-r w-[10%]"
         >
            Search
         </button>
      </form>
    </section>
   );
};

export default SearchBar;
