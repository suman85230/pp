import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { BookService } from './book.service';
import { Book } from './schemas/book.schema';
import { CreateBookDto } from './dto/create-book-dto';
import { UpdateBookDto } from './dto/update-book-dto';

@Controller('books')
export class BookController {
    constructor(private readonly bookService:BookService) {}

    @Get()
    async getAllBooks():Promise<Book[]> {
        return await this.bookService.findAll()
       
    }

    @Post()
    async create(
        @Body()
        book:Book
    ):Promise<Book> {
        return this.bookService.create(book)
    }


    @Get(':id')
    async getById(
        @Param('id')
        id: string

    ): Promise<Book>{
        return this.bookService.FindOne(+id)
    }

    @Put(':id')
    async updateById(
        @Param('id')
        id:string,
        @Body()
        updateBookDto:UpdateBookDto
    ):Promise<Book>{
        return this.bookService.update(+id, updateBookDto)
    }

    @Delete(':id')
    async deleteBook(
        @Param('id')
        id: string
    ):Promise<Book[]>{
        return this.bookService.remove(+id);
    }
}
