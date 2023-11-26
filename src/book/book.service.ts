import { Injectable } from '@nestjs/common';



@Injectable()
export class BookService {
  private books = [
    {
      bookId: 'ea9fcb45',
      bookData: {
        bookTitle: 'Star wars',
        bookChapters: 45,
        bookAuthor: 'Sam Smith',
        bookTags: ['Action', 'Adventure', 'Si-Fi'],
        bookTotalReads: 15840255,
        bookRate: 4.6,
      },
    },
    {
      bookId: 'ea9fcb78',
      bookData: {
        bookTitle: 'Dark side',
        bookChapters: 52,
        bookAuthor: 'Joe sannie',
        bookTags: ['Action', 'Si-Fi'],
        bookTotalReads: 15840255,
        bookRate: 4.6,
      },
    },
    {
      bookId: 'ea9fcb94',
      bookData: {
        bookTitle: 'Game of thrones',
        bookChapters: 45,
        bookAuthor: 'Sam Smith',
        bookTags: ['Action', 'Adventure', 'Fantasy'],
        bookTotalReads: 15840255,
        bookRate: 4.6,
      },
    },
    {
      bookId: 'ea9fcb02',
      bookData: {
        bookTitle: 'Harry Potter',
        bookChapters: 25,
        bookAuthor: 'Jhon Doe',
        bookTags: ['Action', 'Fantasy', 'Adventure'],
        bookTotalReads: 18520,
        bookRate: 4.8,
      },
    },
  ];

  getBook(id: string) {
    return this.books.filter(book=> book.bookId === id);
  }

  getAllBooks() {
    return this.books;
  }
}
