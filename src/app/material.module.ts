import {NgModule} from "@angular/core";
import {MatButtonModule, MatIconModule, MatListModule, MatToolbarModule} from "@angular/material";
import {MatSidenavModule} from '@angular/material/sidenav';

@NgModule({
    imports: [
        MatButtonModule,
        MatSidenavModule,
        MatToolbarModule,
        MatIconModule,
        MatListModule,
    ],
    exports: [
        MatButtonModule,
        MatSidenavModule,
        MatToolbarModule,
        MatIconModule,
        MatListModule,
    ]
})

export class MaterialModule{}