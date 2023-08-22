import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from "next-auth";
import { authOption } from "@/app/api/auth/[...nextauth]/route";
import { connect } from '@/db/mongo.db';
import Recipe from '@/models/recipe.model';

connect();
export async function GET(request: NextRequest, context: { params: { id: string } }) {
    try {
        const session = await getServerSession(authOption as any);
        const user = (session as any).user;
        if (Object.keys(user).length > 0) {
            const { id } = context.params;
            const recipe = await Recipe.findById(id);
            return NextResponse.json({
                success: true,
                message: "Recipe fetched successfully",
                data: recipe,
            })
        }
    }
    catch (err) {
        return NextResponse.json({
            success: false,
            message: err,
            data: null,
        })
    }

}

export async function PUT(request: NextRequest, context: { params: { id: string } }) {
    try {
        const session = await getServerSession(authOption as any);
        const data = await request.json();
        const user = (session as any).user;
        if (Object.keys(user).length > 0) {
            const recipes = await Recipe.findOneAndUpdate({ email: user.email, _id: context.params.id },
                data, { new: true });
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