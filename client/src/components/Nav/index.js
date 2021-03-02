import React from "react";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/">
        Google Book
      </a>
      <a className="navbar-brand" href="/search">
        Search 
      </a>
      <a className="navbar-brand" href="/save">
        Save
      </a>
    </nav>
  );
}

export default Nav;