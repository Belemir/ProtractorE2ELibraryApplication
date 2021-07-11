import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'books' },
    {
        path: '',
        children: [{
            path: 'books', loadChildren: () => import('../app/books/books.module').then(m => m.BooksModule),
            canActivate: []
        }]
    }
];
export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders<RouterModule> = RouterModule.forRoot(routes, { useHash: true, relativeLinkResolution: 'legacy' });
