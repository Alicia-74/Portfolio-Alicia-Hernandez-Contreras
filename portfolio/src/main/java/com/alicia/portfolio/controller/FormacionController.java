package com.alicia.portfolio.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.alicia.portfolio.dto.FormacionDTO;
import com.alicia.portfolio.service.FormacionService;

@RestController
@RequestMapping("/api/formacion")
public class FormacionController {

    private final FormacionService service;

    public FormacionController(FormacionService service) {
        this.service = service;
    }

    @GetMapping
    public List<FormacionDTO> getFormaciones() {
        return service.getAll();
    }
}