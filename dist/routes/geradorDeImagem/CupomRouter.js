"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/routes/index.ts
var express_1 = require("express");
// import { parseISO } from 'date-fns'
var _a = require('canvas'), createCanvas = _a.createCanvas, loadImage = _a.loadImage, Image = _a.Image;
var CupomRouter = express_1.Router();
CupomRouter.get('/cupom', function (request, response) {
    return response.json({ result: null });
});
CupomRouter.post('/cupom', function (request, response) {
    try {
        var logoEstabelecimento = new Image();
        logoEstabelecimento.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAIAAAACDbGyAAAAAXNSR0IArs4c6QAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAd0SU1FB9oMCRUiMrIBQVkAAAAZdEVYdENvbW1lbnQAQ3JlYXRlZCB3aXRoIEdJTVBXgQ4XAAAADElEQVQI12NgoC4AAABQAAEiE+h1AAAAAElFTkSuQmCC";
        var backGroundImage1920x1080 = new Image();
        backGroundImage1920x1080.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAIAAAACDbGyAAAAAXNSR0IArs4c6QAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAd0SU1FB9oMCRUiMrIBQVkAAAAZdEVYdENvbW1lbnQAQ3JlYXRlZCB3aXRoIEdJTVBXgQ4XAAAADElEQVQI12NgoC4AAABQAAEiE+h1AAAAAElFTkSuQmCC';
        var backGroundImage1500x1500 = new Image();
        backGroundImage1500x1500.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAIAAAACDbGyAAAAAXNSR0IArs4c6QAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAd0SU1FB9oMCRUiMrIBQVkAAAAZdEVYdENvbW1lbnQAQ3JlYXRlZCB3aXRoIEdJTVBXgQ4XAAAADElEQVQI12NgoC4AAABQAAEiE+h1AAAAAElFTkSuQmCC';
        var cupomImg = new Image();
        cupomImg.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAIAAAACDbGyAAAAAXNSR0IArs4c6QAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAd0SU1FB9oMCRUiMrIBQVkAAAAZdEVYdENvbW1lbnQAQ3JlYXRlZCB3aXRoIEdJTVBXgQ4XAAAADElEQVQI12NgoC4AAABQAAEiE+h1AAAAAElFTkSuQmCC';
        var canvas = createCanvas();
        canvas.height = 1920;
        canvas.width = 1080;
        var context = canvas.getContext("2d");
        context.drawImage(backGroundImage1920x1080, 0, 0);
        context.drawImage(logoEstabelecimento, 10, 10, 10, 10);
        context.font = "bold 18px Arial";
        context.fillStyle = "black";
        context.textAlign = "center";
        var texto = 'test'; //'pensaodohenrique.pedidosite.com.br'
        context.fillText(texto, 20, 20);
        context.fill();
        var dataURL = canvas.toDataURL();
        return response.json({ error: false, result: dataURL });
    }
    catch (error) {
        return response.status(400).json({ error: error.message, result: null });
    }
});
exports.default = CupomRouter;
