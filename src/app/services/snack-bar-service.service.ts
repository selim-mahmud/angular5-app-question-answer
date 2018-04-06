import {Injectable} from '@angular/core';
import {MatSnackBar} from "@angular/material";

@Injectable()
export class SnackBarServiceService {

    constructor(
        private matSnackBar: MatSnackBar
    ) {
    }

    openSnackBar(message: string, action: string) {
        this.matSnackBar.open(message, action, {
            duration: 3000,
        });
    }

}
