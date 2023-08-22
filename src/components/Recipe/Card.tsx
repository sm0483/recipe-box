import Image from "next/image";
import Link from "next/link";
export default function Card(props: {
   name: string;
   image: string;
   id: string;
   edit: boolean;
}) {
   console.log(props);
   return (
      <div className="card w-90 bg-base-100 shadow-xl">
         <figure className="w-full">
            <Link href={`/home/${props.id}`}>
               <Image
                  src={
                     "https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  }
                  alt={`Picture of ${props.name}`}
                  className="w-full aspect-square"
                  height={200}
                  width={200}
               />
            </Link>
         </figure>
         <div className="card-body">
            <h2 className="card-title">{props.name}</h2>
            {props.edit && (
               <div className="card-actions justify-end">
                  <Link href={`/edit/${props.id}`}>
                     <button className="btn btn-primary">Edit</button>
                  </Link>
               </div>
            )}
         </div>
      </div>
      // <div className="p-2 w-full md:w-[18%] border-2 border-yellow-400">
      //    <div className="overflow-hidden flex justify-center flex-col w-full group">
      //       <div className="">
      //          <h1 className="text-yellow-900 font-bold text-lg">
      //             {props.name}
      //          </h1>
      //       </div>
      // <Link href={`/home/${props.id}`}>
      //    <Image
      //       src={"https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
      //       alt={`Picture of ${props.name}`}
      //       className="w-full  duration-500 border-2"
      //       height={200}
      //       width={200}
      //    />
      // </Link>
      //       {props.edit && (
      //          <Link href={`/edit/${props.id}`}>
      //             <h2 className="uppercase text-sm text-yellow-900">Edit</h2>
      //          </Link>
      //       )}
      //    </div>
      // </div>
   );
}
