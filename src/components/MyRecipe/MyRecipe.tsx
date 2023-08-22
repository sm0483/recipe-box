import RecipeData from "@/data/recipe.data";
import Card from "../Recipe/Card";
import axios from "axios";
import { useEffect, useState } from "react";

export default function MyRecipe() {
   const [RecipeData, setRecipe] = useState<any>([]);
   useEffect(() => {
      const fetchData = async () => {
         const response = await axios.get(`/api/v1/my-recipes`);
         const { data } = response;
         if (response.status === 200) {
            setRecipe(data.data);
         }
      };
      fetchData();
   }, []);

   if (RecipeData.length !== 0) {
      return (
         <section className="space-y-5 mt-4">
            <h1 className="text-black text-4xl text-center p-2 uppercase">
               {" "}
               My Recipes{" "}
            </h1>
            <div className="flex flex-wrap mx-[10%] gap-2">
               {RecipeData.map((recipe: any) => (
                  <Card
                     key={recipe._id}
                     name={recipe.title}
                     image={recipe.image}
                     id={recipe._id}
                     edit={true}
                  />
               ))}
            </div>
         </section>
      );
   }
}
