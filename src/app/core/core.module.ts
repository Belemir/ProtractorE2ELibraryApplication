import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthorsService } from './services/authors.service';
import { BookService } from './services/books.service';

@NgModule({
    imports: [CommonModule, HttpClientModule, FormsModule, RouterModule],
    exports: [],
    declarations: [],
    providers: [BookService, AuthorsService],
})
export class CoreModule { }
