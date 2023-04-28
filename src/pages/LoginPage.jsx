import Navbar from '@/components/Navbar'
import React from 'react'
import { useState } from 'react'

const LoginPage = () => {
 
  const [email , setEmail] = useState("")
  const [password , setPassword] = useState("")
  return (
    <>
    <Navbar/>
    <form className="form">
    <span className="signup">Log in </span>
    <input type="email" placeholder="Email address" className="form--input"/>
    <input type="password" placeholder="Password" className="form--input"/>
    
    <div className="form--marketing">    
    </div>
    <button className="form--submit">
     Log in
    </button>

   <p id='p'>If you new here please <a className='a' href="SignupPage" >Sign up here</a></p>
</form>


    </>
  )
}

export default LoginPage