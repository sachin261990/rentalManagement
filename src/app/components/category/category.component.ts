import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { RenterServiceService } from '../common/service/renter-service.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categoriesData: any = [];

  constructor(private route: ActivatedRoute,private router: Router,
    private location: Location,private rentalService: RenterServiceService) { }
  delearName: string;
  branchName: string;

  previousUrl: string = null;
    currentUrl: string = null;
  ngOnInit(): void {
    this.route.params.subscribe((urlParams) => {
      this.delearName= urlParams['delearId'];
      this.branchName=urlParams['branchId'];
      this.getDataById(this.delearName);

    });
    if(this.delearName && this.branchName){
      this.getDataById(this.delearName)
    }
  }
  
  getDataById(id) {
    this.rentalService.getdataById(id)
      .subscribe(res => {
        let data = res['branches'];
        if(data){
          data.forEach(element => {
            if(element.branch_id ===this.branchName){
              this.categoriesData = element['categories'];
            }
            
          });
        }
      });
  }

  selectCategories(data){
    this.rentalService.set(data);
    this.router.navigate(['/subcategory']);
  }
  
  goBack(): void {
    this.router.navigate(['/home']);
  }
}
