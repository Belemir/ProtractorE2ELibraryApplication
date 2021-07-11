import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../../app/core/services/books.service';
import { Book } from '../../app/shared/book';
import { BooksStateService } from './books.state.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  books: Book[];

  constructor(private activatedRoute: ActivatedRoute, private router: Router,
              private bookService: BookService, private bookState: BooksStateService) {
  }

  ngOnInit() {
    this.loadBooks();
    this.bookState.booksObservable.subscribe(books => {
      this.books = books;
    });
  }

  private loadBooks() {
    return this.bookService.getBooks().toPromise().then(newBooks => {
      this.bookState.setBooksAction(newBooks);
      return newBooks;
    });
  }

  filterComparer(book: Book, filter: string) {
    return book.title.indexOf(filter) > -1;
  }

  onDelete(id: number) {
    this.bookService.deleteBook(id).subscribe(() => {
      this.loadBooks().then(books => {
        if (books.length) {
          this.router.navigate([books[0].id], { relativeTo: this.activatedRoute });
        }
      });
    });
  }
}
