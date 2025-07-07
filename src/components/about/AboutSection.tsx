import Image from "next/image";
import Link from "next/link";
import React from "react";
import YellowBg from "../../../public/assets/img/shape/yellow-bg-2.png";
import AboutImage from "../../../public/assets/img/about/about.jpg";
import AboutBanner from "../../../public/assets/img/about/about-banner.jpg";
import studentImgOne from "../../../public/assets/img/about/student-4.jpg";
import studentImgTwo from "../../../public/assets/img/about/student-3.jpg";
import studentImgThree from "../../../public/assets/img/about/student-2.jpg";
import studentImgFour from "../../../public/assets/img/about/student-1.jpg";

const AboutSection = () => {
  return (
    <section className="about__area pt-120 pb-150">
      <div className="container">
        <div className="row">
          <div className="col-xxl-5 offset-xxl-1 col-xl-6 col-lg-6">
            <div className="about__thumb-wrapper">
              <div className="edu-about">
                <h5>
                  {" "}
                  <span>10,000+</span> Students Trained
                </h5>
              </div>
              <div className="edu__thumb ml-100">
                <Image
                  src={AboutImage}
                  style={{ width: "100%", height: "auto" }}
                  alt="Rashm Academy - Students"
                />
              </div>
              <div className="about__banner educal_banner mt--210">
                <Image
                  src={AboutBanner}
                  style={{ width: "100%", height: "auto" }}
                  alt="Rashm Academy - Campus"
                />
              </div>
              <div className="about__student ml-270 mt--80">
                <Link href="/course-details">
                  <Image
                    src={studentImgOne}
                    style={{ width: "auto", height: "auto" }}
                    alt="Student 1"
                  />
                  <Image
                    src={studentImgTwo}
                    style={{ width: "auto", height: "auto" }}
                    alt="Student 2"
                  />
                  <Image
                    src={studentImgThree}
                    style={{ width: "auto", height: "auto" }}
                    alt="Student 3"
                  />
                  <Image
                    src={studentImgFour}
                    style={{ width: "auto", height: "auto" }}
                    alt="Student 4"
                  />
                </Link>
                <p>
                  Join over <span>4,000+</span> students building their careers
                </p>
              </div>
            </div>
          </div>

          <div className="col-xxl-6 col-xl-6 col-lg-6">
            <div className="about__content pl-70 pr-60 pt-25">
              <div className="section__title-wrapper mb-25">
                <h2 className="section__title">
                  Your Goals. <br />
                  <span className="yellow-bg-big">
                    Our Mission{" "}
                    <Image
                      src={YellowBg}
                      style={{ width: "auto", height: "auto" }}
                      alt="highlight background"
                    />
                  </span>{" "}
                  Powered by RAHSM
                </h2>

                <p>
                  At Rashm Academy of Health & Safety Management (RAHSM), we don’t just teach—we build safer futures. With Government-certified courses, 100% placement support, and practical training, we empower you with the critical skills for a successful career in Health and Safety Management.
                </p>
              </div>

              <div className="about__list mb-35">
                <ul>
                  <li className="d-flex align-items-center">
                    <i className="fas fa-check"></i> Govt. Certified & Industry-Recognized Safety Courses
                  </li>
                  <li className="d-flex align-items-center">
                    <i className="fas fa-check"></i> 100% Placement Support in Top Companies
                  </li>
                  <li className="d-flex align-items-center">
                    <i className="fas fa-check"></i> Hands-On Training with Real-World Scenarios
                  </li>
                </ul>
              </div>

              <Link href="/contact" className="e-btn e-btn-border">
                Enroll Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
