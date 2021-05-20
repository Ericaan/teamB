import React from "react";
import { Link, withRouter } from "react-router-dom";

function Navigation(props) {
  return (
    <div className="navigation">
      <nav class="navbar py-4 navbar-expand navbar-dark bg-dark">
        <div class="container">
          <Link class="navbar-brand" to="/">
            TeamB - Simple Web
          </Link>
          <div>
            <ul class="navbar-nav ml-auto">
              <li
                class={`nav-item  ${
                  props.location.pathname === "/" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/">
                  Home
                  <span class="sr-only">(current)</span>
                </Link>
              </li>

              <li
                class={`nav-item  ${
                  props.location.pathname === "/author" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/author">
                  Author
                </Link>
              </li>

              <li
                class={`nav-item  ${
                  props.location.pathname === "/post" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/post">
                  Post
                </Link>
              </li>

              <li
                class={`nav-item  ${
                  props.location.pathname === "/user" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/user">
                  User
                </Link>
              </li>

              <li
                class={`nav-item  ${
                  props.location.pathname === "/about" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/about">
                  About
                </Link>
              </li>

            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default withRouter(Navigation);
