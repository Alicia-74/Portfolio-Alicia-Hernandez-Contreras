package com.alicia.portfolio.controller;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.alicia.portfolio.dto.ExperienceDTO;
import com.alicia.portfolio.service.ExperienceService;

@RestController
@RequestMapping("/api/experiences")
public class ExperienceController {

    private final ExperienceService service;

    public ExperienceController(ExperienceService service) {
        this.service = service;
    }

    @GetMapping
    public List<ExperienceDTO> getExperiences() {
        return service.getAll();
    }
}