"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var uuidv4_1 = require("uuidv4");
var Agendamento = /** @class */ (function () {
    function Agendamento(_a) {
        var prestador = _a.prestador, data = _a.data;
        this.id = uuidv4_1.uuid();
        this.prestador = prestador;
        this.data = data;
    }
    return Agendamento;
}());
exports.default = Agendamento;
