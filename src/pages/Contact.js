import React from "react";

export default function Contact() {
  return (
    <div>
      <div className="uk-section uk-section-default uk-padding-remove-top">
        <div className="uk-container">
          <div className="uk-grid-large" data-uk-grid>
            <div className="uk-width-1-2@m uk-flex uk-flex-middle">
              <div>
                <h1 className="uk-margin-bottom">
                  Hello, what's on your mind?
                </h1>
                <p>
                  Credibly administrate market positioning deliverables rather
                  than clicks-and-mortar methodologies. Proactively formulate
                  out-of-the-box technology with clicks-and-mortar testing
                  procedures. Uniquely promote leveraged web-readiness for
                  standards compliant value. Rapidiously pontificate cooperative
                  mindshare via maintainable applications.
                </p>
                <a
                  href="#"
                  className="uk-button uk-button-primary uk-margin-top"
                >
                  Schedule a call
                </a>
              </div>
            </div>
            <div className="uk-width-1-2@m">
              <div className="uk-background-primary uk-border-rounded-large uk-light uk-padding uk-margin-top">
                <form className="uk-form-stacked">
                  <div className="uk-margin-bottom">
                    <label className="uk-form-label" htmlFor="name">
                      Name
                    </label>
                    <div className="uk-form-controls">
                      <input
                        id="name"
                        className="uk-input uk-border-pill"
                        name="name"
                        type="text"
                        required
                      />
                    </div>
                  </div>
                  <div className="uk-margin-bottom">
                    <label className="uk-form-label" htmlFor="_replyto">
                      Email
                    </label>
                    <div className="uk-form-controls">
                      <input
                        id="_replyto"
                        className="uk-input uk-border-pill"
                        name="_replyto"
                        type="email"
                        required
                      />
                    </div>
                  </div>
                  <div className="uk-margin-bottom">
                    <label className="uk-form-label" htmlFor="message">
                      Message
                    </label>
                    <div className="uk-form-controls">
                      <textarea
                        id="message"
                        className="uk-textarea uk-border-rounded-large"
                        name="message"
                        rows={5}
                        minLength={10}
                        required
                        defaultValue={""}
                      />
                    </div>
                  </div>
                  <div className="uk-text-center">
                    <input
                      className="uk-button uk-button-warning uk-border-pill"
                      type="submit"
                      defaultValue="Send Message"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
