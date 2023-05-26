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
  clients: { name: string, id: number, totalPrice: number, date:Date }[] = [];
  originalClients: { name: string, id: number, totalPrice: number, date: Date }[] = [];
  searchName: string = '';

  addClient() {
    if (this.clientName && this.clientId !== null && this.totalPrice !== null) {
      const currentDate = new Date();
      this.clients.push({ name: this.clientName, id: this.clientId, totalPrice: this.totalPrice, date:currentDate });
      this.originalClients = [...this.clients];
    }
  }

  sortClients() {
    this.clients.sort((a, b) => a.name.localeCompare(b.name));
  }

  sortByDate() {
    this.clients.sort((a, b) => a.date.getTime() - b.date.getTime());
  }

  resetSorting() {
    this.clients = [...this.originalClients];
  }

  filterClientsByName() {
    if (this.searchName.trim() === '') {
      this.clients = [...this.originalClients];
    } else {
      this.clients = this.originalClients.filter(client =>
        client.name.toLowerCase().includes(this.searchName.toLowerCase())
      );
    }
  }

  deleteClient(client: { name: string, id: number, totalPrice: number, date: Date }) {
    const index = this.clients.indexOf(client);
    if (index > -1) {
      this.clients.splice(index, 1);
    }
  }
}
