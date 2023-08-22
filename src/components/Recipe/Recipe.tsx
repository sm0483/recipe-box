// import RecipeData from "@/data/recipe.data";
import { useEffect } from "react";
import Card from "./Card";
import axios from "axios";
import { useState } from "react";

export default function Recipe() {
   const [RecipeData, setRecipeData] = useState([]);

   useEffect(() => {
      const fetchData = async () => {
         const result = await axios.get("http://localhost:3000/api/v1/recipes");
         console.log(result.data.data);
         setRecipeData(result.data.data);
      };
      fetchData();
   }, []);
   return (
      <section className="space-y-5 mt-4">
         <h1 className="text-black text-4xl text-center p-2 uppercase">
            {" "}
            recipe
         </h1>
         <div className="flex flex-wrap mx-[10%] gap-8">
            {Object.keys(RecipeData).length > 0 &&
               RecipeData.map((recipe: any, index: number) => (
                  <Card
                     key={index}
                     name={recipe.title}
                     image={recipe.image}
                     id={recipe._id}
                     edit={false}
                  />
               ))}
         </div>
      </section>
   );
}
