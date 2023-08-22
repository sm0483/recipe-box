import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from "next-auth";
import { authOption } from "@/app/api/auth/[...nextauth]/route";
import { connect } from '@/db/mongo.db';
import Recipe from '@/models/recipe.model';

connect();

export async function GET(req: NextRequest, res: NextResponse) {
    try {
        const session = await getServerSession(authOption as any);
        const user = (session as any).user;
        if (Object.keys(user).length > 0) {
            const recipes = await Recipe.find({ email: user.email });
            return NextResponse.json({
                success: true,
                message: "Successfully saved",
                data: recipes,
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

