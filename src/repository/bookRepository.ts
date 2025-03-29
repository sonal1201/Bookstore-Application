import { PrismaClient } from "@prisma/client";
import { CreateBookDTO, createBookDTO, UpdateBookDTO, updateBookDTO } from "../dtos/bookDto";

const prisma = new PrismaClient()

export class bookRepository {
   async createBook(data: CreateBookDTO, userId: string){
    return await prisma.book.create({
        data: {
            ...data,
            userId
        },
    })
   }

   async getAllBooks() { 
    return await prisma.book.findMany()
   }

   async getBookById(id: string){
    return await prisma.book.findUnique({
        where:{ id }
    })
   }

   async updateBook(id: string, data: UpdateBookDTO){
    return await prisma.book.update({
        where:{ id },
        data
    })
   }

   async deleteBook (id: string){
    return await prisma.book.delete({
        where:{ id }
    })
   }

}