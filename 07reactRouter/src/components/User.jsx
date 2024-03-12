import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid} = useParams();
  return (
    <div className='text-center font-bold p-4 bg-gray-700 text-white my-4 text-3xl'>User: {userid}</div>
  )
}

export default User