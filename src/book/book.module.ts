import { Module } from '@nestjs/common';
import { BookController } from './book.controller';
import { BookService } from './book.service';
import { MongooseModule } from '@nestjs/mongoose';
// import { Book, BookSchema } from './schemas/book.schema';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Book } from './schemas/book.schema';

@Module({
  imports: [
    TypeOrmModule.forFeature([Book]),
  ],
  controllers: [BookController],
  providers: [BookService]
})
export class BookModule {}
