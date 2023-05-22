// import { Component } from '@angular/core';
// import { FormBuilder, FormGroup } from '@angular/forms';


// @Component({
//   selector: 'app-home',
//   templateUrl: './home.component.html',
//   styleUrls: ['./home.component.css']
// })
// export class HomeComponent {
//   price: FormGroup;
//   totalPrice: number = 0;

//   constructor(private formBuilder: FormBuilder) {

//     this.price = this.formBuilder.group({
//       web: false,
//       consoltoria: false,
//       campanya: false
//     });
//   }

//   calculateTotalPrice() {
//     this.totalPrice = 0;

//     if (this.price.get('web')?.value) {
//       this.totalPrice += 500;
//     }

//     if (this.price.get('consoltoria')?.value) {
//       this.totalPrice += 300;
//     }

//     if (this.price.get('campanya')?.value) {
//       this.totalPrice += 200;
//     }

//   }

//   onCheckboxChange() {
//     this.calculateTotalPrice();

//   }
// }

// import { Component } from '@angular/core';
// import { FormBuilder, FormGroup } from '@angular/forms';


// @Component({
//   selector: 'app-home',
//   templateUrl: './home.component.html',
//   styleUrls: ['./home.component.css']
// })
// export class HomeComponent {
//   price: FormGroup;
//   totalPrice: number = 0;

//   constructor(private formBuilder: FormBuilder) {

//     this.price = this.formBuilder.group({
//       web: false,
//       consoltoria: false,
//       campanya: false

//     });
//   }

//   calculateTotalPrice() {
//     this.totalPrice = 0;

//     if (this.price.get('web')?.value) {
//       this.totalPrice += 500;
//     }

//     if (this.price.get('consoltoria')?.value) {
//       this.totalPrice += 300;
//     }

//     if (this.price.get('campanya')?.value) {
//       this.totalPrice += 200;
//     }

//   }

//   onCheckboxChange() {
//     this.calculateTotalPrice();

//   }

// }


// WORKS!!!!!!!!!!!!
// import { Component } from '@angular/core';
// import { FormBuilder, FormGroup } from '@angular/forms';

// @Component({
//   selector: 'app-home',
//   templateUrl: './home.component.html',
//   styleUrls: ['./home.component.css']
// })
// export class HomeComponent {
//   price: FormGroup;
//   totalPrice: number = 0;

//   constructor(private formBuilder: FormBuilder) {
//     this.price = this.formBuilder.group({
//       web: false,
//       consoltoria: false,
//       campanya: false
//     });
//   }

//   calculateTotalPrice(childPrice: number = 0) {
//     this.totalPrice = 0;

//     if (this.price.get('web')?.value) {
//       this.totalPrice += 500;
//     }

//     if (this.price.get('consoltoria')?.value) {
//       this.totalPrice += 300;
//     }

//     if (this.price.get('campanya')?.value) {
//       this.totalPrice += 200;
//     }

//     this.totalPrice += childPrice;


//   }
// }

import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  price: FormGroup;
  totalPrice: number = 0;
  childPrice: number = 0;

  constructor(
    private formBuilder: FormBuilder) {
    this.price = this.formBuilder.group({
      web: false,
      consoltoria: false,
      campanya: false
    });

  }

  calculateTotalPrice() {
    this.totalPrice = 0;

    if (this.price.get('web')?.value) {
      this.totalPrice += 500;
    }

    if (this.price.get('consoltoria')?.value) {
      this.totalPrice += 300;
    }

    if (this.price.get('campanya')?.value) {
      this.totalPrice += 200;
    }

    this.totalPrice += this.childPrice;

  }

  onChildPriceChanged(childPrice: number) {
    this.childPrice = childPrice;
    this.calculateTotalPrice();
  }

}


