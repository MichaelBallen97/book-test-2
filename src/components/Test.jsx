import React from 'react'
import { useParams } from 'react-router-dom'

function Test() {
  const {bookId} = useParams();

  return (
    <div>{bookId}</div>
  )
}

export default Test