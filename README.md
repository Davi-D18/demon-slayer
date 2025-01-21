# b_react-scss

**b_react-scss** contém configurações de algumas ferramentas, como o **React** e **Vite**, com configurações pré-definidas para SCSS modularizado e outras ferramentas.

---

## ⚙️ Estrutura do Projeto

A estrutura do projeto é organizada da seguinte forma:

```plaintext
b_react-scss/
├── .husky/
│   ├── commit-msg
│   ├── pre-commit
│   └── pre-push
├── dist/
├── node_modules/
├── src/
│   ├── assets/
│   ├── styles/
│   │   ├── _variables.scss
│   │   └── global.scss
│   ├── App.jsx
│   └── main.jsx
├── .cz-config.cjs
├── .gitignore
├── .prettierrc
├── .stylelintrc.json
├── commitlint.config.js
├── eslint.config.js
├── index.html
├── lint-staged.config.js
├── package.json
├── README.md
├── validatePage.cjs
└── vite.config.js
```

### 📄 Descrição dos Arquivos e Diretórios

- **`.husky/`**: Diretório que contém hooks do Git para executar tarefas automáticas antes de ações como commit e push.

- **`dist/`**: Diretório onde são gerados os arquivos finais de produção após o build.

- **`node_modules/`**: Pasta gerada automaticamente pelo gerenciador de pacotes com as dependências do projeto.

- **`src/`**: Contém o código-fonte do projeto, incluindo:
  - **`assets/`**: Arquivos estáticos como imagens, ícones e fontes.

  - **`styles/`**: Diretório para estilos globais e variáveis SCSS.
    - **`_variables.scss`**: Define variáveis reutilizáveis para estilos.

    - **`global.scss`**: Contém os estilos globais da aplicação.

  - **`App.jsx`**: Componente principal que renderiza toda a aplicação.
  - **`main.jsx`**: Arquivo de entrada que inicializa o React.

- **`.cz-config.cjs`**: Configuração do Commitizen para padronização de mensagens de commit.
- **`.gitignore`**: Lista de arquivos e pastas a serem ignorados pelo Git.
- **`.prettierrc`**: Configuração do Prettier para formatação automática do código.
- **`.stylelintrc.json`**: Configurações para o Stylelint, usado para verificar os estilos SCSS.
- **`commitlint.config.js`**: Valida mensagens de commit para seguir padrões específicos.
- **`eslint.config.js`**: Configuração do ESLint, usado para linting no código JavaScript.
- **`lint-staged.config.js`**: Configuração para rodar scripts apenas em arquivos que foram alterados no commit.
- **`validatePage.cjs`**: Script personalizado para validações específicas do projeto.
- **`vite.config.js`**: Arquivo de configuração do Vite.


## 🛠️ Ferramentas Utilizadas

- **Vite**: O Vite é um bundler rápido e otimizado, ideal para desenvolvimento com React.

- **React**: O React é usado para criar interfaces de usuário interativas e baseadas em componentes reutilizáveis.

- **SCSS**: O SCSS ajuda a organizar estilos com recursos como variáveis e mixins, permitindo um código mais limpo e reutilizável.

- **ESLint**: Verifica o código JavaScript em busca de problemas, ajudando a evitar erros e a manter boas práticas.

- **Stylelint**: Aplica boas práticas e verifica problemas em arquivos SCSS/CSS, garantindo estilos consistentes.

  ## Extensões e Sintaxe

  - **stylelint-config-standard-scss**:
    - É uma extensão de configurações padrão para SCSS, baseada nas melhores práticas.
    - Inclui regras de sintaxe para SCSS além das regras padrão de CSS.

  - **customSyntax: "postcss-scss"**:
    - Permite o uso de SCSS como sintaxe personalizada, facilitando a análise de arquivos SCSS.

  ## Plugins

  - **stylelint-order**:
    - Fornece suporte para ordenar declarações CSS.
    - Ajuda a manter consistência e legibilidade ao definir as propriedades.

- **Prettier**: Formata automaticamente o código com base nas regras definidas, mantendo a aparência limpa e padronizada.

- **Commitizen**: Facilita a criação de mensagens de commit padronizadas, tornando o histórico do Git mais claro e organizado.

- **cz-conventional-changelog**: Usado com Commitizen para padronizar mensagens de commit baseadas em changelogs convencionais.

- **Commitlint**: Valida mensagens de commit para garantir que sigam um padrão, como o uso de palavras-chave específicas.

- **Husky**: Configura hooks no Git, permitindo executar tarefas como linting antes de um commit ou push.

- **Lint-Staged**: Executa scripts apenas nos arquivos alterados no momento do commit, economizando tempo e recursos.

- **Puppeteer**: É uma biblioteca JavaScript que fornece uma API de alto nível para controlar um navegador headless baseado no Chromium. Ela pode ser usada para criar scripts de automação, como o script de validação de página incluído nesse projeto, que verifica se a página inicial do projeto está renderizando corretamente.


## 🌐 Configuração do Vite
```js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@c': path.resolve('./src/components'),
      '@assets': path.resolve('./src/assets') 
      // (1) Cria alias para simplificar importações
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use './src/styles/_variables.scss' as *;` // (2) Importa automaticamente variáveis SCSS globais
      }
    }
  }
});
```


### Comentários sobre a Configuração

1. Em vez de usar caminhos longos como `"../../../assets/imagem.png"`, use `"@assets/imagem.png"` para importar de forma mais prática.

2. As variáveis definidas em `_variables.scss` são automaticamente incluídas em todos os arquivos SCSS, permitindo reutilizar cores e outras configurações sem precisar declará-las novamente. Use as variáveis com `$`.


## 🚀 Scripts Disponíveis

- `npm run dev`: Inicia o servidor de desenvolvimento para testar a aplicação localmente.

- `npm run build`: Cria a versão otimizada do projeto para produção.

- `npm run preview`: Pré-visualiza os arquivos gerados no build.

- `npm run lint`: Verifica e corrige problemas no código JavaScript e SCSS.

- `npm run lint:scss`: Executa apenas o linting dos arquivos SCSS.

- `npm run lint:scss:fix`: Corrige automaticamente problemas nos arquivos SCSS.

- `npm run commit`: Utiliza o Commitizen para criar mensagens de commit padronizadas.


## 📋 Informações Adicionais

### Personalização da Estrutura

A estrutura do projeto pode ser adaptada ou simplificada de acordo com as necessidades. Por exemplo, ferramentas como Husky e Lint-Staged podem ser removidas se não forem necessárias.

### Adição de Dependências

Você pode adicionar outras bibliotecas para funcionalidades específicas, como axios para requisições HTTP ou react-router-dom para roteamento.
Essa é apenas uma estrutura inicial para iniciar um projeto, pode adicionar ou remover bibliotecas.
