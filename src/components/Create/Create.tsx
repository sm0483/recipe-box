import { useState } from "react";
import axios from "axios";
import Success from "../success/success";

export default function Create({
   props,
   edit = false,
}: {
   props: { title: string; ingredients: any; steps: string; _id: string };
   edit: boolean;
}) {
   const [success, setSuccess] = useState(false);

   const [recipe, setRecipe] = useState({
      title: props.title,
      ingredients: props.ingredients,
      steps: props.steps,
      image: "",
   });
   const onCreate = async () => {
      try {
         const response = await axios.post("/api/v1/recipes", recipe);
         if (response.status === 200) setSuccess(true);
         console.log(response.data);
         setTimeout(() => {
            setSuccess(false);
         }, 1000);
      } catch (error) {
         console.log(error);
      }
   };

   const onEdit = async () => {
      try {
         const response = await axios.put(
            `/api/v1/recipes/${props._id}`,
            recipe
         );
         if (response.status === 200) setSuccess(true);
         console.log(response.data);
         setTimeout(() => {
            setSuccess(false);
         }, 1000);
      } catch (error) {
         console.log(error);
      }
   };

   const handleSubmit = (event: any) => {
      event.preventDefault();
      if (edit) onEdit();
      else onCreate();
   };

   return (
      <section className="mt-8">
         <Success props={{ success: success }} />
         <form
            onSubmit={handleSubmit}
            className="flex flex-col w-[80%] md:max-w-[50%] mx-auto"
         >
            <label htmlFor="name" className="text-sm font-semibold">
               name:
            </label>
            <input
               type="text"
               id="name"
               value={recipe.title}
               onChange={(e) => setRecipe({ ...recipe, title: e.target.value })}
               className="border rounded p-1 mb-4 mt-2 "
            />
            <label htmlFor="ingredients" className="text-sm font-semibold">
               Ingredients:
            </label>
            <textarea
               id="ingredients"
               value={recipe.ingredients}
               onChange={(e) =>
                  setRecipe({ ...recipe, ingredients: e.target.value })
               }
               className="border rounded p-2 min-h-[80px] mb-4 mt-2"
               required
            />
            <label htmlFor="steps" className="text-sm font-semibold">
               steps:
            </label>
            <textarea
               id="steps"
               value={recipe.steps}
               onChange={(e) => setRecipe({ ...recipe, steps: e.target.value })}
               className="border rounded p-2 min-h-[150px] mb-4 mt-2"
               required
            />
            <label htmlFor="image" className="text-sm font-semibold">
               Image:
            </label>
            <input
               id="image"
               value={recipe.image}
               onChange={(e) => setRecipe({ ...recipe, image: e.target.value })}
               className="border rounded p-2 mb-8  mt-2"
               required
            />
            <button
               type="submit"
               className="bg-yellow-500  text-white py-2 px-4 rounded w-full md:max-w-[20%]"
            >
               {edit ? "Edit" : "Create"}
            </button>
         </form>
      </section>
   );
}
