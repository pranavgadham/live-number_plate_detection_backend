import express from 'express';
import dotenv from 'dotenv';
import numberRouter from './src/feature/numberplate/numberPlate.route.js';
import cors from 'cors';

dotenv.config();

const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true,  limit: '200mb' }));
app.use(express.json({ limit: '200mb' }));
app.use(cors({ origin: '*' }));

app.use('/api/v1/numberplate', numberRouter);

export default app;
