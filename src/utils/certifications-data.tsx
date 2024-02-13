import udemyLogo from '../assets/udemy_logo.jpg';
import linkedInLogo from '../assets/linkedin_logo.jpg';
import freeCodeCampLogo from '../assets/free_code_camp_logo.jpg';
// import salesforceLogo from '../assets/salesforce_logo.jpg';
// import softUniLogo from '../assets/softUni_logo.jpg';

type ProviderType =
  | 'Udemy'
  | 'LinkedIn'
  | 'Salesforce'
  | 'freeCodeCamp'
  | 'SoftUni';

export type CertificationType = {
  title: string;
  provider: ProviderType;
  author: string;
  image: string;
};

export const certificationsData: CertificationType[] = [
  {
    title: 'CSS - The Complete Guide 2023 (incl. Flexbox, Grid & Sass)',
    provider: 'Udemy',
    author: 'Maximilian Schwarzmuller & Manuel Lorenz',
    image: udemyLogo,
  },
  {
    title: 'Git & GitHub - The Practical Guide',
    provider: 'Udemy',
    author: 'Maximilian Schwarzmuller & Manuel Lorenz',
    image: udemyLogo,
  },
  {
    title: 'React & TypeScript - The Practical Guide',
    provider: 'Udemy',
    author: 'Maximilian Schwarzmuller',
    image: udemyLogo,
  },
  {
    title: 'Understanding TypeScript',
    provider: 'Udemy',
    author: 'Maximilian Schwarzmuller',
    image: udemyLogo,
  },
  {
    title: 'React - The Complete Guide 2023 (incl. React Router & Redux)',
    provider: 'Udemy',
    author: 'Maximilian Schwarzmuller',
    image: udemyLogo,
  },
  {
    title: 'The Complete Sass & SCSS Course: From Beginner to Advanced',
    provider: 'Udemy',
    author: 'Joe Parys & Peter Sommerhoff',
    image: udemyLogo,
  },
  {
    title: 'Modern React with Redux [2023 Update]',
    provider: 'Udemy',
    author: 'Stephen Grider',
    image: udemyLogo,
  },
  {
    title: 'JavaScript Web Projects: 20 Projects to Build Your Portfolio',
    provider: 'Udemy',
    author: 'Andrei Neagoie & Jacinto Wong',
    image: udemyLogo,
  },
  {
    title: 'Build Responsive Real-World Websites with HTML and CSS',
    provider: 'Udemy',
    author: 'Jonas Schmedtmann',
    image: udemyLogo,
  },
  {
    title: 'React Hooks',
    provider: 'LinkedIn',
    author: 'Eve Porcello',
    image: linkedInLogo,
  },
  {
    title: 'React: Design Patterns',
    provider: 'LinkedIn',
    author: 'Shaun Wassell',
    image: linkedInLogo,
  },

  {
    title: 'TypeScript Essential Training',
    provider: 'LinkedIn',
    author: 'Jess Chadwick',
    image: linkedInLogo,
  },

  {
    title: 'JavaScript Algorithms and Data Structures',
    provider: 'freeCodeCamp',
    author: 'Quincy Larson',
    image: freeCodeCampLogo,
  },

  /* not needed for now 
   {
    title: 'React.js: Building an Interface',
    provider: 'LinkedIn',
    author: 'Ray Villalobos',
    image: linkedInLogo,
  },
    {
    title: 'CSS Fundamentals: Unlock the Power of Web Styling',
    provider: 'LinkedIn',
    author: 'Carrie Dils',
    image: linkedInLogo,
  },
  {
    title: 'CSS Animation',
    provider: 'LinkedIn',
    author: 'Val Head',
    image: linkedInLogo,
  },
  {
    title: 'JavaScript: Maps and Sets',
    provider: 'LinkedIn',
    author: 'Jamie Pittman',
    image: linkedInLogo,
  },
  {
    title: 'JavaScript: Patterns',
    provider: 'LinkedIn',
    author: 'Emmanuel Henri',
    image: linkedInLogo,
  },
  
  {
    title: 'Entity Framework Core',
    provider: 'SoftUni',
    author: 'SoftUni',
    image: softUniLogo,
  },
  {
    title: 'MS SQL',
    provider: 'SoftUni',
    author: 'SoftUni',
    image: softUniLogo,
  },
  {
    title: 'C# OOP',
    provider: 'SoftUni',
    author: 'SoftUni',
    image: softUniLogo,
  },
  {
    title: 'Data Structures Advanced (with C#)',
    provider: 'SoftUni',
    author: 'SoftUni',
    image: softUniLogo,
  },
  {
    title: 'Data Structures Fundamentals (with C#)',
    provider: 'SoftUni',
    author: 'SoftUni',
    image: softUniLogo,
  },
   {
    title: 'Salesforce Certified JavaScript Developer I',
    provider: 'Salesforce',
    author: 'Salesforce',
    image: salesforceLogo,
  },
  {
    title: 'Salesforce Certified Administrator (SCA)',
    provider: 'Salesforce',
    author: 'Salesforce',
    image: salesforceLogo,
  },
  {
    title: 'Salesforce Certified Platform Developer I',
    provider: 'Salesforce',
    author: 'Salesforce',
    image: salesforceLogo,
  },
  */
];
