"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import "swiper/css/bundle";
import Image from "next/image";
import TestimonialImg1 from "../../../public/assets/img/testimonial/testi-2.jpg";
import TestimonialImg4 from "../../../public/assets/img/testimonial/testi-3.jpg";
import TestimonialImg3 from "../../../public/assets/img/testimonial/testi-4.jpg";
import TestimonialImg2 from "../../../public/assets/img/testimonial/testi-1.jpg";
import TestimonialImg5 from "../../../public/assets/img/testimonial/testi-1.jpg";

import TestimonialImgBg from "../../../public/assets/img/testimonial/testimonial-bg.jpg";

const TestimonialSection = () => {
  return (
    <section
      className="testimonial__area testimonial__overlay pt-175 pb-170"
      style={{ backgroundImage: `url(${TestimonialImgBg.src})` }}
    >
      <div className="container">
        <div className="col-xxl-12">
          <div className="testimonial__slider p-relative">
            <div className="testimonial__slider-inner">
              <Swiper
                modules={[Navigation, Autoplay]}
                spaceBetween={30}
                loop={true}
                autoplay={true}
                slidesPerView={1}
                navigation={{
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
                }}
              >
                <SwiperSlide>
                  <div className="testimonial__item text-center">
                    <div className="testimonial__thumb">
                      <Image
                        src={TestimonialImg1}
                        style={{ width: "80px", height: "80px" }}
                        alt="Rahul Kumar"
                      />
                    </div>
                    <div className="testimonial__content">
                      <p>
                        “RAIT has completely changed my learning experience.
                        The practical classes and expert trainers helped me get placed
                        in a reputed company.”
                      </p>
                      <div className="testimonial__info">
                        <h4>Rahul Kumar</h4>
                        <span>Software Developer</span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="testimonial__item text-center">
                    <div className="testimonial__thumb">
                      <Image
                        src={TestimonialImg2}
                        style={{ width: "80px", height: "80px" }}
                        alt="Satyan Shukla"
                      />
                    </div>
                    <div className="testimonial__content">
                      <p>
                        “I joined the MS Office and Tally course at RAIT, and now I am confident
                        in managing business data professionally. Thank you RAIT!”
                      </p>
                      <div className="testimonial__info">
                        <h4>Satyan Shukla</h4>
                        <span>Accounts Executive</span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="testimonial__item text-center">
                    <div className="testimonial__thumb">
                      <Image
                        src={TestimonialImg3}
                        style={{ width: "80px", height: "80px" }}
                        alt="Sonu Kumar"
                      />
                    </div>
                    <div className="testimonial__content">
                      <p>
                        “Best computer training center in town! Faculty is supportive,
                        syllabus is job-oriented, and I learned everything hands-on.”
                      </p>
                      <div className="testimonial__info">
                        <h4>Sonu Kumar</h4>
                        <span>Computer Operator</span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="testimonial__item text-center">
                    <div className="testimonial__thumb">
                      <Image
                        src={TestimonialImg4}
                        style={{ width: "80px", height: "80px" }}
                        alt="Shyam Yadav"
                      />
                    </div>
                    <div className="testimonial__content">
                      <p>
                        “RAIT made me confident in graphic design. Today, I’m working as a designer
                        and doing freelancing too. Highly recommend to every student.”
                      </p>
                      <div className="testimonial__info">
                        <h4>Shyam Yadav</h4>
                        <span>Graphic Designer</span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="testimonial__item text-center">
                    <div className="testimonial__thumb">
                      <Image
                        src={TestimonialImg5}
                        style={{ width: "80px", height: "80px" }}
                        alt="Ram Kumar"
                      />
                    </div>
                    <div className="testimonial__content">
                      <p>
                        “I came from a non-technical background, but at RAIT,
                        I learned everything from basics. Now I’m working confidently with computers.”
                      </p>
                      <div className="testimonial__info">
                        <h4>Ram Kumar</h4>
                        <span>Data Entry Operator</span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>

            <div className="swiper-button-next swiper-nav">
              <i className="far fa-arrow-right"></i>
            </div>
            <div className="swiper-button-prev swiper-nav">
              <i className="far fa-arrow-left"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
