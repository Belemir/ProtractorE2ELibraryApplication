import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BooksComponent } from './books.component';

export const routes: Routes = [
    {
        path: '',
        component: BooksComponent,
        children: [
            { path: '', pathMatch: 'full', component: BookDetailsComponent },
            { path: ':bookId', component: BookDetailsComponent }
        ],
    },

];
export const routing: ModuleWithProviders<RouterModule> = RouterModule.forChild(routes);
