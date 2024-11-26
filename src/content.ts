export const content = {
  hero: {
    testing: "hi",
  },
  scientificCorner: {
    hero: {
      title: "Scientific Corner",
      titleWelcome: "Welcome to the Scientific Corner!",
      description:
        "The Scientific Corner is a hub for curiosity and innovation in our programming club. Explore articles, research papers, and tutorials on the latest advancements in computer science. Join us to engage in discussions, share insights, and inspire creativity, whether you&apos;re a seasoned programmer or a beginner!",
    },
    banner: {
      title: "Game Development Unit",
      description1: "Welcome to the hub of creativity and innovation!  ",
      description2: " Here, you&apos;ll dive into all the",
      bold: "recorded sessions ",
      description3:
        "of the Game Development Unit training, featuring insights and techniques from the masterminds at Eastern Games!",
      description4:
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
  statisticsachievements: {
    hero: {
      title: "Statistics & Achievements",
      cards: [
        {
          title: "Member Count In Each Major",
          counts: [
            { name: "AI", value: 25 },
            { name: "CIS", value: 25 },
            { name: "GENERAL", value: 25 },
            { name: "CS", value: 13 },
            { name: "CYS", value: 12 },
          ],
          type: "pie"
        },
        {
          title: "Complated Projects",
          counts: [
            { name: "p1", value: 50 },
            { name: "p2", value: 20 },
            { name: "p3", value: 80 }
          ],
          type: "none"
        },
        {
          title: "Participants Rates In Events",
          counts: [
            { name: "ai", value: 27 },
            { name: "cis", value: 68 },
            { name: "cys", value: 56 },
            { name: "general", value: 83 },
            { name: "cs", value: 58 },
          ],
          type: "bar"
        }
      ]
    },
    track: {
      title: "Track Our Club Grouth",
      counts: [
        {
          title: "Member Count",
          counts: {
            number: "150",
            plus: "10"
          }
        },
        {
          title: "Complated Projects",
          counts: {
            number: "30",
            plus: "5"
          }
        },
        {
          title: "Events Participants Rates",
          counts: {
            number: "80%",
            plus: "3%"
          }
        }
      ],
      card: {
        title: "Growth Over Time",
      }
    },
    members: {
      title: "Top Members",
      members: [
        {
          name: "Noor",
          hours: 16,
          unit: "Web Unit",
          image: "/profile.png"
        },
        {
          name: "Fatima",
          hours: 22,
          unit: "Web Unit",
          image: "/profile.png"
        },
        {
          name: "Hawra'a",
          hours: 19,
          unit: "Web Unit",
          image: "/profile.png"
        }
      ]
    }
  }
};

export type Content = typeof content;
