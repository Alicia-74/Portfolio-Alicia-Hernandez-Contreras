package com.alicia.portfolio.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.alicia.portfolio.dto.FormacionDTO;
import com.alicia.portfolio.model.Formacion;
import com.alicia.portfolio.repository.FormacionRepository;

@Service
public class FormacionServiceImpl implements FormacionService {

    private final FormacionRepository repo;

    public FormacionServiceImpl(FormacionRepository repo) {
        this.repo = repo;
    }

    @Override
    public List<FormacionDTO> getAll() {
        return repo.findAll().stream().map(this::toDTO).toList();
    }

    private FormacionDTO toDTO(Formacion f) {
        FormacionDTO dto = new FormacionDTO();
        dto.setEscuela(f.getEscuela());
        dto.setTitulacion(f.getTitulacion());
        dto.setDescription(f.getDescription());
        dto.setStart_Date(f.getStart_Date());
        dto.setEnd_Date(f.getEnd_Date());
        dto.setCurrent_job(f.isCurrent_job());
        return dto;
    }
}