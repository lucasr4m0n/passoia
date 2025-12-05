-----

## 💄 PASSOIA - E-commerce de Maquiagem Interativo

### Sumário

A **Passoia** é um projeto de Landing Page/e-commerce fictício desenvolvido para a **Formação Bit do Vai Na Web**. O objetivo principal é resolver um desafio comum no comércio online de beleza: a insegurança do cliente ao escolher tons de maquiagem, o que resulta em alta taxa de devolução.

Esta aplicação demonstra como o **React** pode ser utilizado para criar uma experiência de usuário rica, interativa e orientada à solução de problemas de negócio.

-----

### ✨ Funcionalidades em Destaque

  * **Teste de Cor em Tempo Real (Core Feature):** Na seção de Lançamentos, o usuário pode interagir com as variações de cores de batons. O estado da imagem principal muda instantaneamente, simulando um "teste virtual" e aumentando a confiança na compra.
  * **Design Responsivo:** Interface otimizada para diferentes tamanhos de tela.
  * **Navegação Clara:** Seções dedicadas a **Looks**, **Lançamentos** e **Novidades**.

-----

### 💻 Stack Tecnológica

| Categoria | Tecnologia |
| :--- | :--- |
| **Framework** | **React** (Componentização e uso de Hooks) |
| **Build Tool** | **Vite** (Performance e *Hot Module Replacement*) |
| **Estilização** | **Sass (SCSS)** (Estilização modular e organizada) |
| **Hospedagem** | **Vercel** |

-----

### 🏗️ Arquitetura do Projeto

O projeto segue boas práticas de arquitetura Front-end para garantir escalabilidade e manutenção:

  * **Estrutura Modular:** O código é dividido em componentes isolados, onde cada seção da Landing Page (`Header`, `Banner`, `Lancamentos`, `Footer`, etc.) reside em sua própria pasta (como comprovado em `src/components`), contendo sua lógica e estilização.
  * **Gerenciamento de Estado:** Utilização do *hook* `useState` para controlar o estado da interface (ex: a cor do batom sendo visualizada), demonstrando a aplicação prática de Hooks.

-----

### 🚀 Como Rodar o Projeto

Para visualizar a aplicação localmente:

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/lucasr4m0n/passoia.git
    ```
2.  **Entre na pasta do projeto:**
    ```bash
    cd passoia
    ```
3.  **Instale as dependências:**
    ```bash
    npm install
    # ou
    yarn install
    ```
4.  **Inicie o servidor de desenvolvimento (Vite):**
    ```bash
    npm run dev
    # ou
    yarn dev
    ```

O projeto será aberto em `http://localhost:5173/` (ou porta similar).

-----

### 🔗 Links

| Descrição | URL |
| :--- | :--- |
| **Aplicação Publicada** | [https://passoia-reek.vercel.app/](https://passoia-reek.vercel.app/) |

-----

### 👩‍🏫 Agradecimentos Especiais

Este projeto foi um marco na minha formação no **Vai Na Web**. Agradecimento especial à equipe e às instrutoras **Carol Oliveira** e **Stéfany Farias** pela mentoria e direcionamento.

-----

> Desenvolvido por [Lucas Ramon Souza Viegas]
