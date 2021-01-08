import express from 'express';

const app = express();

app.get('/', (_: express.Request, res: express.Response) => {
    res.send('Hello!');
});

app.listen(8000, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:8000`);
});