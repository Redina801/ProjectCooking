import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RecipeDto } from '../models/recipe-dto.model';
import { Recipe } from '../models/recipe.model';
import { SocketClientService } from './socket-client.service';

const url='http://localhost:8098/home/'

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  

  constructor(private http:HttpClient,
    private socketClient: SocketClientService) { 

  }

  //

  addRecipe(recipe:RecipeDto){
    this.socketClient.send('/topic/add/recipes/', recipe)
   }


   getRecipes():Observable<Recipe[]>{
    return this.socketClient
        .onMessage('/topic/post/all')
  }







}
