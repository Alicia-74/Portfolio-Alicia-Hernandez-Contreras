package com.alicia.portfolio.dto;

import java.sql.Date;

import lombok.Data;

@Data
public class ExperienceDTO {
    private Long id;
    private String company;
    private String role;
    private String description;
    private Date start_Date;
    private Date end_Date;
    private boolean current_job;
    
}
