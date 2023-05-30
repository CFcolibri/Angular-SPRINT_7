
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  price: FormGroup;
  childPrice: number = 0;
  totalPrice: number = 0;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder) {
    this.price = this.formBuilder.group({
      web: false,
      consoltoria: false,
      campanya: false
    });

  }


  ngOnInit() {
    this.calculateTotalPrice();
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

  redirectToWelcome() {
    this.router.navigateByUrl('/');
  }

  resetForm() {
    this.price.reset();
    this.childPrice = 0;
    this.totalPrice = 0;
  }

    // Event handler for client addition
    handleClientAdded() {
      this.resetForm();
    }
}


