import { useState } from "react";

export default function Navbar({ setMypic }) {
  let [text, setText] = useState("");

  let find = (event) => {
    event.preventDefault();
    if (Number(text) == text) {
      setMypic(text);
      setText("");
    } else {
      alert("Please give a number");
      setText("");
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-secondary">
      <div className="container-fluid">
        <a className="navbar-brand" href="./" style={{ color: "white" }}>
          Bunny
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className="nav-link active"
                aria-current="page"
                href="./"
                style={{ color: "white" }}
              >
                Cat
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" style={{ color: "white" }}>
                About
              </a>
            </li>
          </ul>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              aria-label="Search"
              value={text}
              placeholder={"give a number"}
              onChange={(e) => {
                setText(e.target.value);
              }}
              onClick={(event) => {
                event.preventDefault();
              }}
            />
            <button className="btn btn-success" type="submit" onClick={find}>
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}
