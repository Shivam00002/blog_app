import Navbar from "@/components/Navbar";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";


const ItemperPage = 5 ;

export async function getServerSideProps({query}) {
  const { page = 1 } = query; 
  const res = await fetch(
    `https://post-app-ten.vercel.app/posts?_limit=${ItemperPage}&_page=${page}`
  );

  const data = await res.json();
  const totalCount = res.headers.get("X-Total-Count");


  return {
    props: {
      data,
      totalCount,
      currentPage : parseInt(page),
      totalPages : Math.ceil(totalCount /ItemperPage ),
      dataPerPage : ItemperPage
    },
  };
}


const HomePage = ({ data  ,totalCount , currentPage , totalPages , dataPerPage}) => {

     const [ currentPageNum , setCurrentPageNum] = useState(currentPage)
     const [ data1 , setData1] = useState([])
   

     const handlePageChange= async(pageNumber)=>{
      setCurrentPageNum(pageNumber)
      window.history.pushState(null , null , `/?page=${pageNumber}`)

      try{
        let res = await fetch(`https://post-app-ten.vercel.app/posts?_limit=${dataPerPage}&_page=${pageNumber}`)
        .then((res)=>res.json())
        .then((res)=> setData1(res))
      }catch(err){
        console.log(err)
      }

    
     
     }

     // console.log("totalCount" , totalCount)


     useEffect(()=>{
      setData1(data)

    
     },[data , ])



     const pageNumArr = [];
     for(let i=1;i<=totalPages;i++){
      pageNumArr.push(i)
     }

      const renderPageNum = pageNumArr.map(number=>{
        return(
          <button
          key={number}
          onClick={()=>handlePageChange(number)}
          className={number === currentPageNum ? "active" : ""}
          >
              {number}
          </button>
        )
      })

      const indOfLastPage = currentPageNum * dataPerPage
      const indOfFirstPage = currentPageNum - dataPerPage
      const currentPosts = data.slice(indOfLastPage ,indOfFirstPage )

  

      const navigate=()=>{
        window.location.href = "/SinglePage"
      }

      const handleSinglePage=(id)=>{
             console.log("ID" , id)
            localStorage.setItem('PostId' , id)

             navigate()
      }





  return (
    <>
      <Navbar />
      <h1>Total Post is : {totalCount}</h1>

      <div
  
      >
        {data1.length > 0 &&
          data1.map((el) => {
            return (
              <div key={el.id}
              onClick={()=>handleSinglePage(el.id)}
              >    
           
                <h4 id="title">Title : {el.title}</h4>
                <img width={"320px"} height={"330px"} id="img" src={el.img} alt="" />
                
                <p>Discription :{el.discription}</p>
                <hr />
              </div>
            );
          })}

        <div id="pagination">
          <button
          onClick={()=>handlePageChange(currentPageNum - 1)}
          disabled={currentPageNum===1}
          >Prev</button>

          <button>{renderPageNum}</button>

          <button
            onClick={()=>handlePageChange(currentPageNum + 1)}
            disabled={currentPageNum===totalPages}
          >Next</button>
        </div>
      </div>
    </>
  );
};

export default dynamic(()=> Promise.resolve(HomePage),{ssr :true})
