import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeNgModule } from './prime-ng/prime-ng.module';
import { ReactiveFormsModule } from '@angular/forms';
import { TreeDragDropService } from 'primeng/components/common/treedragdropservice';

@NgModule({
    declarations: [],
    imports: [CommonModule, PrimeNgModule, ReactiveFormsModule],
    exports: [PrimeNgModule],
    providers: [TreeDragDropService],
})
export class SharedModule {}
