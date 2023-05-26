import { Injectable, Input } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServeiPanellService {
  private totalPrice: number = 0;
  private totalPriceSubject: Subject<number> = new Subject<number>();
  constructor() { }

  calculateTotalPrice(numPagines: number, numIdiomes: number): number {
    const paginesPrice = numPagines * 30;
    const idiomesPrice = numIdiomes * 30;

    this.totalPrice = paginesPrice + idiomesPrice;
    this.totalPriceSubject.next(this.totalPrice); // Emit the updated total price

    return this.totalPrice;
  }
  getTotalPriceObservable() {
    return this.totalPriceSubject.asObservable();
  }
}





