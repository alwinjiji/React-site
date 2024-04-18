import React from 'react'
import './Body.css'

function Body() {
  return (
    <div className='container'>
        <div className='content'>
        <h1>Unlimited movies, TV shows and more</h1>
        <p>Watch any where. Cancel anytime</p>
        <p>Ready to watch? Enter your email to create or restart your membership.</p>
        
            <input className='lb1' type='email' placeholder='Email address'></input>
            <br></br>
            <br></br>

        
            <button className='btn'>Get Started  </button>
        
        </div>

    
    </div>
  )
}

export default Body
