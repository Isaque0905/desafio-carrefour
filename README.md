# ✅ Testes Automatizados de API - Projeto Carrefour

Este repositório contém testes automatizados de API desenvolvidos com [Cypress](https://www.cypress.io/) e configurados com o reporter `mocha-junit-reporter`, integrados à pipeline do GitHub Actions para execução contínua.  
Os testes têm como objetivo garantir a estabilidade e conformidade da API RESTful do ambiente [`https://serverest.dev`](https://serverest.dev).

---

## 🧪 Tecnologias Utilizadas

| Ferramenta | Finalidade |
|-----------|------------|
| [Cypress 14.3.3](https://docs.cypress.io/) | Framework de automação de testes |
| [Mocha](https://mochajs.org/) + JUnit Reporter | Execução de testes e geração de relatórios em XML |
| [GitHub Actions](https://docs.github.com/en/actions) | Execução de testes em CI |
| [Node.js](https://nodejs.org/) | Ambiente de execução JavaScript |

---

## 📁 Estrutura de Pastas

```bash
carrefour-api-tests/
├── cypress/
│   ├── e2e/                  # Testes automatizados (*.cy.js)
│   └── results/              # Relatórios em XML gerados pelo mocha-junit-reporter
├── .github/workflows/
│   └── ci.yml                # Pipeline de integração contínua (GitHub Actions)
├── cypress.config.js         # Configurações do Cypress e reporter
├── package.json              # Dependências e scripts
```

---

## ▶️ Como Executar os Testes Localmente

### Pré-requisitos

- [Node.js](https://nodejs.org/) v18 ou superior
- [npm](https://www.npmjs.com/) instalado

### Passo a passo

1. Clone o repositório:

```bash
git clone https://github.com/Isaque0905/desafio-carrefour.git
cd desafio-carrefour
```

2. Instale as dependências:

```bash
npm install
```

3. Execute os testes localmente:

```bash
npm test
```

4. Verifique os relatórios em:

```bash
cypress/results/
```

> Os relatórios estarão disponíveis no formato JUnit XML (`test-output-<hash>.xml`), prontos para consumo por pipelines CI/CD ou dashboards de qualidade.

---

## 📦 Script para CI

A pipeline está configurada no arquivo `.github/workflows/ci.yml` para executar os testes automaticamente a cada push ou pull request na branch principal.

- **Execução automática com `npm test`**
- **Upload de relatórios XML gerados pelo mocha-junit-reporter**
- **Execução headless em ambiente de CI**

---

## ✅ Casos de Testes Implementados

### 🔹 Cenário: Criar Usuário com Sucesso
- Método: `POST /usuarios`
- Valida se um usuário pode ser criado com dados válidos.

### 🔹 Cenário: Login com Credenciais Válidas
- Método: `POST /login`
- Garante que o token de autenticação seja retornado corretamente.

### 🔹 Cenário: Buscar Lista de Produtos
- Método: `GET /produtos`
- Verifica se o retorno dos produtos contém os campos esperados.

### 🔹 Cenário: Cadastro de Produto com Token Válido
- Método: `POST /produtos`
- Verifica se o produto é criado com sucesso usando token de admin.

> Os testes estão organizados em arquivos separados sob `cypress/e2e/`, seguindo boas práticas de escopo e modularidade.

---

## 📄 Geração de Relatórios

Os testes utilizam o `mocha-junit-reporter` para geração de relatórios no formato XML. A configuração está presente no `cypress.config.js`:

```js
reporter: 'mocha-junit-reporter',
reporterOptions: {
  mochaFile: 'cypress/results/test-output-[hash].xml',
  toConsole: true,
  attachments: true
}
```

---

## 💡 Boas Práticas Adotadas

- Validação de status code, headers e corpo da resposta.
- Separação de responsabilidades (cenários organizados por feature).
- Uso de comandos customizados do Cypress para reutilização de lógica.
- Cobertura de testes com dados válidos e inválidos.
- Integração contínua configurada para execução automática.
- Suporte a leitura de relatórios por ferramentas externas.

---

## 👨‍💻 Autor

Isaque Batista Santos  
Analista de Qualidade | QA Senior
