package com.project.cooking.Repos;

import com.project.cooking.Models.Ingredients;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface IngredientsRepository extends MongoRepository<Ingredients,String> {

}
