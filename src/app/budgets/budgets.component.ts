
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-budgets',
  templateUrl: './budgets.component.html',
  styleUrls: ['./budgets.component.css']
})
export class BudgetsComponent {
  @Input() totalPrice: number | null = null;
  @Output() clientAdded: EventEmitter<void> = new EventEmitter<void>();
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

      // Emit event to indicate client addition
      this.clientAdded.emit();

      // Reset inputs to empty
      this.clientName = '';
      this.clientId = null;
      this.totalPrice = null;
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
