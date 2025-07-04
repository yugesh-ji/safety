import Link from "next/link";
import React from "react";
import CommentImg from "../../../public/assets/img/course/comment/course-comment-1.jpg";
import CommentImgTwo from "../../../public/assets/img/course/comment/course-comment-2.jpg";
import Image from "next/image";

const CourseComment = () => {
  return (
    <ul>
      {/* Review 1 */}
      <li>
        <div className="course__comment-box">
          <div className="course__comment-thumb float-start">
            <Image
              src={CommentImg}
              style={{ width: "100%", height: "auto" }}
              alt="student profile"
            />
          </div>
          <div className="course__comment-content">
            <div className="course__comment-wrapper ml-70 fix">
              <div className="course__comment-info float-start">
                <h4>Rahul Verma</h4>
                <span>March 15, 2025</span>
              </div>
              <div className="course__comment-rating float-start float-sm-end">
                <ul>
                  {[...Array(5)].map((_, i) => (
                    <li key={i}>
                      <Link href="#">
                        <i className="fas fa-star"></i>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="course__comment-text ml-70">
              <p>
                I completed the Advanced Excel & Tally Prime course at RAIT. The trainers are very knowledgeable and supportive. Highly recommended!
              </p>
            </div>
          </div>
        </div>
      </li>

      {/* Review 2 */}
      <li>
        <div className="course__comment-box">
          <div className="course__comment-thumb float-start">
            <Image
              src={CommentImgTwo}
              style={{ width: "100%", height: "auto" }}
              alt="student profile"
            />
          </div>
          <div className="course__comment-content">
            <div className="course__comment-wrapper ml-70 fix">
              <div className="course__comment-info float-start">
                <h4>Pooja Sharma</h4>
                <span>April 02, 2025</span>
              </div>
              <div className="course__comment-rating float-start float-sm-end">
                <ul>
                  {[...Array(4)].map((_, i) => (
                    <li key={i}>
                      <Link href="#">
                        <i className="fas fa-star"></i>
                      </Link>
                    </li>
                  ))}
                  <li>
                    <Link href="#" className="no-rating">
                      <i className="fas fa-star"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="course__comment-text ml-70">
              <p>
                The MS Office & Internet course helped me gain confidence in using computers for professional tasks. Thanks to Rashm Academy for the quality training.
              </p>
            </div>
          </div>
        </div>
      </li>
    </ul>
  );
};

export default CourseComment;
