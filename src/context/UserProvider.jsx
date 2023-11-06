import { createContext } from "react"
import useUser from "../hooks/useUser";

export const UserContext = createContext();

function UserProvider({children}) {
  const {user, createUser} = useUser();
  

  return (
    <UserContext.Provider value={{user, createUser}}>
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider