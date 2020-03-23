import React from "react";
import { Link } from "react-router-dom";

function Notfound() {
  return (
    <div>
      <p>Oops! Something went wrong!!!!</p>
      <Link class="btn btn-secondary btn-lg ml-5" to="/">
        Back to Home!!
      </Link>
    </div>
  );
}

export default Notfound;
