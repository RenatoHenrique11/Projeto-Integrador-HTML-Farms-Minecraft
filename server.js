const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

// Configurar o motor de visualização EJS
app.set('view engine', 'ejs');
app.use(express.static('public'));

mongoose.connect('mongodb://localhost:27017/website_dynamic')
  .then(() => console.log('Conectado ao MongoDB'))
  .catch(err => console.error('Erro ao conectar ao MongoDB', err));


// Definir o schema e modelo da página
const pageSchema = new mongoose.Schema({
  title: String,
  slug: String,
  content: {
    header: {
      logo: String,
      menu: [{ text: String, link: String }]
    },
    sliderImages: [{ src: String, alt: String }],
    nav: {
      sectionTitle: String,
      links: [String]
    },
    article: {
      title: String,
      content: [{ imgSrc: String, text: String }]
    },
    videoSlider: [{ src: String, title: String }],
    footer: {
      copyright: String,
      question: String
    }
  },
  metadata: {
    author: String,
    createdAt: Date,
    updatedAt: Date
  },
  isActive: Boolean
});

const Page = mongoose.model('Page', pageSchema);

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
