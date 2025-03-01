import React from 'react'
import './Login.css'
import './Home'
const Login=()=>{
    function signup(){
        window.location.replace("/home")
    }
    return(
       <div className='parent'>
        <div className='child'>
            <div>
                <h2 className='login'>LoginPage</h2>
                <input type='email' placeholder='Enter EmailId'></input>

            </div>
            <div>
                <input type="password" placeholder='Enter EmailId'></input>

            </div>
            <div>
                <button onClick={signup}type="submit"></button>
            </div>
        </div>
       </div>
    );
};
export default Login;
