import { NextResponse } from "next/server";

export async function GET(req) {
    const { method, body } = req
    console.log(method, body)
    return NextResponse.json({hello: 'world'})
}