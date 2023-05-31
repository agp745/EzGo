import { NextResponse } from "next/server";
import { persistUser } from "@/src/lib/prisma/users";

export async function POST(req) {
    try {
        const data = await req.json()
        console.log(data)

        return NextResponse.json({success: true})
    } catch (error) {
        return NextResponse.json({success: false, error: error.message})
    }
}