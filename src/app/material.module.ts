import {NgModule} from "@angular/core";
import {
    MatButtonModule, MatChipsModule, MatGridListModule, MatIconModule, MatInputModule, MatListModule,
    MatProgressSpinnerModule,
    MatSelectModule, MatSnackBarModule,
    MatTabsModule,
    MatToolbarModule
} from "@angular/material";
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
    imports: [
        MatButtonModule,
        MatSidenavModule,
        MatToolbarModule,
        MatIconModule,
        MatListModule,
        MatInputModule,
        MatFormFieldModule,
        MatSelectModule,
        MatTabsModule,
        MatProgressSpinnerModule,
        MatChipsModule,
        MatGridListModule,
        MatSnackBarModule,
    ],
    exports: [
        MatButtonModule,
        MatSidenavModule,
        MatToolbarModule,
        MatIconModule,
        MatListModule,
        MatInputModule,
        MatFormFieldModule,
        MatSelectModule,
        MatTabsModule,
        MatProgressSpinnerModule,
        MatChipsModule,
        MatGridListModule,
        MatSnackBarModule,
    ]
})

export class MaterialModule{}