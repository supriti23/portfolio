import React from "react";
import ImageHome from "../files/ImageHome.jpg";
import ProfilePic from "../files/ProfilePic.png";
import "./Style.css";
import pdf from "../files/Supriti.pdf";

const Home = () => {
  return (
    <>
      <div className="container-fluid home ">
        <div className="row ">
          <div className="col-md-5 d-none d-md-block">
            <img
              src={ImageHome}
              className="img-fluid homeImage"
              alt="home background"
            />
          </div>
          <div className="col-md-7 col-xs-12 col-sm-12">
            <div className="row">
              <div className="col-md-4">
                <img src={ProfilePic} className="img-fluid" alt="profile" />
              </div>
              <div className="col-md-8 heading">
                <div className="row">
                  <h1>Hello! I'm Supriti</h1>
                </div>
                <div className="row">
                  <h5>Frontend Developer</h5>
                </div>
                <div className="row">
                  <span>
                    <a
                      href="https://www.linkedin.com/in/supritisarkar/"
                      className="fa fa-linkedin"
                    ></a>
                    <a
                      href="https://www.instagram.com/supritisarkar7/"
                      className="fa fa-instagram"
                    ></a>
                    <a
                      href="https://www.facebook.com/supriti.sarkar.5/"
                      className="fa fa-facebook"
                    ></a>
                  </span>
                </div>
                <div className="row">
                  <a href={pdf} download="Supriti Sarkar.pdf">
                    <button type="button" className="btn  btn-lg">
                      Download Resume
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div className="row details">
              <div className="col-md-12">
                <div className="row ">
                  <span>
                    <i className="fa fa-phone"></i>
                    <p className="text">Phone : +49 15739586813</p>
                  </span>
                </div>
                <div className="row">
                  <span>
                    <i className="fa fa-envelope"></i>
                    <p className="text">Email : supritisarkar@outlook.com</p>
                  </span>
                </div>
                <div className="row">
                  <span>
                    <i className="fa fa-map-marker"></i>
                    <p className="text">
                      Address : Hirzerweg 4A, Berlin - 12107
                    </p>
                  </span>
                </div>
                <div className="row">
                  <span>
                    <i className="fa fa-calendar"></i>
                    <p className="text">Date of Birth : July 23rd, 1991</p>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
