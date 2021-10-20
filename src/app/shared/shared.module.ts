import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HighlightDirective} from "./highlight.directive";
import {FormsModule} from "@angular/forms";

@NgModule({
    declarations: [
        HighlightDirective
    ],
    imports: [
        CommonModule,
        FormsModule
    ],
    exports: [
        CommonModule,
        FormsModule,
        HighlightDirective
    ]
})
export class SharedModule {
}
