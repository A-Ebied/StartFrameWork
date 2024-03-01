import React from "react";
import style from "../Contact/Contac.module.css";

export default function Contact() {
  return (
    <>
      <section id="contant">
        <div className=" contantContent container">
          <h1 className="text-center py-2">CONATCT SECTION</h1>
          <div className="iconss p-0 w-25  m-auto text-center position-relative ">
            <i className="  mx-2 fs-5 star-icon fa-solid fa-star"></i>
          </div>
          <div className="inputs  w-75 m-auto py-4">
            <div className="inpts position-relative">
              <input
                type="text"
                placeholder="userName"
                className="py-3 rounded-2  my-4 border-0 w-100"
              />
              <label className="position-absolute" htmlFor="">
                userName
              </label>
            </div>
            <div className="inpts position-relative">
              <input
                type="text"
                placeholder="userAge"
                className="py-3 rounded-2  my-4 border-0 w-100"
              />
              <label className="position-absolute" htmlFor="">
                userAge
              </label>
            </div>
            <div className="inpts position-relative">
              <input
                type="text"
                placeholder="userEmail"
                className="py-3 rounded-2  my-4 border-0 w-100"
              />
              <label className="position-absolute" htmlFor="">
                userEmail
              </label>
            </div>
            <div className="inpts position-relative">
              <input
                type="text"
                placeholder="userPassword"
                className="py-3 rounded-2  my-4 border-0 w-100"
              />
              <label className="position-absolute" htmlFor="">
                userPassword
              </label>
            </div>
            <button className="btn btn-info d-block mt-1 text-white ">
              Send Message
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
