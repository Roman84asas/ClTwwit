import dotenv from 'dotenv';
dotenv.config();

require('./core/db');
import express from 'express';
import { UserCtrl } from './controllers/UserController';
import { registerValidator } from './validations/register';



const app = express();

app.use(express.json())

app.get('/users', UserCtrl.index);
app.post('/users', registerValidator, UserCtrl.create);
app.get('/verify', registerValidator, UserCtrl.verify);
app.get('/user/:id', registerValidator, UserCtrl.show);
//app.patch('/users', UserCtrl.patch);
//app.delete('/users', UserCtrl.delete);

app.listen(process.env.PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:8000`);
});