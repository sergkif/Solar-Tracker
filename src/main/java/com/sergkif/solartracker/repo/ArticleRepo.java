package com.sergkif.solartracker.repo;

import com.sergkif.solartracker.domain.Article;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ArticleRepo extends JpaRepository<Article, Long> {
    List<Article> findAll();
}