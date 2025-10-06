package com.example.api.dto;

import org.springframework.web.multipart.MultipartFile;
import java.util.List;

/**
 * DTO para criação/edição de projetos, com upload de imagens.
 */
public record ProjectRequest(
        String nome,
        String miniDesc,
        String desc,
        String obje,
        String lance,
        String abertura,
        List<String> tecno,
        MultipartFile img,
        MultipartFile img2,
        String link // novo atributo adicionado conforme pedido
) {}
