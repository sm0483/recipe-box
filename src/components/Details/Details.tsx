import RecipeData from "@/data/recipe.data";
import Image from "next/image";

export default function Details(props: { id: string }) {
   const recipe = RecipeData[0];
   const id = props.id;
   return (
      <main className="mx-[20%] mt-10">
         <h1 className="text-3xl ">{recipe.name}</h1>
         <div className="w-[200px] aspect-square md:w-[250px] mt-4">
            <Image
               src={recipe.image}
               width={500}
               height={500}
               alt={`Picture of ${recipe.name}`}
               className="w-full object-cover aspect-square"
            />
            <div className="my-4">
               <h2 className="text-2xl uppercase mb-2">ingredients</h2>
               <ul className="flex gap-3">
                  {recipe.ingredients.map((ing: any, index: any) => (
                     <li key={index}>{ing}</li>
                  ))}
               </ul>
            </div>
            <div>
               <h2 className="text-2xl uppercase mb-2">steps</h2>
               <p>{recipe.steps}</p>
            </div>
         </div>
      </main>
   );
}
