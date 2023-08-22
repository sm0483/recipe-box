// crud operations for recipes
import { authOption } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from 'next/server';



// export async function GET(req: NextRequest) {
// }



// export async function GET(req: NextRequest, res: NextResponse) {
//     const session = await getServerSession(authOption as any);
//     if (!session) {
//         return NextRequest(200).json({
//             mesaaage: "User found",
//             data: 'cat',
//         })
//     }
//     console.log(session);
//     return new Response("Hello, Next.js!");
// }


// export async function GET(req: any, res: any) {
//     // const session = await getServerSession(req, res, authOption);
//     console.log(res)
//     console.log(req)
//     return new Response('Hello, Next.js!')
// }

// // export async function POST(request: Request) {
// //     console.log(request)
// //     return new Response('Hello, Next.js!')
// // }

// export default async function handler(request: Request) {
//     console.log(request)
//     return new Response('Hello, Next.js!')
// }