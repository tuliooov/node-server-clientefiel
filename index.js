const routes = require('./api/routes')
const express = require('express')
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()
// const express = require('express')
const cors = require('cors');
const path = require('path')
const PORT = 5000


express()
  .use(cors())
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  // .get('/', (req, res) => res.render('pages/index')) 
  .get('/', (request, response) => {
    return response.status(200).json({ mensagem: 'success' });
  })
  .use('/', jsonParser, routes)
  .listen(PORT, '0.0.0.0', () => console.log(`Listening on ${PORT}`))
