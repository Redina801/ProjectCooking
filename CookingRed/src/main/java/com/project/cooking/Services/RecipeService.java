package com.project.cooking.Services;


import com.project.cooking.Dto.RecipeDto;
import com.project.cooking.Models.Category;
import com.project.cooking.Models.Ingredients;
import com.project.cooking.Models.Photos;
import com.project.cooking.Models.Recipe;
import com.project.cooking.Repos.CategoryRepository;
import com.project.cooking.Repos.IngredientsRepository;
import com.project.cooking.Repos.PhotosRepository;
import com.project.cooking.Repos.RecipeRepository;
import org.bson.BsonBinarySubType;
import org.bson.types.Binary;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class RecipeService {

   @Autowired
   private IngredientsRepository ingredientsRepository;

   @Autowired
    private PhotosRepository photosRepository;

   @Autowired
    private RecipeRepository repository;

   @Autowired
   private CategoryRepository categoryRepository;


   public ResponseEntity<Recipe> getOne(String recId){
        Optional<Recipe> recipe=repository.findById(recId);
        if (recipe.isPresent()){
            return new ResponseEntity<>(recipe.get(), HttpStatus.OK) ;
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND) ;
    }


    public void addIngredients (Ingredients ingredients) {

       ingredientsRepository.save(ingredients);
    }


    public Recipe addRecipe(Recipe recipe) {

       return  repository.save(recipe);
   }

   public void addPhoto(Photos photos){

       photosRepository.save(photos);
   }

    public void addCategory(Category category) {
        categoryRepository.save(category);
    }


    public Photos getPhoto(String id) {

       return photosRepository.findById(id).get();
    }


    public List<Recipe> getAll() {
        List<Recipe> listRecipe=repository.findAll();
        return listRecipe;
    }




    public List<Recipe>  convertRecipeDtoToRecipe(RecipeDto recipe){
        Recipe recipe1 = new Recipe();
        recipe1.setRecId(recipe.getRecId());
        recipe1.setName(recipe.getName());
        recipe1.setPrepTime(recipe.getPrepTime());
        recipe1.setCookTime(recipe.getCookTime());
        recipe1.setTotalTime(recipe.getTotalTime());
        recipe1.setCalories(recipe.getCalories());




        Category category=new Category();
        category.setName(recipe.getCategory());
        List<String> list=new ArrayList<>();
        list.add(recipe1.getRecId());
        category.setRecipe(list);
        addCategory(category);
        recipe1.setCategory(category);



        List<Photos> photosList=new ArrayList<>();
        System.out.println(recipe.getPhotos());
        recipe.getPhotos().forEach(photos -> {
            Photos photo=new Photos();
            photo.setFile(photos.getFile());
            photo.setRecipe(recipe1.getRecId());
            addPhoto(photo);
            photosList.add(photo);
        });

        List<Ingredients> ingredientsList=new ArrayList<>();
        System.out.println(recipe.getIngredients());
        recipe.getIngredients().forEach(ingredients -> {
            Ingredients ingr=new Ingredients();
            ingr.setName(ingredients.getName());
            ingr.setRecipe(recipe1.getRecId());
            addIngredients(ingr);
            ingredientsList.add(ingr);
        });



        recipe1.setIngredients(ingredientsList);
        recipe1.setPhotos(photosList);
        addRecipe(recipe1);
        return getAll();
    }




}
