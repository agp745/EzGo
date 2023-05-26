import { NextResponse } from "next/server";
import { createUser, getUsers } from "@/src/lib/prisma/users";

export async function GET() {
    try {
        const { users, error } = await getUsers()
        if(error) throw new Error(error)
        return NextResponse.json({success: true, data: users}).status(200)
    } catch (error) {
        return NextResponse.json({success: false, error: error.message}).status(500)
    }
}

export async function POST(req) {
    try {
        const newUser = await req.json()
        console.log(newUser)

        const { savedUser, error } = await createUser(newUser)
        if(error) throw new Error(error)
        return NextResponse.json({success: true, savedUser})
    } catch (error) {
        return NextResponse.json({success: false, error: error.message})
    }
}