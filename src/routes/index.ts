// src/routes/index.ts
import { Router } from 'express';
import agendamentosRouter from './agendamentos.routes'
import geradorDeImagemRouter from './geradorDeImagem/geradorDeImagem.routes'

const routes = Router();

routes.use('/agendamentos', agendamentosRouter);
routes.use('/geradorDeImagem', geradorDeImagemRouter);

export default routes;
