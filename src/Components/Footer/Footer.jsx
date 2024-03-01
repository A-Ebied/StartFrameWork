import React from "react";
import style from "./Footer.module.css";

export default function Footer() {
  return (
    <div className="position-relative">
      <section id="foote" className=" p-5 ">
        <div className="container text-center py-5 ">
          <div className="row">
            <div className="col-md-4 text-center text-white">
              <h2>LOCATION</h2>
              <p>2215 John Daniel Drive</p>
              <p>Clark, MO 65243</p>
            </div>
            <div className="col-md-4 text-white">
              <div>
                <h2>AROUND THE WEB</h2>
                <ul className="list-unstyled fitCon d-flex gap-4 m-auto ">
                  <li>
                    <i className="p-2 border border-2 rounded-circle  fa-brands fa-facebook"></i>
                  </li>
                  <li>
                    <i className="p-2 border border-2 rounded-circle  fa-brands fa-twitter"></i>
                  </li>
                  <li>
                    <i className="p-2 border border-2 rounded-circle  fa-brands fa-linkedin"></i>
                  </li>
                  <li>
                    <i className="p-2 border border-2 rounded-circle  fa-solid fa-globe"></i>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-4 text-white">
              <div>
                <h2>AROUND THE WEB</h2>
                <p>
                  Freelance is a free to use, licensed Bootstrap theme created
                  by Route
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer
        className={`text-center ${style.footerCopy} py-3 position-relative bottom-0 start-0 end-0`}
      >
        <p>Copyright &copy; Your Website 2024</p>
      </footer>
    </div>
  );
}
