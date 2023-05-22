import { Injectable, Input } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServeiPanellService {
  constructor() { }

  calculateTotalPrice(numPagines: number, numIdiomes: number): number {
    const paginesPrice = numPagines * 30;
    const idiomesPrice = numIdiomes * 30;

    return paginesPrice + idiomesPrice;
  }


}





