# Atualização de Stack - Roadmap e Melhores Práticas

## 📋 Resumo das Atualizações

Este documento descreve as atualizações realizadas no projeto portfolio-netlify, seguindo as melhores práticas do mercado em 2024.

## 🔄 1. Atualizações de Versões

### Core Dependencies
- **Vue.js**: 3.2.45 → **3.4.19** (versão estável mais recente)
- **Vite**: 4.0.4 → **5.4.11** (major update com melhorias de performance)
- **Vuetify**: 3.1.0 → **3.7.3** (correções e novos componentes)

### Build & Development Tools
- **Storybook**: 7.0.0-beta.36 → **7.6.20** (versão estável LTS, v8+ tem problemas com Yarn PnP)
- **ESLint**: 8.33.0 → **9.15.0** (suporte ao novo Flat Config)
- **Prettier**: 2.8.3 → **3.4.1** (melhorias de formatação)
- **Stylelint**: 14.16.1 → **16.11.0** (major update)
- **Sass**: 1.57.1 → **1.81.0** (suporte à nova API)

### Outros Pacotes
- **@vitejs/plugin-vue**: 4.0.0 → **5.1.0**
- **vite-plugin-vuetify**: 1.0.2 → **2.0.4**
- **Maska**: 2.1.7 → **3.0.0**

## 🚀 2. Netlify - Configuração Moderna

### Mudanças em `netlify.toml`:
- ✅ Adicionado comentários descritivos
- ✅ Configurado headers de segurança (X-Frame-Options, CSO, XSS Protection)
- ✅ Adicionado cache control para assets estáticos
- ✅ Melhorada configuração de redirects para SPA
- ✅ Adicionado porta do servidor de desenvolvimento

### Novo arquivo `public/_redirects`:
- ✅ Criado arquivo de redirects como backup
- ✅ Garante funcionamento correto do client-side routing

## ✨ 3. Melhores Práticas Implementadas

### A. Configuração do Vite (`vite.config.js`)
```javascript
// Melhorias implementadas:
- Code splitting manual (vendor, vuetify)
- Uso da nova API do Sass (modern-compiler)
- Sourcemaps desabilitados em produção para performance
```

### B. Configuração de Linting
**Prettier (`.prettierrc`)**:
- Adicionado `printWidth: 80`
- Adicionado `endOfLine: 'lf'` para consistência cross-platform

**Stylelint (`.stylelintrc`)**:
- Migrado para `stylelint-config-standard` v36
- Adicionado `no-descending-specificity: null` (regra muito restritiva)
- Mantida compatibilidade com Vue e SCSS

### C. Scripts do Package.json
```json
{
  "dev": "vite",                    // Comando mais intuitivo
  "serve": "vite preview",          // Preview de build
  "lint:fix": "..."                 // Atalho para fix all
}
```

### D. Yarn Configuration
- ✅ Desabilitado `enableImmutableInstalls` para desenvolvimento local
- ✅ Mantido Yarn Berry (v3) para compatibilidade

## 📚 4. Estrutura do Projeto (Mantida)

```
portfolio-netlify/
├── .storybook/          # Configuração do Storybook
├── public/              # Assets estáticos
│   └── _redirects       # Configuração de rotas (NOVO)
├── src/
│   ├── assets/          # Imagens, fontes, etc.
│   ├── components/      # Componentes Vue reutilizáveis
│   ├── plugins/         # Plugins Vue (Vuetify, etc.)
│   ├── styles/          # Estilos globais e SCSS
│   ├── views/           # Páginas/Views da aplicação
│   ├── App.vue          # Componente raiz
│   └── main.js          # Entry point
├── netlify.toml         # Configuração do Netlify (ATUALIZADO)
├── vite.config.js       # Configuração do Vite (ATUALIZADO)
└── package.json         # Dependências (ATUALIZADO)
```

## 🔍 5. Pontos de Atenção

### Avisos de Peer Dependencies
Alguns avisos de peer dependencies são esperados:
- Storybook não fornece `vue` diretamente (está no projeto)
- ESLint plugin storybook não requer TypeScript (opcional)

### Sass @import deprecation
- ⚠️ Os arquivos SCSS ainda usam `@import`
- 📝 Recomendação futura: migrar para `@use` e `@forward`
- 🔗 [Sass Module System](https://sass-lang.com/documentation/at-rules/use)

### Storybook e Yarn PnP
- ⚠️ Storybook tem incompatibilidades conhecidas com Yarn PnP
- 📝 Solução: Usar `nodeLinker: node-modules` no `.yarnrc.yml`
- 🔗 Ver arquivo `KNOWN_ISSUES.md` para mais detalhes

## 🛠️ 6. Como Usar

### Instalação
```bash
yarn install
```

### Desenvolvimento
```bash
yarn dev                  # Inicia servidor de desenvolvimento
yarn storybook           # Inicia Storybook
```

### Build
```bash
yarn build               # Build completo (Vite + Storybook)
yarn build-vite          # Build apenas Vite
yarn build-storybook     # Build apenas Storybook
```

### Linting
```bash
yarn lint                # Verifica todos os arquivos
yarn lint:fix            # Corrige automaticamente
```

### Deploy
```bash
yarn netlify             # Inicia Netlify Dev (local)
```

## 🎯 7. Próximos Passos Sugeridos

1. **Migrar Sass @import para @use** 
   - Atualizar `src/styles/` para usar nova sintaxe

2. **Adicionar TypeScript** (opcional)
   - Melhor type safety
   - Autocomplete aprimorado

3. **Configurar ESLint Flat Config**
   - Migrar `.eslintrc.js` para `eslint.config.mjs`
   - Usar nova API do ESLint 9

4. **Adicionar testes unitários**
   - Vitest (recomendado com Vite)
   - Vue Test Utils

5. **Performance**
   - Implementar lazy loading de rotas
   - Adicionar PWA support

## 📖 8. Recursos e Documentação

- [Vue 3 Documentation](https://vuejs.org/)
- [Vite Documentation](https://vite.dev/)
- [Vuetify 3 Documentation](https://vuetifyjs.com/)
- [Storybook Documentation](https://storybook.js.org/)
- [Netlify Documentation](https://docs.netlify.com/)

## 🔐 9. Segurança

Headers de segurança implementados:
- `X-Frame-Options: SAMEORIGIN` - Permite frames da mesma origem (necessário para Storybook funcionar)
- `X-Content-Type-Options: nosniff` - Previne MIME sniffing
- `X-XSS-Protection: 1; mode=block` - Proteção contra XSS
- `Referrer-Policy: strict-origin-when-cross-origin` - Controla referrer
- `Permissions-Policy` - Desabilita APIs desnecessárias

**Nota**: O site usa `X-Frame-Options: SAMEORIGIN` que previne que sites externos incorporem o app em iframes, mas permite que o próprio Storybook exiba componentes em iframes para preview. Esta configuração oferece boa proteção contra clickjacking enquanto mantém a funcionalidade do Storybook.

## ✅ 10. Conclusão

Todas as stacks foram atualizadas para as versões mais recentes e estáveis de 2024. O projeto está seguindo as melhores práticas do mercado, mantendo simplicidade para desenvolvedores junior compreenderem, enquanto aplica conceitos seniores de arquitetura e configuração.

---

**Última atualização**: Novembro 2024  
**Versão do Node.js recomendada**: LTS (via `.nvmrc`)  
**Gerenciador de pacotes**: Yarn 3.3.1+
