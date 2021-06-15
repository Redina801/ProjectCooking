package com.project.cooking.Repos;

import com.project.cooking.Models.Recipe;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface RecipeRepository extends MongoRepository<Recipe,String> {

}
