import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookModule } from './book/book.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { Book } from './book/schemas/book.schema';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      password: "admin123",
      username:'postgres',
      entities: [Book],
      database: 'test',
      synchronize: true,
      logging: true,
    }),
    BookModule
  ],
  
  controllers: [AppController],

  providers: [AppService],
})
export class AppModule {}
 