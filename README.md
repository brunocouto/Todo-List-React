# Dashboard de Tarefas (Todo List)

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)

Um dashboard moderno e interativo para gerenciamento de tarefas, construído com React.js e Styled Components.

## 📋 Funcionalidades

- ✨ Interface moderna e responsiva
- 📊 Dashboard com estatísticas em tempo real
- 📅 Gerenciamento de tarefas com data e hora
- 🔍 Filtros temporais (Hoje, Semana, Mês)
- 📈 Visualização de progresso com gráficos
- 💾 Persistência local de dados
- 🎯 Acompanhamento de tarefas concluídas e pendentes
- ⏰ Monitoramento de tarefas atrasadas

## 🚀 Tecnologias Utilizadas

- **React.js** - Biblioteca JavaScript para construção de interfaces
- **Vite** - Build tool e bundler moderno
- **Styled Components** - Biblioteca para estilização com CSS-in-JS
- **LocalStorage API** - Para persistência de dados local
- **Date-fns** - Manipulação de datas

## 📦 Dependências

```json
{
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "styled-components": "^6.0.7"
  },
  "devDependencies": {
    "@types/react": "^18.2.43",
    "@types/react-dom": "^18.2.17",
    "@vitejs/plugin-react": "^4.2.1",
    "vite": "^5.0.8"
  }
}
```

## 🛠️ Instalação

1. Clone o repositório:
\`\`\`bash
git clone [URL_DO_REPOSITÓRIO]
\`\`\`

2. Entre no diretório do projeto:
\`\`\`bash
cd todo-list
\`\`\`

3. Instale as dependências:
\`\`\`bash
npm install
\`\`\`

4. Inicie o servidor de desenvolvimento:
\`\`\`bash
npm run dev
\`\`\`

## 🎯 Uso

1. **Adicionar Tarefa**
   - Digite o texto da tarefa
   - Selecione data e hora
   - Clique em "Adicionar"

2. **Gerenciar Tarefas**
   - Marque tarefas como concluídas
   - Exclua tarefas
   - Visualize data e hora de cada tarefa

3. **Filtrar Tarefas**
   - Todas as tarefas
   - Tarefas de hoje
   - Tarefas da semana
   - Tarefas do mês

4. **Visualizar Estatísticas**
   - Total de tarefas
   - Tarefas concluídas
   - Tarefas pendentes
   - Taxa de conclusão
   - Distribuição temporal

## 📊 Estrutura do Projeto

```
todo-list/
├── src/
│   ├── components/
│   │   └── ...
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── public/
├── package.json
├── vite.config.js
└── README.md
```

## 🎨 Features do Dashboard

### Estatísticas Gerais
- Total de tarefas
- Tarefas concluídas
- Tarefas pendentes
- Barras de progresso visuais

### Visão Geral do Progresso
- Taxa de conclusão
- Tarefas concluídas
- Tarefas atrasadas
- Próximas tarefas

### Distribuição Temporal
- Tarefas de hoje
- Tarefas da semana
- Tarefas do mês
- Total geral

## 💡 Recursos Visuais

- Animações suaves
- Gradientes modernos
- Feedback visual interativo
- Design responsivo
- Temas consistentes
- Ícones intuitivos

## 🔄 Estado e Persistência

- Gerenciamento de estado com React Hooks
- Persistência local com LocalStorage
- Atualizações em tempo real
- Ordenação automática por data

## 🌟 Melhorias Futuras

- [ ] Implementar sistema de categorias
- [ ] Adicionar notificações
- [ ] Sincronização com backend
- [ ] Temas personalizáveis
- [ ] Compartilhamento de tarefas
- [ ] Modo offline
- [ ] Exportação de dados

## 📱 Responsividade

O dashboard é totalmente responsivo e se adapta a diferentes tamanhos de tela:
- Desktop
- Tablet
- Mobile

## 🤝 Contribuição

1. Faça um Fork do projeto
2. Crie uma Branch para sua Feature (`git checkout -b feature/AmazingFeature`)
3. Faça o Commit das suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Faça o Push para a Branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👨‍💻 Autor

Bruno Couto - [brunocoutoengenheirodesoftware@gmail.com](mailto:brunocoutoengenheirodesoftware@gmail.com)

---

⭐️ Se este projeto te ajudou, considere dar uma estrela!
