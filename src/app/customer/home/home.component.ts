import { Component, OnInit } from '@angular/core';
import { Menu } from 'src/app/models/menu';
import { MenuService } from 'src/app/service/menu.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  error!: any;
  menus: Menu[] = [];
  constructor(private menuService: MenuService) {
    this.menuService.getRequest(false, null).subscribe({
      next: (data: Menu[]) => this.menus = data,
      error: (error) => this.error = error
    });
  }

  ngOnInit(): void {
  }

}
