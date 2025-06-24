import React from "react";
import imgLogo from "../img/pers-logo.png"; // Adjust path as needed

const HomePage = () => {
  return (
    <>
      <div class="container mt-3">
        <div className="row align-items-center">
          <div className="col-lg-6 p-5 ">
            <div className="card shadow">
              <div className="card-body">
                <h5 className="card-title">JLK Consulting</h5>
                <h6 className="card-subtitle mb-2 text-body-secondary">
                  Web Applications Development
                </h6>
                <hr></hr>
                <h6>Technology</h6>
                <div className="intro-line">
                  <p>
                    Current technology features that are commonly included in
                    JLK projects:
                    <ul>
                      <li>Simple and powerful front end; usually Bootstrap</li>
                      <li>PHP Framework CodeIgniter</li>
                      <li>MySQL database</li>
                      <li>
                        LAMP Stack (Linux OS, Apache Web Server, MySQL Database,
                        PHP environment)
                      </li>
                      <li>MERN Stack (MongoDB, Express, React, Node.js)</li>
                    </ul>
                  </p>
                </div>
              </div>
              <div class="card-footer">Footer</div>
            </div>
          </div>
          <div className="col-lg-5 m-4">
            <div class="card shadow">
              <img src={imgLogo} alt="logo" className="m-2 img-fluid" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div class="content-section mt-5">
              <div class="divider">
                <div class="divider-fade"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div class="card shadow">
              <div class="card-header">Header</div>
              <div class="card-body">Content</div>
              <div class="card-footer">Footer</div>
            </div>
          </div>
          <div className="col-lg-6">
            <div class="card shadow">
              <div class="card-header">Header</div>
              <div class="card-body">Content</div>
              <div class="card-footer">Footer</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
