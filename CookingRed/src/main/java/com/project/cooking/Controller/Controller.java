package com.project.cooking.Controller;

import com.project.cooking.Dto.RecipeDto;
import com.project.cooking.Models.Recipe;
import com.project.cooking.Services.RecipeService;
import lombok.AllArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.messaging.handler.annotation.DestinationVariable;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.annotation.SubscribeMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping
@AllArgsConstructor
public class Controller {
    @Autowired
    private RecipeService service;

    private final Logger logger = LoggerFactory.getLogger(getClass());


    @SubscribeMapping("/post/all")
    public List<Recipe> getAll(){
        return service.getAll();
    }

    @SubscribeMapping("/getOne/{recId}")
    public ResponseEntity<Recipe> getOne(@DestinationVariable("recId")String id){

        return service.getOne(id);
    }



    @MessageMapping("/add/recipes/")
    @SendTo("/topic/post/all")
    public List<Recipe>addRecipe(@RequestBody RecipeDto recipe){
        return service.convertRecipeDtoToRecipe(recipe);
    }





}

