package com.project.cooking.Models;

import org.bson.types.Binary;
import org.springframework.data.annotation.Id;
import org.springframework.web.multipart.MultipartFile;

public class Photos {
    @Id
    private String id;
    private String file;
    private String recipe;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getFile() {
        return file;
    }

    public void setFile(String file) {
        this.file = file;
    }



    public String getRecipe() {
        return recipe;
    }

    public void setRecipe(String recipe) {
        this.recipe = recipe;
    }
}
