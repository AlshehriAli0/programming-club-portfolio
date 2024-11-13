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
    }
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
