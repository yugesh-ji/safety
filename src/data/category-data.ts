import { categoryType } from "@/interFace/interFace";
import CategoryIconOne from "@/svg/CategoryIconOne";
import CategoryIconEight from "@/svg/category-icon-eight";
import CategoryIconFive from "@/svg/category-icon-five";
import CategoryIconFour from "@/svg/category-icon-four";
import CategoryIconNine from "@/svg/category-icon-nine";
import CategoryIconSeven from "@/svg/category-icon-seven";
import CategoryIconSix from "@/svg/category-icon-six";
import CategotyIconThere from "@/svg/category-icon-there";
import CategoryIconTwo from "@/svg/category-icon-two";


const category_data: categoryType[] = [
  {
    id: 1,
    icon: CategoryIconOne,
    title: "Diploma Courses",
    desc: "DCA, ADCA, DFA, ADFA",
  },
  {
    id: 2,
    icon: CategoryIconTwo,
    title: "Accounting",
    desc: "Tally with GST, Payroll",
  },
  {
    id: 3,
    icon: CategotyIconThere,
    title: "Design",
    desc: "Graphics, Photoshop, CorelDRAW",
  },
  {
    id: 4,
    icon: CategoryIconFour,
    title: "Development",
    desc: "Web & App Development",
  },
  {
    id: 5,
    icon: CategoryIconFive,
    title: "Programming",
    desc: "Python, Java, C, C++",
  },
  {
    id: 6,
    icon: CategoryIconSix,
    title: "Digital Marketing",
    desc: "SEO, Social Media, Ads",
  },
  {
    id: 7,
    icon: CategoryIconSeven,
    title: "Computer Basics",
    desc: "MS Office, Internet, Typing",
  },
  {
    id: 8,
    icon: CategoryIconEight,
    title: "English Spoken",
    desc: "Grammar, Practice, Fluency",
  },
  {
    id: 9,
    icon: CategoryIconNine,
    title: "Advanced Courses",
    desc: "O Level, A Level, AI Tools",
  },
];

export default category_data;


