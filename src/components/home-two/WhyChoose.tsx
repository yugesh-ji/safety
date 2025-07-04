import Link from "next/link";
import React from "react";
import YellowImg from "../../../public/assets/img/shape/yellow-bg-2.png";
import img1 from "../../../public/assets/img/why/why.png";
import img2 from "../../../public/assets/img/why/why-shape-green.png";
import img3 from "../../../public/assets/img/why/why-shape-pink.png";
import img4 from "../../../public/assets/img/why/why-shape-dot.png";
import img5 from "../../../public/assets/img/why/why-shape-line.png";
import Image from "next/image";

const WhyChoose = () => {
  return (
    <section className="why__area pt-125">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xxl-5 offset-xxl-1 col-xl-5 offset-xl-1 col-lg-6 col-md-8">
            <div className="why__content pr-50 mt-40">
              <div className="section__title-wrapper mb-30">
                <span className="section__sub-title">Why Choose RAIT</span>
                <h2 className="section__title">
                  Powerful Tools for{" "}
                  <span className="yellow-bg yellow-bg-big">
                    Students{" "}
                    <Image
                      src={YellowImg}
                      style={{ width: "auto", height: "auto" }}
                      alt="img not found"
                    />
                  </span>{" "}
                  and Educators
                </h2>
                <p>
                  RAIT offers industry-relevant computer courses, practical labs,
                  and job-ready training — all backed by lifetime tech support
                  and dedicated faculty. Learn. Practice. Get Placed.
                </p>
              </div>
              <div className="why__btn">
                <Link href="/contact" className="e-btn e-btn-3 mr-30">
                  Join Now
                </Link>

                <Link href="/about" className="link-btn">
                  Learn More
                  <i className="fas fa-arrow-right"></i>
                  <i className="fas fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-8">
            <div className="why__thumb">
              <Image
                src={img1}
                style={{ width: "100%", height: "auto" }}
                alt="img not found"
              />
              <Image
                className="why-green"
                src={img2}
                style={{ width: "auto", height: "auto" }}
                alt="img not found"
              />
              <Image
                className="why-pink"
                src={img3}
                style={{ width: "auto", height: "auto" }}
                alt="img not found"
              />
              <Image
                className="why-dot"
                src={img4}
                style={{ width: "auto", height: "auto" }}
                alt="img not found"
              />
              <Image
                className="why-line"
                src={img5}
                style={{ width: "auto", height: "auto" }}
                alt="img not found"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
