import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from "next-auth";
import { authOption } from "@/app/api/auth/[...nextauth]/route";


export async function GET(req: NextRequest, res: NextResponse) {
    try {
        const session = await getServerSession(authOption as any);
        const user = (session as any).user;
        if (Object.keys(user).length > 0) {
            return NextResponse.json({
                success: true,
                message: "User found",
                data: user,
            })
        }

        return NextResponse.json({
            success: false,
            message: "User not found",
            data: null,
        })
    } catch (error) {
        return NextResponse.json({
            success: false,
            message: error,
            data: null,
        })

    }


}