import RecipeData from "@/data/recipe.data";
import Card from "../Recipe/Card";

export default function MyRecipe() {
   return (
      <section className="space-y-5 mt-4">
         <h1 className="text-black text-4xl text-center p-2 uppercase">
            {" "}
            My Recipes{" "}
         </h1>
         <div className="flex flex-wrap mx-[10%] gap-2">
            {RecipeData.map((recipe: any) => (
               <Card
                  key={recipe.id}
                  name={recipe.name}
                  image={recipe.image}
                  id={recipe.id}
                  edit={true}
               />
            ))}
         </div>
      </section>
   );
}
