import { useEffect } from "react";
import { useState } from "react";
import data from '../data/questions.json'

function useBooks () {
  const [books, setBooks] = useState([]);
  const [bestTest, setBestTest] = useState(null);
  const [completeTests, setCompleteTests] = useState([]);
  const [pendingTests, setPendingTests] = useState([]);

  useEffect(() => {
    if (!window.localStorage.getItem("books")) {
      setBooks(data.books.map(book => {
        const { title, isComplete, score, image, handle } = book;
        return {title, isComplete, score, image, handle  }
      }))
    } else {
      setBooks(JSON.parse(window.localStorage.getItem("books")))
    }
  }, [])

  useEffect(() => {
    if (books && books.length > 0) {
      window.localStorage.setItem("books", JSON.stringify(books))

      setCompleteTests(books.filter(book => book.isComplete === true))
      setPendingTests(books.filter(book => book.isComplete === false))
      setBestTest(books.reduce((max, book)=> max.score > book.score ? max : book, books[0]))
    }
  }, [books])

  const getBookQuestions = (handle) => {
    const bookData = data.books.filter(book => book.handle === handle);
    
    return bookData[0];
  }

  return {
    books, 
    setBooks,
    completeTests, 
    pendingTests, 
    bestTest, 
    getBookQuestions
  }
}

export default useBooks;