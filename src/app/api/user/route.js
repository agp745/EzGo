import { NextResponse } from "next/server";
import { createUser, getUsers, deleteUser } from "@/src/lib/prisma/users";
import { encryptPassword } from "@/src/lib/utils/encryption";

export async function GET() {
    try {
        const { users, error } = await getUsers()
        if(error) throw new Error(error)
        return NextResponse.json({success: true, users})
    } catch (error) {
        return NextResponse.json({success: false, error: error.message})
    }
}

export async function POST(req) {
    try {
        const {email, password} = await req.json()
        const username = email.slice(0, email.indexOf('@'))

        const { hashedPassword, error: encryptionError } = await encryptPassword(password)
        if (encryptionError) throw new Error (encryptionError)

        const newUser = {
            name: null,
            username,
            email,
            password: hashedPassword
        }

        const { savedUser, error } = await createUser(newUser)
        if(error) throw new Error(error)
        return NextResponse.json({success: true, savedUser})
    } catch (error) {
        return NextResponse.json({success: false, error: error.message})
    }
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
