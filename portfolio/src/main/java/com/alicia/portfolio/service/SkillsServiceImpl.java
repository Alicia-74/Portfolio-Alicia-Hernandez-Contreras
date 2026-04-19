package com.alicia.portfolio.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.alicia.portfolio.dto.SkillsDTO;
import com.alicia.portfolio.model.Skills;
import com.alicia.portfolio.repository.SkillsRepository;

@Service
public class SkillsServiceImpl implements SkillsService {

    private final SkillsRepository repo;

    public SkillsServiceImpl(SkillsRepository repo) {
        this.repo = repo;
    }

    @Override
    public List<SkillsDTO> getAll() {
        return repo.findAll().stream().map(this::toDTO).toList();
    }

    private SkillsDTO toDTO(Skills s) {
        SkillsDTO dto = new SkillsDTO();
        dto.setId(s.getId());
        dto.setName(s.getName());
        dto.setCategory(s.getCategory());
        dto.setType(s.getType());
        return dto;
    }
}