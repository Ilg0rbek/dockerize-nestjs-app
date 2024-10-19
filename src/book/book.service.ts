import { Injectable } from '@nestjs/common';
import { Book } from './entities/book.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class BookService {
  constructor(
    @InjectRepository(Book) private readonly bookModel: Repository<Book>,
  ) {}

  async create(dto: Book) {
    let newBook = this.bookModel.create(dto);
    return this.bookModel.save(newBook);
  }

  async find(): Promise<Book[]> {
    return await this.bookModel.find();
  }

  async findOne(id: string) {
    return await this.bookModel.find({
      where: {
        id: +id,
      },
    });
  }

  async update(id: string, dto: Partial<Book>) {
    await this.bookModel.update(+id, dto);
    return await this.bookModel.findOne({ where: { id: +id } });
  }
  async delete(id: string) {
    let data = await this.bookModel.findOne({ where: { id: +id } });
    await this.bookModel.delete(+id);
    return data;
  }
}
