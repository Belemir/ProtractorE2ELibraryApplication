import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from '../shared/modules/components/components.module';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BooksComponent } from './books.component';
import { routing } from './books.routing';
import { BooksStateService } from './books.state.service';

@NgModule({
  imports: [
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatListModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatInputModule,
    MatIconModule,
    RouterModule,
    CommonModule,
    ComponentsModule,
    routing
  ],
  declarations: [BooksComponent, BookDetailsComponent],
  providers: [BooksStateService]
})
export class BooksModule { }
