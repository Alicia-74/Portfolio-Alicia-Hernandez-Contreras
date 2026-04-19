package com.alicia.portfolio.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.alicia.portfolio.dto.ExperienceDTO;
import com.alicia.portfolio.model.Experience;
import com.alicia.portfolio.repository.ExperienceRepository;

@Service
public class ExperienceServiceImpl implements ExperienceService {

    private final ExperienceRepository repo;

    public ExperienceServiceImpl(ExperienceRepository repo) {
        this.repo = repo;
    }

    @Override
    public List<ExperienceDTO> getAll() {
        return repo.findAll().stream().map(this::toDTO).toList();
    }

    private ExperienceDTO toDTO(Experience e) {
        ExperienceDTO dto = new ExperienceDTO();
        dto.setCompany(e.getCompany());
        dto.setRole(e.getRole());
        dto.setDescription(e.getDescription());
        dto.setStart_Date(e.getStart_Date());
        dto.setEnd_Date(e.getEnd_Date());
        dto.setCurrent_job(e.isCurrent_job());
        return dto;
    }
}