import React from 'react'
import {useNavigate} from 'react-router-dom'

export default function BackButton() {

  // Use this hook to programmatically navigate to another page
  const navigate = useNavigate();

  // This function is used to navigate to the home page
  // It will be called when the button is clicked
  const goBack = () => {
    navigate(-1);
  };

  return (
    <button onClick={goBack} className='px-3 py-1 bg-green-500 hover:bg-yellow-500 rounded-md font-semibold'>Back</button>
  )
}
