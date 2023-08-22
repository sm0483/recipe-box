"use client";
import Create from "@/components/Create/Create";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import Recipe from "@/components/Recipe/Recipe";

interface Recipe {
   _id: string;
   title: string;
   image: string;
   ingredients: string[];
   steps: string;
}

export default function Page({ params }: { params: { id: string } }) {
   const [recipe, setRecipe] = useState<Recipe | null>(null);

   useEffect(() => {
      const fetchData = async () => {
         const response = await axios.get(`/api/v1/recipes/${params.id}`);
         const { data } = response;
         console.log(data);
         if (response.data.success === true) {
            console.log(response.data.data);
            setRecipe(data.data);
         }
      };
      fetchData();
   }, []);
   if (recipe !== null) {
      return (
         <main>
            <Create props={recipe} edit={true} />
         </main>
      );
   }
}
