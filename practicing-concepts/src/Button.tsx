import React from 'react'

const Button = ({handleTextToggle}) => {
  return (
    <div>
      <button onClick={handleTextToggle}>
        Toggle Login
      </button>
    </div>
  )
}

export default Button
