import {NgModule} from "@angular/core";
import {
    MatButtonModule, MatIconModule, MatInputModule, MatListModule, MatProgressSpinnerModule, MatSelectModule,
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
    ]
})

export class MaterialModule{}