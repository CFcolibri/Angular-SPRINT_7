// import { ServeiPanellService } from './../servei-panell.service';
// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-panell-child',
//   templateUrl: './panell-child.component.html',
//   styleUrls: ['./panell-child.component.css']
// })
// export class PanellChildComponent {
//   isChecked: boolean = false;
//   pagines: number= 0 ;
//   idiomes: number = 0;
// }

// import { Component, Input } from '@angular/core';
// import { FormGroup } from '@angular/forms';
// // import { ServeiPanellService } from '../servei-panell.service';

// @Component({
//   selector: 'app-panell-child',
//   templateUrl: './panell-child.component.html',
//   styleUrls: ['./panell-child.component.css']
// })
// export class PanellChildComponent {
//   @Input()
//   priceForm!: FormGroup;
//   pagines: number = 0;
//   idiomes: number = 0;


//   calculateTotalPrice() {
//     const webSelected = this.priceForm.get('web')?.value;

//     if (webSelected) {
//       const numPagines = parseInt(this.pagines.toString()) || 0;
//       const numIdiomes = parseInt(this.idiomes.toString()) || 0;
//       const paginesPrice = numPagines * 30;
//       const idiomesPrice = numIdiomes * 30;
//       const totalPrice = 500 + paginesPrice + idiomesPrice;
//       this.priceForm.patchValue({
//         totalPrice: totalPrice
//       });
//     }
//   }
// }

//  WORKS!!!!!!!!!!!!!!!!!!!
// import { Component, EventEmitter, Output } from '@angular/core';
// import { FormBuilder, FormGroup } from '@angular/forms';

// @Component({
//   selector: 'app-panell-child',
//   templateUrl: './panell-child.component.html',
//   styleUrls: ['./panell-child.component.css']
// })
// export class PanellChildComponent {
//   priceForm: FormGroup;

//   @Output() priceChanged: EventEmitter<number> = new EventEmitter<number>();

//   constructor(private formBuilder: FormBuilder) {
//     this.priceForm = this.formBuilder.group({
//       pagines: 0,
//       idiomes: 0
//     });


//     this.priceForm.valueChanges.subscribe(() => {
//       this.calculateTotalPrice();
//     });
//   }

//   calculateTotalPrice() {
//     const numPagines = parseInt(this.priceForm.value.pagines) || 0;
//     const numIdiomes = parseInt(this.priceForm.value.idiomes) || 0;
//     const paginesPrice = numPagines * 30;
//     const idiomesPrice = numIdiomes * 30;
//     const totalPrice = paginesPrice + idiomesPrice;

//     this.priceChanged.emit(totalPrice);
//   }
// }


import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-panell-child',
  templateUrl: './panell-child.component.html',
  styleUrls: ['./panell-child.component.css']
})
export class PanellChildComponent {
  priceForm: FormGroup;

  @Output() priceChanged: EventEmitter<number> = new EventEmitter<number>();

  constructor(private formBuilder: FormBuilder) {
    this.priceForm = this.formBuilder.group({
      pagines: 0,
      idiomes: 0
    });

    this.priceForm.valueChanges.subscribe(() => {
      this.calculateTotalPrice();
    });
  }


  calculateTotalPrice() {
    const numPagines = parseInt(this.priceForm.value.pagines) || 0;
    const numIdiomes = parseInt(this.priceForm.value.idiomes) || 0;
    const paginesPrice = numPagines * 30;
    const idiomesPrice = numIdiomes * 30;

    const totalPrice = paginesPrice + idiomesPrice;

    if (this.priceForm.dirty || totalPrice > 0) {
      this.priceChanged.emit(totalPrice);
    } else {
      this.priceChanged.emit(0);
    }

  }
}
