export default function Success({ props }: { props: { success: boolean } }) {
   if (props.success) {
      return (
         <div className="absolute top-[15%] left-[50%] border-2 p-4 text-green-500">
            <h1>Success</h1>
         </div>
      );
   }
}
