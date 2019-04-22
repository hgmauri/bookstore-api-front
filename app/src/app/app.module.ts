import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule, 
      MatTableModule, 
      MatIconModule, 
      MatTooltipModule, 
      MatGridListModule, 
      MatDialogModule,
      MatInputModule,
      MatButtonModule } from '@angular/material';
import { HomeComponent } from './pages/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { AddBookDialog } from './pages/home/add-book-dialog/add-book-dialog.component';
import { BookService } from './services/book.service';
import { ConfirmDeleteBookDialog } from './pages/home/delete-book-dialog/delete-book-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddBookDialog,
    ConfirmDeleteBookDialog
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatTableModule,
    MatIconModule,
    MatTooltipModule,
    HttpClientModule,
    MatGridListModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule
  ],
  entryComponents: [
    AddBookDialog,
    ConfirmDeleteBookDialog
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
