import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/models/order';
import { OrderService } from 'src/app/service/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  orders: Order[] = [];

  constructor(private orderService: OrderService) {
    this.orderService.getRequest(false).subscribe({
      next: (resp) => this.orders = resp,
      error: (error) => console.error(error)
    });
  }

  ngOnInit(): void { }

}
