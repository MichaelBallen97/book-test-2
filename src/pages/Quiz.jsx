import { Navigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState } from "react";
import Question from "../components/Question";
import QuestionsButtons from "../components/QuestionsButtons";
import { useRef } from "react";
import FinishQuiz from "../components/FinishQuiz";
import useBooks from "../hooks/useBooks";
import { useContext } from "react";
import { BooksContext } from "../context/BooksProvider";

function Quiz() {
  const {bookId} = useParams()
  const {getBookQuestions} = useBooks();
  const {questions, title} = getBookQuestions(bookId);
  const [index, setIndex] = useState(0)
  const [selectAnswer, setSelectAnswer] = useState(null)
  const currentQuestion = questions[index]
  const [isFinished, setIsFinished] = useState(false)
  const answers = useRef([])

  const {books, setBooks} = useContext(BooksContext)

  const handleClick = () => {
    if (selectAnswer) {
      answers.current.push(selectAnswer);
      setIndex(index => index + 1);
      setSelectAnswer(null)
    }
  }

  const handleAnswerClick = (answer) => {
    setSelectAnswer(answer)
  }

  const handleSubmitQuiz = () => {
    answers.current.push(selectAnswer);
    setIsFinished(true);
    const score = answers.current.filter(answer => answer.isCorrect === true )
    
    const newBooks = books.map(book => {
      if (book.title === title) {
        return {...book, isComplete: true, score: `${score.length}/${questions.length}`}
      }

      return book
    })

    setBooks(newBooks);
  }

  return (
    <main className='px-4 min-h-[55vh]'>
      {bookId ? (
       !isFinished ?  (
        <>
          <span> Question {index+1} / {questions.length} </span>
          <Question currentQuestion={currentQuestion} handleAnswerClick={handleAnswerClick} />
          <QuestionsButtons questions={questions} index={index} selectAnswer={selectAnswer} handleClick={handleClick} handleSubmitQuiz={handleSubmitQuiz} />
        </>
       ) : <FinishQuiz answers={answers.current} title={title} />
      ): (
        <Navigate to="/pending" />
      )
      }
    </main>
  )
}

export default Quiz