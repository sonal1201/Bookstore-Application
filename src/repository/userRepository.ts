import { Prisma, PrismaClient } from "@prisma/client";
import { UsersignUpDTO } from "../dtos/userDto";

const prisma = new PrismaClient()

export class userRepository{
    async createUser(data: UsersignUpDTO){
        return await prisma.user.create({ data })
    }

    async findUser(email: string){
        return await prisma.user.findUnique({
            where:{
                email
            }
        })
    }
}