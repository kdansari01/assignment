import React from "react";
import Pagination from "./Pagination";
import { Button, TextField } from "@mui/material";
import { HeroBackground } from "../../component/hero/HeroBackground";
import Dropdown  from "./Dropdown";
import Footer from "../../component/footer/Footer";

const SearchProject = () => {
  return (
    <div className="searchProject">
      <div className="">
      <HeroBackground title={"Search Project"} />
       
        <div className="d-flex justify-content-center">
          <form className="formControl d-flex " role="search">
            <TextField
              className="form-control col-lg-12 col-md-8  "
              type="search"
              placeholder="Search...."
              aria-label="Search"
            />
            <Button variant="contained" className="col-3">
              Search
            </Button>
          </form>
        </div>
      </div>
       <div className="">
       <Dropdown/> 
        </div>
      <div className="projectTabel ">
        <Pagination />
      </div>
    </div>
  );
};

export default SearchProject;
