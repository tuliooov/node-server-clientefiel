// src/routes/index.ts
import { Router } from 'express';
// import { parseISO } from 'date-fns'
const { createCanvas, loadImage, Image } = require('canvas')
import AgendamentoRepositorio from '../repositorios/AgendamentosRepositorio'
import CreateAgendamentoService from '../services/CreateAgendamentoService'

//POST http:localhost:3333/agendamentos
const agendamentosRouter = Router();
const agendamentoRepositorio = new AgendamentoRepositorio()

agendamentosRouter.get('/', (request, response) => {
    // const agendamentos = agendamentoRepositorio.all()
    const logoEstabelecimento = new Image();
    logoEstabelecimento.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAIAAAACDbGyAAAAAXNSR0IArs4c6QAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAd0SU1FB9oMCRUiMrIBQVkAAAAZdEVYdENvbW1lbnQAQ3JlYXRlZCB3aXRoIEdJTVBXgQ4XAAAADElEQVQI12NgoC4AAABQAAEiE+h1AAAAAElFTkSuQmCC";

    const backGroundImage1920x1080 = new Image();
    backGroundImage1920x1080.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAIAAAACDbGyAAAAAXNSR0IArs4c6QAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAd0SU1FB9oMCRUiMrIBQVkAAAAZdEVYdENvbW1lbnQAQ3JlYXRlZCB3aXRoIEdJTVBXgQ4XAAAADElEQVQI12NgoC4AAABQAAEiE+h1AAAAAElFTkSuQmCC'

    const backGroundImage1500x1500 = new Image();
    backGroundImage1500x1500.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAIAAAACDbGyAAAAAXNSR0IArs4c6QAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAd0SU1FB9oMCRUiMrIBQVkAAAAZdEVYdENvbW1lbnQAQ3JlYXRlZCB3aXRoIEdJTVBXgQ4XAAAADElEQVQI12NgoC4AAABQAAEiE+h1AAAAAElFTkSuQmCC'

    const cupomImg = new Image();
    cupomImg.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAIAAAACDbGyAAAAAXNSR0IArs4c6QAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAd0SU1FB9oMCRUiMrIBQVkAAAAZdEVYdENvbW1lbnQAQ3JlYXRlZCB3aXRoIEdJTVBXgQ4XAAAADElEQVQI12NgoC4AAABQAAEiE+h1AAAAAElFTkSuQmCC'

    const canvas = createCanvas();
    canvas.height = 1920;
    canvas.width = 1080;
    const context = canvas.getContext("2d")




    context.drawImage(backGroundImage1920x1080, 0, 0)

    context.drawImage(logoEstabelecimento, 10, 10, 10, 10);

    context.font = `bold 18px Arial`;
    context.fillStyle = "black";
    context.textAlign = "center";
    const texto = 'test' //'pensaodohenrique.pedidosite.com.br'
    context.fillText(texto, 20, 20);



    context.fill();
    const dataURL = canvas.toDataURL()
    return response.json({ result: dataURL })
})

agendamentosRouter.post('/', (request, response) => {
    try {
        const { prestador, data } = request.body

        const dataParcial = 'parseISO(data)'

        const createAgendamento = new CreateAgendamentoService(agendamentoRepositorio)

        const agendamento = createAgendamento.execute({ data: dataParcial, prestador })

        return response.json(agendamento)
    } catch (error) {
        return response.status(400).json({ error: error.message })
    }
})

export default agendamentosRouter;
