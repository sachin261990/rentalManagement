import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryComponent } from './components/category/category.component';
import { CategotyDetailsComponent } from './components/category/categoryDetails/categoty-details.component';
import { HomePageComponent } from './components/Home/home-page.component';

const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'category/:delearId/:branchId', component: CategoryComponent },
  { path: 'subcategory', component: CategotyDetailsComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
