import React from 'react'

function Answer({answer , handleAnswerClick}) {
  return (
    <li key={answer.title} className="cursor-pointer text-sm bg-slate-900" onClick={()=> handleAnswerClick(answer)}>
      <label className='w-full px-3 py-2 cursor-pointer flex items-center gap-3'>
        <input type="radio" name="answer" className=' hidden' />
        <div className=' rounded-full border-2 border-white w-5 h-5'></div>
        {answer.title}
      </label>
    </li>
  )
}

export default Answer