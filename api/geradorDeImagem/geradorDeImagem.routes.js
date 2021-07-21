const express = require('express')
const CupomRouter = require('./CupomRouter')
const geradorDeImagemRouter = express.Router();

//Cupom
geradorDeImagemRouter.use('/geradorDeImagem', CupomRouter)

module.exports = geradorDeImagemRouter;
