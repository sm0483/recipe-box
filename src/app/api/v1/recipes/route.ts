import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from "next-auth";
import { authOption } from "@/app/api/auth/[...nextauth]/route";
import { connect } from '@/db/mongo.db';
import Recipe from '@/models/recipe.model';

connect();
export async function POST(req: NextRequest, res: NextResponse) {
    try {
        const session = await getServerSession(authOption as any);
        const data = await req.json();
        const user = (session as any).user;
        const ingredientsArray = data.ingredients.split(',');
        console.log(data, ingredientsArray);
        if (Object.keys(user).length > 0) {
            const recipe = await
                Recipe.create({ ...data, email: user.email });
            return NextResponse.json({
                success: true,
                message: "Successfully saved",
                data: recipe,
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

export async function GET(req: NextRequest, res: NextResponse) {
    try {
        const session = await getServerSession(authOption as any);
        const user = (session as any).user;
        if (Object.keys(user).length > 0) {
            const recipes = await Recipe.find();
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