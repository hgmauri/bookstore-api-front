import { Component, OnInit, Inject, Optional } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material';
import { BookService } from 'src/app/services/book.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
    selector: 'delete-book-dialog',
    templateUrl: 'delete-book-dialog.component.html',
    styleUrls: ['delete-book-dialog.component.css']
  })

export class ConfirmDeleteBookDialog {    
    constructor(
      public dialogRef: MatDialogRef<ConfirmDeleteBookDialog>,
      @Optional() @Inject(MAT_DIALOG_DATA) public data: any
    ) {}
}