import { connectDatabase, User } from "@/app/lib/db";
import NextAuth from "next-auth/next";

const handler = NextAuth({
    
})

export { handler as GET, handler as POST }