import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const Signup = () => {
  return (
    <React.Fragment>
      <div>
        <div className="container">
          <div className="row justify-content-sm-center">
            <div className="col-12 mt-5 py-2">
              <div className="d-flex justify-content-between">
                <span className="text-uppercase small mb-4 text-black-50 fw-light">
                  account setup
                </span>
                <span className="text-uppercase small mb-4 text-black-50 fw-light">
                  step 1 of 4
                </span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="d-flex flex-column flex-fill justify-content-center">
          <div className="container">
            <div className="align-self-center rounded p-5 bg-white">
              <h5 className="text-center mb-0 fw-normal">Select One</h5>
              <form className="mt-5">
                <div className="mb-2 pb-1">
                  <div className="bg-light p-3 border border-transparent rounded-1">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                      <label
                        className="form-check-label small align-text-top"
                        htmlFor="flexRadioDefault1"
                      >
                        I am a Driver
                      </label>
                    </div>
                  </div>
                </div>
                <div className="mb-2 pb-1">
                  <div className="bg-light p-3 border border-dark rounded-1">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                        defaultChecked
                      />
                      <label
                        className="form-check-label small align-text-top text-black"
                        htmlFor="flexRadioDefault1"
                      >
                        I am a Shipper
                      </label>
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-evenly mt-3 pt-1">
                  <Link
                    className="btn btn-outline-primary btn-lg fw-medium"
                    to="/"
                  >
                    Back
                  </Link>
                  <Button
                    variant="primary"
                    className="btn-lg fw-medium"
                    type="button"
                  >
                    Next
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="d-flex flex-column flex-fill justify-content-center">
          <div className="container">
            <div className="align-self-center rounded p-5 bg-white">
              <h5 className="text-center mb-0 fw-normal">
                Are you a Business or Individual
              </h5>
              <form className="mt-5">
                <div className="mb-2 pb-1">
                  <div className="bg-light p-3 border border-transparent rounded-1">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                      <label
                        className="form-check-label small align-text-top"
                        htmlFor="flexRadioDefault1"
                      >
                        I want to sign up as a business
                      </label>
                    </div>
                  </div>
                </div>
                <div className="mb-2 pb-1">
                  <div className="bg-light p-3 border border-dark rounded-1">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                        defaultChecked
                      />
                      <label
                        className="form-check-label small align-text-top text-black"
                        htmlFor="flexRadioDefault1"
                      >
                        I want to sign up as an Individual
                      </label>
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-evenly mt-3 pt-1">
                  <button
                    className="btn btn-outline-primary btn-lg fw-medium"
                    type="button"
                    onclick="window.location.href='signup-step1.html'"
                  >
                    Back
                  </button>
                  <button
                    className="btn btn-primary btn-lg fw-medium"
                    type="button"
                    onclick="window.location.href='signup-step3.html'"
                  >
                    Next
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="h-100 d-flex flex-column overflow-auto w-auto">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="align-self-center rounded p-5 bg-white mb-3">
                  <h5 className="text-center mb-0 fw-normal">
                    Enter Business &amp; Personal Info
                  </h5>
                  <form className="mt-5">
                    <div className="row">
                      <div className="col-md">
                        <div className="form-floating pb-1">
                          <input
                            type="text"
                            className="form-control"
                            id="floatingInput"
                            placeholder="KJ Farms"
                            defaultValue="KJ Farms"
                          />
                          <label htmlFor="floatingInput">Business Name</label>
                        </div>
                      </div>
                      <div className="col-md">
                        <div className="form-floating pb-1">
                          <select
                            className="form-select"
                            id="floatingSelectGrid"
                            aria-label="Floating label select example"
                          >
                            <option selected>Generic Type</option>
                            <option value={1} />
                            <option value={2} />
                            <option value={3} />
                          </select>
                          <label htmlFor="floatingSelectGrid">
                            Business Type
                          </label>
                        </div>
                      </div>
                    </div>
                    <div>
                      <p className="text-uppercase small text-black-50 mb-4 pt-3">
                        personal name
                      </p>
                      <div className="row">
                        <div className="col-6">
                          <div className="form-floating pb-1">
                            <input
                              type="text"
                              className="form-control"
                              id="floatingInput"
                              placeholder="Kelvin"
                              defaultValue="Kelvin"
                            />
                            <label htmlFor="floatingInput">First Name</label>
                          </div>
                        </div>
                        <div className="col-6">
                          <div className="form-floating pb-1">
                            <input
                              type="text"
                              className="form-control"
                              id="floatingInput"
                              placeholder="J"
                              defaultValue="J"
                            />
                            <label htmlFor="floatingInput">Last Name</label>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-12">
                          <div className="form-floating pb-1">
                            <input
                              type="text"
                              className="form-control"
                              id="floatingInput"
                              placeholder="(313) 3333 3311"
                              defaultValue="(313) 3333 3311"
                            />
                            <label htmlFor="floatingInput">Contact No.</label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <p className="text-uppercase small text-black-50 mb-4 pt-3">
                        Account Info
                      </p>
                      <div className="row mb-3">
                        <div className="col-12">
                          <div className="form-floating pb-1">
                            <input
                              type="text"
                              className="form-control"
                              id="floatingInput"
                              placeholder="kevin.j@gmail.com"
                              defaultValue="kevin.j@gmail.com"
                            />
                            <label htmlFor="floatingInput">First Name</label>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="form-floating pb-1">
                            <input
                              type="text"
                              className="form-control"
                              id="floatingInput"
                              placeholder="*****************"
                              defaultValue="*****************"
                            />
                            <label htmlFor="floatingInput">Set Password</label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex justify-content-evenly">
                      <button
                        className="btn btn-outline-primary btn-lg fw-medium"
                        type="button"
                        onclick="window.location.href='signup-step2.html'"
                      >
                        Back
                      </button>
                      <button
                        className="btn btn-primary btn-lg fw-medium"
                        type="button"
                        onclick="window.location.href='signup-step4.html'"
                      >
                        Next
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="h-100 d-flex flex-column overflow-auto w-auto">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="align-self-center rounded p-4 bg-white mb-3">
                  <h5 className="text-center mb-4 fw-normal">
                    Review Terms and Conditions
                  </h5>
                  <div className="bg-light">
                    <div className="p-4 mx-2">
                      <h6 className="mb-3 py-1">Terms and Conditions</h6>
                      <p className="small">
                        Please read these terms and conditions of use (“Terms”)
                        carefully. By (i) accessing this website (the “Site”)
                        and any pages or materials contained in this website or
                        (ii) making any purchases from us of any goods featured
                        on this Site, you agree to be bound by the Terms set
                        forth below.
                      </p>
                      <p className="small">
                        If you do not agree to all of the Terms set forth below,
                        please do not access this website, or any associated
                        pages or materials or make any purchases of any goods
                        from us. In particular, please read the disclaimer and
                        limitation of liability under the heading “IMPORTANT:
                        DISCLAIMER AND LIMITATION OF DAMAGES”.
                      </p>
                      <p className="small">
                        The Micropore Technologies Site is owned and operated by
                        Micropore Technologies Limited (also referred to as
                        “we”, “us” or “our”). The pages and materials contained
                        on this Site are the property of Micropore Technologies
                        Ltd or are owned by a third party and are used by us
                        under license.
                      </p>
                      <p className="small">
                        We reserve the right to change, add, or remove any
                        portion of this Site or these Terms, in whole or in
                        part, at any time and for any reason, with or without
                        notice. Changes to these Terms will be effective when
                        posted. You agree to review these Terms periodically to
                        be aware of any changes. Your continued use of this Site
                        after any changes to the Terms will be considered
                        acceptance of those changes. These Terms govern your use
                        of this Site. In the event that you do not comply with
                        these Terms, we may, without notice, block or restrict
                        your access to this Site and/or pursue legal action
                        against you for any alleged or actual violation of these
                        Terms or governing law.
                      </p>
                      <h6>Privacy Policy</h6>
                      <p className="small">
                        FreightRunner TECHNOLOGIES LIMITED ("We") are committed
                        to protecting and respecting your privacy.
                      </p>
                      <p className="small">
                        This policy (together with our terms of use detailed on
                        this page and any other documents referred to on it)
                        sets out the basis on which any personal data we collect
                        from you, or that you provide to us, will be processed
                        by us. Please read the following carefully to understand
                        our views and practices regarding your personal data and
                        how we will treat it. By visiting www.microporetech.com
                        you are accepting and consenting to the practices
                        described in this policy. For the purpose of the Data
                        Protection Act 1998 (the Act), the data controller is
                        Micropore Technologies Limited of The Wilton Centre,
                        Redcar, TS10 4RF.
                      </p>
                    </div>
                  </div>
                  <div className="d-flex justify-content-evenly">
                    <button
                      className="btn btn-outline-primary btn-lg fw-medium"
                      type="button"
                      onclick="window.location.href='signup-step3.html'"
                    >
                      Back
                    </button>
                    <button className="btn btn-primary btn-lg fw-medium">
                      Next
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Signup;
