import axios from "axios";
import React, { useEffect, useState } from "react";
// import Page from "./Page";
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import "./style.css"
import Modal from "./Modal";

const Pagination = () => {
  // const [currentPage,setCurrentPage]=useState(1)
  // const [,setLoading]=useState(false)
  // const [postPerPage]=useState(10)
  const [posts,setPost]=useState([])
  const headers = ["Buyer", "Project Details", "Price","Delivery Time","Post Day","Offer",""];
 

  useEffect(()=>{
    const fetchApi = async ()=>{
      // setLoading(true)
      const res = await axios.get("https://jsonplaceholder.typicode.com/users")
      setPost(res.data)
      // setLoading(false)

    }
    fetchApi()
  },[])


  // const indexOfLastPage=currentPage * postPerPage
  // const indexOffirstPost = indexOfLastPage - postPerPage
  // const currentPost = posts.slice(indexOffirstPost,indexOfLastPage)
  
  // const paginate=pageNumber=>setCurrentPage(pageNumber)
  // console.log(posts)
  return (<>

   
    <div className="row col-12  d-flex justify-content-center mb-4 p-sm-4 "> 
      <table className="col-lg-8 col-md-10 col-8 p-4">
       
          <tr className="" >
            {headers.map((ele, index) => (
              <th key={index}>{ele}</th>
            ))}
          </tr>
          {posts.map((ele,ind)=>(
                <tr key={ele.id}> 
         
           <td ><PermIdentityIcon className=""/>{ele.name}</td>
           <td>{ele.company.catchPhrase}</td>
           <td className="text-center">{Math.floor(Math.random() * 1000)}</td>
           <td className="text-center">{Math.floor(Math.random() * 100)}</td>
           <td className="text-center">{ind+1}</td>
           <td className="text-center">{ind*3}</td>
           <td>
            {/* <button>Send offer</button> */}
            <Modal/>
            </td>
           </tr>
            ))}

      </table>

    
    </div></>
  );
};

export default Pagination;
