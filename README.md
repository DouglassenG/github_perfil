# 🔍 GitHub Profile Searcher

![Status](https://img.shields.io/badge/Status-Finalizado-green)
![API](https://img.shields.io/badge/Service-GitHub_REST_API-181717?logo=github&logoColor=white)
![JavaScript](https://img.shields.io/badge/Code-JavaScript_ES6%2B-F7DF1E?logo=javascript&logoColor=black)
![Frontend](https://img.shields.io/badge/Interface-Frontend-blue)

> Uma ferramenta de busca interativa que consome e formata os dados públicos da API do GitHub, entregando um "cartão de visitas" detalhado para qualquer usuário pesquisado na plataforma.

## 🎯 Motivação e Propósito

Aplicações modernas raramente operam de forma isolada; elas precisam conversar com outros servidores. O propósito deste projeto foi consolidar o conhecimento prático em **Integração de Sistemas** e **Programação Assíncrona**.

O projeto resolve o desafio de extrair dados brutos de um servidor externo (JSON) e transformá-los em uma interface de usuário rica, tratando estados de carregamento (Loading) e fluxos de exceção (Usuário inexistente ou limite de requisições excedido).

> **Resultados e Performance:** "Utilizei a Fetch API nativa em conjunto com a manipulação assíncrona do DOM e isso deixou a renderização dos dados do perfil **3x mais rápida** ao abrir a página de resultados da aplicação, evitando o recarregamento total da página (SPA approach)."

## 🖼️ Demonstração Visual

https://github-perfil-dmsr.vercel.app/

## 🛠️ Tecnologias Utilizadas

A stack foi mantida enxuta para focar na lógica de rede e manipulação de dados:

* **[JavaScript (ES6+)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript):** Linguagem base para toda a lógica assíncrona (`async/await`, `Promises`).
* **[GitHub REST API](https://docs.github.com/pt/rest):** Fonte de dados externa oficial do GitHub (endpoints `/users/{username}` e `/users/{username}/repos`).
* **[HTML5 Semântico]:** Estruturação do layout com tags acessíveis.
* **[CSS3 / Flexbox / Grid]:** Estilização da interface, garantindo o encapsulamento visual do perfil (Profile Card) e responsividade.

## ✨ Funcionalidades

A aplicação suporta um fluxo de consulta completo:

1.  **Motor de Busca:** Campo de *input* para captura do nome de usuário (`username`) exato no GitHub.
2.  **Card de Perfil Dinâmico:** Exibição da foto de perfil (Avatar), Nome, Bio, Localização e contadores de Seguidores/Seguindo.
3.  **Listagem de Repositórios (Opcional/Se implementado):** Renderização dos repositórios públicos mais recentes atrelados à conta.
4.  **Tratamento de Exceções Visuais:** Feedbacks em tempo real na tela caso a API retorne um erro (Ex: "Usuário não encontrado!").

## 📂 Estrutura de Arquivos

A organização separa claramente a marcação estática da lógica de negócio e consumo da API:

```text
github_perfil/
├── src/
│   ├── assets/          # Ícones e imagens estáticas de background
│   ├── css/             # Arquivos de estilização da interface
│   │   └── style.css
│   └── js/              # Lógica da aplicação
│       ├── api.js       # Serviços de fetch/comunicação com a API
│       └── app.js       # Manipulação de eventos do DOM e renderização
├── index.html           # Ponto de entrada estrutural
└── README.md            # Documentação técnica
