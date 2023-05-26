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

export async function persistUser(email) {
    try {
        const user = prisma.user.findUnique( {
            where: {
                email: email
            }
        })

        if (user) {
            return { user }
        } else {
            const newUser = {
                name: null,
                username: email.slice(0, email.indexOf('@')),
                email,
                password: 'oAuth persisted user'
            }

            const { savedUser, error } = await createUser(newUser)
            if (error) throw new Error (error)
            return { savedUser }
        }

    } catch (error) {
        return { error }
    }
}