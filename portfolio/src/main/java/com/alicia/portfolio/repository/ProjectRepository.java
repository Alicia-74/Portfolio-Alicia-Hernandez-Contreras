package com.alicia.portfolio.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.alicia.portfolio.model.Project;

public interface ProjectRepository extends JpaRepository<Project, Long> {
    
}
