import React, { createContext, useState, useContext, Dispatch } from 'react';

interface IUserContext {
  user: string;
  setUser: Dispatch<React.SetStateAction<string>>;
}

const UserContext = createContext<IUserContext>({} as IUserContext);

export const UserProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState('');

  return (
    <UserContext.Provider value={{user, setUser}}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const { user, setUser} = useContext(UserContext);

  return { user, setUser };
}
