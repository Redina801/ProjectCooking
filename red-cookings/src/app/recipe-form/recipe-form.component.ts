import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Ingredient } from '../models/ingredient.model';
import { Photo } from '../models/photo.model';
import { RecipeDto } from '../models/recipe-dto.model';
import { Recipe } from '../models/recipe.model';
import { RecipeService } from '../websocket/recipe.service';

@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.css']
})
export class RecipeFormComponent implements OnInit {

  

  
  recipeDto: RecipeDto;
  ID:string;
  recipe:Recipe;
   nestedForm: FormGroup;
   ingredientsList:Ingredient[];
   photosList:Photo[];
   errorMsg:boolean;
   errorS:string;



  file: File;
  addedItem: boolean;
  url: string | ArrayBuffer;
 
 
   constructor(private _fb: FormBuilder,
     private recipeService :RecipeService, 
   //  private toast:ToastrService,
    private router:Router,
   ) { 
     
   }
 
   ngOnInit() {
     this.nestedForm = this._fb.group({
       recId: [null, Validators.required],
       name: ['', Validators.required],
       prepTime: ['', [Validators.required, Validators.minLength(2)]],
       cookTime: ['', Validators.required],
       totalTime: ['', Validators.required],
       calories: ['', Validators.required],
       category: ['', Validators.required],
       ingredients:this._fb.array([this.addIngredientGroup()]),
 
      photos: this._fb.array([this.addPhotoGroup()])
     });
   }
 
   
 
   addIngredientGroup() {
     return this._fb.group({
 
       id: [null, Validators.required],
       name: ['', Validators.required],
       recipeId: [ null, Validators.required],
    
     });
   }
 
   addPhotoGroup() {
     return this._fb.group({
 
       id: [null, Validators.required],
       file: ['', Validators.required],
       recipeId: [null, Validators.required],
    
 
     });
   }
/**  updateFile(event:any) {
      this.file = (event.target as HTMLInputElement).files[0];
       console.log(this.file)
        if(this.file.size>2097152){ 
          alert("File is too big!");
          } 
          else{ var reader=new FileReader();
           reader.readAsDataURL(this.file); 
           reader.onload=(event)=>{ 
             this.url=reader.result;

             alert("Done!")
             
            } 
            this.addedItem=true;
            } 
           }
 */
   

           updateFile(event:any) {
            if (event.target.files && event.target.files[0]) {
              var reader = new FileReader();
          
              reader.onload = (event: ProgressEvent) => {
                this.url = (<FileReader>event.target).result;
              }
          
              reader.readAsDataURL(event.target.files[0]);
            }
          }


           
 
 
   addIngredient() {
     this.ingredientArray.push(this.addIngredientGroup());
   }
   removeIngredient(index) {
     this.ingredientArray.removeAt(index);
   }
   get ingredientArray() {
     return <FormArray>this.nestedForm.get('ingredients');
   }
 

   addPhoto() {
  this.photoArray.push(this.addPhotoGroup());
  }
   
  removePhoto(index) {
    this.photoArray.removeAt(index);
  }

  get photoArray() {
    return <FormArray>this.nestedForm.get('photos');
  }





   get recId() {
     return this.nestedForm.get('recId');
   }

   get name() {
    return this.nestedForm.get('name');
  }
  
   get prepTime() {
     return this.nestedForm.get('prepTime');
   }
   get cookTime() {
     return this.nestedForm.get('cookTime');
   }
   get totalTime() {
     return this.nestedForm.get('totalTime');
   }
   get calories() {
     return this.nestedForm.get('calories');
   }
   get category() {
     return this.nestedForm.get('category');
   }

   nrGenerator(){
     return '_' + Math.random().toString(36).substr(2, 9);
     }
  



     submitHandler(){
     //  console.log(this.nestedForm.value);

      this.ID=this.nrGenerator()
this.recipeDto=this.nestedForm.value;
console.log(this.nestedForm.value);
this.recipeService.addRecipe(this.recipeDto);      
console.log(this.recipeDto);
 this.nestedForm.reset();
     }
}
