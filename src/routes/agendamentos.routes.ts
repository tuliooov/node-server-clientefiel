// src/routes/index.ts
import { Router } from 'express';
// import { parseISO } from 'date-fns'
import AgendamentoRepositorio from '../repositorios/AgendamentosRepositorio'
import CreateAgendamentoService from '../services/CreateAgendamentoService'

//POST http:localhost:3333/agendamentos
const agendamentosRouter = Router();
const agendamentoRepositorio = new AgendamentoRepositorio()

agendamentosRouter.get('/', (request, response) => {
    
})

agendamentosRouter.post('/', (request, response) => {
    // try {
    //     const { prestador, data } = request.body

    //     const dataParcial = 'parseISO(data)'

    //     const createAgendamento = new CreateAgendamentoService(agendamentoRepositorio)

    //     const agendamento = createAgendamento.execute({ data: dataParcial, prestador })

    //     return response.json(agendamento)
    // } catch (error) {
    //     return response.status(400).json({ error: error.message })
    // }
})

export default agendamentosRouter;
