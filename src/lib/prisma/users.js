import prisma from ".";

export async function getUserByEmail(email) {
    try {
        const user = await prisma.user.findUnique({
            where: {
                email
            }
        })
        return { user }
    } catch (error) {
        return { error }
    }
}

export async function deleteUser(userId) {
    try {
        const deletedUser = await prisma.user.delete({
            where: {
                id: userId
            }
        })
        return { deletedUser }
    } catch (error) {
        return { error }
    }
}