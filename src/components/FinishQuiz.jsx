import React from 'react'
import { Link } from 'react-router-dom';

function FinishQuiz({answers, title}) {
  const score = answers.filter(answer => answer.isCorrect === true )

  return (
    <section className='rounded-md shadow-md shadow-slate-900 px-4 py-10 border-4 border-solid border-slate-900 flex flex-col gap-4 justify-center items-center'>
      <h3> You have finished the test for {title}  </h3>

      <span className={`bg-white p-2 rounded-md ${score >= 8 ? "text-green-600" : "text-yellow-500"}`}> Your score is: {score.length}/10 </span>

      <Link to="/">Go to Dashboard</Link>
    </section>
  )
}

export default FinishQuiz