"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var date_fns_1 = require("date-fns");
var CreateAgendamentoService = /** @class */ (function () {
    function CreateAgendamentoService(agendamentosRepositorio) {
        this.agendamentosRepositorio = agendamentosRepositorio;
    }
    CreateAgendamentoService.prototype.execute = function (_a) {
        var data = _a.data, prestador = _a.prestador;
        var agendamentoData = date_fns_1.startOfHour(data);
        var filtroAgendamento = this.agendamentosRepositorio.filtrarData(agendamentoData);
        if (filtroAgendamento) {
            throw Error('Esse hórario ja está agendado!');
        }
        var agendamento = this.agendamentosRepositorio.create({
            prestador: prestador,
            data: agendamentoData,
        });
        return agendamento;
    };
    return CreateAgendamentoService;
}());
exports.default = CreateAgendamentoService;
