import { DiSass, DiLess, DiJavascript1, DiReact, DiCss3 } from "react-icons/di";
import { AiOutlineEye } from "react-icons/ai";
import { FiClock, FiBookmark } from "react-icons/fi";
import { SiTypescript, SiHtml5 } from "react-icons/si";
import { FaRandom } from "react-icons/fa";


export const tools = [
  {
    icon: DiJavascript1,
    value: "javascript",
    option: "JavaScript",
  },
  {
    icon: SiTypescript,
    value: "typescript",
    option: "TypeScript",
  },
  {
    icon: DiReact,
    value: "react",
    option: "ReactJs",
  },
  {
    icon: SiHtml5,
    value: "html",
    option: "HTML",
  },
];

export const stylesheet = [
  {
    icon: DiCss3,
    value: "css3",
    option: "Css3",
  },
  {
    icon: DiSass,
    value: "sass",
    option: "Sass",
  },
  {
    icon: DiLess,
    value: "less",
    option: "Less",
  }
];

export const sorting = [
  {
    icon: FaRandom,
    value: "randomized",
    option: "Randomized",
  },
  {
    icon: FiBookmark,
    value: "favorites",
    option: "Favorites",
  },
  {
    icon: AiOutlineEye,
    value: "views",
    option: "Views",
  },
  {
    icon: FiClock,
    value: "recent",
    option: "Recent",
  },
]