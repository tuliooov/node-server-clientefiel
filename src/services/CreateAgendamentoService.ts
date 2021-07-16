import Agendamento from '../models/Agendamento'
import AgendamentosRepositorio from '../repositorios/AgendamentosRepositorio'
import { startOfHour } from 'date-fns'

interface RequestDTO {
    prestador: string;
    data: Date;
}


class CreateAgendamentoService {
    private agendamentosRepositorio: AgendamentosRepositorio;

    constructor(agendamentosRepositorio: AgendamentosRepositorio) {
        this.agendamentosRepositorio = agendamentosRepositorio
    }

    public execute( {data, prestador} : RequestDTO ): Agendamento {
        const agendamentoData = startOfHour(data)

        const filtroAgendamento = this.agendamentosRepositorio.filtrarData(agendamentoData)

        if(filtroAgendamento){  
            throw Error('Esse hórario ja está agendado!')
        }

        const agendamento = this.agendamentosRepositorio.create({
            prestador,
            data: agendamentoData,
        })

        return agendamento
    }
}

export default CreateAgendamentoService