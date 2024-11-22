import { ChevronsLeftRightEllipsis  , Gamepad2 , MessageSquare , CalendarDays } from 'lucide-react';


export const content = {
  hero: {
    testing: "hi",
  },
  nav:{
    nameOfTabs: [
      {name: 'Home' , url: '/'}, 
      {name: 'About us' , url: '/'} , 
      {name: 'Statistics & Achievements' , url: '/scientific-corner'}, 
      {name: 'Scientific Corner' , url: '/'} 
      ]
  },
  Home:{
    topPart:{
      topText:'Welcome to IAU',
      bottom: 'programming club'
    },
    "ProgramUnit":{
    "title": 'Programming club units',
    "desc": 'Find your place and join the Programming club, be part of the change!',
    "ProgramUnitCard":[
        {
          logo: ChevronsLeftRightEllipsis ,
          headerOfTitle: 'web development unit',
          info: 'Work in passionate environment to develop and design impactful websites. Collaborate with (Project management team) to plan and ensure smooth effective execution, (UI/UX team) to create user-friendly visual designs, or (Frontend/Backend team) to maintain robust, high-performance and scalable website.'
        },
        {
          logo: CalendarDays,
          headerOfTitle: 'Events & organization unit',
          info: 'This unit is responsible for workshops, competitions, exhibitions, and social events, provided for club members and college students. Collaborate to ensure the smooth execution of every event by planning, coordinating, organizing, and implementing each one. It is the unit of vibrant members who love organizing, multitasking, and turning ideas into successful events.'
        },
        {
          logo: MessageSquare,
          headerOfTitle: 'Publication & Marketing unit',
          info: "If you are interested in marketing, social media management, design, photography, content writing, or video editing, this is your perfect unit! Use your diverse skills and help promote the club's activities and achievements"
        },
        {
          logo: Gamepad2,
          headerOfTitle: 'game development unit',
          info: "Regardless of your previous experience, learn the basics of creating, designing and coding games from scratch. Work eventually with your team to bring your game ideas to life!"
        },
      ]
    },
  },
  footer:{
    topPTag: 'Social media account:',
    topATag: 'Programming_iau',
    bottomPTag: 'share your activities at :',
    bottomATag: '#programming_club',
  },
  scientificCorner: {
    hero: {
      title: "Scientific Corner",
      titleWelcome: "Welcome to the Scientific Corner!",
      description:
        "The Scientific Corner is a hub for curiosity and innovation in our programming club. Explore articles, research papers, and tutorials on the latest advancements in computer science. Join us to engage in discussions, share insights, and inspire creativity, whether you're a seasoned programmer or a beginner!",
    },
    banner: {
      title: "Game Development Unit",
      description1: "Welcome to the hub of creativity and innovation!  ",
      description2: " Here, you'll dive into all the",
      bold: "recorded sessions ",
      description3:
        "of the Game Development Unit training, featuring insights and techniques from the masterminds at Eastern Games!",
      description4:
        "Get ready to level up your skills with exclusive, behind-the-scenes content that will ignite your passion for game development!",
      description5:
        "Get ready to level up your skills with exclusive, behind-the-scenes content that will ignite your passion for game development!",
    },
  },
  gameDev: {
    meetings: [
      {
        date: "13 November",
        cover: "/game-dev-cover.png",
        title: "1st Practice",
        link: "www.zoom.com",
      },
      {
        date: "13 November",
        cover: "/game-dev-cover.png",
        title: "1st Practice",
        link: "www.zoom.com",
      },
      {
        date: "13 November",
        cover: "/game-dev-cover.png",
        title: "1st Practice",
        link: "www.zoom.com",
      },
      {
        date: "13 November",
        cover: "/game-dev-cover.png",
        title: "1st Practice",
        link: "www.zoom.com",
      },
    ],
  },
};

export type Content = typeof content;
