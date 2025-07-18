import CourseImgOne from "../../public/assets/img/course/course-1.jpg";
import CourseImgTwo from "../../public/assets/img/course/course-2.jpg";
import CourseImgThree from "../../public/assets/img/course/course-3.jpg";
import CourseImgFour from "../../public/assets/img/course/course-4.jpg";
import CourseImgFive from "../../public/assets/img/course/course-5.jpg";
import CourseImgSix from "../../public/assets/img/course/course-6.jpg";
import CourseImgSeven from "../../public/assets/img/course/course-9.jpg";
import TeacherImg from "../../public/assets/img/course/teacher/teacher-1.jpg";
import { coursesType } from "@/interFace/interFace";

const description = "यह कोर्स Rashm Academy of Information Technology द्वारा विशेष रूप से डिज़ाइन किया गया है ताकि छात्र व्यावसायिक और तकनीकी कौशल में निपुण हो सकें।";

const courses_data: coursesType[] = [
  {
    id: 1,
    image: CourseImgOne,
    category: "Safety",
    lesson: 30,
    ratingAve: 4.9,
    ratingCount: 50,
    ratings: 5,
    title: "Fire Safety",
    tutorImg: TeacherImg,
    author: "RAHSM Faculty",
    videoUrl: "a-CEyHSNrx0",
    price: 0,
    oldPrice: 0,
    quantity: 0,
    desc: "Comprehensive training in fire prevention, protection, and emergency response.",
  },
  {
    id: 2,
    image: CourseImgTwo,
    category: "Safety",
    lesson: 60,
    ratingAve: 4.8,
    ratingCount: 45,
    ratings: 5,
    title: "Diploma in Fire Safety",
    tutorImg: TeacherImg,
    author: "RAHSM Faculty",
    videoUrl: "NDa3AGPobS4",
    price: 0,
    oldPrice: 0,
    quantity: 0,
    desc: "In-depth diploma program covering all aspects of fire safety management.",
  },
  {
    id: 3,
    image: CourseImgThree,
    category: "Safety",
    lesson: 40,
    ratingAve: 4.9,
    ratingCount: 60,
    ratings: 5,
    title: "OSHA",
    tutorImg: TeacherImg,
    author: "RAHSM Faculty",
    videoUrl: "dDTWCbtAh2Y",
    price: 0,
    oldPrice: 0,
    quantity: 0,
    desc: "Occupational Safety and Health Administration standards for workplace safety.",
  },
  {
    id: 4,
    image: CourseImgFour,
    category: "Safety",
    lesson: 35,
    ratingAve: 4.7,
    ratingCount: 40,
    ratings: 5,
    title: "ISHO",
    tutorImg: TeacherImg,
    author: "RAHSM Faculty",
    videoUrl: "ybTdykZpbII",
    price: 0,
    oldPrice: 0,
    quantity: 0,
    desc: "International Safety and Health Officer certification for global standards.",
  },
  {
    id: 5,
    image: CourseImgFive,
    category: "Safety",
    lesson: 50,
    ratingAve: 4.9,
    ratingCount: 70,
    ratings: 5,
    title: "NEBOSH",
    tutorImg: TeacherImg,
    author: "RAHSM Faculty",
    videoUrl: "Egy-jJUNJ3A",
    price: 0,
    oldPrice: 0,
    quantity: 0,
    desc: "Globally recognized qualification in health, safety, and environmental management.",
  },
  {
    id: 6,
    image: CourseImgSix,
    category: "Safety",
    lesson: 45,
    ratingAve: 4.8,
    ratingCount: 55,
    ratings: 5,
    title: "NCVTE",
    tutorImg: TeacherImg,
    author: "RAHSM Faculty",
    videoUrl: "KzlwvKX_P6k",
    price: 0,
    oldPrice: 0,
    quantity: 0,
    desc: "National Council for Vocational Training and Education certification programs.",
  },
  {
    id: 7,
    image: CourseImgSeven,
    category: "Language",
    lesson: 30,
    ratingAve: 4.8,
    ratingCount: 45,
    ratings: 5,
    title: "English Speaking",
    tutorImg: TeacherImg,
    author: "Language Expert",
    videoUrl: "ChAWdmplhwY",
    price: 0,
    oldPrice: 0,
    quantity: 0,
    desc: "Improve your fluency and confidence with our practical English speaking course.",
  },
];

export default courses_data;
