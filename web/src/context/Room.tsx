import React, { createContext, useState, useContext, Dispatch } from 'react';
import { IRoom } from '../interfaces';

interface IRoomContext {
  room: IRoom;
  setRoom: Dispatch<React.SetStateAction<IRoom>>;
}

const RoomContext = createContext<IRoomContext>({} as IRoomContext);

export const RoomProvider: React.FC = ({ children }) => {
  const [room, setRoom] = useState<IRoom>({} as IRoom);

  return (
    <RoomContext.Provider value={{room, setRoom}}>
      {children}
    </RoomContext.Provider>
  );
}

export function useRoom() {
  const { room, setRoom} = useContext(RoomContext);

  return { room, setRoom };
}
