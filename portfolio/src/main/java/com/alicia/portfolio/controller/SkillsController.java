package com.alicia.portfolio.controller;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.alicia.portfolio.dto.SkillsDTO;
import com.alicia.portfolio.service.SkillsService;

@RestController
@RequestMapping("/api/skills")
public class SkillsController {

    private final SkillsService service;

    public SkillsController(SkillsService service) {
        this.service = service;
    }

    @GetMapping
    public List<SkillsDTO> getSkills() {
        return service.getAll();
    }
}