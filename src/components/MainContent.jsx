import { useContext } from "react";
import { UserContext } from "../context/UserProvider";
import WelcomeMessage from "./WelcomeMessage";
import UserPanel from "./UserPanel";

function MainContent() {
  const {user} = useContext(UserContext);

  return (
    <>
      {
        user ? (
          <>
            <UserPanel />
          </>
        ) : (
          <WelcomeMessage />
        )
      }
    </>
  )
}

export default MainContent