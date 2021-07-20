const geradorDeImagemRouter = require('./geradorDeImagem/geradorDeImagem.routes')
const express = require('express');


const routes = express.Router();

routes.get('/', (request, response) => {
    return response.status(200).json({ mensagem: 'success' });
}) 

routes.post('/v1/geradorDeImagem', geradorDeImagemRouter)


module.exports = routes;