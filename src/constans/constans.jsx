import IGN from '../images/IGN.png'
import Wedding from '../images/wedding.png'
import Hexigon from '../images/Hexigon/Hexigon.png'
import Hexigon2 from '../images/Hexigon/Hexigon2.png'
import Hexigon3 from '../images/Hexigon/Hexigon3.jpg'
import Hexigon4 from '../images/Hexigon/Hexigon4.png'
import Playline from '../images/playline.png'
import Playline2 from '../images/Playline2.png'

export const works = [
    {
      name: "Hexigon",
      description:
        "An AI driven platform that allowed users to generate websites through prompts and descriptions",
        tags: [
          {
            name: "react",
            color: "text-blue-500",
          },
          {
            name: "restapi",
            color: "text-green-500",
          },
          {
            name: "scss",
            color: "text-pink-500",
          },
        ],
        links: [
          {
            link: "https://www.compo.ai/",
            name: "Demo",
            color: "text-[#6d56c1]",
          },
          {
            name: "Private property",
            link: "",
            color: "text-[#ff0000]",
          },
        ],
      image: [Hexigon, Hexigon2,Hexigon3,Hexigon4],
      source_code_link: "Private Property",
    },
    {
      name: "Playline",
      description:
        "A online fantasy league site that allowed users to views live games, create teams, and generate tournaments to bet money",
      tags: [
        {
          name: "react",
          color: "text-blue-500",
        },
        {
          name: "restapi",
          color: "text-green-500",
        },
        {
          name: "scss",
          color: "text-pink-500",
        },
      ],
      links: [
        {
          name: "Taken-down",
          color: "text-[#ff0000]",
          link: "",

        },
        {
          name: "Private property",
          link: "",
          color: "text-[#ff0000]",
        },
      ],
      image: [Playline, Playline2,],
      source_code_link: "https://github.com/",
    },
    {
      name: "IGN Clone",
      description:
        "A video game news websites that regularly updates, providing sort features, images and detailed descriptions",
        tags: [
          {
            name: "react",
            color: "text-blue-500",
          },
          {
            name: "restapi",
            color: "text-green-500",
          },
          {
            name: "scss",
            color: "text-pink-500",
          },
        ],
        links: [
          {
            link: "https://samkanda.github.io/Mini-IGN-Clone/",
            name: "Demo",
            color: "text-[#6d56c1]",
          },
          {
            name: "Github",
            link: "https://github.com/Samkanda/Mini-IGN-Clone",
            color: "text-[#6d56c1]",
          },
        ],
        image: [IGN],
        source_code_link: "https://github.com/",
    },
    {
        name: "Wedding",
        description:
            "A fully responsive wedding mock up site with an original design",
            tags: [
              {
                name: "react",
                color: "text-blue-500",
              },
              {
                name: "restapi",
                color: "text-green-500",
              },
              {
                name: "scss",
                color: "text-pink-500",
              },
            ],
            links: [
              {
                link: "https://samkanda.github.io/Wedding-Mock-Up/",
                name: "Demo",
                color: "text-[#6d56c1]",
              },
              {
                name: "Github",
                link: "https://github.com/Samkanda/Wedding-Mock-Up",
                color: "text-[#6d56c1]",
              },
            ],
            image: [Wedding],
            source_code_link: "https://github.com/",
      },
  ];

