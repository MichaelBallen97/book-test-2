import { useState } from "react";
import { useEffect } from "react";

function useUser () {
  const [user, setUser] = useState(null);
  
  useEffect(() => {
    if(user) {
      window.localStorage.setItem("user", JSON.stringify(user));
    }
  }, [user])
  
  useEffect(() => {
    setUser(JSON.parse(window.localStorage.getItem("user")));
  }, [])

  const createUser = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const username = formData.get("username");
    const password = formData.get("password");

    const userData = {
      username: username,
      userPassword: password
    }

    setUser(userData);
  }

  return {
    user,
    createUser
  }
}

export default useUser;
