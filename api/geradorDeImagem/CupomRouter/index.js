const express = require('express')
const CupomStories = require('./stories')
const CupomFeed = require('./feed')
const geradorDeImagemRouter = express.Router();

//Cupom
geradorDeImagemRouter.use('/cupom', CupomStories)
geradorDeImagemRouter.use('/cupom', CupomFeed)

module.exports = geradorDeImagemRouter;
