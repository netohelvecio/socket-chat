import express from 'express';
import cors from 'cors';

import routes from './routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.use('/', (request, response) => {
  return response.json({ message: 'Bem-vindo ao SocketChat' });
});


export default app;