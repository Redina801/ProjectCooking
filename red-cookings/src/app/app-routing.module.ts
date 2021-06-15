import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CookingHomeComponent } from './cooking-home/cooking-home.component';
import { RecipeFormComponent } from './recipe-form/recipe-form.component';



const routes: Routes = [
  {path:'', component: RecipeFormComponent},
  {path:'home', component: CookingHomeComponent},
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
