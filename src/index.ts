import express, { Application, Request, Response} from 'express';

const app: Application = express();

function endpoint(req: Request, res: Response): Response {
  const message: string = 'oi';

  return res.json({ message });
}

app.get('/', endpoint);

app.listen(3000, () => console.log('Server online at port: 3000'));
