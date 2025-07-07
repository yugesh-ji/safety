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
                        “RAHSM has completely changed my career path. The practical training and expert instructors helped me secure a great position in a reputed manufacturing company.”
                      </p>
                      <div className="testimonial__info">
                        <h4>Rahul Kumar</h4>
                        <span>Safety Officer</span>
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
                        “I joined the Fire Safety and Risk Management course at RAHSM, and now I am confident in handling workplace emergencies professionally. Thank you RAHSM!”
                      </p>
                      <div className="testimonial__info">
                        <h4>Satyan Shukla</h4>
                        <span>Fire Safety Officer</span>
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
                        “Best safety training institute in the region! The faculty is supportive, the curriculum is job-oriented, and I learned everything through practical, hands-on training.”
                      </p>
                      <div className="testimonial__info">
                        <h4>Sonu Kumar</h4>
                        <span>Safety Supervisor</span>
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
                        “RAHSM made me confident in workplace safety protocols. Today, I’m working as a safety consultant and helping companies improve their safety standards. Highly recommend to every student.”
                      </p>
                      <div className="testimonial__info">
                        <h4>Shyam Yadav</h4>
                        <span>Safety Consultant</span>
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
                        “I had no prior knowledge of safety regulations, but at RAHSM, I learned everything from the ground up. Now I’m working confidently as a safety coordinator.”
                      </p>
                      <div className="testimonial__info">
                        <h4>Ram Kumar</h4>
                        <span>Safety Coordinator</span>
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
