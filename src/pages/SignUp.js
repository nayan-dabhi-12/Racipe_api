import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <div className="uk-grid-collapse" data-uk-grid>
      <div
        className="uk-width-1-2@m uk-padding-large uk-flex uk-flex-middle uk-flex-center"
        data-uk-height-viewport
      >
        <div className="uk-width-3-4@s">
          <div className="uk-text-center uk-margin-bottom">
            <a
              className="uk-logo uk-text-primary uk-text-bold"
              href="index.html"
            >
              Kocina
            </a>
          </div>
          <div className="uk-text-center uk-margin-medium-bottom">
            <h1 className="uk-h2 uk-letter-spacing-small">Create an Account</h1>
          </div>
          <div
            data-uk-grid
            className="uk-child-width-auto uk-grid-small uk-flex uk-flex-center uk-margin"
          >
            <div>
              <a
                href="#"
                data-uk-icon="icon: facebook"
                className="uk-icon-button uk-icon-button-large facebook"
              />
            </div>
            <div>
              <a
                href="#"
                data-uk-icon="icon: google-plus"
                className="uk-icon-button uk-icon-button-large google-plus"
              />
            </div>
            <div>
              <a
                href="#"
                data-uk-icon="icon: linkedin"
                className="uk-icon-button uk-icon-button-large linkedin"
              />
            </div>
          </div>
          <div className="uk-text-center uk-margin">
            <p className="uk-margin-remove">
              Or use your email for registration:
            </p>
          </div>
          <form className="uk-text-center">
            <div className="uk-width-1-1 uk-margin">
              <label className="uk-form-label" htmlFor="name">
                Full name
              </label>
              <input
                id="name"
                className="uk-input uk-form-large uk-border-pill uk-text-center"
                type="text"
                placeholder="Tom Atkins"
              />
            </div>
            <div className="uk-width-1-1 uk-margin">
              <label className="uk-form-label" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                className="uk-input uk-form-large uk-border-pill uk-text-center"
                type="email"
                placeholder="tom@company.com"
              />
            </div>
            <div className="uk-width-1-1 uk-margin">
              <label className="uk-form-label" htmlFor="password">
                Password
              </label>
              <input
                id="password"
                className="uk-input uk-form-large uk-border-pill uk-text-center"
                type="password"
                placeholder="Min 8 characters"
              />
            </div>
            <div className="uk-width-1-1 uk-text-center">
              <button className="uk-button uk-button-primary uk-button-large">
                Sign Up
              </button>
            </div>
            <div className="uk-width-1-1 uk-margin uk-text-center">
              <p className="uk-text-small uk-margin-remove">
                By signing up you agree to our{" "}
                <a className="uk-link-border" href="#">
                  terms
                </a>{" "}
                of service.
              </p>
            </div>
          </form>
        </div>
      </div>
      <div
        className="uk-width-1-2@m uk-padding-large uk-flex uk-flex-middle uk-flex-center uk-light"
        data-uk-height-viewport
      >
        <div
          className="uk-background-cover uk-background-norepeat uk-background-blend-overlay uk-background-overlay 
uk-border-rounded-large uk-width-1-1 uk-height-xlarge uk-flex uk-flex-middle uk-flex-center"
          style={{
            backgroundImage:
              "url(https://source.unsplash.com/2wq0ReWAM8I/600x600)",
          }}
        >
          <div className="uk-padding-large">
            <div className="uk-text-center">
              <h2 className="uk-letter-spacing-small">Welcome Back</h2>
            </div>
            <div className="uk-margin-top uk-margin-medium-bottom uk-text-center">
              <p>
                Already signed up, enter your details and start cooking your
                first meal today
              </p>
            </div>
            <div className="uk-width-1-1 uk-text-center">
              <Link
                to="/signIn"
                className="uk-button uk-button-primary uk-button-large"
              >
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
