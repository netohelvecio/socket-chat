export interface IUser {
  id: string;
  name: string;
}

export interface IRoom {
  id: string;
  name: string;
  users: IUser[];
}

export interface ICreateRoom {
  roomId: string;
  userName: string;
}

export interface ILeaveRoom {
  userId: string;
  roomId: string;
}