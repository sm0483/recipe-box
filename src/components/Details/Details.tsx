import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";

interface Recipe {
   id: string;
   title: string;
   image: string;
   ingredients: string[];
   steps: string;
}

export default function Details(props: { id: string }) {
   const id = props.id;
   const [recipe, setRecipe] = useState<Recipe | null>(null);

   useEffect(() => {
      const fetchData = async () => {
         const response = await axios.get(`/api/v1/recipes/${id}`);
         const { data } = response;
         if (response.status === 200) {
            setRecipe(data.data);
         }
      };
      fetchData();
   }, []);
   if (recipe && Object.keys(recipe).length > 0) {
      return (
         <main className="mx-[10%]">
            <h1 className="text-3xl text-center capitalize">{recipe?.title}</h1>
            <div className="">
               <div className="">
                  <Image
                     src={
                        "https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                     }
                     width={100}
                     height={100}
                     alt={`Picture of ${recipe?.title}`}
                     className=""
                  />
               </div>
               <div className="">
                  <div className="mt-8">
                     <h2 className="capitalize text-2xl">ingredients</h2>
                     <ul className="mt-4">
                        {recipe?.ingredients.map((ing: any, index: any) => (
                           <li key={index}>{ing}</li>
                        ))}
                     </ul>
                  </div>
                  <div className="mt-8">
                     <h2 className="capitalize text-2xl">steps</h2>
                     <p className="mt-8 ">{recipe?.steps}</p>
                  </div>
               </div>
            </div>
         </main>
      );
   }
}
