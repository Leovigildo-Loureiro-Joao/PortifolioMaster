# ⚙️ API - Portfólio Interativo

Esta é a **API oficial do Portfólio Interativo de Leovigildo Loureiro João**, desenvolvida em **Spring Boot** com foco em modularidade, performance e integração com **Cloudinary** para upload de imagens.  
Ela fornece os endpoints responsáveis por gerir projetos, links, descrições e metadados do portfólio apresentado no GitHub Pages.

---

## 🧠 Stack Principal

| Tecnologia | Função |
|-------------|--------|
| **Java 21+** | Linguagem principal |
| **Spring Boot 3** | Framework base da aplicação |
| **PostgreSQL** | Banco de dados relacional |
| **Docker** | Contêinerização e ambiente de teste |
| **Cloudinary** | Armazenamento de imagens e videos na nuvem |
| **Hibernate Types** | Suporte a campos `JSONB` |
| **Render** | Deploy e hospedagem da API |

---

## 🧩 Estrutura de Pastas
```
src/
├── main/
│ ├── java/com/example/api/
│ │ ├── controllers/ # Controladores REST
│ │ ├── services/ # Regras de negócio
│ │ ├── dto/ # Record DTOs para upload e entrada
│ │ ├── models/ # Entidades JPA (Project, etc.)
│ │ ├── config/ # Configurações do Cloudinary, CORS, etc.
│ │ └── repositories/ # Interfaces JPA Repository
│ └── resources/
│ ├── application.yml
│ └── static/
└── test/
└── ...
```


---

## 🚀 Executar Localmente

### 1️⃣ Clonar o repositório
```bash
git clone https://github.com/Leovigildo-Loureiro-Joao/PortfolioMaster.git
cd api-portfolio
