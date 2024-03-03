//  icons
import { FaCode, FaLaptopCode, FaWordpress } from "react-icons/fa";
import {
  FiFacebook,
  FiFigma,
  FiGithub,
  FiInstagram,
  FiLinkedin,
  FiMail,
  FiMapPin
} from 'react-icons/fi';
  
  // companies icons
  import BehanceBrandIcon from '../assets/img/brands/behance.png';
import DribbbleBrandIcon from '../assets/img/brands/dribbble.png';
import FiverBrandIcon from '../assets/img/brands/fiverr.png';
import FreelancerBrandIcon from '../assets/img/brands/freelancer.png';
import UpworkBrandIcon from '../assets/img/brands/upwork.png';
  
  // projects images
  import Project1 from '../assets/img/projects/p1.webp';
import Project2 from '../assets/img/projects/p2.webp';
import Project3 from '../assets/img/projects/p3.webp';
import Project4 from '../assets/img/projects/p4.webp';
import Project5 from '../assets/img/projects/p5.webp';
import Project6 from '../assets/img/projects/p6.webp';
  
  // skills images
  import bootstrap from '../assets/img/skills/bootstrap.png';
import css from '../assets/img/skills/css3.png';
import figma from '../assets/img/skills/figma.png';
import git from '../assets/img/skills/github.png';
import html from '../assets/img/skills/html5.png';
import javascript from '../assets/img/skills/js.png';
import react from '../assets/img/skills/reactjs.png';
import tailwind from '../assets/img/skills/tailwind.png';
  
  // testimonial images
  import TestiImage1 from '../assets/img/testimonials/testimonial-1.webp';
import TestiImage2 from '../assets/img/testimonials/testimonial-2.webp';
import TestiImage3 from '../assets/img/testimonials/testimonial-3.webp';
  
  // navigation
  export const navigation = [
    {
      name: 'home',
      href: 'home',
    },
    {
      name: 'about',
      href: 'about',
    },
    {
      name: 'skill',
      href: 'skill',
    },
    {
      name: 'services',
      href: 'services',
    },
    {
      name: 'portfolio',
      href: 'portfolio',
    },
    {
      name: 'contact',
      href: 'contact',
    },
  ];
  
  // social
  export const social = [
    {
      icon: <FiFacebook  />,
      href: 'https://www.facebook.com/saifulsumon84',
    },
    {
      icon: <FiLinkedin />,
      href: 'https://www.linkedin.com/in/saifulsumon/',
    },
    {
      icon: <FiInstagram />,
      href: 'https://www.instagram.com/saifulsumonofficial/',
    },
    {
      icon: <FiGithub />,
      href: 'https://github.com/saifulsumon',
    },
  ];
  
  // companies
  export const brands = [
    {
      img: FreelancerBrandIcon,
      href: '',
    },
    {
      img: UpworkBrandIcon,
      href: '',
    },
    {
      img: FiverBrandIcon,
      href: '',
    },
    {
      img: BehanceBrandIcon,
      href: '',
    },
    {
      img: DribbbleBrandIcon,
      href: '',
    },
  ];
  
  // projects
  export const projectsData = [
    {
      id: '1',
      image: Project1,
      name: 'project name 1',
      category: 'UI/UX design',
    },
    {
      id: '2',
      image: Project2,
      name: 'project name 2',
      category: 'web development',
    },
    {
      id: '3',
      image: Project3,
      name: 'project name 3',
      category: 'UI/UX design',
    },
    {
      id: '4',
      image: Project4,
      name: 'project name 4',
      category: 'branding',
    },
    {
      id: '5',
      image: Project5,
      name: 'project name 5',
      category: 'web development',
    },
    {
      id: '6',
      image: Project6,
      name: 'project name 6',
      category: 'web development',
    },
  ];
  
  // projects
  export const projectsNav = [
    {
      name: 'all',
    },
    {
      name: 'UI/UX Design',
    },
    {
      name: 'web development',
    },
    {
      name: 'branding',
    },
  ];
  
  // skill
  export const skills = [
    {
      id: 1,
      image: html,
      title: 'HTML5',
      style: 'shadow-orange-500'
    },
    {
      id: 2,
      image: css,
      title: 'CSS3',
      style: 'shadow-blue-500'
    },
    {
      id: 3,
      image: javascript,
      title: 'javaScript',
      style: 'shadow-yellow-500'
    },
    {
      id: 4,
      image: react,
      title: 'React Js',
      style: 'shadow-cyan-300'
    },
    {
      id: 5,
      image: tailwind,
      title: 'Tailwind CSS',
      style: 'shadow-cyan-500'
    },
    {
      id: 6,
      image: bootstrap,
      title: 'Bootstrap',
      style: 'shadow-purple-500'
    },
    {
      id: 7,
      image: git,
      title: 'Github',
      style: 'shadow-white'
    },
    {
      id: 8,
      image: figma,
      title: 'Figma',
      style: 'shadow-orange-600'
    },
  ];
  
  // services
  export const services = [
    {
      icon: <FaCode />,
      name: 'Web Design',
      description:' Web design encompasses the process of creating and arranging visual elements on a website to ensure an aesthetically pleasing and user-friendly experience.'
    },
    {
      icon: <FaLaptopCode/>,
      name: 'Web Development',
      description: 'Web development is a range of tasks, including programming, database management, and server-side scripting, to create dynamic and interactive online experiences.',
    },
    {
      icon: <FaWordpress/>,
      name: 'Wordpress',
      description: 'WordPress is a widely-used open-source content management system (CMS) that simplifies the process of building and managing websites.',
    },
    {
      icon: <FiFigma />,
      name: 'UI/UX',
      description: 'UI and UX are two essential aspects of designing digital products to ensure a positive and effective interaction between users and the interface.',
    },
  ];
  
  // testimonials
  export const testimonials = [
    {
      authorImg: TestiImage1,
      authorText:
        'Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.',
      authorName: 'Olivia Doe',
      authorPosition: 'Head of Design, Google',
    },
    {
      authorImg: TestiImage2,
      authorText:
        'Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.',
      authorName: 'Olivia Doe',
      authorPosition: 'Head of Design, Google',
    },
    {
      authorImg: TestiImage3,
      authorText:
        'Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.',
      authorName: 'Olivia Doe',
      authorPosition: 'Head of Design, Google',
    },
  ];
  
  // contact
  export const contact = [
    {
      icon: <FiMail />,
      title: 'Have a question?',
      subtitle: 'I am here to help you.',
      description: 'Email me at hello@youremail.com',
    },
    {
      icon: <FiMapPin />,
      title: 'Current Location',
      subtitle: 'Bucharest, Romania',
      description: 'Serving clients worldwide',
    },
  ];