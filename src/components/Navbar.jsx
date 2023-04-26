import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
   <>
   <div id='navbar'>
    <Link href={"HomePage"}>Home</Link>
    <Link href={"CreatePostPage"}>CreatePostPage</Link>
    <Link href={"SignupPage"}>Login</Link>
   </div>
   </>
  )
}

export default Navbar