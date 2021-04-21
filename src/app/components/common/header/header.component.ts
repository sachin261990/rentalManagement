import { Component, OnInit } from '@angular/core';
import {RenterServiceService} from '../../common/service/renter-service.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  catalogData: any = [];

  constructor(private rentalService: RenterServiceService, private router: Router) {
   }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.rentalService.getCatalogData()
      .subscribe(res => this.catalogData = res);
  }

  selectMenuItem(menuId, branchId){
    this.router.navigate(['/category', menuId, branchId]);
  }

}
