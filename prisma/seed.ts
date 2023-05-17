import { hash } from "bcrypt";
import prisma from "./client";


async function main(){
    const password = await hash(process.env.USER_PASSWORD!,12)
    const user = await prisma.user.upsert({
        where:{email:'test@test.com'},
        update:{},
        create:{
            email:'test@test.com',
            name:'Test user',
            password
        }
    })
    console.log({user})
}
main().then(()=>prisma.$disconnect())
    .catch(async (e)=>{
        console.log('SEED ERROR=> ', e)
        await prisma.$disconnect()
        process.exit(1)
    })