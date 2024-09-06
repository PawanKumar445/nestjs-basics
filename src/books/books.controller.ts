import { Controller, Get } from '@nestjs/common';

@Controller('books')
export class BooksController {
  @Get()
  getBooks(): any {
    return [
      { name: 'Harry Potter and Secret Chamber', author: 'J.K Rolling' },
      { name: 'Harry Potter and Prisoner of Azakban', author: 'J.K Rolling' },
      { name: 'Game Of Thrones:Song of Ice and Fire', author: 'R.R Martin' },
    ];
  }
}
