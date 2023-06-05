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

export async function saveRoute(userId, route, travelMode) {
    try {
        const newRoute = await prisma.route.create({
            data: {
                userId,
                route,
                travelMode,
            }
        })
        return { newRoute }

    } catch (error) {
        return { error }
    }
}