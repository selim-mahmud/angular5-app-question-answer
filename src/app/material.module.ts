import {NgModule} from "@angular/core";
import {
    MatButtonModule, MatChipsModule, MatGridListModule, MatIconModule, MatInputModule, MatListModule,
    MatProgressSpinnerModule,
    MatSelectModule,
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
    ]
})

export class MaterialModule{}