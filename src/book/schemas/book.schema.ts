import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

export enum Category {
    ADVENTURE='Adventure',
    CLASSICS='Classics',
    CRIME='Crime',
    FANTASY='Fantasy'
}

@Entity({ name: 'bookes'})

export class Book {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    title: string;

    @Column()
    description: string;

    @Column()
    author: string;

    @Column()
    price: number;

    @Column()
    category: Category
    
}
