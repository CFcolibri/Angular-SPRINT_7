import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ServeiPanellService } from '../servei-panell.service';

@Component({
  selector: 'app-panell-child',
  templateUrl: './panell-child.component.html',
  styleUrls: ['./panell-child.component.css']
})
export class PanellChildComponent {
  priceForm: FormGroup;

  @Output() priceChanged: EventEmitter<number> = new EventEmitter<number>();

  constructor(
    private formBuilder: FormBuilder,
    private panellService: ServeiPanellService
    ) {
    this.priceForm = this.formBuilder.group({
      pagines: 0,
      idiomes: 0
    });
  }

  calculateTotalPrice() {
    const numPagines = parseInt(this.priceForm.value.pagines) || 0;
    const numIdiomes = parseInt(this.priceForm.value.idiomes) || 0;
    const childPrice = this.panellService.calculateTotalPrice(numPagines, numIdiomes);

    if (this.priceForm.dirty || childPrice > 0) {
      this.priceChanged.emit(childPrice);
    } else {
      this.priceChanged.emit(0);
    }

  }
}
