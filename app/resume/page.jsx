"use client";

import { Description } from "@radix-ui/react-dialog";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaFigma,
  FaNodeJs,
  FaReact,
  FaAngular,
  FaTypo3
} from "react-icons/fa";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"



import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

import { Tabs, TabsContent, TabsTrigger, TabsList } from "@/components/ui/tabs";
import { motion } from "framer-motion";

import { ScrollArea } from "@/components/ui/scroll-area";

const about = {
  title: "About me",
  description: "I am a creative thinker with a vision for bringing innovative solutions to the world. I believe in the power of creativity to transform challenges into opportunities and am passionate about using technology to make a positive impact.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Ange Gardien",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+250782245728)",
    },
    {
      fieldName: "Experience",
      fieldValue: "2+ years",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Rwanda",
    },

    {
      fieldName: "Github",
      fieldValue: "@angeGardien1",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Kiswahili",
    },
    {
      fieldName: "Email",
      fieldValue: "angegirishyaka@gmail.com",
    },
  ],
};

const experience = {
  icon: "/assets",
  title: "My Experience",
  description: "With over 2 years of experience in software development, I have contributed to various projects across different domains. This experience has equipped me with strong skills in development, testing, and deployment, and the ability to adapt to project needs quickly. My background includes collaborating with teams to deliver optimized solutions that align with client objectives and market standards.",
  items: [
    {
      company: "Fatherhood Tech",
      position: "Backend Engineer ",
      duration: "2024 - present",
    },
    {
      company: "Seven X",
      position: "Backend Engineer ",
      duration: "2024 - 2024",
    },
    {
        company: "Bethel schoold of Technology",
        position: "Peer to peer tutor",
        duration: "2023 - 2024",
      },
    {
      company: "Fatherhood Sanctuary",
      position: "Media & I.T Manager ",
      duration: "2021 - 2023",
    },
 
    // {
    //   company: "Bethel schoold of Technology",
    //   position: "Peer to peer tutor",
    //   duration: "2024 - 2024",
    // },
    // {
    //   company: "Bethel schoold of Technology",
    //   position: "Peer to peer tutor",
    //   duration: "2024 - 2024",
    // },
  ],
};

const education = {
  icon: "/assets",
  title: "My Ducation",
  description: "I am currently pursuing a Bachelor’s degree in Information Technology at the University of Kigali. I also attended an online boot camp with Bethel School of Technology in Redding, California, where I trained in full-stack development. Additionally, I completed a professional internship with Seven X, gaining hands-on experience in software development and debugging.",
  items: [
    {
      institution: "Bethel College",
      degree: "Full Stack Web Development ",
      duration: "2023",
    },
    {
        institution: "Meta Certificate",
        degree: "Cretificate in Web Development Foundation",
        duration: "2023",
      },
    {
      institution: "University Of Kigali",
      degree: "Bachelord in Computer science ",
      duration: "2020",
    },
    {
      institution: "ESTG",
      degree: "High School Degreen in Computer Science",
      duration: "2018",
    },
  ],
};

const skills = {
  title: "My Skills",
  description: "I’m committed to learning and growing my skills. I enjoy problem-solving, work well in a team, and communicate clearly to help ideas flow. This approach helps me stay adaptable and make meaningful contributions in any project.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "Html 5",
    },
    {
      icon: <FaCss3 />,
      name: "Css 3",
    },
    {
      icon: <FaJs />,
      name: "Java Script",
    },
    {
      icon: <FaReact />,
      name: "React",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next Js",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind.css",
    },
    {
      icon: <FaNodeJs />,
      name: "Node.js",
    },
    {
      icon: <FaAngular />,
      name: "Angular",
    },
  ],
};
const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container max-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About</TabsTrigger>
          </TabsList>
          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60] text-center lg-text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60] text-center lg-text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl flex font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => {
                    return <li key={index}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                            <div className="text-6xl group-hover:text-accent transition-all duration-300">{skill.icon}</div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="capitalize">{skill.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>;
                  })}
                </ul>
              </div>
            </TabsContent>
            <TabsContent value="about" className="w-full text-center xl:text-left">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item,index) => {
                    return( <li key={index} className="flex items-center justify-center xl:justify-start gap-2">
                        <span className="text-white/60">{item.fieldName}:</span>
                        <span className="text-l">{item.fieldValue}</span>
                    </li>)
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
