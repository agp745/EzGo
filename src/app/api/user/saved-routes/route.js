import { NextResponse } from "next/server";
import { getRoutes, saveRoute, deleteRoute } from "@/src/lib/prisma/routes";

export async function GET(req) {
    const { searchParams } = new URL(req.url)
    const userId = searchParams.get('user_id')
    try {
        const { routes, error } = await getRoutes(userId)
        if (error) throw new Error (error)
        return NextResponse.json({success: true, routes})
    } catch (err) {
        return NextResponse.json({success: false, error: err.message})
    }
}

export async function POST(req) {
    const { userId, route, travelMode } = await req.json()

    try {
        const { newRoute, error } = await saveRoute(userId, route, travelMode)
        if (error) throw new Error (error)
        return NextResponse.json({success: true, newRoute})
    } catch (err) {
        return NextResponse.json({success: false, error: err.message})
    }
}

export async function DELETE(req) {
    const { searchParams } = new URL(req.url)
    const routeId = searchParams.get('route_id')
    try {
        const { deletedRoute, error } = await deleteRoute(routeId)
        if (error) throw new Error (error)
        return NextResponse.json({success: true, deletedRoute})
    } catch (err) {
        return NextResponse.json({success: false, error: err.message})
    }
}