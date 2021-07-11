import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { ActivatedRoute } from '@angular/router';
import { AuthorsService } from '../../../app/core/services/authors.service';
import { BookService } from '../../../app/core/services/books.service';
import { Book } from '../../../app/shared/book';
import { BooksStateService } from '../books.state.service';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  public book: Book | null = null;
  form: FormGroup;
  titleControl: FormControl;
  yearControl: FormControl;
  authorControl: FormControl;
  publisherControl: FormControl;

  matcher = new MyErrorStateMatcher();

  constructor(private activatedRoute: ActivatedRoute, private bookService: BookService,
              private a: AuthorsService, private bookState: BooksStateService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(param => {
      if (param.bookId) {
        this.bookService.getBook(param.bookId).subscribe(book => this.initializeForm(book));
      }
    });
    this.a.getAuthors().toPromise().catch(e => console.error(e));
  }

  initializeForm(book: Book) {
    this.book = book;

    this.titleControl = new FormControl(book.title, [Validators.required]);
    this.yearControl = new FormControl(book.year, [Validators.required]);
    this.authorControl = new FormControl(book.authorId, []);
    this.publisherControl = new FormControl(book.publisher, [Validators.required]);

    this.form = new FormGroup({
      title: this.titleControl,
      year: this.yearControl,
      author: this.authorControl,
      publisher: this.publisherControl
    });
  }

  onSubmit() {
    this.book.title = this.titleControl.value;
    this.book.year = this.yearControl.value;
    this.book.authorId = this.authorControl.value;

    this.bookService.updateBook(this.book).toPromise()
      .then(() => {
        return this.bookService.getBooks().toPromise();
      }).then(newBooks => {
        this.bookState.setBooksAction(newBooks);
      });
  }

  onCancel() {
    this.book.year = this.yearControl.value;
    this.initializeForm(this.book);
  }
}

