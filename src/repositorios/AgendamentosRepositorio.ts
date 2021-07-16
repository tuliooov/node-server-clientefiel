import Agendamento from '../models/Agendamento';
import { isEqual } from 'date-fns'

interface CreateAgendamentoDTO{
    prestador: string;
    data: Date;
}

class AgendamentoRepositorio {
    private agendamentos: Agendamento[];
    
    constructor(){
        this.agendamentos = [];
    }
    
    public all(): Agendamento[] {
        return this.agendamentos;
    }

    public filtrarData(data: Date): Agendamento | null {
        const filtroAgendamento = this.agendamentos.find(agendamento => 
            isEqual(data, agendamento.data),
        )
        return filtroAgendamento || null;
    }

    public create({prestador, data}: CreateAgendamentoDTO): Agendamento {
        const agendamento = new Agendamento({
            prestador,
            data,
        });

        this.agendamentos.push(agendamento);

        return agendamento;
    }
}

export default AgendamentoRepositorio