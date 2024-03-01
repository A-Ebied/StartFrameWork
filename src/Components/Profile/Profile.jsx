import React from "react";
import Home from "../../Asset/Images/imag1.png";
import cake from "../../Asset/Images/imag2.png";
import party from "../../Asset/Images/imag3.png";
import style from "./Profile.module.css";

export default function Profile() {
  return (
    <>
      <section id="portfolio">
        <div className=" portfolioContent container">
          <h1 className="text-center py-2">PORTFOLIO COMPONENT</h1>
          <div className="iconss p-0 w-25  m-auto text-center position-relative ">
            <i className="  mx-2 fs-5 star-icon fa-solid fa-star" />
          </div>
          <div className="row py-4 row-gap-3">
            <div className="col-md-4">
              <div
                type="button"
                className="btn position-relative p-0 m-0  w-100"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal0"
              >
                <img src={Home} className="w-100 mt-5" alt="" />
                <div className="layout position-absolute d-flex justify-content-center  align-items-center">
                  <i className="fa-solid text-white fa-plus" />
                </div>
              </div>
              <div
                className="modal fade position-fixed"
                id="exampleModal0"
                tabIndex="{-1}"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <img src={Home} className="w-100 mt-5" alt="" />
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div
                type="button"
                className="btn position-relative p-0 m-0  w-100"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal1"
              >
                <img src={cake} className="w-100 mt-5" alt="" />
                <div className="layout position-absolute d-flex justify-content-center  align-items-center">
                  <i className="fa-solid text-white fa-plus" />
                </div>
              </div>
              <div
                className="modal fade position-fixed"
                id="exampleModal1"
                tabIndex="{-1}"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <img src={party} className="w-100 mt-5" alt="" />
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div
                type="button"
                className="btn position-relative p-0 m-0  w-100"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal2"
              >
                <img src={party} className="w-100 mt-5" alt="" />
                <div className="layout position-absolute d-flex justify-content-center  align-items-center">
                  <i className="fa-solid text-white fa-plus" />
                </div>
              </div>
              <div
                className="modal fade position-fixed"
                id="exampleModal2"
                tabIndex="{-1}"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <img src={party} className="w-100 mt-5" alt="" />
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div
                type="button"
                className="btn position-relative p-0 m-0  w-100"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal3"
              >
                <img src={Home} className="w-100 mt-5" alt="" />
                <div className="layout position-absolute d-flex justify-content-center  align-items-center">
                  <i className="fa-solid text-white fa-plus" />
                </div>
              </div>
              <div
                className="modal fade position-fixed"
                id="exampleModal3"
                tabIndex="{-1}"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <img src={Home} className="w-100 mt-5" alt="" />
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div
                type="button"
                className="btn position-relative p-0 m-0  w-100"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal4"
              >
                <img src={cake} className="w-100 mt-5" alt="" />
                <div className="layout position-absolute d-flex justify-content-center  align-items-center">
                  <i className="fa-solid text-white fa-plus" />
                </div>
              </div>
              <div
                className="modal fade position-fixed"
                id="exampleModal4"
                tabIndex="{-1}"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <img src={cake} className="w-100 mt-5" alt="" />
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div
                type="button"
                className="btn position-relative p-0 m-0  w-100"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal5"
              >
                <img src={party} className="w-100 mt-5" alt="" />
                <div className="layout position-absolute d-flex justify-content-center  align-items-center">
                  <i className="fa-solid text-white fa-plus" />
                </div>
              </div>
              <div
                className="modal fade position-fixed"
                id="exampleModal5"
                tabIndex="{-1}"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <img src={party} className="w-100 mt-5" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
