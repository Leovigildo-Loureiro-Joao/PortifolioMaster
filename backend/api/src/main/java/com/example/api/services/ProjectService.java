package com.example.api.services;

import com.cloudinary.Cloudinary;
import com.cloudinary.utils.ObjectUtils;
import com.example.api.models.Project;
import com.example.api.repositories.ProjectRepository;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@Service
public class ProjectService {

    private final ProjectRepository repository;
    private final Cloudinary cloudinary;

    public ProjectService(ProjectRepository repository, Cloudinary cloudinary) {
        this.repository = repository;
        this.cloudinary = cloudinary;
    }

    public List<Project> getAllProjects() {
        return repository.findAll();
    }

    public Optional<Project> getProjectById(Long id) {
        return repository.findById(id);
    }

    public Project createProject(Project project, MultipartFile img, MultipartFile img2) throws IOException {
        if (img != null && !img.isEmpty()) {
            Map uploadResult = cloudinary.uploader().upload(img.getBytes(), ObjectUtils.emptyMap());
            project.setImg((String) uploadResult.get("secure_url"));
        }

        if (img2 != null && !img2.isEmpty()) {
            Map uploadResult = cloudinary.uploader().upload(img2.getBytes(), ObjectUtils.emptyMap());
            project.setImg2((String) uploadResult.get("secure_url"));
        }

        return repository.save(project);
    }

    public void deleteProject(Long id) {
        repository.deleteById(id);
    }
}
