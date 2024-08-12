import {
  faHome,
  faUsers,
  faImages,
  faChalkboardTeacher,
  faUserGraduate,
  faStickyNote,
} from "@fortawesome/free-solid-svg-icons";
const navItems = [
  {
    name: "Home",
    route: "https://chitkara.acm.org/register",
    icon: faHome,
    external: false,
  },
  {
    name: "Projects",
    route: "project",
    icon: faHome,
    external: false,
  },
  {
    name: "Gallery",
    route: "gallery",
    icon: faImages,
    external: false,
  },
  {
    name: "Events",
    route: "workshop",
    icon: faChalkboardTeacher,
    external: false,
  },
  {
    name: "Team ACM",
    route: "team",
    icon: faUsers,
    external: false,
  },
  {
    name: "Our Alumni",
    route: "alumni",
    icon: faUserGraduate,
    external: false,
  },
  {
    name: "Register",
    route:"registerform",
    icon: faStickyNote,
    external: true,
  },
];
export default navItems;
