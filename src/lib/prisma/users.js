import prisma from ".";

export async function getUsers() {
    try {
        const users = await prisma.user.findMany({})
        return { users }
    } catch (error) {
        return { error }
    }
}

export async function createUser(user) {
    try {
        const savedUser = await prisma.user.create({data: user})
        return { savedUser }
    } catch (error) {
        return { error }
    }
}