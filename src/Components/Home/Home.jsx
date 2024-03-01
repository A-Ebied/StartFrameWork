import React from "react";
import style from "./Home.module.css";
import photo from "../../Asset/Images/imag Photo.svg";

export default function Home() {
  return (
    <>
    <div className={`${style.Home} d-flex justify-content-center align-items-center text-center`}>
    <div className="imges">
      <img src={photo}  alt=""/>
      <div className={style.text}>
        <h1>START FRAMEWORK</h1>
        <i className="fa-solid fa-star py-4"></i>
        <p>Graphic Artist - Web Designer - Illustrator</p>
      </div>
    </div>
  </div>
    </>
  );
}
