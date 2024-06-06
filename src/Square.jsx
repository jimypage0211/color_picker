import React from 'react'


const Square = ({squareText}) => {    
  return (
    <div className='square' style={{
      backgroundColor: squareText
    }}>
        <p>{squareText === "" ? "Empty Value": squareText}</p>
    </div>
  )
}

export default Square
