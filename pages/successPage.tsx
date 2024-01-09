import React from 'react'

const successPage = () => {
  
  return (
    <div className="success-container">
        <div className="success-wrapper">
            <img src="/check-mark.png" alt="" className='check'/>
            <h1>Thank you!</h1>
            <p className='recieved'>Your submission is recieved and we will contact you soon</p>
            <div className="back">
                <img src="/back.png" alt="" />
                <p>Back to home</p>
            </div>
        </div>
    </div>
  )
}

export default successPage