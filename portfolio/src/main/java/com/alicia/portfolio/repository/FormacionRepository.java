package com.alicia.portfolio.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.alicia.portfolio.model.Formacion;

public interface FormacionRepository  extends JpaRepository<Formacion, Long> {
    
}
