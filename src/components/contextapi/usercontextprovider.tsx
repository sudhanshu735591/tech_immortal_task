import React, { useState, ReactNode } from "react";
import UserContext from "./usercontext";
interface UserContextProviderProps {
  children: ReactNode;
}
const UserContextProvider: React.FC<UserContextProviderProps> = ({ children }) => {
  const [handleChangeData, setHandleChangeData] = useState<string | null>(null);
  const [handleFilterData, setHandleFilterData] = useState<string | null>(null);

  return (
    <UserContext.Provider value={{ handleChangeData, setHandleChangeData,handleFilterData, setHandleFilterData }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
