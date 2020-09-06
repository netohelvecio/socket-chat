export interface IUser {
  id: string;
  name: string;
}

export interface IMessage {
  clientId: string;
  author: string;
  message: string;
}

export interface IRoom {
  id: string;
  name: string;
  users: IUser[];
  messages: IMessage[];
}

export interface ICreateOrJoinRoom {
  roomId: string;
  userName: string;
}

export interface ILeaveRoom {
  roomId: string;
}

export interface ISendMessage {
  roomId: string;
  author: string;
  message: string;
}

export interface IStatusUser {
  userName: string;
  status: 'join' | 'leave' | 'idle';
}