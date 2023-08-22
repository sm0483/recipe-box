import Image from "next/image";
import Link from "next/link";
export default function Card(props: {
   name: string;
   image: string;
   id: string;
   edit: boolean;
}) {
   return (
      <div className="p-2 w-full md:w-[18%] border-2 border-yellow-400">
         <div className="overflow-hidden flex justify-center flex-col w-full group">
            <div className="">
               <h1 className="text-yellow-900 font-bold text-lg">
                  {props.name}
               </h1>
            </div>
            <Link href={`/home/${props.id}`}>
               <Image
                  src={props.image}
                  alt={`Picture of ${props.name}`}
                  className="w-full  duration-500 border-2"
                  height={200}
                  width={200}
               />
            </Link>
            {props.edit && (
               <Link href={`/edit/${props.id}`}>
                  <h2 className="uppercase text-sm text-yellow-900">Edit</h2>
               </Link>
            )}
         </div>
      </div>
   );
}
