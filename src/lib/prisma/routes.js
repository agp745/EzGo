import prisma from "."

export async function getRoutes(userId) {
    try {
        const routes = await prisma.route.findMany({
            where: {
                userId: userId
            }
        })
        return { routes }
    } catch (error) {
        return { error }
    }
}

export async function saveRoute(userId, route) {
    try {
        const newRoute = prisma.route.create({
            data: {
                userId,
                route,
            }
        })
        return { newRoute }

    } catch (error) {
        return { error }
    }
}