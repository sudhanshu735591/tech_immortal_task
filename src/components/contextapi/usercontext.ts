import { createContext } from "react";

interface UserContextType {
  handleChangeData: string | null;
  setHandleChangeData: (data: string | null) => void;
  handleFilterData :string | null;
  setHandleFilterData : (data:string | null) => void;
}
const UserContext = createContext<UserContextType>({
    handleChangeData: null,
    setHandleChangeData: () => {},
    handleFilterData:null,
    setHandleFilterData:()=>{}
  });
export default UserContext;
