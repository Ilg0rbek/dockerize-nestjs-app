import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Book {
  @PrimaryGeneratedColumn()
  id: Number;
  @Column()
  title: string;
  @Column()
  author: string;
}
