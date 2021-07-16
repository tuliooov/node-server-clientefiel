import { uuid } from 'uuidv4';

class Agendamento {
    id: string;

    prestador: string;

    data: Date;

    constructor( {prestador, data} : Omit<Agendamento, 'id'>){
        this.id = uuid();
        this.prestador = prestador;
        this.data = data;
    }
}

export default Agendamento;