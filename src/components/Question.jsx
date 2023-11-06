import React from 'react'
import Answer from './Answer'
import '../styles/form.css'

function Question({currentQuestion, handleAnswerClick}) {
  return (
    <section className="rounded-md shadow-md shadow-slate-900 p-4 border-4 border-solid border-slate-900">
      <h4 className=" text-lg font-bold">{currentQuestion.title}</h4>

      <ul className=" mt-6 flex flex-col gap-3">
        {currentQuestion.answers.map(answer => <Answer key={answer.title} answer={answer} handleAnswerClick={handleAnswerClick} /> )}
      </ul>
  </section>
  )
}

export default Question