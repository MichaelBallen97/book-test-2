import 'boxicons'
import { useContext } from 'react';
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../context/UserProvider';


function Header() {
  const [open, setOpen] = useState(false)
  const {user} = useContext(UserContext);

  return (
    <header className="flex justify-between gap-2 items-center px-4 py-3 sticky top-0 bg-black z-20">
      <section>
        <h1 className=' text-4xl'><Link to="/">Book test</Link></h1>
      </section>

      <nav className='flex'>
        <box-icon name='menu' color="white" className="cursor-pointer" onClick={ ()=> setOpen(!open)}></box-icon>
        <ul className={`fixed py-4 w-full max-w-[300px] bg-gray-950 h-full max-h-[-webkit-fill-available] top-16 ${open ? "right-0 shadow-2xl shadow-gray-800" : "right-[-300px]"}  transition-[right] duration-500`}>
          { user ? (
            <>
            <li className='p-4 border-2 mb-2 border-slate-800 cursor-pointer hover:bg-slate-800'> <Link to="/"> Dashboard </Link></li>
            <li className='p-4 border-2 mb-2 border-slate-800 cursor-pointer hover:bg-slate-800'> <Link to="/completed"> Completed tests </Link> </li>
            <li className='p-4 border-2 mb-2 border-slate-800 cursor-pointer hover:bg-slate-800'> <Link to="pending"> Pendign tests </Link> </li>
            </>
          ): (
            <>
            <li className='p-4 border-2 mb-2 border-slate-800 cursor-pointer hover:bg-slate-800'> <Link to="/"> Home </Link></li>
            <li className='p-4 border-2 mb-2 border-slate-800 cursor-pointer hover:bg-slate-800'> <Link to="/login"> Login / register </Link> </li>
            </>
          ) }
        </ul>
      </nav>
    </header>
  )
}

export default Header