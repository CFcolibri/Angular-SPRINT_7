import { Component } from '@angular/core';

@Component({
  selector: 'app-budgets',
  templateUrl: './budgets.component.html',
  styleUrls: ['./budgets.component.css']
})
export class BudgetsComponent {
    clientName!: string;
    clientId: number | null = null;
    clients: { name: string, id: number }[] = [];



  addClient() {
    if (this.clientName && this.clientId !== null) {
      this.clients.push({ name: this.clientName, id: this.clientId });
      this.clientName = '';
      this.clientId = null;
    }
  }
}

// import { Component } from '@angular/core';
// import { ServeiPanellService } from '../servei-panell.service';

// @Component({
//   selector: 'app-budgets',
//   templateUrl: './budgets.component.html',
//   styleUrls: ['./budgets.component.css']
// })
// export class BudgetsComponent {
//   clientName!: string;
//   clientId!: number;
//   clients: { name: string, id: number }[] = [];

//   constructor(private serveiPanellService: ServeiPanellService) {}

//   addClient() {
//     if (this.clientName && this.clientId) {
//       this.clients.push({ name: this.clientName, id: this.clientId });
//       this.clientName = '';
//       this.clientId = 0;
//       this.calculateTotalPrice();
//     }
//   }

//   calculateTotalPrice(): void {
//     this.serveiPanellService.calculateTotalPrice(this.clients);
//   }

//   getTotalPrice(): number {
//     return this.serveiPanellService.getTotalPrice();
//   }
// }

