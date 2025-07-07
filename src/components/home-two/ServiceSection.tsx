import Link from 'next/link';
import React from 'react';
import YellowBg from '../../../public/assets/img/shape/yellow-bg-2.png';
import Image from 'next/image';
import ServicesIconOne from '@/svg/services-icon-one';
import ServicesIconTwo from '@/svg/services-icon-two';
import ServicesIconThree from '@/svg/services-icon-tree';

const ServiceSection = () => {
    return (
        <section className="services__area pt-115 pb-40">
        <div className="container">
           <div className="row">
              <div className="col-xxl-6 offset-xxl-3 col-xl-6 offset-xl-3">
                 <div className="section__title-wrapper section-padding mb-60 text-center">
                    <h2 className="section__title">🔹 Why Choose  <span className="yellow-bg">RAHSM <Image src={YellowBg} style={{width:"auto", height:"auto"}} alt="img not found" /></span> Over the Ordinary? </h2>
                    <p>Because we {`don’t`} just teach — we transform.</p>
                 </div>
              </div>
           </div>
           <div className="row">
              <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6">
                 <div className="services__item blue-bg-4 mb-30">
                    <div className="services__icon">
                      <ServicesIconOne/>
                    </div>
                    <div className="services__content">
                       <h3 className="services__title"><Link href="/about">Govt-Certified<br /> Courses</Link></h3>
                       <p>All our programs are officially recognized and certified, ensuring credibility and value across industries, competitive exams, and job markets.</p>

                       <Link href="/about" className="link-btn-2">
                          <i className="fas fa-arrow-right"></i>
                          <i className="fas fa-arrow-right"></i>
                       </Link>
                    </div>
                 </div>
              </div>
              <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6">
                 <div className="services__item pink-bg mb-30">
                    <div className="services__icon">
                      <ServicesIconTwo/>
                    </div>
                    <div className="services__content">
                       <h3 className="services__title"><Link href="/about">100% Job<br /> Assistance</Link></h3>
                       <p>We don’t just train — we help you get placed! Our dedicated job support connects students to real career opportunities and internships.</p>

                       <Link href="/about" className="link-btn-2">
                          <i className="fas fa-arrow-right"></i>
                          <i className="fas fa-arrow-right"></i>
                       </Link>
                    </div>
                 </div>
              </div>
              <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6">
                 <div className="services__item purple-bg mb-30">
                    <div className="services__icon">
                       <ServicesIconThree/>
                    </div>
                    <div className="services__content">
                       <h3 className="services__title"><Link href="/about">Practical +<br /> Project-Based</Link></h3>
                       <p>Every course is designed with real-world projects, hands-on labs, and practical assignments so students are fully job-ready, not just theory-ready.</p>

                       <Link href="/about" className="link-btn-2">
                          <i className="fas fa-arrow-right"></i>
                          <i className="fas fa-arrow-right"></i>
                       </Link>
                    </div>
                 </div>
              </div>
              <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6">
                 <div className="services__item green-bg mb-30">
                    <div className="services__icon">
                     <ServicesIconOne/>
                    </div>
                    <div className="services__content">
                       <h3 className="services__title"><Link href="/about">Expert Trainers<br /> & Mentorship</Link></h3>
                       <p>Learn from experienced professionals who offer one-on-one guidance, doubt sessions, and mentorship throughout your learning journey.</p>

                       <Link href="/about" className="link-btn-2">
                          <i className="fas fa-arrow-right"></i>
                          <i className="fas fa-arrow-right"></i>
                       </Link>
                    </div>
                 </div>
              </div>
           </div>
        </div>
     </section>
    );
};

export default ServiceSection;
