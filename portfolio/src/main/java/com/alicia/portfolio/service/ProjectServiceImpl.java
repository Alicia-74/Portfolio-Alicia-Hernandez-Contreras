package com.alicia.portfolio.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.alicia.portfolio.dto.ProjectDTO;
import com.alicia.portfolio.model.Project;
import com.alicia.portfolio.repository.ProjectRepository;

@Service
public class ProjectServiceImpl implements ProjectService {

    private final ProjectRepository repo;

    public ProjectServiceImpl(ProjectRepository repo) {
        this.repo = repo;
    }

    @Override
    public List<ProjectDTO> getAll() {
        return repo.findAll().stream().map(this::toDTO).toList();
    }

    private ProjectDTO toDTO(Project p) {
        ProjectDTO dto = new ProjectDTO();
        dto.setId(p.getId());
        dto.setTitle(p.getTitle());
        dto.setDescription(p.getDescription());
        dto.setTech(p.getTech());
        return dto;
    }
}