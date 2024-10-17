const mongoose = require('mongoose');

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
    createdAt: { type: Date, default: Date.now },
    updatedAt: Date
  },
  isActive: { type: Boolean, default: true }
});

// Criar o modelo da página
const Page = mongoose.model('Page', pageSchema);

module.exports = Page;
