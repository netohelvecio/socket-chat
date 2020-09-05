import { Router } from 'express';
import { uuid } from 'uuidv4';

import { rooms } from 'data';

const routes = Router();

routes.post('/room', (request, response) => {
  const { roomName } = request.body;

  const id = uuid();

  rooms.set(id, { id, name: roomName, users: []});

  return response.json({ roomId: id });
});

routes.get('/room/:roomId', (request, response) => {
  const { roomId } = request.params;

  const room = rooms.get(roomId);

  if (!room) {
    return response.status(400).json({ error: 'Sala inexistente.' });
  }

  return response.send();
});

export default routes;