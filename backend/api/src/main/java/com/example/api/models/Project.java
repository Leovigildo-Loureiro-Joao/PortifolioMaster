package com.example.api.models;
import java.util.List;
import lombok.Data;

@Data
public class Project {
   
    private String id;
    private String img;
    private String img2;
    private String nome;
    private String miniDesc;
    private String desc;
    private String obje;
    private String lance;
    private String abertura;
    private List<String> tecno; // lista de tecnologias

    public Project() {}

    public Project(String id, String img, String img2, String nome, String miniDesc,
                   String desc, String obje, String lance, String abertura, List<String> tecno) {
        this.id = id;
        this.img = img;
        this.img2 = img2;
        this.nome = nome;
        this.miniDesc = miniDesc;
        this.desc = desc;
        this.obje = obje;
        this.lance = lance;
        this.abertura = abertura;
        this.tecno = tecno;
    }

    
}
