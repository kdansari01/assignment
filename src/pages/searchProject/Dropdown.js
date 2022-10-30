import React from "react";

const Dropdown = () => {
  return (
    <div className="d-lg-block d-xl-block d-sm-none d-md-block d-none ">
    <div className="bg-light container-fluid justify-content-center row d-flex  justify-content-center ">
        <div className="col-lg-2 col-md-3 col-4 d-lg-block d-xl-block d-sm-none d-md-block">
        <h5>Category</h5>
        <div className="dropdown ">
          <button
            className="btn btn-light dropdown-toggle"
            placeholder="Category"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Category
          </button>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="/">
                Action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="/">
                Another action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="/">
                Something else here
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-lg-2 col-md-3 col-4 d-lg-block d-xl-block d-sm-none d-md-block">
        <h5>Sub Category</h5>
        <div className="dropdown ">
          <button
            className="btn btn-light dropdown-toggle"
            placeholder="Category"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Sub Category
          </button>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="/">
                Action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="/">
                Another action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="/">
                Something else here
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-lg-2 col-md-3 col-4 d-lg-block d-xl-block d-sm-none d-md-block">
        <h5>Delivery Time</h5>
        <div className="dropdown ">
          <button
            className="btn btn-light dropdown-toggle"
            placeholder="Category"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            select time
          </button>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="/">
                Action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="/">
                Another action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="/">
                Something else here
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-lg-2 col-md-3 col-4 d-lg-block d-xl-block d-sm-none d-md-block">
        <h5>Country</h5>
        <div className="dropdown ">
          <button
            className="btn btn-light dropdown-toggle"
            placeholder="Category"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            country
          </button>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="/">
                Action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="/">
                Another action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="/">
                Something else here
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-lg-2 col-md-3 col-4 d-lg-block d-xl-block d-sm-none d-md-block">
        <h5>Post Day</h5>
        <div className="dropdown ">
          <button
            className="btn btn-light dropdown-toggle"
            placeholder="Category"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            select day
          </button>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="/">
                Action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="/">
                Another action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="/">
                Something else here
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-lg-2 col-md-3 col-4 d-lg-block d-xl-block d-sm-none d-md-block">
        <h5>Pricing</h5>
        <div className="dropdown ">
          <button
            className="btn btn-light dropdown-toggle"
            placeholder="Category"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            pricing
          </button>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="/">
                Action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="/">
                Another action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="/">
                Something else here
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Dropdown;
