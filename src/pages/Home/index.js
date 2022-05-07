import React from "react";
import { ReactSVG } from "react-svg";
import "../../assets/bootstrap/css/bootstrap.min.css";
import "../../assets/fonts/font-awesome.min.css";
import "../../assets/fonts/themify-icons.css";
import "../../assets/owlcarousel/css/owl.carousel.css";
import "../../assets/owlcarousel/css/owl.theme.css";
import "../../assets/css/animate.css";
import "../../assets/css/magnific-popup.css";
import "../../assets/css/venobox.css";
import "../../assets/css/style.css";
import { Link } from "react-router-dom";

export default function landingOne() {
  return (
    <>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand">
            <img src="./logo-two.svg" alt="logo" width="70px" />
          </a>
          <a className="navbar-brand">Home</a>
          <a className="navbar-brand">Pricing</a>
          <a className="navbar-brand">Contact Us</a>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <Link to="/auth-signin-cover">
              <button className="btn btn-outline-primary m-1" type="submit">
                Login
              </button>
            </Link>
            <Link to="/auth-signup-basic">
              <button className="btn btn-outline-primary m-1" type="submit">
                Sign Up
              </button>
            </Link>
          </form>
        </div>
      </nav>
      <div className="hero-section-08">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div
              className="col-lg-6 col-md-8 col-sm-10 col-xs-10"
              data-aos="fade-up"
              data-aos-delay={1300}
              data-aos-duration={1000}
            >
              <div className="hero-section-08__content hero-content mb-mobile-lg text-center text-lg-start">
                <h1 className="title heading-light mb-20">
                  The smartest way to find a doctor.
                </h1>
                <p className="text-light text">
                  An enim nullam tempor sapien gravida donec enim ipsum porta{" "}
                  <br className="d-none d-xl-block" />
                  justo congue magna at pretium purus pretium ligula{" "}
                </p>
                <div className="hero-section-08__content--button-group">
                  <a href="#">
                    <img
                      src="./home-8/appstore.png"
                      className="mw-100"
                      alt="appstore"
                    />
                  </a>
                  <a href="#">
                    <img
                      src="./home-8/playstore.png"
                      className="mw-100"
                      alt="playstore"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-10 col-sm-10 col-xs-10">
              <div className="hero-section-08__image-group">
                <img src="./home-8/hero.png" alt="hero-img" className="w-100" />
                <div className="hero-section-08__image-group--shape two-way-circle react-shape-w-100 react-shape-h-100">
                  <ReactSVG src="./home-8/hero-shape-2.svg" alt="shape" />
                </div>
                <div
                  className="hero-section-08__image-group--chat-1 floating-Y-animation-reverse"
                  data-aos="fade-left"
                  data-aos-delay={1500}
                  data-aos-duration={1000}
                >
                  <img
                    src="./home-8/chat-1.png"
                    className="w-100 transform-origin-bottom-20p"
                    alt="icon"
                  />
                </div>
                <div
                  className="hero-section-08__image-group--chat-2 floating-Y-animation"
                  data-aos="fade-right"
                  data-aos-delay={1500}
                  data-aos-duration={1000}
                >
                  <img
                    src="./home-8/chat-2.png"
                    className="w-100 transform-origin-top-left"
                    alt="icon"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="feature-section-06">
        <div className="feature-section-06__shape">
          <img
            src="./home-8/feature-section-dots.svg"
            className="w-100"
            alt="shape"
          />
        </div>
        <div className="container">
          <div className="row justify-content-center justify-content-lg-start feature-widgets-row-02">
            <div
              className="col-lg-4 col-md-6 col-sm-8 col-xs-10 aos-init aos-animate"
              data-aos="fade-up"
              data-aos-delay="0"
              data-aos-duration="1000"
            >
              <div className="widget widget-column feature-section-06__widget-card text-center">
                <div className="widget-icon">
                  <img src="./home-8/f-icon-1.svg" alt="icon" />
                </div>
                <div className="widget-text">
                  <h3 className="widget-title">
                    <span>Qualified Doctors</span>
                  </h3>
                  <p className="widget-text">
                    <span>
                      Fully layered dolor sit amet, consectetur adipisicing
                      elit. Facere, nobis, id expedita dolores officiis
                      laboriosam.
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-8 col-xs-10 aos-init aos-animate"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1000"
            >
              <div className="widget widget-column feature-section-06__widget-card text-center">
                <div className="widget-icon">
                  <img src="./home-8/f-icon-2.svg" alt="icon" />
                </div>
                <div className="widget-text">
                  <h3 className="widget-title">
                    <span>Trusted Treatment</span>
                  </h3>
                  <p className="widget-text">
                    <span>
                      Fully layered dolor sit amet, consectetur adipisicing
                      elit. Facere, nobis, id expedita dolores officiis
                      laboriosam.
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-8 col-xs-10 aos-init aos-animate"
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-duration="1000"
            >
              <div className="widget widget-column feature-section-06__widget-card text-center">
                <div className="widget-icon">
                  <img src="./home-8/f-icon-3.svg" alt="icon" />
                </div>
                <div className="widget-text">
                  <h3 className="widget-title">
                    <span>24/7 Services</span>
                  </h3>
                  <p className="widget-text">
                    <span>
                      Fully layered dolor sit amet, consectetur adipisicing
                      elit. Facere, nobis, id expedita dolores officiis
                      laboriosam.
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section-title text-center">
        <h6 className="subtitle text-secondary mb-20">Try our services</h6>
        <h2 className="title">
          Get the best caring <br className="d-none d-xs-block" /> facilities
          for everyone
        </h2>
        <p className="text-dark">
          {" "}
          An enim nullam tempor sapien gravida donec enim{" "}
          <br className="d-none d-xs-block" /> a vitae auctor integer congue{" "}
        </p>
      </div>

      <div className="feature-section-06">
        <div className="feature-section-06__shape">
          <img
            src="./home-8/feature-section-dots.svg"
            className="w-100"
            alt="shape"
          />
        </div>
        <div className="container">
          <div className="row justify-content-center justify-content-lg-start feature-widgets-row-02">
            <div
              className="col-lg-4 col-md-6 col-sm-8 col-xs-10 aos-init aos-animate"
              data-aos="fade-up"
              data-aos-delay="0"
              data-aos-duration="1000"
            >
              <div className="widget widget-column feature-section-06__widget-card text-center">
                <div className="widget-icon">
                  <img src="./home-8/s-icon-1.svg" alt="icon" />
                </div>
                <div className="widget-text">
                  <h3 className="widget-title">
                    <span>Cardiology</span>
                  </h3>
                  <p className="widget-text">
                    <span>
                      With lots of unique blocks you can easily create a page
                      without coding with Custer easily.
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-8 col-xs-10 aos-init aos-animate"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1000"
            >
              <div className="widget widget-column feature-section-06__widget-card text-center">
                <div className="widget-icon">
                  <img src="./home-8/s-icon-2.svg" alt="icon" />
                </div>
                <div className="widget-text">
                  <h3 className="widget-title">
                    <span>Neurology</span>
                  </h3>
                  <p className="widget-text">
                    <span>
                      Fully layered dolor sit amet, consectetur adipisicing
                      elit. Facere, nobis, id expedita dolores officiis
                      laboriosam.
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-8 col-xs-10 aos-init aos-animate"
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-duration="1000"
            >
              <div className="widget widget-column feature-section-06__widget-card text-center">
                <div className="widget-icon">
                  <img src="./home-8/s-icon-3.svg" alt="icon" />
                </div>
                <div className="widget-text">
                  <h3 className="widget-title">
                    <span>Dental Services</span>
                  </h3>
                  <p className="widget-text">
                    <span>
                      Fully layered dolor sit amet, consectetur adipisicing
                      elit. Facere, nobis, id expedita dolores officiis
                      laboriosam.
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="feature-section-06">
        <div className="feature-section-06__shape">
          <img
            src="./home-8/feature-section-dots.svg"
            className="w-100"
            alt="shape"
          />
        </div>
        <div className="container">
          <div className="row justify-content-center justify-content-lg-start feature-widgets-row-02">
            <div
              className="col-lg-4 col-md-6 col-sm-8 col-xs-10 aos-init aos-animate"
              data-aos="fade-up"
              data-aos-delay="0"
              data-aos-duration="1000"
            >
              <div className="widget widget-column feature-section-06__widget-card text-center">
                <div className="widget-icon">
                  <img src="./home-8/s-icon-4.svg" alt="icon" />
                </div>
                <div className="widget-text">
                  <h3 className="widget-title">
                    <span>Eye Care service</span>
                  </h3>
                  <p className="widget-text">
                    <span>
                      With lots of unique blocks you can easily create a page
                      without coding with Custer easily.
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-8 col-xs-10 aos-init aos-animate"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1000"
            >
              <div className="widget widget-column feature-section-06__widget-card text-center">
                <div className="widget-icon">
                  <img src="./home-8/s-icon-5.svg" alt="icon" />
                </div>
                <div className="widget-text">
                  <h3 className="widget-title">
                    <span>General checkup</span>
                  </h3>
                  <p className="widget-text">
                    <span>
                      Fully layered dolor sit amet, consectetur adipisicing
                      elit. Facere, nobis, id expedita dolores officiis
                      laboriosam.
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-8 col-xs-10 aos-init aos-animate"
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-duration="1000"
            >
              <div className="widget widget-column feature-section-06__widget-card text-center">
                <div className="widget-icon">
                  <img src="./home-8/s-icon-6.svg" alt="icon" />
                </div>
                <div className="widget-text">
                  <h3 className="widget-title">
                    <span>Medicine Services</span>
                  </h3>
                  <p className="widget-text">
                    <span>
                      Fully layered dolor sit amet, consectetur adipisicing
                      elit. Facere, nobis, id expedita dolores officiis
                      laboriosam.
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="footer-area--01">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-3 col-xl-3 col-xxl-3 col-sm-6 col-xs-9 col-10 order-sm-1 order-lg-1">
              <div className="footer-content text-center text-sm-start">
                <a href="index.html" className="footer-content--logo d-block">
                  <img src="./logo-two.svg" alt="logo" width="70px" />
                </a>
                <p className="footer-content--text text-dark">
                  There are many variations of passages of Lorem the Ipsum
                  available but it is the majority of suffered that a alteration
                  in that some dummy text.
                </p>
                <ul className="footer-content--social">
                  <li>
                    <a href="https://www.instagram.com/">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.facebook.com/">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-xl-3 col-xxl-3 col-sm-4 col-xs-11 offset-sm-1 offset-lg-0 order-sm-2 order-lg-2">
              <div className="footer-widget footer-widget--01 text-center text-sm-start">
                <h5 className="footer-widget--title">Services</h5>
                <ul className="footer-widget--list m-0 p-0 list-unstyled">
                  <li>
                    <a href="/#">Incident Responder</a>
                  </li>
                  <li>
                    <a href="/#">Secure Managed IT</a>
                  </li>
                  <li>
                    <a href="/#">Check website Url</a>
                  </li>
                  <li>
                    <a href="/#">Locker Security</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-xl-3 col-xxl-3 col-sm-4 col-xs-11 offset-sm-1 offset-lg-0 order-sm-4 order-lg-3">
              <div className="footer-widget footer-widget--02 text-center text-sm-start">
                <h5 className="footer-widget--title">About Us</h5>
                <ul className="footer-widget--list m-0 p-0 list-unstyled">
                  <li>
                    <a href="/#">Payment Plans</a>
                  </li>
                  <li>
                    <a href="/#">Make saving More</a>
                  </li>
                  <li>
                    <a href="/#">Tax Calculator</a>
                  </li>
                  <li>
                    <a href="/#">Talk To Us</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-xl-3 col-xxl-3 col-sm-6 col-xs-11 order-sm-3 order-lg-4">
              <div className="footer-widget footer-widget--03 text-center text-sm-start">
                <h5 className="footer-widget--title">Contact Info</h5>
                <ul className="footer-widget--info m-0 p-0 list-unstyled">
                  <li>455 West Orchard Street </li>
                  <li>Kings Mountain, NC 28086</li>
                  <li className="footer-2-datails">
                    <i className="fas fa-phone-alt"></i>
                    <a href="#">+8 (123) 985 789</a>
                  </li>
                  <li className="footer-2-datails">
                    <i className="fas fa-envelope"></i>
                    <a href="#"> metax@gamil.com</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright-area">
          <p>© 2022 Anewit All Rights Reserved.</p>
        </div>
      </footer>
    </>
  );
}
