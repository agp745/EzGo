import { MongoClient } from "mongodb";
import User from "../models/User";

const uri = process.env.MONGODB_URI
const client = new  MongoClient(uri)

async function connectDatabase() {
    try {
        await client.connect()
        console.log('Connected to Mongodb')
        return client.db(process.env.MONGODB_URI)
    } catch (error) {
        console.log('error connecting to the database', error)
        throw error
    }
}

export { connectDatabase, User }