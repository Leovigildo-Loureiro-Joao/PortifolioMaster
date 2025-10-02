/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.example.api.config;

/**
 *
 * @author leovigildo
 */
import com.example.api.ApiApplication;
import com.google.auth.oauth2.GoogleCredentials;
import com.google.firebase.FirebaseApp;
import com.google.firebase.FirebaseOptions;
import java.io.File;
import org.springframework.context.annotation.Configuration;

import javax.annotation.PostConstruct;
import java.io.FileInputStream;
import java.io.IOException;

@Configuration
public class FirebaseConfig {

   @PostConstruct
    public void init() throws IOException {
        // Lê o caminho direto da variável de ambiente
        FileInputStream serviceAccount =
                new FileInputStream(System.getenv("GOOGLE_APPLICATION_CREDENTIALS"));

        FirebaseOptions options = FirebaseOptions.builder()
                .setCredentials(GoogleCredentials.fromStream(serviceAccount))
                .build();

        if (FirebaseApp.getApps().isEmpty()) {
            FirebaseApp.initializeApp(options);
        }
        

        System.out.println("Firebase inicializado com sucesso!");
    }
}