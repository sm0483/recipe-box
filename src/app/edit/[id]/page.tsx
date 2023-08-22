export default function Page({ params }: { params: { id: string } }) {
   return (
      <main>
         <h1>Recipe {params.id}</h1>
      </main>
   );
}
