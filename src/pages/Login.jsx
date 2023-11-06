import { useContext } from "react";
import { Navigate } from "react-router-dom"
import { UserContext } from "../context/UserProvider";

function Login() {
  const {user, createUser} = useContext(UserContext);

  const handleSubmit = (e) => {
    createUser(e);
  }

  return (
    <main className='px-4 min-h-[55vh]'>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full max-w-md mx-auto rounded-md shadow-md shadow-slate-900 p-5 border-4 border-solid border-slate-900">
        <label htmlFor="username">User:</label>
        <input required type="text" name="username" id="username" className="bg-slate-900 border-white border-2 rounded-md p-1" />

        <label htmlFor="password">Password:</label>
        <input type="password" name="password" id="password" className="bg-slate-900 border-white border-2 rounded-md p-1" />

        <button type="submit" className="bg-white rounded-md px-5 py-3 w-fit text-black mx-auto mt-8"> Sign in / Sign Up </button>
      </form>

      { user && <Navigate to="/" /> }
    </main>
  )
}

export default Login