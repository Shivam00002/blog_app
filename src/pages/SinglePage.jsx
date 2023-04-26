import React, { useEffect, useState } from 'react'




const SinglePage = ( ) => {
  const [ ID, setStoredValue] = useState(null);
  const [ data , setData ] = useState([])


  useEffect(()=>{
    if(typeof window !== 'undefined '){
      let value = localStorage.getItem('PostId')
      setStoredValue(value)
    }
  },[])



  const GetData= async(ID)=>{

     try{
      let res = await fetch(`https://blog-app-woad.vercel.app/post/${ID}`)
      .then((res)=>res.json())
      .then((res)=>setData(res) )
     }catch(err){
      console.log(err)
     }


   }

   
   console.log( " ID" , ID)

   
   useEffect(()=>{
      GetData(ID)
   },[])


   console.log("data" , data)
  
 



 
  return (
  

    <div>SinglePage</div>
  )
}

export default SinglePage