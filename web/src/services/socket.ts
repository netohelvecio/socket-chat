import socketio from 'socket.io-client';
import { ICreateOrJoinRoom, IRoom, ILeaveRoom } from '../interfaces';

const socket = socketio('http://localhost:3333/');

export function createOrJoinRoom(data: ICreateOrJoinRoom) {
  const { roomId, userName } = data;

  socket.emit('createOrJoinRoom', { roomId, userName });
}

export function getRoomData(subscribeFunction: (room: IRoom) => void) {
  socket.on('roomInfo', subscribeFunction);
}

export function leaveRoom(data: ILeaveRoom) {
  const { roomId } = data;

  socket.emit('leaveRoom', { roomId, userId: socket.id });
}
