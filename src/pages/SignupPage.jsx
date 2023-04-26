import Navbar from '@/components/Navbar'
import React from 'react'









const SignupPage = () => {
  return (
    <>
   <Navbar/>

   <form className="form">
    <span className="signup">Sign Up</span>
    <input type="email" placeholder="Enter name" className="form--input"/>
    <input type="email" placeholder="Email address" className="form--input"/>
    <input type="password" placeholder="Password" className="form--input"/>

    <div className="form--marketing">
     
        
    </div>
    <button className="form--submit">
        Sign up
    </button>

    <p className='ptag'>Already have an account</p><a href={"LoginPage"}>Login here</a> 
</form>











   </>
  )
}

export default SignupPage