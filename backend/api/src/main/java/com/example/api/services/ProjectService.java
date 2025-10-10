package com.example.api.services;

import com.cloudinary.Cloudinary;
import com.cloudinary.utils.ObjectUtils;
import com.example.api.dto.ProjectRequest;
import com.example.api.models.Project;
import com.example.api.repositories.ProjectRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.UUID;

@Service
public class ProjectService {

    @Autowired
    private ProjectRepository repository;

    @Autowired
    private Cloudinary cloudinary;


    public List<Project> getAllProjects() {
        return repository.findAll();
    }

    public Optional<Project> getProjectById(String id) {
        return repository.findById(id);
    }

public Project createProject(ProjectRequest request) throws IOException {
    Project project = new Project();
    project.setNome(request.nome());
    project.setMiniDesc(request.miniDesc());
    project.setDesc(request.desc());
    project.setObje(request.obje());
    project.setLance(request.lance());
    project.setAbertura(request.abertura());
    project.setTecno(request.tecno());
    project.setImg(uploadImage(request.img())); // Imagem
    project.setUrl(uploadVideo(request.url())); // Vídeo - MÉTODO DIFERENTE!
    project.setLink(request.link());

    return repository.save(project);
}

private String uploadImage(MultipartFile file) throws IOException {
    if (file == null || file.isEmpty()) return null;
    Map uploadResult = cloudinary.uploader().upload(file.getBytes(), 
        Map.of("resource_type", "image")); // ✅ Especifica que é imagem
    return (String) uploadResult.get("secure_url");
}

private String uploadVideo(MultipartFile file) throws IOException {
    if (file == null || file.isEmpty()) return null;
    
    // ✅ Upload como VÍDEO no Cloudinary
    Map uploadResult = cloudinary.uploader().upload(file.getBytes(), 
        Map.of("resource_type", "video")); // CRÍTICO: resource_type = video
    
    return (String) uploadResult.get("secure_url");
}

    public void deleteProject(String id) {
        repository.deleteById(id);
    }
}
