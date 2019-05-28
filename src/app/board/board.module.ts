import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemoryCardComponent } from './memory-card/memory-card.component';

@NgModule({
  declarations: [MemoryCardComponent],
  exports: [
    MemoryCardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class BoardModule { }
