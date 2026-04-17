package com.alicia.portfolio.model;

import java.sql.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Data
@Entity
public class Formacion {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String escuela;
    private String titulacion;

    @Column(columnDefinition = "TEXT")
    private String description;
    
    private Integer start_Date;
    private Integer end_Date;
    private boolean current_job;
    
}
