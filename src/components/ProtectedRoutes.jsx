import { useContext } from "react"
import { UserContext } from "../context/UserProvider"
import { Navigate } from "react-router-dom"

function ProtectedRoutes({children}) {
  const {user} = useContext(UserContext);

  if (!user) {
    return <Navigate to="/" />
  }

  return children

}

export default ProtectedRoutes