import dotenv from 'dotenv';

require('./core/db');

import express from 'express';
import { UserCtrl } from './controllers/UserController';
import { registerValidator } from './validations/register';

dotenv.config();

const app = express();

app.use(express.json())

app.get('/users', UserCtrl.index);
app.post('/users', registerValidator, UserCtrl.create);
//app.patch('/users', UserCtrl.patch);
//app.delete('/users', UserCtrl.delete);

app.listen(8000, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:8000`);
});