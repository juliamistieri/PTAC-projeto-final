# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh




/* Estilo para a barra de navegação */
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  background-color: #333; /* Cor de fundo da barra de navegação */
  padding: 10px;
  z-index: 1000; /* Certifique-se de que a barra de navegação esteja acima de outros elementos */
}

/* Estilo para os itens da barra de navegação */
.nav-item {
  display: inline-block;
  margin-right: 20px;
  color: #fff; /* Cor do texto */
  text-decoration: none;
}

/* Estilo específico para os itens desejados (Home, Em Destaque, Novo Vídeo) */
#home, #destaque, #novo-video {
  font-weight: bold;
}

/* Exemplo de estilo para o corpo da página */
body {
  margin-top: 60px; /* Para evitar que o conteúdo seja sobreposto pela barra de navegação */
}
