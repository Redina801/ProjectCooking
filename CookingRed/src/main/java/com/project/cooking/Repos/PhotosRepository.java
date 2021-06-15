package com.project.cooking.Repos;

import com.project.cooking.Models.Photos;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface PhotosRepository extends MongoRepository<Photos,String> {

}
