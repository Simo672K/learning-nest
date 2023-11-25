import { IsString, IsNumber } from "class-validator"

export class CreateNewBookDTO {
  @IsString()
  bookTitle: string

  @IsString()
  bookAuthor: string
  
  @IsNumber()
  bookChapter: number
}