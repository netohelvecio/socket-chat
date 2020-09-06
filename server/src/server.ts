import http from 'http';
import socket from 'socket.io';

import app from 'app';
import { rooms } from 'data';
import { ICreateRoom, ILeaveRoom, ISendMessage } from './@types/interfaces';

const server = http.createServer(app);
const io = socket(server);

io.on('connection', socket => {
  socket.on('createOrJoinRoom', (createRoom: ICreateRoom) => {
    socket.roomId = createRoom.roomId;

    socket.join(socket.roomId);

    rooms.get(socket.roomId)?.users.push({ id: socket.id, name: createRoom.userName });
    
    console.log(`Sala: ${socket.roomId} user: ${createRoom.userName}`);

    io.to(socket.roomId).emit('userJoined', createRoom.userName);

    io.to(socket.roomId).emit('roomInfo', rooms.get(socket.roomId));
  });

  socket.on('leaveRoom', (leaveRoom: ILeaveRoom) => {
    socket.roomId = leaveRoom.roomId;

    const userIndex = rooms.get(socket.roomId)?.users.findIndex(user => user.id === leaveRoom.userId);

    if (userIndex) {
      io.to(socket.roomId).emit(
        'userLeaved',
        rooms.get(socket.roomId)?.users.find(user => user.id === leaveRoom.userId)?.name
      );

      rooms.get(socket.roomId)?.users.splice(userIndex, 1);

      socket.leave(socket.roomId);

      io.to(socket.roomId).emit('roomInfo', rooms.get(socket.roomId));
    }
  });

  socket.on('sendMessage', (sendMessage: ISendMessage) => {
    const { roomId, clientId, author, message } =  sendMessage;

    socket.roomId = roomId;

    const room = rooms.get(socket.roomId);

    if (room) {
      room.messages.push({ clientId, author, message });

      io.to(socket.roomId).emit('roomInfo', rooms.get(socket.roomId));
    }
  });
});

server.listen(3333, () => {
  console.log('Server is running on port 3333 🚀');
});