import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Header() {
  let [query, setQuery] = useState("");
  console.log(query);
  const navigate = useNavigate();
  const handelSearch = () => {
    navigate(`/searchResults?search=${query}`);
  };

  return (
    <div>
      <nav className="uk-navbar-container uk-letter-spacing-small">
        <div className="uk-container">
          <div className="uk-position-z-index" data-uk-navbar>
            <div className="uk-navbar-left">
              <Link className="uk-navbar-item uk-logo" to="/">
                Kocina
              </Link>
              <ul className="uk-navbar-nav uk-visible@m uk-margin-large-left">
                <li className="uk-active">
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/searchrecipe">Search</Link>
                </li> 
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>
            <div className="uk-navbar-right">
              <div>
                {/* <a className="uk-navbar-toggle" data-uk-search-icon href="#" /> */}
                <div
                  className="uk-drop uk-background-default"
                  data-uk-drop="mode: click; pos: left-center; offset: 0"
                >
                  <form
                    className="uk-search uk-search-default uk-width-1-1 uk-margin-small-bottom"
                    onSubmit={handelSearch}
                  >
                    <span data-uk-search-icon />
                    <input
                      className="uk-search-input uk-text-small uk-border-rounded uk-form-large"
                      type="search"
                      value={query}
                      onChange={(e) => {
                        setQuery(e.target.value);
                      }}
                      placeholder="Search for recipes..."
                    />
                  </form>
                </div>
              </div>
              <ul className="uk-navbar-nav uk-visible@m">
                <li>
                  <Link to="/signIn">Sign In</Link>
                </li>
              </ul>
              <div className="uk-navbar-item">
                <div>
                  <Link
                    className="uk-button uk-button-primary"
                    to="/signUp"
                  >
                    Sign Up
                  </Link>
                </div>
              </div>
              <a
                className="uk-navbar-toggle uk-hidden@m"
                href="#offcanvas"
                data-uk-toggle
              >
                <span data-uk-navbar-toggle-icon />
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
