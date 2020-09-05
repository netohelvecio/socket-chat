export interface IUser {
  id: string;
  name: string;
}

export interface IRoom {
  id: string;
  name: string;
  users: IUser[];
}

export interface ICreateOrJoinRoom {
  roomId: string;
  userName: string;
}

export interface ILeaveRoom {
  roomId: string;
}