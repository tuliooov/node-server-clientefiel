"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Agendamento_1 = __importDefault(require("../models/Agendamento"));
var date_fns_1 = require("date-fns");
var AgendamentoRepositorio = /** @class */ (function () {
    function AgendamentoRepositorio() {
        this.agendamentos = [];
    }
    AgendamentoRepositorio.prototype.all = function () {
        return this.agendamentos;
    };
    AgendamentoRepositorio.prototype.filtrarData = function (data) {
        var filtroAgendamento = this.agendamentos.find(function (agendamento) {
            return date_fns_1.isEqual(data, agendamento.data);
        });
        return filtroAgendamento || null;
    };
    AgendamentoRepositorio.prototype.create = function (_a) {
        var prestador = _a.prestador, data = _a.data;
        var agendamento = new Agendamento_1.default({
            prestador: prestador,
            data: data,
        });
        this.agendamentos.push(agendamento);
        return agendamento;
    };
    return AgendamentoRepositorio;
}());
exports.default = AgendamentoRepositorio;
