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

export interface ICreateRoom {
  roomId: string;
  userName: string;
}

export interface ILeaveRoom {
  userId: string;
  roomId: string;
}

export interface ISendMessage {
  roomId: string;
  clientId: string;
  author: string;
  message: string;
}