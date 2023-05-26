// import { Component } from '@angular/core';
// import { ServeiPanellService } from '../servei-panell.service';

// @Component({
//   selector: 'app-budgets',
//   templateUrl: './budgets.component.html',
//   styleUrls: ['./budgets.component.css']
// })
// export class BudgetsComponent {
//     clientName!: string;
//     clientId: number | null = null;
//     clients: { name: string, id: number, totalPrice: number }[] = [];

//   constructor(
//     private panellService: ServeiPanellService
//    ){}


//    addClient() {
//     if (this.clientName && this.clientId !== null) {
//       const totalPrice = this.panellService.calculateTotalPrice(0, 0); // Modify the parameters as per your requirements
//       this.clients.push({ name: this.clientName, id: this.clientId, totalPrice: totalPrice });
//     }
//   }


// }

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-budgets',
  templateUrl: './budgets.component.html',
  styleUrls: ['./budgets.component.css']
})
export class BudgetsComponent {
  @Input() totalPrice: number | null = null;
  clientName: string = '';
  clientId: number | null = null;
  clients: { name: string, id: number, totalPrice: number }[] = [];

  addClient() {
    if (this.clientName && this.clientId !== null && this.totalPrice !== null) {
      this.clients.push({ name: this.clientName, id: this.clientId, totalPrice: this.totalPrice });
    }
  }

  sortClients() {
    this.clients.sort((a, b) => a.name.localeCompare(b.name));
  }

}
