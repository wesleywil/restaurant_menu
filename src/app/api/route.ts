import { getServerSession} from "next-auth/next"
import { NextResponse } from "next/server";
import { authOptions } from "./auth/[...nextauth]/route";

export async function GET(req:Request) {
    const session = await getServerSession(authOptions)
    console.log('GET API', session)
    return NextResponse.json({authenticated: !!session})
}