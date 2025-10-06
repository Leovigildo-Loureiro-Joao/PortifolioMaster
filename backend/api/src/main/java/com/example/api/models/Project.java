package com.example.api.models;

import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.annotations.GenericGenerator;
import org.hibernate.annotations.JdbcTypeCode;
import org.hibernate.annotations.Type;
import org.hibernate.type.SqlTypes;

import com.example.api.utils.StringListConverter;
import com.fasterxml.jackson.annotation.JsonTypeName;

import java.util.List;
import java.util.UUID;

@Data
@Entity
@Table(name = "projects")
public class Project {

    @Id
    @GeneratedValue(generator = "uuid2")
    @GenericGenerator(name = "uuid2", strategy = "org.hibernate.id.UUIDGenerator")
    private String id;

    private String img;
    private String img2;
    private String nome;
    private String link;

    @Column(length = 255, name = "mini_desc")
    private String miniDesc;

    @Column(columnDefinition = "TEXT", name = "descricao")
    private String desc;

    @Column(columnDefinition = "TEXT")
    private String obje;

    @Column(columnDefinition = "TEXT")
    private String lance;

    private String abertura;

    /**
     * Lista de tecnologias — armazenada como JSON no PostgreSQL.
     */
    @JdbcTypeCode(SqlTypes.JSON)
    @Column(columnDefinition = "jsonb")
    private List<String> tecno;

  
}
