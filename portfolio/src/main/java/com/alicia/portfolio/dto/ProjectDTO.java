package com.alicia.portfolio.dto;

import lombok.Data;

@Data
public class ProjectDTO {
    private Long id;
    private String title;
    private String description;
    private String tech;
    private String imageUrl;
}
