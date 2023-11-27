import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { CreateNewBookDTO } from "./dto/createNewBook";
import { BookService } from "./book.service";

@Controller('book')
export class BookController {
  // dependencies injection
  constructor(private readonly bookService: BookService) {}

  @Get()
  getAllBooks(){
    return this.bookService.getAllBooks();
  }

  @Get("featured")
  getFeaturedBooks(){
    return this.bookService.getFeaturedBook();
  }

  @Get(":id")
  getBook(@Param("id") id:string){
    return this.bookService.getBook(id);
  }

  @Post("new")
  newBook(@Body() data: CreateNewBookDTO){
    return data;
  }

}
