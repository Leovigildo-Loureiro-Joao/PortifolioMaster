/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.example.api.controllers;

/**
 *
 * @author leovigildo
 */

   
import com.example.api.models.Project;
import com.example.api.services.ProjectService;
import com.google.cloud.storage.Bucket;
import com.google.firebase.cloud.StorageClient;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.concurrent.ExecutionException;

@RestController
@RequestMapping("/api/projects")
public class ProjectController {

    private final ProjectService service;

    public ProjectController(ProjectService service) {
        this.service = service;
    }

    // Endpoint para criar projeto com upload de imagens
    @PostMapping(consumes = {"multipart/form-data"})
    public String createProject(
            @RequestParam("img") MultipartFile img,
            @RequestParam(value = "img2", required = false) MultipartFile img2,
            @RequestParam("nome") String nome,
            @RequestParam("miniDesc") String miniDesc,
            @RequestParam("desc") String desc,
            @RequestParam("obje") String obje,
            @RequestParam("lance") String lance,
            @RequestParam("abertura") String abertura,
            @RequestParam("tecno") List<String> tecno
    ) throws ExecutionException, InterruptedException, IOException {

        String imgUrl = service.uploadImage(img);
        String img2Url = img2 != null ? service.uploadImage(img2) : null;

        Project project = new Project();
        project.setImg(imgUrl);
        project.setImg2(img2Url);
        project.setNome(nome);
        project.setMiniDesc(miniDesc);
        project.setDesc(desc);
        project.setObje(obje);
        project.setLance(lance);
        project.setAbertura(abertura);
        project.setTecno(tecno);

        return service.createProject(project);
    }

    // Listar todos os projetos
    @GetMapping
    public List<Project> getAllProjects() throws ExecutionException, InterruptedException {
        return service.getAllProjects();
    }

    // Buscar projeto por ID
    @GetMapping("/{id}")
    public Project getProject(@PathVariable String id) throws ExecutionException, InterruptedException {
        return service.getProjectById(id);
    }

    // Deletar projeto
    @DeleteMapping("/{id}")
    public String deleteProject(@PathVariable String id) {
        service.deleteProject(id);
        return "Projeto removido com sucesso!";
    }
    
    @GetMapping("/test")
    public String testFirebase() {
        try {
            Bucket bucket = StorageClient.getInstance().bucket();
            return "Conexão Firebase OK! Bucket: " + bucket.getName();
        } catch (Exception e) {
            return "Erro: " + e.getMessage();
        }
    }
}
