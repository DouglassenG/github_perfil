# 🔍 GitHub Profile Finder

![Status](https://img.shields.io/badge/Status-Finalizado-green)
![React](https://img.shields.io/badge/Framework-React-61DAFB?logo=react&logoColor=black)
![API](https://img.shields.io/badge/Service-GitHub_REST_API-181717?logo=github&logoColor=white)
![CSS3](https://img.shields.io/badge/Style-CSS3-blue?logo=css3&logoColor=white)

> Uma ferramenta de busca poderosa que consome a API do GitHub para exibir perfis de desenvolvedores, suas estatísticas e portfólio de código de forma visual e organizada.

## 🎯 Motivação e Propósito

No desenvolvimento de software moderno, o Frontend raramente trabalha isolado. O propósito deste projeto foi criar uma **Interface Conectada**, simulando o dia a dia de trabalho com serviços de Backend.

Este projeto resolve o desafio de **Consumo de APIs REST**. O objetivo técnico foi implementar o fluxo completo de dados: capturar o input do usuário, enviar uma requisição para os servidores do GitHub, tratar a resposta (incluindo estados de carregamento e erro) e renderizar as informações na tela dinamicamente.

## 🖼️ Demonstração Visual

https://github-perfil-dmsr.vercel.app/

## 🛠️ Tecnologias Utilizadas

A stack foi definida para garantir performance e facilidade na manipulação de dados assíncronos:

* **[ReactJS](https://react.dev/):** Biblioteca para construção da interface reativa.
* **[GitHub REST API](https://docs.github.com/pt/rest):** Fonte de dados externa (Endpoints `/users` e `/repos`).
* **[Axios / Fetch API](https://axios-http.com/):** Cliente HTTP para realização de requisições assíncronas (GET).
* **[CSS3 / Styled Components](https://developer.mozilla.org/pt-BR/docs/Web/CSS):** Estilização da interface de usuário.

## ✨ Funcionalidades

A aplicação oferece um fluxo de busca completo:

1.  **Busca de Usuário:** Campo de pesquisa que aceita o *username* do GitHub.
2.  **Profile Card:** Exibição dos dados principais (Avatar, Bio, Seguidores, Seguindo, Localização e Empresa).
3.  **Listagem de Repositórios:** Renderização dinâmica dos últimos repositórios públicos do usuário, com links diretos para o código.
4.  **Feedback de Interface:** Tratamento visual para estados de "Loading" (carregando) e mensagens de erro (ex: "Usuário não encontrado").

## 📂 Estrutura de Arquivos

O projeto segue uma arquitetura modular, separando a lógica de serviço da camada de apresentação:

```text
github_perfil/
├── public/              # Assets estáticos
├── src/
│   ├── components/      # Componentes UI reutilizáveis
│   │   ├── Header/      # Barra de busca
│   │   ├── Profile/     # Card de informações do usuário
│   │   └── ReposList/   # Lista de repositórios
│   ├── services/        # Configuração de chamadas à API (api.js)
│   ├── styles/          # Arquivos de estilo globais
│   ├── App.js           # Componente Raiz e Gestão de Estado
│   └── index.js         # Entry Point
├── package.json         # Dependências
└── README.md            # Documentação
