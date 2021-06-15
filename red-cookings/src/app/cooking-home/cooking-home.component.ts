import { Component, OnInit } from '@angular/core';
import { Recipe } from '../models/recipe.model';
import { RecipeService } from '../websocket/recipe.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-cooking-home',
  templateUrl: './cooking-home.component.html',
  styleUrls: ['./cooking-home.component.css']
})
export class CookingHomeComponent implements OnInit {
  recipes: Recipe[];
  recipe: Recipe[];
  url: any;




  constructor(private service: RecipeService,private sanitizer: DomSanitizer) {

  }



  ngOnInit(): void {

    this.service.getRecipes().subscribe(recipes => {
      this.recipes = recipes
    });



  }
  sanitizeImageUrl(imageUrl: string): SafeUrl {
    return this.sanitizer.bypassSecurityTrustUrl(imageUrl);
}

  display() {
    console.log("-----",this.recipes);

  }




}