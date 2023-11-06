import React from 'react'
import { Link } from 'react-router-dom'

function BookCard({book, children}) {
  return (
    <article className=' flex p-3 gap-2 items-stretch'>
      {book && (
        <>
        <div className='max-w-[150px] relative'> 
          <div className="absolute w-full right-0 top-0 bg-black bg-opacity-40 h-full cursor-pointer hover:bg-opacity-0"></div>
          <img className=' w-full object-cover' src={book.image} alt={`Portada del libro ${book.title}`} /> 
        </div>
        <section className=' h-auto flex flex-col justify-center gap-3'>
          <span> {book.title} </span>
          <span className=' p-1 bg-white rounded-md text-black text-center'> {book.score} </span>

          <Link className='p-1 bg-white rounded-md text-green-600 font-extrabold text-center' to={`/quiz/${book.handle}`}> { book.isComplete ? "Try Again" : "Take a test" } </Link>
        </section>
        </>
      )}
      {book ? null :  children}
    </article>
  )
}

export default BookCard