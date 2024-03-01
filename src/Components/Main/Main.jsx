import React from "react";
import photo from "../../Asset/Images/imag Photo.svg";

export default function Main() {
  return (
    <>
      <section
        id="mainHome"
        className="d-flex   align-items-center flex-column text-center "
      >
        <div className="Logo  w-25">
          <img src={photo} className="w-50" alt="" />
        </div>
        <div className="mainContent pb-3  text-white ">
          <h1 className="fw-bolder">START FRAMEWORK</h1>
          <div className="iconss p-0 m-0 position-relative ">
            <i className="  mx-2 fs-5 star-icon fa-solid fa-star"></i>
          </div>
          <h5 className="py-3">Graphic Artist - Web Designer - Illustrator</h5>
        </div>
      </section>
    </>
  );
}
