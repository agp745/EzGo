import { NextResponse } from "next/server";
import { getRoutes, saveRoute } from "@/src/lib/prisma/routes";

export async function GET(req) {
    const userId = await req.json()
    try {
        const { routes, error } = await getRoutes(userId)
        if (error) throw new Error (error)
        return NextResponse.json({success: true, routes})
    } catch (err) {
        return NextResponse.json({success: false, error: err})
    }
}

export async function POST(req) {
    const { userId, route } = await req.json()
    try {
        const { newRoute, error } = await saveRoute(userId, route)
        if (error) throw new Error (error)
        return NextResponse.json({success: true, newRoute})
    } catch (err) {
        return NextResponse.json({success: false, error: err})
    }
}