import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Author } from '../shared/author';
import { Book } from '../shared/book';

/**
 * CANDIDATE: DO NOT MODIFY!
 */

@Injectable()
export class LibraryInMemoryDbService implements InMemoryDbService {

  createDb() {
    const authors: Author[] = [
      { id: 1, yearOfBirth: 1969, name: 'James Baldwin' },
      { id: 2, yearOfBirth: 1942, name: 'Katherine Dunn' },
      { id: 3, yearOfBirth: 1913, name: 'Vladimir Nabokov' },
      { id: 4, yearOfBirth: 1955, name: 'David Foster Wallace' },
      { id: 5, yearOfBirth: 1986, name: 'Italo Calvino' },
      { id: 6, yearOfBirth: 1975, name: 'Edward Abbey' },
    ];

    const books: Book[] = [
      { id: 1, year: 1969, title: 'giovanni\'s room', authorId: 1, publisher: 'Ablex Publishing' },
      { id: 2, year: 1913, title: 'desert solitaire', authorId: 2, publisher: 'Berkley Books' },
      { id: 3, year: 1942, title: 'geek love', authorId: 2, publisher: 'Constable & Co Ltd' },
      { id: 4, year: 1955, title: 'lolita', authorId: 3, publisher: 'Crocker & Brewster' },
      { id: 5, year: 2007, title: 'A Good Man Is Hard to Find and Other Stories', authorId: 3, publisher: 'Hay House' },
      { id: 6, year: 2009, title: 'if on a Winter\'s Night a Traveler', authorId: 2, publisher: 'Myriad Editions' },
      { id: 7, year: 2013, title: 'infinite jest', authorId: 1, publisher: 'O\'Reilly Media' }
    ];
    const db = { books, authors };
    return db;
  }
}
