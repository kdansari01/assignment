import "./style.css";
import Footer from "../../component/footer/Footer";
import { HeroBackground } from "../../component/hero/HeroBackground";
import { useState, useEffect } from "react";
import axios from "axios";
import Modal from "../searchProject/Modal";
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import { Pagination } from "./Pagination";
import PostCard from "./card";
import AddIcon from '@mui/icons-material/Add';
const PostProject = () => {
  const [posts, setPost] = useState([]);
  const [page, setPage] = useState(1);

  const headers = [
    "Date",
    "Category/Sub-Category",
    "Project Details",
    "Offers",
    "Status",
    "Action",
  ];

  useEffect(() => {
    const fetchApi = async () => {
      const res = await axios.get("https://jsonplaceholder.typicode.com/users");

      setPost(res.data);
    };
    fetchApi();
  }, []);
  return (
    <>
      <div>
        <HeroBackground title={"Manage Project"} />
        <div className=" manageProjectAcrive d-flex ">
          <div className="activePouse margin d-lg-block d-xl-block d-sm-none d-md-block d-none">
            <input type="checkbox" />
            <span className="">Active</span>
          </div>
          <div className="activePouse margin d-lg-block d-xl-block d-sm-none d-md-block d-none">
            <input type="checkbox" />
            <span className="">Pouse</span>
          </div>
          <div className="margin">
            <button className="manageProjectBtn d-lg-block d-xl-block d-sm-none d-md-block d-none"> + Post New Project</button>
            <button className="manageProjectBtn1 d-lg-none d-xl-none d-sm-block d-md-none d-block">
              <AddIcon/>
            </button>

          </div>
        </div>
        <div className="searchProjectMain d-flex justify-content-center container">
          <PostCard post={posts} className=""/>

        <div className="searchProject card row col-12 d-lg-block d-xl-block d-sm-none d-md-block d-none">
          <table className="">
            <tr className="">
              {headers.map((ele, index) => (
                <th key={index}>{ele}</th>
              ))}
            </tr>
            {posts.map((ele, ind) => (
              <tr key={ele.id} className="tableCard mb-2 border ">
                
                <td >
                  <input type="checkbox"/>
                 <span className="px-2">12 Aug, 2022</span> </td>
                <td className="text-center">
                Design & Art / Poster Design
                </td>
                <td className="text-center">
                Lorem ipsum dolor sit <br/>amet, consectetur <br/> adipiscing elit.
                </td>
                <td className="text-center ">
                <PermIdentityIcon className="offer" fontSize="10"/>
                <span>{Math.floor(Math.random() * 20)}+</span>
                </td>
                <td className="text-center">Active</td>
                <td>
                  {/* <button>Send offer</button> */}
                  <Modal />
                </td>
              </tr>
            ))}
          </table>
          <div  className="justify-content-center d-flex text-center mt-2">
        <Pagination value={page} range={6} onChange={setPage} />
        </div>
        </div>

        </div>
        <Footer />
      </div>
    </>
  );
};

export default PostProject;
