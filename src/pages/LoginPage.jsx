import Navbar from '@/components/Navbar'
import React from 'react'

const LoginPage = () => {
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

</form>


    </>
  )
}

export default LoginPage