import React from "react";
import style from "./About.module.css";

export default function About() {
  return (
    <>
      <section id="about" className="d-flex align-items-center">
        <div className="aboutContent pb-3  container text-white">
          <h1 className="text-center">ABOUT COMPONENT</h1>
          <div className="iconss p-0 w-25  m-auto text-center position-relative ">
            <i className="  mx-2 fs-5 star-icon fa-solid fa-star"></i>
          </div>
          <div className="row py-4">
            <div className="col-md-6">
              <div>
                <p>
                  Freelancer is a free bootstrap theme created by Route. The
                  download includes the complete source files including HTML,
                  CSS, and JavaScript as well as optional SASS stylesheets for
                  easy customization.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div>
                <p>
                  Freelancer is a free bootstrap theme created by Route. The
                  download includes the complete source files including HTML,
                  CSS, and JavaScript as well as optional SASS stylesheets for
                  easy customization.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
