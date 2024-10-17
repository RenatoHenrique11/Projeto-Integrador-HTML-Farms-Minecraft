const Page = require('../models/pageModel');

// Função para buscar a página pelo slug
exports.getPageBySlug = async (req, res) => {
  try {
    const slug = req.params.slug || 'pagina-inicial'; // Padrão: página inicial
    const page = await Page.findOne({ slug });

    if (page && page.isActive) {
      res.render('index', { page });
    } else {
      res.status(404).send('Página não encontrada ou inativa');
    }
  } catch (error) {
    res.status(500).send('Erro no servidor');
  }
};
