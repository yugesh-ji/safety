import Link from "next/link";
import React from "react";
import FooterLogo from "../../../public/assets/img/logo/logo-2.png";
import Image from "next/image";
import CopyrightArea from "./copyright-area";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer__area footer-bg">
          <div className="footer__top pt-190 pb-40">
            <div className="container">
              <div className="row">
                {/* RAHSM Logo & About */}
                <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-6">
                  <div className="footer__widget mb-50">
                    <div className="footer__widget-head mb-22">
                      <div className="footer__logo">
                        <Link href="/">
                          <Image
                            src={FooterLogo}
                            style={{ width: "auto", height: "auto" }}
                            alt="RAHSM Logo"
                          />
                        </Link>
                      </div>
                    </div>
                    <div className="footer__widget-body">
                      <p>
                        RAHSM is the most trusted safety institute in
                        Gorakhpur. We offer job-oriented courses in Web Design,
                        Tally, Graphic Design, MS Office, and Spoken English.
                      </p>

                      <div className="footer__social">
                        <ul>
                          <li>
                            <Link href="https://www.facebook.com/profile.php?id=61577995044129" target="_blank">
                              <i className="fab fa-facebook-f"></i>
                            </Link>
                          </li>
                          <li>
                            <Link href="https://www.instagram.com/rahsm.rashmgroup/" target="_blank" className="tw">
                              <i className="fab fa-instagram"></i>
                            </Link>
                          </li>
                          <li>
                            <Link href="https://www.youtube.com/@rahsm.rashmgroup" target="_blank" className="pin">
                              <i className="fab fa-youtube"></i>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Links - Company */}
                <div className="col-xxl-2 offset-xxl-1 col-xl-2 offset-xl-1 col-lg-3 col-md-2 col-sm-5">
                  <div className="footer__widget mb-50">
                    <div className="footer__widget-head mb-22">
                      <h3 className="footer__widget-title">Institute</h3>
                    </div>
                    <div className="footer__widget-body">
                      <div className="footer__link">
                        <ul>
                          <li><Link href="/about">About RAHSM</Link></li>
                          <li><Link href="/course-grid">Our Courses</Link></li>
                          <li><Link href="/contact">Contact Us</Link></li>
                          <li><Link href="/instructor">Our Faculty</Link></li>
                          {/* <li><Link href="/career">Career With Us</Link></li> */}
                          <li><Link href="/admission">Admissions</Link></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Platform */}
                <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-3 col-sm-6">
                  <div className="footer__widget mb-50">
                    <div className="footer__widget-head mb-22">
                      <h3 className="footer__widget-title">Programs</h3>
                    </div>
                    <div className="footer__widget-body">
                      <div className="footer__link">
                        <ul>
                          <li><Link href="/course-grid">Web Design</Link></li>
                          <li><Link href="/course-grid">Tally with GST</Link></li>
                          <li><Link href="/course-grid">Graphic Design</Link></li>
                          <li><Link href="/course-grid">Spoken English</Link></li>
                          <li><Link href="/course-grid">Advanced Excel</Link></li>
                          <li><Link href="/blog">Latest News</Link></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Newsletter */}
                <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-5 col-sm-6">
                  <div className="footer__widget footer__pl-70 mb-50">
                    <div className="footer__widget-head mb-22">
                      <h3 className="footer__widget-title">Newsletter</h3>
                    </div>
                    <div className="footer__widget-body">
                      <div className="footer__subscribe">
                        <form action="#">
                          <div className="footer__subscribe-input mb-15">
                            <input
                              type="email"
                              placeholder="Your email address"
                            />
                            <button type="submit">
                              <i className="fas fa-arrow-right"></i>
                              <i className="fas fa-arrow-right"></i>
                            </button>
                          </div>
                        </form>
                        <p>
                          Subscribe to receive updates on admissions, new
                          batches, and skill tips.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <CopyrightArea />
        </div>
      </footer>
    </>
  );
};

export default Footer;
