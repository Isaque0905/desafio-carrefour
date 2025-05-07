# 🧪 Projeto de Testes Automatizados - Serverest API

Este projeto tem como objetivo a automação de testes da API [Serverest](https://serverest.dev/#/), utilizando o framework [Cypress](https://www.cypress.io/) em JavaScript. Os testes cobrem os principais endpoints relacionados a usuários, validando o comportamento da API em operações de **CRUD (Create, Read, Update, Delete)**.

---

## 🚀 Tecnologias Utilizadas

- [Cypress](https://docs.cypress.io/) - Framework de testes E2E
- [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript) - Linguagem de programação
- [Mochawesome](https://github.com/adamgruber/mochawesome) - Geração de relatórios em HTML/JSON
- [GitHub Actions](https://docs.github.com/en/actions) - Integração contínua e execução dos testes em pipeline

---

## 📦 Instalação

1. Clone o repositório:

```bash
git clone https://github.com/SEU_USUARIO/SEU_REPOSITORIO.git
cd SEU_REPOSITORIO
```

2. Instale as dependências:

```bash
npm install
```

---

## ▶️ Execução dos Testes

### Testes locais com Cypress (modo headless)

```bash
npx cypress run
```

### Testes com interface gráfica do Cypress

```bash
npx cypress open
```

---

## 📊 Geração de Relatórios

Este projeto utiliza o **cypress-mochawesome-reporter** para geração de relatórios em HTML e JSON.

### 📁 Após a execução dos testes, o relatório estará disponível em:

```
/mochawesome-report/mochawesome.html
```

Você pode abri-lo no navegador para uma visualização detalhada dos testes.

---

## 🔍 Casos de Teste Implementados

| Método | Rota             | Descrição                             |
|--------|------------------|---------------------------------------|
| GET    | /usuarios        | Retorna a lista de todos os usuários. |
| POST   | /usuarios        | Cria um novo usuário válido.          |
| GET    | /usuarios/{id}   | Retorna os dados de um usuário.       |
| PUT    | /usuarios/{id}   | Atualiza dados de um usuário.         |
| DELETE | /usuarios/{id}   | Remove um usuário da base.            |

Cada teste valida:
- Status code esperado
- Mensagens de resposta
- Estrutura e conteúdo do JSON de retorno
- Regras de negócio e integridade dos dados

---

## 🔁 Integração Contínua com GitHub Actions

O projeto está integrado ao **GitHub Actions** para executar os testes automaticamente a cada push na branch `main`.

### Workflow: `.github/workflows/cypress.yml`

- Instala as dependências
- Executa os testes com `npx cypress run`
- Gera e armazena o relatório como artefato
- Mantém a rastreabilidade via GitHub

---

## 📂 Estrutura de Pastas

```
carrefour-api-tests/
│
├── cypress/
│   └── e2e/
│       ├── api/
│           ├── users/
│               ├── getUsers.cy.js
│               ├── getUserById.cy.js
│               ├── createUser.cy.js
│               ├── updateUser.cy.js
│               └── deleteUser.cy.js
│
├── mochawesome-report/
│   └── mochawesome.html
│
├── .github/
│   └── workflows/
│       └── cypress.yml
│
├── cypress.config.js
├── package.json
└── README.md
```

---

## ✅ Requisitos

- Node.js >= 16
- npm >= 8
- Cypress >= 12

---

## 🧑‍💻 Autor

Desenvolvido por Isaque Batista Santos, QA Senior com foco em automação de testes API e pipelines CI/CD.
