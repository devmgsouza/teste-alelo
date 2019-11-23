import { ItemsComponent } from './components/items/items.component';
import { ListsComponent } from './components/lists/lists.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
 // {path: '', pathMatch: 'full', component: HomeComponent },

  { path: '', pathMatch: 'full', component: HomeComponent,
    children: [
      //Categories
      { path: 'categories', component: CategoriesComponent},
     // { path: 'categories/register/:action/:id', component: ViewsRegisterComponent, data: {extraParameter: '15'} },
      //Lists
      { path: 'lists', component: ListsComponent},
     // { path: 'lists/register/:action/:id', component: UserRegisterComponent, data: {extraParameter: '4'} },
      //Items
      { path: 'items', component: ItemsComponent },
     // { path: 'items/register/:action/:id', component: UserRegisterComponent, data: {extraParameter: '4'} },
    ]
},
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
