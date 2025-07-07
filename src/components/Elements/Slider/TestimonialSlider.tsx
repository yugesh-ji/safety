"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css/bundle";
import Image from "next/image";
import img1 from "../../../../public/assets/img/testimonial/home-3/testi-1.jpg";
import img2 from "../../../../public/assets/img/testimonial/home-3/testi-2.jpg";
import img3 from "../../../../public/assets/img/testimonial/home-3/testi-3.jpg";
import img4 from "../../../../public/assets/img/testimonial/home-3/testi-2.jpg";

const TestimonialSlider = () => {
  return (
    <section
      className="testimonial__area pt-145 pb-150"
      style={{
        backgroundImage: `url(/assets/img/testimonial/home-3/testimonial-bg-3.jpg)`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container">
        <div className="row">
          {/* Testimonial Slider */}
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-10">
            <div className="testimonial__slider-3">
              <h3 className="testimonial__title">
                Student <br /> Feedback at RAHSM
              </h3>
              <div className="testimonial__slider-wrapper testimonial-text mb-35">
                <div>
                  <Swiper
                    modules={[Autoplay]}
                    spaceBetween={30}
                    autoplay={{ delay: 5000 }}
                    loop={true}
                    slidesPerView={1}
                  >
                    <SwiperSlide>
                      <div className="testimonial__item-3">
                        <p>
                          “RAHSM में Industrial Safety का कोर्स करके मेरा confidence बहुत
                          बढ़ गया। अब मैं workplace safety standards को आसानी से implement कर लेता हूँ।” 
                        </p>
                        <div className="testimonial__info-2 mb-45">
                          <h4>Rahul Kumar</h4>
                          <span>Student - Industrial Safety</span>
                        </div>
                        <div className="testimonial__nav-thumb">
                          <Image src={img1} alt="Rahul Kumar" />
                        </div>
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <div className="testimonial__item-3">
                        <p>
                          “मैंने यहाँ Fire Safety का कोर्स किया और अब मैं अपनी कंपनी में fire drills conduct करता हूँ। Thank you RAHSM!” 
                        </p>
                        <div className="testimonial__info-2 mb-45">
                          <h4>Satyan Shukla</h4>
                          <span>Student - Fire Safety</span>
                        </div>
                        <div className="testimonial__nav-thumb">
                          <Image src={img2} alt="Satyan Shukla" />
                        </div>
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <div className="testimonial__item-3">
                        <p>
                          “Disaster Management की ट्रेनिंग से मेरी decision-making skills
                          improve हुई हैं और अब मैं किसी भी emergency के लिए तैयार
                          हूँ।” 
                        </p>
                        <div className="testimonial__info-2 mb-45">
                          <h4>Sonu Kumar</h4>
                          <span>Student - Disaster Management</span>
                        </div>
                        <div className="testimonial__nav-thumb">
                          <Image src={img3} alt="Sonu Kumar" />
                        </div>
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <div className="testimonial__item-3">
                        <p>
                          “Health & Safety Management का कोर्स करने के बाद, मैं अब अपने workplace पर एक सुरक्षित माहौल बना पा रहा हूँ।” 
                        </p>
                        <div className="testimonial__info-2 mb-45">
                          <h4>Shyam Yadav</h4>
                          <span>Student - Health & Safety Management</span>
                        </div>
                        <div className="testimonial__nav-thumb">
                          <Image src={img4} alt="Shyam Yadav" />
                        </div>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
            </div>
          </div>

          {/* Video Section */}
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-10">
            <div className="testimonial__video ml-70 fix">
              <div className="testimonial__thumb-3">
                {/* <iframe
                  src="https://www.youtube.com/watch?v=_xgyup6z-CM&pp=ygUhbXMgZXhjZWwgZm9ybXVsYSB0YWIgc3VjY2VzcyBlZGdl"
                  title="RAIT Course Outcome"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  style={{ width: "100%", height: "315px", border: "none" }}
                ></iframe> */}
                <iframe width="1206" height="678" src="https://www.youtube.com/embed/_xgyup6z-CM" 
                title="🚀 MS Excel Formula Tab PRO Ban Jao! | Full Hindi Tutorial (A2Z) | Functions, Names,..." 
                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                 style={{ width: "100%", height: "315px", border: "none" }}
                 ></iframe>
              </div>
              <div className="testimonial__video-content d-sm-flex">
                <div className="testimonial__video-icon mr-20 mb-20">
                  <span>
                    <i className="fa-solid fa-circle-check"></i>
                  </span>
                </div>
                <div className="testimonial__video-text">
                  <h4>Course Outcome</h4>
                  <p>
                    RAHSM के हर कोर्स के बाद students को practical training, job-ready
                      skills और government-recognized certification मिलता है जिससे वो safety industry के लिए future-ready बनते हैं।
                    </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;
