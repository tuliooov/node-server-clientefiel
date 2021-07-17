// src/routes/index.ts
import { Router } from 'express';
import CupomRouter from './CupomRouter'
const geradorDeImagemRouter = Router();

geradorDeImagemRouter.get('/cupom', CupomRouter)
geradorDeImagemRouter.post('/cupom', CupomRouter)

export default geradorDeImagemRouter;
