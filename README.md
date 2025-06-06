# Automação de testes end-to-end - Central de Atendimento

[![CI](https://github.com/wlsf82/seguros/actions/workflows/ci.yml/badge.svg)](https://github.com/wlsf82/seguros/actions)

## Visão Geral

Este projeto tem como objetivo automatizar os testes end-to-end da aplicação CAC TAT - Central de Atendimento, que simula o envio de mensagens de clientes para uma central de atendimento.

A automação garante que o funcionamento do formulário e suas regras de negócio essenciais estejam validados em diferentes cenários, contribuindo para a confiabilidade e a qualidade da aplicação.

> Este projeto foi desenvolvido com base nos aprendizados do curso [Cypress do Zero á Nuvem](https://www.udemy.com/course/testes-automatizados-com-cypress-basico/?referralCode=5E367E0C332F3B967B6C&couponCode=ST21MT30625G2) criado pelo professor [Walmyr Filho](https://github.com/wlsf82)

## Pré-requisitos

Antes de executar os testes automatizados do projeto, certifique-se de que o ambiente de desenvolvimento esteja configurado corretamente. Abaixo estão os requisitos mínimos:

- [Node.js](https://nodejs.org/en)
- [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
- [Cypress](https://www.cypress.io/install)
- [Git](https://git-scm.com/downloads)

> 

> Verifique a versão instalada com os comandos node -v e npm -v.

## Instalação do projeto

1. Faça o clone do projeto na sua máquina

```bash
git clone https://github.com/import-mel/cypress-do-zero-a-nuvem.git
```

2. Depois de ter instalado o projeto em sua máquina, entre na pasta pelo terminal (pode ser o terminal do VSCode, caso tenha ele instalado):

```bash
cd caminho/da/pasta/do/projeto
```

3. Após entrar na pasta pelo terminal você terá que baixar as dependências da aplicação:

```bash
npm install
npm install cypress --save-dev
```

## Execução dos testes

### Desktop

Existem duas formas principais de executar os testes automatizados:

* **Modo Headless (linha de comando):**
  Execute os testes diretamente no terminal, sem interface gráfica:

```bash
npm test
```

* **Modo Interativo (interface gráfica do Cypress):**
  Abre o Test Runner do Cypress, permitindo acompanhar a execução dos testes em tempo real:

```bash
npm run cy:open
```

### Mobile

> **Observação:** As dimensões da versão mobile estão configuradas no arquivo `package.json` com os seguintes valores de viewport: `viewportWidth: 410` e `viewportHeight: 860`.

Você pode executar os testes voltados para a versão mobile da aplicação de duas formas:

* **Modo Headless (linha de comando):**

```bash
npm test:mobile
```

* **Modo Interativo (interface gráfica do Cypress):**

```bash
npm run cy:open:mobile
```
## Estrutura do Projeto

```bash
📦 FORMULARIO-CYPRESS-TEST-E2E
├── .github/workflows/
│   └── ci.yml                    # Configuração de integração contínua (CI) com GitHub Actions
├── cypress/
│   ├── e2e/
│   │   └── CAC-TAT.cy.js         # Casos de teste end-to-end (E2E) automatizados com Cypress
│   ├── fixtures/
│   └── support/
│       ├── commands.js           # Comandos customizados do Cypress
│       ├── e2e.js                
│       └── selectors.js          # Arquivo que centraliza todos os seletores do formulário
├── lessons/                     
├── src/                          # código fonte da aplicação que foi testada
│   ├── index.html                
│   ├── privacy.html             
│   ├── script.js                 
│   └── style.css                
├── .gitignore                    
├── cypress.config.js            
├── LICENSE                       
├── package.json                  
├── package-lock.json             
└── README.md                     
```

---

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Javascript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![NPM](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)
![cypress](https://img.shields.io/badge/-cypress-%23E5E5E5?style=for-the-badge&logo=cypress&logoColor=058a5e)
![GitHub Actions](https://img.shields.io/badge/github%20actions-%232671E5.svg?style=for-the-badge&logo=githubactions&logoColor=white)
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)