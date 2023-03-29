import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "О нас",
  },
  {
    id: "work",
    title: "Работы",
  },
  {
    id: "contact",
    title: "Контакты",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Разработка и поддержка веб-приложений с использованием React.js и других связанных технологий",
      "Сотрудничество с кросс-функциональными командами, включая дизайнеров, менеджеров по продуктам и других разработчиков, для создания высококачественных продуктов.",
      "Внедрение адаптивного дизайна и обеспечение кросс-браузерной совместимости.",
      "Участие в обзорах кода и предоставление конструктивных отзывов другим разработчикам.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Разработка и поддержка веб-приложений с использованием React.js и других связанных технологий",
      "Сотрудничество с кросс-функциональными командами, включая дизайнеров, менеджеров по продуктам и других разработчиков, для создания высококачественных продуктов.",
      "Внедрение адаптивного дизайна и обеспечение кросс-браузерной совместимости.",
      "Участие в обзорах кода и предоставление конструктивных отзывов другим разработчикам.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Разработка и поддержка веб-приложений с использованием React.js и других связанных технологий",
      "Сотрудничество с кросс-функциональными командами, включая дизайнеров, менеджеров по продуктам и других разработчиков, для создания высококачественных продуктов.",
      "Внедрение адаптивного дизайна и обеспечение кросс-браузерной совместимости.",
      "Участие в обзорах кода и предоставление конструктивных отзывов другим разработчикам.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Разработка и поддержка веб-приложений с использованием React.js и других связанных технологий",
      "Сотрудничество с кросс-функциональными командами, включая дизайнеров, менеджеров по продуктам и других разработчиков, для создания высококачественных продуктов.",
      "Внедрение адаптивного дизайна и обеспечение кросс-браузерной совместимости.",
      "Участие в обзорах кода и предоставление конструктивных отзывов другим разработчикам.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Я думал, что невозможно сделать сайт таким же красивым, как наш продукт, но Рик доказал, что я ошибался.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "Я никогда не встречал веб-разработчика, который бы так заботился об успехе своих клиентов, как Рик.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "После того, как Рик оптимизировал наш сайт, наш трафик увеличился на 50%. Мы не можем отблагодарить их достаточно!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Веб-платформа, которая позволяет пользователям искать, бронировать и управлять арендой автомобилей у различных поставщиков, предоставляя удобное и эффективное решение для транспортных нужд.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Веб-платформа, которая позволяет пользователям искать, бронировать и управлять арендой автомобилей у различных поставщиков, предоставляя удобное и эффективное решение для транспортных нужд.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "Веб-платформа, которая позволяет пользователям искать, бронировать и управлять арендой автомобилей у различных поставщиков, предоставляя удобное и эффективное решение для транспортных нужд.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
