import { NextResponse } from "next/server";
import { getUserByEmail, deleteUser } from "@/src/lib/prisma/users";

export async function GET(req) {
    const { searchParams } = new URL(req.url);
    const email = searchParams.get('email');
    return NextResponse.json({success: true, email})
    // try {
    //     const { user, error } = await getUserByEmail(email)
    //     if(error) throw new Error(error)
    //     return NextResponse.json({success: true, user})
    // } catch (error) {
    //     return NextResponse.json({success: false, error: error.message})
    // }
}

export async function DELETE(req) {
    try {
        const { searchParams } = new URL(req.url)
        const id = searchParams.get('id')

        const { deletedUser, error } = await deleteUser(id)
        if(error) throw new Error(error)

        return NextResponse.json({success: true, deletedUser})
    } catch (error) {
        return NextResponse.json({success: false, error: error.message})
    }
}
