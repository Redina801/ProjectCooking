import { Ingredient } from "./ingredient.model";
import { Photo } from "./photo.model";

export class RecipeDto {

    recId:string;
    name:string;
    prepTime:string;
    cookTime:string;
    totalTime:string;
    calories:string;
    category:string;
    ingredients:Ingredient[];
    photos:Photo[];


}

