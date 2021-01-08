import express from 'express';
import { UserCtrl } from './controlers/UserController';
import { registerValidator } from './validations/rergister';



const app = express();

app.use(express.json())

app.get('/users', UserCtrl.index);
app.post('/users', registerValidator, UserCtrl.create);
//app.patch('/users', UserCtrl.patch);
//app.delete('/users', UserCtrl.delete);

app.listen(8000, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:8000`);
});