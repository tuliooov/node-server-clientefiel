// src/routes/index.ts
const express = require('express')
const { createCanvas, loadImage, Image } = require('node-canvas')
const CupomRouter = express.Router();



CupomRouter.get('/cupom', (request, response, next) => {
    loadImage('http://s.4pda.to/pKugVJ7TmgG1Tg5z0SsVLfRCUqTAz2oqz1lz2z2co.jpg')
    .then((avatar) => {
      const canvas = createCanvas(500, 500)
      const ctx = canvas.getContext('2d')

      ctx.font = '30px Impact'
      ctx.rotate(0.1)
      ctx.fillText('Awesome!', 50, 100)
      ctx.drawImage(avatar, 50, 50)

      response.setHeader('Content-Type', 'image/png')
      canvas.createPNGStream().pipe(response)
    })
    .catch((err) => {
      next(err)
    })
})

CupomRouter.post('/cupom', async (request, response) => {

    try {
        const {
            body = {},
            headers = {}
        } = request

        const {
            codigoCupom= "DIADOAMIGO",
            valorDesconto = 0.0,
            valorDescontoPercentual = 60.0,
            valorPedidoMinimo = 50.0,
            visivelTelaInicial = false,
            maximoDesconto = 0.0,
            freteGratis = true,
            somenteApp= false,
            somenteSite= true
        } = body

        const {
            logo = "https://s3-sa-east-1.amazonaws.com/clientefielsp/dados_aplicativos//20200403142244.png",
            corPrimaria = "red",
            corSecundaria = "black",
        } = headers

        console.log('body', body)
        console.log('headers', headers)

        const background = await loadImage('./src/routes/geradorDeImagem/CupomRouter/cupom-stories.png')
        const logoImg = await loadImage(logo)
        
        const canvas = createCanvas(1080, 1920);
        const context = canvas.getContext("2d")

        
        

        context.drawImage(background, 0, 0);
        
        
        context.beginPath();
        context.arc((canvas.width / 2), (canvas.height / 2)-610, 170, 0, 2 * Math.PI, false);
        context.fillStyle = '#f7f7f7';
        context.fill();
        context.beginPath();
        
        context.drawImage(logoImg, (540-300/2), 200, 300, 300);



        context.beginPath();
        context.arc(0, 0, 260, 0, 2 * Math.PI, false);
        context.fillStyle = `${corPrimaria}`;
        context.fill();
        context.beginPath();

        context.beginPath();
        context.arc(1080, 860, 190, 0, 2 * Math.PI, false);
        context.fillStyle = `${corPrimaria}`;
        context.fill();
        context.beginPath();

        context.beginPath();
        context.arc(0, 1400, 185, 0, 2 * Math.PI, false);
        context.fillStyle = `${corPrimaria}`;
        context.fill();
        context.beginPath();


        context.beginPath();
        context.arc(0, 1140, 60, 0, 2 * Math.PI, false);
        context.fillStyle = `${corSecundaria}`;
        context.fill();
        context.beginPath();

        if(valorDesconto){
            context.font = `bold 200px arial`;
            context.fillStyle = "black";
            context.textAlign = "center";
            var textoValor = "R$ "+ valorDesconto
            textoValor = textoValor.replace('.',',')
            if(textoValor.indexOf(',') && textoValor.substr(textoValor.indexOf(',')+1, textoValor.length).length === 1){
                textoValor+='0'
            }
            context.fillText(textoValor, 535, 800);
            context.fill();
        }else if(valorDescontoPercentual){
            context.font = `bold 200px arial`;
            context.fillStyle = "black";
            context.textAlign = "center";
            var textoValor = parseInt(valorDescontoPercentual)+"%" 
            context.fillText(textoValor, 535, 800);
            context.fill();
        }

        context.font = `100px arial`;
        context.fillStyle = "black";
        context.textAlign = "center";
        var textoValor = "de desconto"
        context.fillText(textoValor, 535, 900);
        context.fill();

        
        if(freteGratis){
            context.font = `100px arial`;
            context.fillStyle = "black";
            context.textAlign = "center";
            var textoValor = "+ frete grátis"
            context.fillText(textoValor, 535, 1010);
            context.fill();
        }

        if(valorPedidoMinimo){
            context.font = `50px arial`;
            context.fillStyle = "black";
            context.textAlign = "center";
            var textoValor = "R$ "+ valorPedidoMinimo
            textoValor = textoValor.replace('.',',')
            if(textoValor.indexOf(',') && textoValor.substr(textoValor.indexOf(',')+1, textoValor.length).length === 1){
                textoValor+='0'
            }
            textoValor = "* Acima de " + textoValor
            context.fillText(textoValor, 535, 1100);
            context.fill();
        }

        if(somenteSite || somenteApp){
            context.font = `60px arial`;
            context.fillStyle = "white";
            context.textAlign = "center";
            var textoValor = somenteSite ? "* Apenas no Site" : "* Apenas no App"
            context.fillText(textoValor, 535, 1850);
            context.fill();
        }
        


        context.font = `bold 120px arial`;
        context.fillStyle = "white";
        context.textAlign = "center";
        context.fillText(codigoCupom.toUpperCase(), 535, 1725);
        context.fill();

        const dataURL = canvas.toDataURL()
        return response.json({ error: false, result: dataURL })
    } catch (error) {
        return response.status(400).json({ error: error.message, result: null })
    }
})

module.exports = CupomRouter;
