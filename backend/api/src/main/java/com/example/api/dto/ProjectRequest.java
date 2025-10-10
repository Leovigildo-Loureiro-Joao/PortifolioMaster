package com.example.api.dto;

import org.springframework.web.multipart.MultipartFile;

import com.example.api.enums.ProjectType;

import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.validation.constraints.NotBlank;

import java.util.List;

/**
 * DTO para criação/edição de projetos, com upload de imagens.
 */
public record ProjectRequest(
        @NotBlank String nome,
        @NotBlank String mini_desc,
        @Enumerated(EnumType.STRING) ProjectType type,
        @NotBlank String desc,
        @NotBlank String obje,
        @NotBlank String lance,
        @NotBlank String abertura,
        List<String> tecno,
        MultipartFile img,
        MultipartFile url,
        @NotBlank String link // novo atributo adicionado conforme pedido
) {}
