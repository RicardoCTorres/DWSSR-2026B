import express from 'express';
import {
  testLogs, 
  testException, 
  testRejection
}from './diagnostic.controller.js';

const diagRouter = express.Router();
//trest de novels de log
//get test-log
diagRouter.get('/test-logs', testLogs);

//prueva de manejo de expetion y rejections
//PRUEVA DE EXEPTIONS
//get test-exception
diagRouter.get('/test-exception', testException);
//prueva de la rejection
//get test-rejection
diagRouter.get('/test-rejection', testRejection);

export default diagRouter;
