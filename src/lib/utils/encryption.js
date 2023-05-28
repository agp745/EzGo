import * as bcrypt from 'bcrypt'

export async function encryptPassword(password) {
    try {
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)
        return { hashedPassword }
    } catch (error) {
        return { error }
    }
}

export async function decryptPassword(password, hashedPassword) {
    try {
        const result = bcrypt.compare(password, hashedPassword)
        if (!result) throw new Error ('incorrect password')
        return { result }
    } catch (error) {
        return { error }
    }
}