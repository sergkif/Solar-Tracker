package com.sergkif.solartracker.controller;

import com.sergkif.solartracker.domain.Article;
import com.sergkif.solartracker.repo.ArticleRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("article")
public class ArticlesController {
    @Autowired
    private ArticleRepo articlesRepo;

    @GetMapping
    public List<Article> findAll(){
        return articlesRepo.findAll();
    }

    @GetMapping("{id}")
    public Article getArticleById(@PathVariable("id") Article article){
        return article;
    }

    @PostMapping
    public Article save(@RequestBody Article article) {
        System.out.println(article);
        return articlesRepo.save(article);
    }

    @DeleteMapping("{id}")
    public void delete(@PathVariable("id") long id) {
        articlesRepo.deleteById(id);
    }
}