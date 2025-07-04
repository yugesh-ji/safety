import React from "react";

const CourseSidebarCategory = () => {
  return (
    <div className="course__sidebar-widget grey-bg">
      <div className="course__sidebar-info">
        <h3 className="course__sidebar-title">Categories</h3>
        <ul>
          <li>
            <div className="course__sidebar-check mb-10 d-flex align-items-center">
              <input className="m-check-input" type="checkbox" id="cat-diploma" />
              <label className="m-check-label" htmlFor="cat-diploma">
                Diploma Courses (8)
              </label>
            </div>
          </li>
          <li>
            <div className="course__sidebar-check mb-10 d-flex align-items-center">
              <input className="m-check-input" type="checkbox" id="cat-tally" />
              <label className="m-check-label" htmlFor="cat-tally">
                Tally with GST (4)
              </label>
            </div>
          </li>
          <li>
            <div className="course__sidebar-check mb-10 d-flex align-items-center">
              <input className="m-check-input" type="checkbox" id="cat-programming" />
              <label className="m-check-label" htmlFor="cat-programming">
                Programming (6)
              </label>
            </div>
          </li>
          <li>
            <div className="course__sidebar-check mb-10 d-flex align-items-center">
              <input className="m-check-input" type="checkbox" id="cat-development" />
              <label className="m-check-label" htmlFor="cat-development">
                Web & App Development (5)
              </label>
            </div>
          </li>
          <li>
            <div className="course__sidebar-check mb-10 d-flex align-items-center">
              <input className="m-check-input" type="checkbox" id="cat-graphics" />
              <label className="m-check-label" htmlFor="cat-graphics">
                Graphic Design (3)
              </label>
            </div>
          </li>
          <li>
            <div className="course__sidebar-check mb-10 d-flex align-items-center">
              <input className="m-check-input" type="checkbox" id="cat-dm" />
              <label className="m-check-label" htmlFor="cat-dm">
                Digital Marketing (4)
              </label>
            </div>
          </li>
          <li>
            <div className="course__sidebar-check mb-10 d-flex align-items-center">
              <input className="m-check-input" type="checkbox" id="cat-english" />
              <label className="m-check-label" htmlFor="cat-english">
                Spoken English (5)
              </label>
            </div>
          </li>
          <li>
            <div className="course__sidebar-check mb-10 d-flex align-items-center">
              <input className="m-check-input" type="checkbox" id="cat-basic" />
              <label className="m-check-label" htmlFor="cat-basic">
                Basic Computer (6)
              </label>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CourseSidebarCategory;
