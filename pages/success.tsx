import React from 'react'
import Link from "next/link";

const success = () => {
  
  return (
    <div className="success-container">
        <div className="success-wrapper">
            <img src="/check-mark.png" alt="" className='check'/>
            <h1>Thank you!</h1>
            <p className='recieved'>Your submission is recieved and we will contact you soon</p>
            <Link href={"/"}><div className="back">
                <img src="/back.png" alt="" />
                <p>Back to home</p>
            </div></Link>
        </div>
    </div>
  )
}

export default success