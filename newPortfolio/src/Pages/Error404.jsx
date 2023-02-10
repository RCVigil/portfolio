import React, { memo } from "react";
import { Link } from "react-router-dom";
import baby from "../images/baby-fam-di-no-24.gif";

const Error404 = () => {
  return (
    <div className="position-absolute top-50 start-50 translate-middle">
      <div className="col-xs-6 col-md-3">
        <img
          className="rounded rounded-circle h-50 d-inline-block"
          src={baby}
          alt="foto do baby da familia dinossauros dizendo não com a cabeça"
        />
      </div>
      <h1>Error 404</h1>
      <Link 
        className="btn btn-warning"
        to='/'
      >
        <i className="bi bi-skip-backward-fill"></i>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-skip-backward-fill"
          viewBox="0 0 16 16"
        >
          <path d="M.5 3.5A.5.5 0 0 0 0 4v8a.5.5 0 0 0 1 0V8.753l6.267 3.636c.54.313 1.233-.066 1.233-.697v-2.94l6.267 3.636c.54.314 1.233-.065 1.233-.696V4.308c0-.63-.693-1.01-1.233-.696L8.5 7.248v-2.94c0-.63-.692-1.01-1.233-.696L1 7.248V4a.5.5 0 0 0-.5-.5z" />
        </svg>{" "}
        Return
      </Link>
    </div>
  );
};

export default memo(Error404);
