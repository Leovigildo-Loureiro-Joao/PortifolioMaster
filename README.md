# 🚀 PortifolioMaster

Um projeto de portfólio profissional moderno e completo, construído com as melhores tecnologias do mercado.

## 📋 Descrição

**PortifolioMaster** é uma aplicação full-stack que combina:
- **Frontend**: React.js com TypeScript (94.3%)
- **Backend**: Spring Boot
- **Autenticação & Database**: Firebase
- **Deploy & Containerização**: Docker

Uma solução perfeita para exibir seus projetos, habilidades e experiência profissional de forma elegante e moderna.

---

## 🛠️ Stack Tecnológico

### Frontend
- **React.js** - Biblioteca UI moderna
- **TypeScript** - Tipagem estática
- **Vite** - Build tool rápido e moderno
- **CSS** - Estilização responsiva

### Backend
- **Spring Boot** - Framework Java robustto
- **Maven/Gradle** - Gerenciador de dependências

### Infraestrutura & Serviços
- **Firebase** - Autenticação e Banco de Dados
- **Docker** - Containerização

---

## 🎯 Funcionalidades

- ✅ Interface responsiva e moderna
- ✅ Autenticação segura com Firebase
- ✅ Gerenciamento de projetos
- ✅ Exibição de habilidades e experiência
- ✅ Integração backend robusta
- ✅ Deployment containerizado com Docker

---

## 📦 Instalação

### Pré-requisitos
- Node.js (v16+)
- Java (v11+)
- Docker & Docker Compose
- Git

### Frontend

```bash
# Navegar para o diretório frontend
cd frontend/portifolio

# Instalar dependências
npm install

# Executar em desenvolvimento
npm run dev

# Build para produção
npm run build
```

### Backend

```bash
# Navegar para o diretório backend
cd backend

# Compilar com Maven
mvn clean install

# Executar a aplicação
mvn spring-boot:run
```

### Com Docker

```bash
# Build das imagens
docker-compose build

# Iniciar os serviços
docker-compose up -d
```

---

## 🚀 Como Usar

1. Clone o repositório:
```bash
git clone https://github.com/Leovigildo-Loureiro-Joao/PortifolioMaster.git
cd PortifolioMaster
```

2. Configure as variáveis de ambiente:
   - Crie um arquivo `.env` na raiz do projeto
   - Adicione suas credenciais do Firebase
   - Configure as variáveis do backend

3. Siga os passos de instalação acima

4. Acesse a aplicação em `http://localhost:3000` (frontend) ou `http://localhost:8080` (backend)

---

## 📁 Estrutura do Projeto

```
PortifolioMaster/
├── frontend/
│   └── portifolio/          # Aplicação React
│       ├── src/
│       ├── public/
│       └── package.json
├── backend/                  # Aplicação Spring Boot
│       ├── src/
│       ├── pom.xml
│       └── Dockerfile
├── docker-compose.yml
└── README.md
```

---

## 🔐 Configuração do Firebase

1. Crie um projeto no [Firebase Console](https://console.firebase.google.com)
2. Obtenha suas credenciais
3. Configure-as no arquivo `.env` do frontend:

```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

---

## 📚 Documentação

Para mais informações sobre as tecnologias utilizadas:
- [React Documentation](https://react.dev)
- [Spring Boot Documentation](https://spring.io/projects/spring-boot)
- [Firebase Documentation](https://firebase.google.com/docs)
- [Docker Documentation](https://docs.docker.com)

---

## 🤝 Contribuindo

Contribuições são bem-vindas! Se encontrar algum problema ou tiver sugestões:

1. Faça um Fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

---

## 📄 Licença

Este projeto está licenciado sob a MIT License - veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## 👨‍💻 Autor

**João Leovigildo Loureiro**

- GitHub: [@Leovigildo-Loureiro-Joao](https://github.com/Leovigildo-Loureiro-Joao)
- LinkedIn: [Seu LinkedIn](https://linkedin.com)

---

## 📞 Suporte

Se tiver dúvidas ou problemas, abra uma [Issue](https://github.com/Leovigildo-Loureiro-Joao/PortifolioMaster/issues).

---

**Desenvolvido com ❤️ por João Leovigildo Loureiro**
