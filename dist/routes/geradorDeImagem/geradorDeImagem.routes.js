"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/routes/index.ts
var express_1 = require("express");
var CupomRouter_1 = __importDefault(require("./CupomRouter"));
// import { parseISO } from 'date-fns'
var _a = require('canvas'), createCanvas = _a.createCanvas, loadImage = _a.loadImage, Image = _a.Image;
var geradorDeImagemRouter = express_1.Router();
geradorDeImagemRouter.get('/cupom', CupomRouter_1.default);
geradorDeImagemRouter.post('/cupom', CupomRouter_1.default);
exports.default = geradorDeImagemRouter;
