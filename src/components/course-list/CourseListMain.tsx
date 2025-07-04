"use client";
import React, { useState } from "react";
import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import courses_data from "@/data/courses-data";
import Image from "next/image";
import Link from "next/link";
import CtaSection from "../home/CtaSection";
import CourseGridIconOne from "@/svg/course-grid-icon-one";
import CourseGridIconTwo from "@/svg/course-grid-icon-two";

const CourseListMain = () => {
  const coursesPerPage = 6; // Change as needed
  const [currentPage, setCurrentPage] = useState(1);
  const [activeTab, setActiveTab] = useState<"grid" | "list">("list");

  const totalCourses = courses_data.length;
  const totalPages = Math.ceil(totalCourses / coursesPerPage);

  const startIndex = (currentPage - 1) * coursesPerPage;
  const endIndex = startIndex + coursesPerPage;
  const currentCourses = courses_data.slice(startIndex, endIndex);

  const handleTabChange = (tab: "grid" | "list") => {
    setActiveTab(tab);
  };

  return (
    <>
      <Breadcrumb title="Courses" subTitle="Courses" />

      <section className="course__area pt-120 pb-120">
        <div className="container">
          {/* Tab Navigation */}
          <div className="course__tab-inner grey-bg-2 mb-50">
            <div className="row align-items-center">
              <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6">
                <div className="course__tab-wrapper d-flex align-items-center">
                  <div className="course__tab-btn">
                    <ul className="nav nav-tabs" role="tablist">
                      <li className="nav-item" role="presentation">
                        <button
                          className={`nav-link ${activeTab === "grid" ? "active" : ""}`}
                          onClick={() => handleTabChange("grid")}
                          type="button"
                        >
                          <CourseGridIconOne />
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className={`nav-link list ${activeTab === "list" ? "active" : ""}`}
                          onClick={() => handleTabChange("list")}
                          type="button"
                        >
                          <CourseGridIconTwo />
                        </button>
                      </li>
                    </ul>
                  </div>
                  <div className="course__view">
                    <h4>
                      Showing {startIndex + 1} - {Math.min(endIndex, totalCourses)} of {totalCourses}
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Courses */}
          <div className="row">
            <div className="col-xxl-12">
              <div className="course__tab-conent">
                {activeTab === "grid" ? (
                  <div className="row">
                    {currentCourses.map((item) => (
                      <div key={item.id} className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                        {/* Course Grid Card */}
                        <div className="course__item white-bg mb-30 fix">
                          <div className="course__thumb w-img p-relative fix">
                            <Link href={`/course-details/${item.id}`}>
                              <Image src={item.image} alt="course" style={{ width: "100%", height: "auto" }} />
                            </Link>
                            <div className="course__tag">
                              <Link href={`/course-details/${item.id}`} className={item.categoryClass || ""}>
                                {item.category}
                              </Link>
                            </div>
                          </div>
                          <div className="course__content">
                            <h3 className="course__title">
                              <Link href={`/course-details/${item.id}`}>{item.title}</Link>
                            </h3>
                            <div className="course__teacher d-flex align-items-center">
                              <div className="course__teacher-thumb mr-15">
                                <Image src={item.tutorImg} alt="teacher" style={{ width: "auto", height: "auto" }} />
                              </div>
                              <h6>{item.author}</h6>
                            </div>
                          </div>
                          <div className="course__more d-flex justify-content-between align-items-center">
                            <div className="course__status">
                              <span className={item.priceClass || ""}>
                                {item.price === 0 ? "FREE" : `$${item.price}`}
                              </span>
                              <span className="old-price">
                                {item.oldPrice !== 0 ? `$${item.oldPrice}` : ""}
                              </span>
                            </div>
                            <div className="course__btn">
                              <Link href={`/course-details/${item.id}`} className="link-btn">
                                Know Details
                                <i className="far fa-arrow-right"></i>
                                <i className="far fa-arrow-right"></i>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="row">
                    {currentCourses.map((item) => (
                      <div key={item.id} className="col-xxl-12">
                        {/* Course List Card */}
                        <div className="course__item white-bg mb-30 fix">
                          <div className="row gx-0">
                            <div className="col-xxl-4 col-xl-4 col-lg-4">
                              <div className="course__thumb course__thumb-list w-img p-relative fix">
                                <Link href={`/course-details/${item.id}`}>
                                  <Image src={item.image} alt="course" style={{ width: "100%", height: "auto" }} />
                                </Link>
                              </div>
                            </div>
                            <div className="col-xxl-8 col-xl-8 col-lg-8">
                              <div className="course__content course__content-3">
                                <h3 className="course__title course__title-3">
                                  <Link href={`/course-details/${item.id}`}>{item.title}</Link>
                                </h3>
                                <p>{item.desc}</p>
                                <div className="course__teacher d-flex align-items-center">
                                  <div className="course__teacher-thumb mr-15">
                                    <Image src={item.tutorImg} alt="teacher" style={{ width: "auto", height: "auto" }} />
                                  </div>
                                  <h6>{item.author}</h6>
                                </div>
                              </div>
                              <div className="course__more d-flex justify-content-between align-items-center">
                                <div className="course__status">
                                  <span className={item.priceClass || ""}>
                                    {item.price === 0 ? "FREE" : `$${item.price}`}
                                  </span>
                                  <span className="old-price">
                                    {item.oldPrice !== 0 ? `$${item.oldPrice}` : ""}
                                  </span>
                                </div>
                                <div className="course__btn">
                                  <Link href={`/course-details/${item.id}`} className="link-btn">
                                    Know Details
                                    <i className="far fa-arrow-right"></i>
                                    <i className="far fa-arrow-right"></i>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Pagination */}
          <div className="row mt-4">
            <div className="col-xxl-12">
              <div className="basic-pagination wow fadeInUp mt-30">
                <ul className="d-flex align-items-center justify-content-center">
                  <li className={currentPage === 1 ? "disabled" : ""}>
                    <button
                      className="link-btn link-prev"
                      onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                      disabled={currentPage === 1}
                    >
                      Prev <i className="arrow_left"></i>
                    </button>
                  </li>
                  {Array.from({ length: totalPages }, (_, i) => (
                    <li key={i + 1} className={currentPage === i + 1 ? "active" : ""}>
                      <button onClick={() => setCurrentPage(i + 1)}>{i + 1}</button>
                    </li>
                  ))}
                  <li className={currentPage === totalPages ? "disabled" : ""}>
                    <button
                      className="link-btn"
                      onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                      disabled={currentPage === totalPages}
                    >
                      Next <i className="arrow_right"></i>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
};

export default CourseListMain;
