import { createContext } from 'react';
import useBooks from '../hooks/useBooks';

export const BooksContext = createContext();

function BooksProvider({children}) {
  const { books, setBooks, completeTests, pendingTests, bestTest } = useBooks();

  return (
    <BooksContext.Provider value={{
      books, 
      setBooks,
      completeTests, 
      pendingTests, 
      bestTest
      }}>
      { children }
    </BooksContext.Provider>
  )
}

export default BooksProvider