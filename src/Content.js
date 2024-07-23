// import images
import Hero_person from "./assets/images/Hero/person.png";

import php from "./assets/images/Skills/php.png";
import html from "./assets/images/Skills/html.png";
import css from "./assets/images/Skills/css.png";
import express from "./assets/images/Skills/express.png";
import reactjs from "./assets/images/Skills/react.png";
import nodejs from "./assets/images/Skills/node.png";
import symfony from "./assets/images/Skills/symfony.png";
import wordpress from "./assets/images/Skills/wordpress.png";

import services_logo1 from "./assets/images/Services/logo1.png";
import services_logo2 from "./assets/images/Services/logo2.png";
import services_logo3 from "./assets/images/Services/logo3.png";

import project1 from "./assets/images/Projects/img1.png";
import project2 from "./assets/images/Projects/img2.png";
import project3 from "./assets/images/Projects/img3.png";
import person_project from "./assets/images/Projects/person.png";

import avatar1 from "./assets/images/Testimonials/avatar1.png";
import avatar2 from "./assets/images/Testimonials/avatar2.png";
import avatar3 from "./assets/images/Testimonials/avatar3.png";
import avatar4 from "./assets/images/Testimonials/avatar4.png";

import Hireme_person from "./assets/images/Hireme/person.png";
import Hireme_person2 from "./assets/images/Hireme/person2.png";

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      icon: BiUser,
    },
    {
      link: "#services",
      icon: RiServiceLine,
    },
    {
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: "Web Developer",
    firstName: "MAMIZARA",
    LastName: "CANISIUS",
    btnText: "Hire Me",
    image: Hero_person,
    hero_content: [
      {
        count: "1+",
        text: "Years of Experinse in Web development",
      },
      {
        count: "20+",
        text: "Projects Worked in my career",
      },
    ],
  },
  skills: {
    title: "Skills",
    subtitle: "MY TOP SKILLS",
    skills_content: [
      {
        name: "HTML",
        para: "Creation of several showcase websites with HTML since 2021.",
        logo: html,
      },
      {
        name: "CSS",
        para: "Layout of several websites with CSS styles.",
        logo: css,
      },
      {
        name: "React js",
        para: "Creation of several projects with React JS, like this portfolio.",
        logo: reactjs,
      },
      {
        name: "Node js",
        para: "Development of various projects using Node.js.",
        logo: nodejs,
      },
      {
        name: "Express Js",
        para: "Built multiple projects using Express.js.",
        logo: express,
      },
   
      {
        name: "PHP",
        para: "Developed numerous projects using PHP.",
        logo: php,
      },
      {
        name: "Symfony",
        para: "Worked on several projects with Symfony.",
        logo: symfony,
      },
      {
        name: "Wordpress",
        para: "Built various projects using WordPress.",
        logo: wordpress,
      },
     
    ],
    icon: MdArrowForward,
  },
  services: {
    title: "Services",
    subtitle: "WHAT I OFFER",
    service_content: [
      {
        title: "design of a web application",
        para: "Web Application Design: We turn your ideas into tangible solutions by creating custom web application concepts.",
        logo: services_logo2,
      },
      {
        title: "development of a web application",
        para: "We develop robust and scalable web applications using the latest technologies.",
        logo: services_logo1,
      },
      {
        title: "deployment on the net",
        para: "We ensure a smooth and secure deployment of your web application.",
        logo: services_logo3,
      },
    ],
  },
  Projects: {
    title: "Projects",
    subtitle: "MY CREATION",
    image: person_project,
    project_content: [
      {
        title: "Gym Website",
        image: project1,
      },
      {
        title: "Social Media web",
        image: project2,
      },
      {
        title: "Creative Website",
        image: project3,
      },
    ],
  },
  Hireme: {
    title: "Hire Me",
    subtitle: "FOR YOUR PROJECTS",
    image1: Hireme_person,
    image2: Hireme_person2,
    para: "Passionate about web development and with solid experience in creating high-performing and innovative applications, I am ready to bring my expertise in Symfony and React JS to contribute to the success of your team. Let’s work together to turn your projects into concrete successes!",
    btnText: "Hire Me",
  },
  Contact: {
    title: "Contect Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "mamizarahenricanisius.pro@gmail.com",
        icon: GrMail,
        link: "Mailto:mamizarahenricanisius.pro@gmail.com",
      },
      {
        text: "+261 38 41 780 34",
        icon: MdCall,
        link: "https://wa.me/261384178034",
      },
      {
        text: "Mamizara Canisius",
        icon: BsInstagram,
        link: "https://www.instagram.com/canisiusmh/",
      },
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2022",
  },
};
