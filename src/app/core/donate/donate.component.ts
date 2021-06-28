import {Component, OnInit} from '@angular/core';
import {Clipboard} from "@angular/cdk/clipboard";
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.css']
})
export class DonateComponent implements OnInit {

  creditCard = '9224-9598-7885-8255';

  constructor(private clipboard: Clipboard, private _snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
  }

  openSnackBar(message: string) {
    this._snackBar.open(message, '', {
      duration: 3000,
      horizontalPosition: 'end',
    });
  }

  copyToClipboard() {
    this.clipboard.copy(this.creditCard);
    this.openSnackBar('El número de la tarjeta ha sido copiado');
  }

}
