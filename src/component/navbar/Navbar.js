import React from "react";
import "./style.css"
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Profile from "../../assests/image/profile.png"
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
      <nav className="navbar navbar-expand-lg  ">
        <div className="container-fluid d-flex justify-content-around px-4">
          <NavLink className="navbar-brand text-light" to="/">
            Logo
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse flex-grow-2 " id="navbarSupportedContent">
          <form className="searchBar d-flex m-sm-2 mt-4 px-lg-5" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
            <div className="rightNavabr" >
            <ul className="navbar-nav  d-flex justify-content-center px-lg-5 ">
              <li className="nav-item">
                <NavLink className=" nav-link active " aria-current="page" to="/">
                <h5> Post Project</h5>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className=" nav-link px-lg-4 " to="/searchProject">
                 <h5> Search Project</h5>
                </NavLink>
              </li>
              <li className="nav-item">
              <NavLink className="nav-link " to="/">

               <ChatBubbleOutlineIcon />
               <span className="badge">.</span>
               </NavLink>

              </li>
              <li className="nav-item">
              <NavLink className="nav-link" to="/">
                <FavoriteBorderIcon/>
               <span className="badge">.</span>
                </NavLink>

              </li>
              <li className="imgHead nav-item">
              <NavLink className="imgsection nav-link " to="/profilePage">
              <img src={Profile} alt="profile" className="profileImg rounded-1 "/>
                </NavLink>

              </li>
            </ul>
            </div>
          </div>
        </div>
      </nav>
//     <nav className="navbar navbar-expand-lg navbar-light bg-light">
//     <div className="container-fluid">
//     <div className="container-fluid d-flex justify-content-around">
//       <a className="navbar-brand" href="/">
//         Logo
//       </a>
//       <button
//         className="navbar-toggler"
//         type="button"
//         data-bs-toggle="collapse"
//         data-bs-target="#navbarSupportedContent"      
//         aria-controls="navbarSupportedContent"
//         aria-expanded="false"
//             aria-label="Toggle navigation"
//       >
//         <span className="navbar-toggler-icon"></span>
//          </button>
//         </div>
//         <div className="collapse navbar-collapse flex-grow-1 text-right" id="myNavbar">
//             <ul className="navbar-nav ms-auto flex-nowrap">
//                 <li className="nav-item">
//                     <a href="/" className="nav-link m-2 menu-item nav-active">Our Solution</a>
//                 </li>
//                 <li className="nav-item">
//                     <a href="/" className="nav-link m-2 menu-item">How We Help</a>
//                 </li>
//                 <li className="nav-item">
//                     <a href="/" className="nav-link m-2 menu-item">Blog</a>
//                 </li>
//                 <li className="nav-item">
//                     <a href="/" className="nav-link m-2 menu-item">Contact</a>
//                 </li>
//             </ul>
//         </div>
//     </div>
// </nav>
  );
};

export default Navbar;
