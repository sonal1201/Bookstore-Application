import { CreateBookDTO, UpdateBookDTO } from "../dtos/bookDto"
import { bookRepository } from "../repository/bookRepository"


export class BookService{
    private bookRepo : bookRepository;

    constructor(){
        this.bookRepo = new bookRepository();
    }

    async createBook (data: CreateBookDTO, userId: string){
        return await this.bookRepo.createBook(data, userId)
    }

    async getAllBooks(){
        return await this.bookRepo.getAllBooks()
    }

    async getBookById(id: string){
        return await this.bookRepo.getBookById(id)
    }

    async updateBook (id:string ,data: UpdateBookDTO){
        return await this.bookRepo.updateBook(id, data)
    }

    async deleteBook (id: string){
        return await this.bookRepo.deleteBook(id);
    }
    
}