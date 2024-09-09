import { Controller, Get, Headers, Request, UseGuards } from '@nestjs/common';
import { BooksAuthGuard } from 'src/guards/books';

@Controller('books')
export class BooksController {
  @UseGuards(BooksAuthGuard)
  @Get()
  getBooks(@Headers() headers: any): any {
    console.log('Request headers in Books Controller::::', headers);
    return [
      { name: 'Harry Potter and Secret Chamber', author: 'J.K Rolling' },
      { name: 'Harry Potter and Prisoner of Azakban', author: 'J.K Rolling' },
      { name: 'Game Of Thrones:Song of Ice and Fire', author: 'R.R Martin' },
    ];
  }
}
