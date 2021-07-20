const express = require('express')
const CupomRouter = require('./CupomRouter')
const geradorDeImagemRouter = express.Router();

geradorDeImagemRouter.get('/cupom', CupomRouter)
geradorDeImagemRouter.post('/cupom', CupomRouter)

module.exports = geradorDeImagemRouter;
