import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { RenterServiceService } from '../../common/service/renter-service.service';

@Component({
  selector: 'app-categoty-details',
  templateUrl: './categoty-details.component.html',
  styleUrls: ['./categoty-details.component.css']
})
export class CategotyDetailsComponent implements OnInit {
  subCategoriesData: any = [];

  constructor(private location: Location,private rentalService: RenterServiceService) { }

  ngOnInit(): void {
    this.getsubData();
  }

  goBack(): void {
    this.location.back();
  }

  getsubData(){
   this.subCategoriesData = this.rentalService.get();
   console.log('this.subCategoriesData'+ this.subCategoriesData);
  }

}
