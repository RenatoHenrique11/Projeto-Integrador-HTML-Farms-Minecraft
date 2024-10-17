const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

// Configurar o motor de visualização EJS
app.set('view engine', 'ejs');

// Servir arquivos estáticos da pasta 'public'
app.use(express.static('public'));

// Conectar ao MongoDB Atlas
mongoose.connect('mongodb+srv://miguel_adm:202655@cluster0.vxchf.mongodb.net/website_dynamic?retryWrites=true&w=majority')
  .then(() => console.log('Conectado ao MongoDB Atlas'))
  .catch(err => console.error('Erro ao conectar ao MongoDB Atlas', err));

// Importar o modelo Page
const Page = require('./models/pageModel.js');

// Rota para a página inicial (slug: pagina-inicial)
app.get('/', async (req, res) => {
  try {
    const page = await Page.findOne({ slug: "pagina-inicial" });
    if (page && page.isActive) {
      res.render('index', { page });
    } else {
      res.status(404).send('Página inicial não encontrada ou inativa');
    }
  } catch (error) {
    res.status(500).send('Erro no servidor');
  }
});

// Rota para páginas dinâmicas baseadas no slug
app.get('/:slug', async (req, res) => {
  try {
    const slug = req.params.slug;
    const page = await Page.findOne({ slug });

    if (page && page.isActive) {
      res.render('index', { page });
    } else {
      res.status(404).send('Página não encontrada ou inativa');
    }
  } catch (error) {
    res.status(500).send('Erro no servidor');
  }
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
