import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { CreateNewBookDTO } from "./dto/createNewBook";

@Controller('book')
export class BookController {
  @Get()
  getAllBooks(){
    return "List of all books";
  }

  @Get(":id")
  getBook(@Param("id") id:string){
    return {
      bookId: id,
      bookData:{
        bookTitle: "Harry Potter",
        bookChapters: 25,
        bookAuthor: "Jhon Doe",
        bookTags: ["Action", "Fantasy", "Adventure"],
        bookTotalReads: 18520,
        bookRate: 4.8
      }
    }
  }

  @Post("new")
  newBook(@Body() data: CreateNewBookDTO){
    return data;
  }

}
