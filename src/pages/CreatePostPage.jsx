import Navbar from '@/components/Navbar'
import axios from 'axios'
import React, { useState } from 'react'

const CreatePostPage = () => {
  const [title , setTitle] = useState("")
  const [discription , setDiscription] = useState("")
  const [ img , setImg] = useState("")
 


 const handleSubmit=(e)=>{
  e.preventDefault()

      let obj = {
        title : title,
        discription : discription,
        img : img,
        comments : [{"comment" : "Nice Post"}]
      }
  
      postData(obj)

 }

 const postData= async(data)=>{
  try{
    const res =   await axios.post("https://post-app-ten.vercel.app/posts",data)      
    console.log("res" ,res.data)
    
  }catch(err){
    console.log(err)
  }
       
}



  return (
    <>
    <Navbar/>
    <form className="form" onSubmit={handleSubmit}>
    <span className="signup">new blog post</span>
    <input type="string" placeholder="Enter Title" value={title} onChange={(e)=>setTitle(e.target.value)} className="form--input"/>
    <input type="string" placeholder="Enter Discription" value={discription}  onChange={(e)=>setDiscription(e.target.value)} className="form--input"/>
    <input type="string" placeholder="Enter Img URL" value={img}  onChange={(e)=>setImg(e.target.value)} className="form--input"/>

    <div className="form--marketing">
     
        
    </div>
    <button className="form--submit">
     P O S T
    </button>


</form>




    </>
  )
}

export default CreatePostPage