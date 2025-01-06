import React, { createContext, useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";

interface IUser {
  username: string;
  email: string;
}

interface IAuth {
  token: string | null;
}

interface AuthContextType {
  user: IUser | null;
  storeInfo: (user: IUser) => void;
  deleteInfo: () => void;
  setToken: (token: string) => void;
  getToken: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<IUser | null>({
    username: "",
    email: "",
  });
  const [auth, setAuth] = useState<IAuth | null>(null);
  const storeInfo = ({ username, email }: IUser) =>
    setUser({ username, email });
  const deleteInfo = () => setUser(null);
  const setToken = (token: string) => {
    setAuth({ token });
  };

  const getToken = (): string | null => auth?.token ?? null;

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    const savedToken = Cookies.get("access_token");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }

    if (savedToken) {
      setAuth({ token: savedToken });
    }
  }, []);

  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    }
  }, [user]);

  useEffect(() => {
    if (auth?.token) {
      Cookies.set("access_token", auth.token);
    }
  }, [auth]);

  return (
    <AuthContext.Provider
      value={{ user, storeInfo, deleteInfo, setToken, getToken }}
    >
      {children}
    </AuthContext.Provider>
  );
};
