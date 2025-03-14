# Reduzo Plataforma

Sistema de gestão para operações comerciais com controle de estoque, insumos e dashboard de métricas.

## Sobre o Projeto

A Reduzo Plataforma é um sistema completo para gestão de operações comerciais, focado em:

- Dashboard de métricas e indicadores
- Gestão de estoque e insumos
- Controle de fornecedores
- Gestão de vendas e orçamentos
- Relatórios gerenciais

## Tecnologias Utilizadas

- Next.js com App Router
- TypeScript
- Tailwind CSS
- Shadcn/UI
- Supabase (Auth e Database)

## Funcionalidades Implementadas

- Dashboard com visualização de métricas
- Gestão de insumos com filtros e ordenação
- Gráficos de barras e linhas para visualização de dados
- Interface responsiva

## Executando o Projeto

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev
```

Acesse `http://localhost:3000` para visualizar a aplicação.

## Estrutura do Projeto

- `/components` - Componentes reutilizáveis da UI
  - `/components/ui` - Componentes base da UI (button, card, input, etc.)
  - `/components/layout` - Componentes de layout
- `/app` - Páginas da aplicação usando o App Router do Next.js
  - `/app/dashboard` - Dashboard principal
  - `/app/insumos` - Gestão de insumos
- `/lib` - Utilitários e configurações