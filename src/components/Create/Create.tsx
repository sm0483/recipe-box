import { useState } from "react";

export default function Create({
   props,
}: {
   props: { title: string; ingredients: string; steps: string };
}) {
   const [title, setTitle] = useState(props.title);
   const [image, setImage] = useState("");
   const [ingredients, setIngredients] = useState(props.ingredients);
   const [steps, setsteps] = useState(props.steps);

   const handleSubmit = (event: any) => {
      event.preventDefault();
   };

   return (
      <section className="mt-8">
         <form
            onSubmit={handleSubmit}
            className="flex flex-col space-y-2 w-[80%] md:max-w-[50%] mx-auto"
         >
            <label htmlFor="title" className="text-sm font-semibold">
               Title:
            </label>
            <input
               type="text"
               id="title"
               value={title}
               onChange={(event) => setTitle(event.target.value)}
               className="border rounded p-1"
            />
            <label htmlFor="ingredients" className="text-sm font-semibold">
               Ingredients:
            </label>
            <textarea
               id="ingredients"
               value={ingredients}
               onChange={(event) => setIngredients(event.target.value)}
               className="border rounded p-2"
            />
            <label htmlFor="steps" className="text-sm font-semibold">
               steps:
            </label>
            <textarea
               id="steps"
               value={steps}
               onChange={(event) => setsteps(event.target.value)}
               className="border rounded p-2 min-h-[300px]"
            />
            <label htmlFor="image" className="text-sm font-semibold">
               Image:
            </label>
            <input
               type="file"
               id="image"
               value={image}
               onChange={(event) => setImage(event.target.value)}
               className="border rounded p-2"
            />
            <button
               type="submit"
               className="bg-yellow-500 text-white py-2 px-4 rounded w-full md:max-w-[20%]"
            >
               Create Recipe
            </button>
         </form>
      </section>
   );
}
