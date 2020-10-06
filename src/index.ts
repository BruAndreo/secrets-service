import express from 'express';

const app: express.Application = express();

app.get('/', (req: Request, res: Response): Promise<Response> => res.json({ message: 'Hello!' }));

app.listen(3000, () => console.log('Server online at port: 3000'));
