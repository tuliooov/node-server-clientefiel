const geradorDeImagemRouter = require('./geradorDeImagem/geradorDeImagem.routes')
const cupomRouter = require('./geradorDeImagem/CupomRouter/index')
const express = require('express');


const routes = express.Router();

routes.use('/v1', geradorDeImagemRouter)

module.exports = routes;