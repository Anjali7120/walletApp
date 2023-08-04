import { Router } from 'express';
import walletRoutes from './wallet'
const router = new Router();

walletRoutes(router)

export default router;

