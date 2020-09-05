import http from 'http';
import socket from 'socket.io';

import app from 'app';
import { rooms } from 'data';
import { ICreateRoom, ILeaveRoom } from './@types/interfaces';

const server = http.createServer(app);
const io = socket(server);

io.on('connection', socket => {
  socket.on('createOrJoinRoom', (createRoom: ICreateRoom) => {
    socket.roomId = createRoom.roomId;

    socket.join(socket.roomId);

    rooms.get(socket.roomId)?.users.push({ id: socket.id, name: createRoom.userName });
    
    console.log(`Sala: ${socket.roomId} user: ${createRoom.userName}`);

    io.to(socket.roomId).emit('userJoinedData', {
      user: createRoom.userName,
    });

    io.to(socket.roomId).emit('roomInfo', rooms.get(socket.roomId));
  });

  socket.on('leaveRoom', (leaveRoom: ILeaveRoom) => {
    socket.roomId = leaveRoom.roomId;

    const userIndex = rooms.get(socket.roomId)?.users.findIndex(user => user.id === leaveRoom.userId);

    if (userIndex) {
      rooms.get(socket.roomId)?.users.splice(userIndex, 1);

      socket.leave(socket.roomId);

      io.to(socket.roomId).emit('roomInfo', rooms.get(socket.roomId));
    }
  });
});

server.listen(3333, () => {
  console.log('Server is running on port 3333 🚀');
});