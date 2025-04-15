import express from 'express';
import upload from '../../util/file.js';
import NumberPlateController from './numberPlate.controller.js';

const numberRouter = express.Router();
const controller = new NumberPlateController();


numberRouter.post('/upload', upload.single('numberplate'), controller.createNewEntry);
numberRouter.get('/getAll', controller.getAllEntries);
numberRouter.get('/getByNumber/:number', controller.getEntryByNumber);
numberRouter.get('/getImage/:filename', controller.getImage);

export default numberRouter;