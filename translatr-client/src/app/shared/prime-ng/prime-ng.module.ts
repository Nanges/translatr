import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { CardModule } from 'primeng/card';
import { EditorModule } from 'primeng/editor';
import { TreeModule } from 'primeng/tree';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ProgressBarModule } from 'primeng/progressbar';
import { DialogModule } from 'primeng/dialog';

@NgModule({
    declarations: [],
    imports: [
        ButtonModule,
        InputTextModule,
        PasswordModule,
        CardModule,
        EditorModule,
        TreeModule,
        ProgressSpinnerModule,
        ProgressBarModule,
        DialogModule,
    ],
    exports: [
        ButtonModule,
        InputTextModule,
        PasswordModule,
        CardModule,
        EditorModule,
        TreeModule,
        ProgressSpinnerModule,
        ProgressBarModule,
        DialogModule,
    ],
})
export class PrimeNgModule {}
