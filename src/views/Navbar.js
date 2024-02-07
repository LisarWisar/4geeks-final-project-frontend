import React from "react";


const Navbar = () => {
    return (
        <div className="topbar bg-dark">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
        <a class="navbar-brand" href="#">
      <img src="https://i.pinimg.com/736x/da/6b/70/da6b7032661b3b91fcca1d3c1550bf0a.jpg" alt="Bootstrap" width="60" height="44"/>
    </a>

          <a className="navbar-brand text-light" href="#">
            Doolittles
          </a>
          <button
            className="navbar-toggler bg-dark"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon text-light"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active text-light" href="#">
                <div className="icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
          <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
          <path fill-rule="evenodd"
            d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
        </svg>
      </div>
                  Login 
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="#">
                  Register
                </a>
              </li>

            </ul>
          </div>
        </div>
      </nav>
    </div>
    )
}


export default Navbar;