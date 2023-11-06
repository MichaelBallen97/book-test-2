import React from 'react'

function QuestionsButtons({questions, selectAnswer, handleClick, handleSubmitQuiz, index}) {
  return (
    <section className="rounded-md shadow-md shadow-slate-900 p-4 border-4 border-solid border-slate-900">
      {index+1 === questions.length ? (
        <button onClick={handleSubmitQuiz} className={`py-2 px-4 rounded-md transition-colors ${selectAnswer ? "bg-white text-black" : "text-white border-2 border-white"} `}> Send Quiz </button>
      ) : (
        <button onClick={handleClick} className={`py-2 px-4 rounded-md transition-colors ${selectAnswer ? "bg-white text-black" : "text-white border-2 border-white"} `}> Next </button>
      )}
    </section>
  )
}

export default QuestionsButtons