import React from 'react'
import './Login.css'
import './Home'

const login = () => {
  function signup(){
    window.location.replace("/home")
  }
  return (
    <div className='parent'>
      <div className='child'>
        <div>
          <h2 className='login'>LoginPage</h2>
          <input type='email' placeholder='Enter email'></input>
        </div>
        <div>
          <input type='password' placeholder='Enter password'></input>
        </div>
        <div className='loginbutton'>
          <button onClick={signup} type='submit' >Login</button>
        </div>

      </div>

    </div>
  )
}

export default login


