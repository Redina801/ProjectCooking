import { Category } from "./category.model";
import { Ingredient } from "./ingredient.model";
import { Photo } from "./photo.model";

export class Recipe {

     recId:string;
     name:string;
     prepTime:string;
     cookTime:string;
     totalTime:string;
     calories:string;
     category:Category;
     ingredients:Ingredient[];
      photos:Photo[];




}
