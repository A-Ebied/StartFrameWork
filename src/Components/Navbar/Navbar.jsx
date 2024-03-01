import React from "react";
import { Link, NavLink } from "react-router-dom";
import style from "./Navbar.module.css";

export default function Navbar() {
  return (
    <>
      {/* <nav className={` ${style.bg} fixed-top navbar navbar-expand-lg `}>
        <div className="container">
          <Link className={`navbar-brand fs-2 fw-bold text-white`} to="">
            START FRAMEWORK
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto h5 p-4 fw-bolde ">
              <Link
                id="link"
                className={`nav-link active mx-2 text-white rounded-2 ${style.Link}`}
                aria-current="page"
                to="about"
              >
                About
              </Link>
              <Link id="link" className="nav-link mx-2 text-white" to="profile">
                Profile
              </Link>
              <Link id="link" className="nav-link mx-2 text-white" to="contact">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav> */}
      <nav id="navbarz" className="navbar  w-100 position-fixed z-3 navbar-expand-lg py-4 ">
                <div className="container">
                    <NavLink className="navbar-brand fs-2  text-white  fw-bolder" to="">START FRAMEWORK</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto gap-5 mb-2 mb-lg-0" role="tablist">
                            <li className="nav-item">
                                <NavLink className={"nav-link  text-white fw-bold  "} aria-current="page" to="ABOUT">ABOUT</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={"nav-link  text-white fw-bold " }to="PORTFOLIO">PORTFOLIO</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={"nav-link  text-white fw-bold " }to="CONTACT">CONTACT</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

    </>
  );
}
