"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/routes/index.ts
var express_1 = require("express");
// import { parseISO } from 'date-fns'
var _a = require('canvas'), createCanvas = _a.createCanvas, loadImage = _a.loadImage, Image = _a.Image;
var AgendamentosRepositorio_1 = __importDefault(require("../repositorios/AgendamentosRepositorio"));
//POST http:localhost:3333/agendamentos
var agendamentosRouter = express_1.Router();
var agendamentoRepositorio = new AgendamentosRepositorio_1.default();
agendamentosRouter.get('/', function (request, response) {
    // const agendamentos = agendamentoRepositorio.all()
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
    return response.json({ result: dataURL });
});
agendamentosRouter.post('/', function (request, response) {
    // try {
    //     const { prestador, data } = request.body
    //     const dataParcial = 'parseISO(data)'
    //     const createAgendamento = new CreateAgendamentoService(agendamentoRepositorio)
    //     const agendamento = createAgendamento.execute({ data: dataParcial, prestador })
    //     return response.json(agendamento)
    // } catch (error) {
    //     return response.status(400).json({ error: error.message })
    // }
});
exports.default = agendamentosRouter;
