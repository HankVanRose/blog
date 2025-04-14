'use client';
import { createContext, ReactNode, useState } from 'react';

interface User {
  name?: string;
  gitLink: string;
}

type HeaderValue = {
  user: User;
};

export const initUser = {
  name: 'Hank',
  gitLink: 'https://github.com/HankVanRose',
};

export const UserPageContext = createContext<HeaderValue>({
  user: initUser,
});

export const UserContext = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User>(initUser);
  return (
    <UserPageContext.Provider value={{ user }}>
      {children}
    </UserPageContext.Provider>
  );
};
