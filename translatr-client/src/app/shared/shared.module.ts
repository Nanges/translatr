import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditorModule } from '@tinymce/tinymce-angular';
import { PrimeNgModule } from './prime-ng/prime-ng.module';

@NgModule({
    declarations: [],
    imports: [CommonModule, PrimeNgModule, EditorModule],
    exports: [PrimeNgModule, EditorModule],
})
export class SharedModule {}
