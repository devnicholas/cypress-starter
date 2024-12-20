# Cypress Template

Este é um template inicial para uma aplicação Cypress, contendo classes e ferramentas desenvolvidas para facilitar a criação de novos testes E2E. Este projeto foi pensado para acelerar o desenvolvimento e padronizar a escrita de testes.

---

## 🚀 Introdução

O template oferece:

- Classes e métodos reutilizáveis para criar e executar testes de maneira padronizada.
- Ferramentas integradas para capturas de tela e comparações de imagens, utilizando o plugin `cypress-plugin-snapshots`.
- Um exemplo básico para demonstração de uso.

---

## 🛠️ Instalação

1. Clone este repositório:

```bash
git clone <url-do-repositorio>
```

2. Navegue até o diretório do projeto:

```bash
cd cypress-template
```

3. Instale as dependências usando o Yarn:

```bash
yarn install
```

4. Crie um arquivo `.env` na raiz do projeto e configure a URL base:

```env
BASE_URL=https://sua-url-base.com
```

5. Execute o Cypress:

```bash
yarn cy:open
```

---

## 📦 Exemplo

Abaixo está um exemplo básico de como configurar e executar testes com o template:

```javascript
import TestablePages from "../support/core";

const countHomeLinks = () => {
  cy.get(".actions").eq(0).find("a").should("have.length", 1);

  cy.get(".actions").eq(1).find("a").should("have.length", 3);
};

const testablePages = new TestablePages();

testablePages.addPage({
  title: "Home",
  path: "/",
  steps: [
    {
      element: "h1",
      text: "Testable App",
      should: "be.visible",
    },
    {
      element: "h2",
      should: { chainer: "have.text", value: "Application used for E2E tests" },
    },
    {
      callback: countHomeLinks,
    },
    {
      element: "main",
      action: "snapshot",
    },
    {
      element: "main",
      action: "imageSnapshot",
    },
  ],
});

describe("Switch de testes simples", {}, () => {
  beforeEach(() => {
    // cy.login();
  });

  testablePages.runTests();
});
```

Esse exemplo mostra como adicionar uma página testável e configurar etapas, incluindo validações de elementos, execuções de callbacks e capturas de tela.

---

## 🖥️ Executar via linha de comando

Para executar os testes diretamente pelo terminal, ideal para integrações com pipelines de CI/CD, utilize o comando abaixo:

```bash
yarn cy:run
```
