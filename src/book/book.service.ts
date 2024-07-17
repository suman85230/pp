import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Book } from './schemas/book.schema';
import * as mongoose from 'mongoose';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateBookDto } from './dto/create-book-dto';
import { UpdateBookDto } from './dto/update-book-dto';

@Injectable()
export class BookService {
    findOne: any;
    constructor(
      @InjectRepository(Book)
      private readonly bookesRepository:
      Repository<Book>
    ) {}

    async findAll(): Promise<Book[]> {
    return await this.bookesRepository.find()
 
    }
    
    async create(book: Book):Promise<Book>{
        const res = await this.bookesRepository.create(book);
        return await this.bookesRepository.save(res);

        console.log(res)
        console.log("hellooo");
    }
    

    async FindOne(id: number ): Promise<Book>{
        const book = await this.bookesRepository.findOneBy({ id })

        if(!book){
            throw new NotFoundException('book not found');
        }
        return book;
    }

    async update(  id:number, updateBookDto:UpdateBookDto):Promise<Book>{
        const update = await this.findOne(id);
        if(!update) {
            throw new NotFoundException();  
             }

             Object.assign(update, updateBookDto);
             return await this.bookesRepository.save(update);
      
}

    async remove(id: number):Promise<Book[]>{
        const existingBook = await this.findOne(id);
        // if(!existingBook) {
        //     throw new NotFoundException();
        // }
            return await this.bookesRepository.remove(existingBook);
    }
}