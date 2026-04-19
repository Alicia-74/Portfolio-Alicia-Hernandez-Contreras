package com.alicia.portfolio.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.alicia.portfolio.model.Skills;

public interface SkillsRepository  extends JpaRepository<Skills, Long> {
    
}
