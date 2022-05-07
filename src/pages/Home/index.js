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

      <div className="about-section-05">
        <div
          className="about-section-05__shape aos-init aos-animate"
          data-aos="fade-left"
          data-aos-delay="500"
          data-aos-duration="1000"
        >
          <div className="react-svg-w-100" alt="shape">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="245"
                height="246"
                viewBox="0 0 245 246"
                fill="none"
                className="injected-svg"
                data-src="./home-8/shape.svg"
              >
                <path
                  opacity="0.3"
                  d="M0.194336 0.947506C0.219888 33.0633 6.57087 64.8597 18.8847 94.521C31.1985 124.182 49.234 151.128 71.9613 173.819C94.6887 196.51 121.663 214.503 151.344 226.77C181.025 239.036 212.831 245.337 244.947 245.311L244.752 0.75293L0.194336 0.947506Z"
                  fill="#00BB98"
                ></path>
              </svg>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-5 col-lg-6">
              <div
                className="about-section-05__image-group mb-mobile-lg aos-init aos-animate"
                data-aos="fade-right"
                data-aos-delay="500"
                data-aos-duration="1000"
              >
                <img
                  src="./home-8/about.png"
                  alt="about-img"
                  className="w-100"
                />
              </div>
            </div>
            <div
              className="col-xl-5 offset-xl-2 col-lg-6 aos-init aos-animate"
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-duration="1000"
            >
              <div className="about-section-05__content block-title">
                <h6 className="subtitle text-secondary  mb-20">About Custer</h6>
                <h2 className="title">
                  Custer teams lead the way to better healthcare &amp;
                  treatments
                </h2>
                <p className="text-dark">
                  An enim nullam tempor sapien gravida donec enim ipsum{" "}
                  <br className="d-none d-xl-block" />
                  porta justo integer at odio velna vitae auctor integer congue{" "}
                </p>
                <a className="btn btn-primary btn-primary-hvr" href="#">
                  Get Started
                </a>
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

      <div className="content-section-18">
        <div className="container">
          <div className="row">
            <div
              className="col-xl-6 col-lg-6 col-md-10 col-xs-10 col-sm-10 aos-init aos-animate"
              data-aos="fade-right"
              data-aos-delay="500"
              data-aos-duration="1000"
            >
              <div className="content-section-18__image-group mb-mobile-lg">
                <img
                  src="./home-8/content-2.png"
                  alt="content-image"
                  className="mw-100"
                />
                <div className="content-section-18__image-group--card">
                  <img
                    src="./home-8/content-2-card.png"
                    alt="card"
                    className="w-100"
                  />
                </div>
                <div className="content-section-18__image-group--shape two-way-circle">
                  <div alt="card" className="react-svg-w-100 make-it-inline">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="180"
                        height="180"
                        viewBox="0 0 180 180"
                        fill="none"
                        className="injected-svg"
                        data-src="./home-8/content-2-shape.svg"
                      >
                        <path
                          d="M174.982 90C177.754 90 180.015 92.2482 179.86 95.015C178.965 111.054 173.791 126.594 164.832 140.001C154.943 154.802 140.887 166.337 124.442 173.149C107.996 179.961 89.9002 181.743 72.4419 178.271C54.9836 174.798 38.9471 166.226 26.3604 153.64C13.7737 141.053 5.20199 125.016 1.72932 107.558C-1.74335 90.0998 0.0389552 72.0038 6.85084 55.5585C13.6627 39.1131 25.1983 25.0571 39.9987 15.1677C53.4057 6.20944 68.9464 1.03474 84.985 0.139796C87.7518 -0.014589 90 2.24641 90 5.0175C90 7.78859 87.7512 10.0186 84.9855 10.1923C70.9331 11.0752 57.3302 15.6561 45.5738 23.5115C32.4237 32.2982 22.1743 44.787 16.122 59.3987C10.0696 74.0104 8.48604 90.0887 11.5715 105.6C14.657 121.112 22.2729 135.36 33.4562 146.544C44.6395 157.727 58.8879 165.343 74.3996 168.428C89.9113 171.514 105.99 169.93 120.601 163.878C135.213 157.826 147.702 147.576 156.488 134.426C164.344 122.67 168.925 109.067 169.808 95.0145C169.981 92.2488 172.211 90 174.982 90Z"
                          fill="#00BB98"
                        ></path>
                        <path
                          d="M66.9841 31.8313C66.1284 29.6846 67.1719 27.2371 69.3685 26.5191C80.4005 22.9134 92.2147 22.2732 103.615 24.7002C116.382 27.4182 128.057 33.8613 137.163 43.2145C146.268 52.5677 152.396 64.411 154.771 77.2467C157.145 90.0825 155.661 103.334 150.504 115.326C145.347 127.318 136.75 137.511 125.801 144.617C114.851 151.723 102.039 155.423 88.987 155.248C75.9346 155.073 63.2273 151.031 52.4718 143.634C42.8683 137.029 35.2061 128.014 30.2343 117.526C29.2444 115.438 30.303 112.997 32.4498 112.141C34.5965 111.286 37.0167 112.341 38.0258 114.42C42.3718 123.373 48.9747 131.072 57.2142 136.739C66.6058 143.198 77.7019 146.727 89.0992 146.88C100.497 147.032 111.683 143.802 121.245 137.597C130.806 131.392 138.313 122.491 142.816 112.02C147.319 101.549 148.615 89.9773 146.542 78.7692C144.468 67.561 139.117 57.2194 131.166 49.0522C123.215 40.885 113.021 35.259 101.872 32.8856C92.0913 30.8033 81.9615 31.3066 72.4733 34.3113C70.2702 35.009 67.8398 33.9781 66.9841 31.8313Z"
                          fill="#FD4C5C"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <div
                  className="content-section-18__image-group--dotst aos-init aos-animate"
                  data-aos="fade-left"
                  data-aos-delay="1300"
                  data-aos-duration="1000"
                >
                  <img
                    src="./home-8/content-2-dots.svg"
                    alt="card"
                    className="w-100"
                  />
                </div>
              </div>
            </div>
            <div className="col-xl-5 offset-xl-1 col-lg-6 col-md-10 col-xs-10 col-sm-10">
              <div
                className="block-title content-section-18__content aos-init aos-animate"
                data-aos="fade-up"
                data-aos-duration="800"
              >
                <h6 className="subtitle text-secondary  mb-20">
                  We made it simple
                </h6>
                <h2 className="title">
                  Quality healthcare starts with one click easily
                </h2>
                <p className="text-dark">
                  An enim nullam tempor sapien gravida donec enim ipsum{" "}
                  <br className="d-none d-xl-block" /> porta justo integer at odio
                  velna vitae auctor integer congue
                </p>
                <ul className="content-section-18__content--list">
                  <li>
                    <img src="./home-8/check.svg" alt="check" />
                    Call, video chat or message a doctor
                  </li>
                  <li>
                    <img src="./home-8/check.svg" alt="check" />
                    Insurance not required
                  </li>
                  <li>
                    <img src="./home-8/check.svg" alt="check" />
                    Prescription pick-up at your preferred pharmacy
                  </li>
                </ul>
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
                {/* <ul className="footer-content--social">
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
                </ul> */}
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
