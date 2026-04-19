package com.alicia.portfolio.dto;

import lombok.Data;

@Data
public class FormacionDTO {
    private Long id;
    private String escuela;
    private String titulacion;
    private String description;
    private Integer start_Date;
    private Integer end_Date;
    private boolean current_job;
    
}
