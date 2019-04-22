import { Component, OnInit } from '@angular/core';
import { IBook } from 'src/app/models/book.model';
import { BookService } from 'src/app/services/book.service';
import { MatDialog } from '@angular/material';
import { AddBookDialog } from './add-book-dialog/add-book-dialog.component';
import { ConfirmDeleteBookDialog } from './delete-book-dialog/delete-book-dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  
  displayedColumns: string[] = ['ID', 'CopyNumber', 'Title', 'Actions'];
  dataSource : IBook[];
  
  constructor(
    private bookService : BookService,
    private dialog: MatDialog
    ) { }

  ngOnInit() {
    this.bookService.getBooks().subscribe((data) => {
      this.dataSource = data.sort((a , b) => (a.title.toLowerCase() < b.title.toLowerCase()) ? -1 : 1);  
    });
  }

  showAddBookDialog(book?) : void {
    let bookData = {};
    if(book) {
      bookData = Object.assign({}, book);
    }
    this.dialog.open(AddBookDialog, {
      width: '40%',
      data: bookData
    }).beforeClose().subscribe(result => {
      if(result != null && result != '') {
        if (result.id) {
          this.bookService.updateBook(result).subscribe( _ => {
            this.ngOnInit();
          });  
        }
        else {
          this.bookService.postBook(result).subscribe( _ => {
            this.ngOnInit();
          });
        }
      }  
    });
  }

  showConfirmDeleteBookDialog(book) : void {
    this.dialog.open(ConfirmDeleteBookDialog, {
      width: '40%',
      data: book
    }).beforeClose().subscribe(result => {
      console.log()
      if(result != null && result != '') {
        this.bookService.deleteBook(result.id).subscribe( _ => {
          this.ngOnInit();
        });  
      }
    });
  }
}
