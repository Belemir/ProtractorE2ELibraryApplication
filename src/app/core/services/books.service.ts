import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from '../../shared/book';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

/**
 * CANDIDATE: ADD NEW METHODS IF NEEDED
 */

@Injectable()
export class BookService {
    readonly books = 'books';

    constructor(private httpClient: HttpClient) { }

    getBooks() {
        return this.httpClient.get<Book[]>(`app/${this.books}`);
    }

    getBook(id: number) {
        return this.httpClient.get<Book>(`app/${this.books}/${id}`);
    }

    deleteBook(id: number) {
        return this.httpClient.delete<Book>(`app/${this.books}/${id}`);
    }

    updateBook(book: Book) {
        return this.httpClient.put<Book>(`app/${this.books}`, book, httpOptions);
    }
}
