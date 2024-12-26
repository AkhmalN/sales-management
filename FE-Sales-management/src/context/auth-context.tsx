import React, { createContext, useContext, useEffect, useState } from "react";

interface User {
  username: string;
  email: string;
}

interface AuthContextType {
  user: User | null;
  storeInfo: (user: User) => void;
  deleteInfo: () => void;
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
  const [user, setUser] = useState<User | null>(null);
  const storeInfo = (user: User) => setUser(user);
  const deleteInfo = () => setUser(null);

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  useEffect(() => {
    if (user && user.username) {
      localStorage.setItem("user", JSON.stringify(user));
    }
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, storeInfo, deleteInfo }}>
      {children}
    </AuthContext.Provider>
  );
};
