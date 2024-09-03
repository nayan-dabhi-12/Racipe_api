import React from "react";

export default function Footer() {
  return (
    <div>
      <footer className="uk-section uk-section-default">
        <div className="uk-container uk-text-secondary uk-text-500">
          <div className="uk-child-width-1-2@s" data-uk-grid>
            <div>
              <a href="#" className="uk-logo">
                Kocina
              </a>
            </div>
            <div className="uk-flex uk-flex-middle uk-flex-right@s">
              <div data-uk-grid className="uk-child-width-auto uk-grid-small">
                <div>
                  <a
                    href="https://www.facebook.com/"
                    data-uk-icon="icon: facebook; ratio: 0.8"
                    className="uk-icon-button facebook"
                    target="_blank"
                  />
                </div>
                <div>
                  <a
                    href="https://www.instagram.com/"
                    data-uk-icon="icon: instagram; ratio: 0.8"
                    className="uk-icon-button instagram"
                    target="_blank"
                  />
                </div>
                <div>
                  <a
                    href="mailto:info@blacompany.com"
                    data-uk-icon="icon: twitter; ratio: 0.8"
                    className="uk-icon-button twitter"
                    target="_blank"
                  />
                </div>
              </div>
            </div>
          </div>
          <div
            className="uk-child-width-1-2@s uk-child-width-1-4@m"
            data-uk-grid
          >
            <div>
              <ul className="uk-list uk-text-small">
                <li>
                  <a className="uk-link-text" href="#">
                    Presentations
                  </a>
                </li>
                <li>
                  <a className="uk-link-text" href="#">
                    Professionals
                  </a>
                </li>
                <li>
                  <a className="uk-link-text" href="#">
                    Stores
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <ul className="uk-list uk-text-small">
                <li>
                  <a className="uk-link-text" href="#">
                    Webinars
                  </a>
                </li>
                <li>
                  <a className="uk-link-text" href="#">
                    Workshops
                  </a>
                </li>
                <li>
                  <a className="uk-link-text" href="#">
                    Local Meetups
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <ul className="uk-list uk-text-small">
                <li>
                  <a className="uk-link-text" href="#">
                    Our Initiatives
                  </a>
                </li>
                <li>
                  <a className="uk-link-text" href="#">
                    Giving Back
                  </a>
                </li>
                <li>
                  <a className="uk-link-text" href="#">
                    Communities
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <ul className="uk-list uk-text-small">
                <li>
                  <a className="uk-link-text" href="#">
                    Contact Form
                  </a>
                </li>
                <li>
                  <a className="uk-link-text" href="#">
                    Work With Us
                  </a>
                </li>
                <li>
                  <a className="uk-link-text" href="#">
                    Visit Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      <div id="offcanvas" data-uk-offcanvas="flip: true; overlay: true">
        <div className="uk-offcanvas-bar">
          <a className="uk-logo" href="index.html">
            Kocina
          </a>
          <button
            className="uk-offcanvas-close"
            type="button"
            data-uk-close="ratio: 1.2"
          />
          <ul className="uk-nav uk-nav-primary uk-nav-offcanvas uk-margin-medium-top uk-text-center">
            <li className="uk-active">
              <a href="index.html">Home</a>
            </li>
            <li>
              <a href="recipe.html">Recipe</a>
            </li>
            <li>
              <a href="search.html">Search</a>
            </li>
            <li>
              <a href="contact.html">Contact</a>
            </li>
            <li>
              <a href="sign-in.html">Sign In</a>
            </li>
            <li>
              <a href="sign-up.html">Sign Up</a>
            </li>
          </ul>
          <div className="uk-margin-medium-top">
            <a
              className="uk-button uk-width-1-1 uk-button-primary"
              href="sign-up.html"
            >
              Sign Up
            </a>
          </div>
          <div className="uk-margin-medium-top uk-text-center">
            <div
              data-uk-grid
              className="uk-child-width-auto uk-grid-small uk-flex-center"
            >
              <div>
                <a
                  href="https://twitter.com/"
                  data-uk-icon="icon: twitter"
                  className="uk-icon-link"
                  target="_blank"
                />
              </div>
              <div>
                <a
                  href="https://www.facebook.com/"
                  data-uk-icon="icon: facebook"
                  className="uk-icon-link"
                  target="_blank"
                />
              </div>
              <div>
                <a
                  href="https://www.instagram.com/"
                  data-uk-icon="icon: instagram"
                  className="uk-icon-link"
                  target="_blank"
                />
              </div>
              <div>
                <a
                  href="https://x.com/"
                  data-uk-icon="icon: x"
                  className="uk-icon-link"
                  target="_blank"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
