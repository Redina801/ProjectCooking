package com.project.cooking.Repos;

import com.project.cooking.Models.Category;
import com.project.cooking.Models.Ingredients;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface CategoryRepository extends MongoRepository<Category,String>{
}
