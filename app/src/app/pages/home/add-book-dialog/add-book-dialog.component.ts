import { Component, OnInit, Inject, Optional } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material';
import { BookService } from 'src/app/services/book.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
    selector: 'add-book-dialog',
    templateUrl: 'add-book-dialog.component.html',
    styleUrls: ['add-book-dialog.component.css']
  })

  export class AddBookDialog {
    
    constructor(
      public dialogRef: MatDialogRef<AddBookDialog>,
      @Optional() @Inject(MAT_DIALOG_DATA) public data: any,
      private bookService : BookService
    ) {}
  
    registerFormControl = new FormGroup({
        copyNumber: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.maxLength(9)]),
        title : new FormControl('', [Validators.required])
    })
    
  }
  