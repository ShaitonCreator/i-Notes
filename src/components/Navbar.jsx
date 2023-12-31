import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
// import { useHistory } from 'react-router-dom'

const Navbar = (props) => {
  // let history = useHistory();
  let location = useLocation();
  useEffect(() => {
  }, [location]);
  const handleLogOut = () => {
    props.showAlert("you have been succesfully Loged Out", "success")
    localStorage.removeItem("token")
    // window.location.reload();
    // history.push('/login')
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Notes App</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className={`nav-link ${location === "/" ? "active" : ''}`} aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location === "/about" ? "active" : ''}`} to="/about">About</Link>
              </li>
            </ul>
            {!localStorage.getItem("token") ? <div>
              <Link to="/login" className="btn btn-outline-info mx-1" tabIndex="-1" role="button" aria-disabled="true">LogIn</Link>
              <Link to="/signup" className="btn btn-outline-info mx-1" tabIndex="-1" role="button" aria-disabled="true">SignUp</Link>
            </div> : <div>
              <button className="btn btn-outline-info mx-1" tabIndex="-1" role="button" onClick={handleLogOut} aria-disabled="true">LogOut</button>
            </div>}

          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar