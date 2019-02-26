import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { CardModule } from 'primeng/card';
import { TreeModule } from 'primeng/tree';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { TreeDragDropService } from 'primeng/components/common/treedragdropservice';
import { EditorModule } from 'primeng/editor';

@NgModule({
    declarations: [],
    imports: [
        ButtonModule,
        InputTextModule,
        PasswordModule,
        CardModule,
        TreeModule,
        ProgressSpinnerModule,
        EditorModule,
    ],
    exports: [
        ButtonModule,
        InputTextModule,
        PasswordModule,
        CardModule,
        TreeModule,
        ProgressSpinnerModule,
        EditorModule,
    ],
    providers: [TreeDragDropService],
})
export class PrimeNgModule {}
