"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/routes/index.ts
var express_1 = require("express");
var agendamentos_routes_1 = __importDefault(require("./agendamentos.routes"));
var geradorDeImagem_routes_1 = __importDefault(require("./geradorDeImagem/geradorDeImagem.routes"));
var routes = express_1.Router();
routes.use('/agendamentos', agendamentos_routes_1.default);
routes.use('/geradorDeImagem', geradorDeImagem_routes_1.default);
exports.default = routes;
