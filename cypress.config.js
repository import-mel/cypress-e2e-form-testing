const { defineConfig } = require('cypress')

module.exports = defineConfig({ // CONFIGURANDO A ALTURA E LARGURA DO NAVEGADOR
  viewportHeight: 880,
  viewportWidth: 1280,
  e2e: {}
})
