import React from "react";
import Error404 from "../../Asset/Images/error404.jpg";
export default function NotFound() {
  return (
    <>
      <div class="container">
        <div class="row justify-content-center align-items-center py-5">
          <div>
            <img src={Error404} />
          </div>
        </div>
      </div>
    </>
  );
}
