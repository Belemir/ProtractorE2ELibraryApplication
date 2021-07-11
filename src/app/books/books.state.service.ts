import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Book } from '../../app/shared/book';

@Injectable()
export class BooksStateService {
    private booksSubject = new BehaviorSubject<Book[]>([]);
    booksObservable = this.booksSubject.asObservable();

    constructor() { }

    setBooksAction(books: Book[]) {
        this.booksSubject.next(books);
    }
}
