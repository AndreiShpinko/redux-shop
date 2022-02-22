import React from "react";
import "./Contacts.scss";

const Contacts = () => {
  return (
    <div className="min-vh-100 one-page">
      <div className="h-100 flex-center" id="contacts">
        <div className="animation-wrapper position-absolute w-100 h-100">
          <div className="animation position-relative w-100 h-100 overflow-hidden">
            <div className="github">
              <span className="first">
                g
                <span>
                  i
                  <span>
                    t
                    <span>
                      h
                      <span>
                        u
                        <span>
                          b
                          <span>
                            <span>
                              g
                              <span>
                                i
                                <span>
                                  t
                                  <span>
                                    h
                                    <span>
                                      u
                                      <span>
                                        b<span> </span>
                                      </span>
                                    </span>
                                  </span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </span>
              </span>
            </div>
            <div className="telegram">
              <span className="first">
                t
                <span>
                  e
                  <span>
                    l
                    <span>
                      e
                      <span>
                        g
                        <span>
                          r
                          <span>
                            a
                            <span>
                              m
                              <span>
                                <span>
                                  <span>
                                    t
                                    <span>
                                      e
                                      <span>
                                        l
                                        <span>
                                          e
                                          <span>
                                            g
                                            <span>
                                              r
                                              <span>
                                                a
                                                <span>
                                                  m
                                                  <span>
                                                    <span> </span>
                                                  </span>
                                                </span>
                                              </span>
                                            </span>
                                          </span>
                                        </span>
                                      </span>
                                    </span>
                                  </span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </span>
              </span>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="flex-center">
            <a
              href="https://t.me/andrei_shpinko"
              className="btn btn-dark card-link text-white"
            >
              <i className="fa fa-telegram"></i>
            </a>
            <a
              href="https://github.com/AndreiShpinko"
              className="btn btn-dark card-link text-white"
            >
              <i className="fa fa-github"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
