// src/routes/index.ts
const express = require('express')
const { createCanvas, loadImage, Image } = require('node-canvas')
const CupomRouter = express.Router();



CupomRouter.get('/feed', (request, response) => {
    return response.status(200).json({ mensagem: 'success' });
})

CupomRouter.post('/feed', async (request, response) => {

    try {
        const {
            body = {},
            headers = {}
        } = request

        const {
            codigoCupom = "DIADOAMIGO",
            valorDesconto = 0.0,
            valorDescontoPercentual = 60.0,
            valorPedidoMinimo = 50.0,
            visivelTelaInicial = false,
            maximoDesconto = 0.0,
            freteGratis = true,
            somenteApp = false,
            somenteSite = true
        } = body

        const {
            logo = "https://s3-sa-east-1.amazonaws.com/clientefielsp/dados_aplicativos//20200403142244.png",
            corprimaria = "red",
            corsecundaria = "#2d2d2d",
        } = headers

        console.log('body', body)
        console.log('headers', headers)

        const background = await loadImage('./api/geradorDeImagem/CupomRouter/cupom-feed.png')
        const logoImg = await loadImage(logo)

        const canvas = createCanvas(1000, 1000);
        const context = canvas.getContext("2d")




        context.drawImage(background, 0, 0);


        context.beginPath();
        context.arc((canvas.width / 2), (canvas.height / 2) - 350, 100, 0, 2 * Math.PI, false);
        context.fillStyle = '#f7f7f7';
        context.fill();
        context.beginPath();

        context.drawImage(logoImg, (575 - 300 / 2), 75, 150, 150);



        context.beginPath();
        context.arc(0, 0, 150, 0, 2 * Math.PI, false);
        context.fillStyle = `${corprimaria}`;
        context.fill();
        context.beginPath();

        context.beginPath();
        context.arc(1000, 700, 100, 0, 2 * Math.PI, false);
        context.fillStyle = `${corprimaria}`;
        context.fill();
        context.beginPath();


        context.beginPath();
        context.arc(0, 600, 60, 0, 2 * Math.PI, false);
        context.fillStyle = `${corsecundaria}`;
        context.fill();
        context.beginPath();

        if (valorDesconto) {
            context.font = `bold 100px Roboto`;
            context.fillStyle = "#2d2d2d";
            context.textAlign = "center";
            var textoValor = "R$ " + valorDesconto
            textoValor = textoValor.replace('.', ',')
            if (textoValor.indexOf(',') && textoValor.substr(textoValor.indexOf(',') + 1, textoValor.length).length === 1) {
                textoValor += '0'
            }
            context.fillText(textoValor, 500, 400);
            context.fill();
        } else if (valorDescontoPercentual) {
            context.font = `bold 100px Roboto`;
            context.fillStyle = "#2d2d2d";
            context.textAlign = "center";
            var textoValor = parseInt(valorDescontoPercentual) + "%"
            context.fillText(textoValor, 500, 400);
            context.fill();
        }

        context.font = `60px Roboto`;
        context.fillStyle = "#2d2d2d";
        context.textAlign = "center";
        var textoValor = "de desconto"
        context.fillText(textoValor, 500, 480);
        context.fill();


        if (freteGratis) {
            context.font = `60px Roboto`;
            context.fillStyle = "#2d2d2d";
            context.textAlign = "center";
            var textoValor = "+ frete grátis"
            context.fillText(textoValor, 500, 550);
            context.fill();
        }

        if (valorPedidoMinimo) {
            context.font = `30px Roboto`;
            context.fillStyle = "#2d2d2d";
            context.textAlign = "center";
            var textoValor = "R$ " + valorPedidoMinimo
            textoValor = textoValor.replace('.', ',')
            if (textoValor.indexOf(',') && textoValor.substr(textoValor.indexOf(',') + 1, textoValor.length).length === 1) {
                textoValor += '0'
            }
            textoValor = "* Acima de " + textoValor
            context.fillText(textoValor, 500, 630);
            context.fill();
        }

        if (somenteSite || somenteApp) {
            context.font = `30px Roboto`;
            context.fillStyle = "#2d2d2d";
            context.textAlign = "center";
            var textoValor = somenteSite ? "* Apenas no Site" : "* Apenas no App"
            context.fillText(textoValor, 500, 680);
            context.fill();
        }



        context.font = `bold 80px Roboto`;
        context.fillStyle = "white";
        context.textAlign = "center";
        context.fillText(codigoCupom.toUpperCase(), 500, 950);
        context.fill();

        const dataURL = canvas.toDataURL()
        return response.json({ error: false, result: dataURL })
    } catch (error) {
        return response.status(400).json({ error: error.message, result: null })
    }
})

module.exports = CupomRouter;
