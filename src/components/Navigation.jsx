import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import TodoContext from "../context/TodoContext";
import './css/navi.css';

function Navigation(props) {
  const { user, setUser } = useContext(TodoContext);
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem('user');
    setUser(null);
    navigate('/');
  }

  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className=" container-fluid">

        <div className="col-lg-6 ps-5 justify-content-start" >
          <div className="navbar-brand" to="#"><img src="Assets/logo.png" alt="logo" />
          </div>
        </div>

        <div className="col-lg-6 pe-5 justify-content-end  navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav navbar-element mb-lg-0">


            <li className="nav-item">
              <NavLink className="nav-link fs-5" aria-current="page"  to="/login">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link fs-5"  to="/about">
                About
              </NavLink>
            </li>
            {!user ?
              <></> : <>
                <li className="nav-item">
                  <NavLink className="nav-link fs-5" to="/create-task">
                    Create Task
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link fs-5" to="/task-list">
                    Task List
                  </NavLink>
                </li>

                <div className="btn-group">
                  <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">
                    <img style={{ height: "24px", width: "24px" }} src="Assets/Vector.png" alt="logo" />
                  </button>
                  <ul class="dropdown-menu dropdown-menu-end dropdown-menu-lg-end">
                    <li><NavLink className="nav-link " to="/profile">{user?.username}</NavLink></li>
                    <li><div className="nav-link " onClick={logout}>logout</div></li>
                  </ul>
                </div>
              </>
            }
          </ul>
        </div>
      </div >
    </nav >
  );
}

export default Navigation;
