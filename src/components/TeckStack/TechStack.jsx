import React from 'react'
import styled from 'styled-components'
import Skill from "./Skill";
import {
    DiJava,
    DiJqueryLogo,
    DiNodejsSmall,
    DiReact, DiRuby,
    DiScrum, DiSwift
} from "react-icons/di";
import {
    SiAngular, SiApachemaven,
    SiCisco,
    SiCsharp,
    SiCss3, SiGradle,
    SiHaskell, SiJunit5, SiMongodb, SiPandas,
    SiPostgresql,
    SiSelenium,
    SiSpring
} from "react-icons/si";
import {FaDocker, FaJenkins, FaLinux, FaPhp, FaPython, FaRProject, FaVuejs} from "react-icons/fa";
import {TbBrandJavascript, TbBrandTypescript} from "react-icons/tb";
import {BiGitMerge} from "react-icons/bi";
import {FiFigma, FiGitlab} from "react-icons/fi";
import {
    AiFillAndroid,
    AiFillApple,
    AiFillGithub,
    AiFillHtml5
} from "react-icons/ai";
import {ImWindows} from "react-icons/im";
import {GrMysql} from "react-icons/gr";
import {BsFiletypeSql, BsFiletypeXml} from "react-icons/bs";
import {IoLogoBitbucket} from "react-icons/io";

const TechStack = () => {
    return (
        <Container id="techstack">
            <h1>Tech-<span style={{color: 'var(---secondary)'}}>Stack</span></h1>
            <Skills>
                {skills.map((skill, index) => (
                    <Skill
                        key={index}
                        Icon={skill.Icon}
                        Skill={skill.Skill}
                        Underline={skill.Underline}
                    />
                ))}
            </Skills>
        </Container>
    );
};

export default TechStack

const Container = styled.div`
  position: relative;
  padding: 2rem 0;
  width: 80%;
  max-width: 1280px;
  margin: 2rem auto 6rem;

  h1 {
    padding-bottom: 1.3rem;
  }

  @media (max-width: 840px) {
    width: 90%;
  }

  @media (max-width: 650px) {
    flex-direction: column;
    gap: 3rem;
  }
`;

const Skills = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 2rem;

  @media (max-width: 650px) {
    grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
    gap: 1.5rem;
  }
`;

let skills = [
    {
        Icon: DiJava,
        Skill: "Java",
        Underline: true
    },
    {
        Icon: SiCsharp,
        Skill: "C#",
        Underline: false
    },
    {
        Icon: FaDocker,
        Skill: "Docker",
        Underline: false
    },
    {
        Icon: FaPython,
        Skill: "Python",
        Underline: true
    },
    {
        Icon: SiHaskell,
        Skill: "Haskell",
        Underline: true
    },
    {
        Icon: TbBrandJavascript,
        Skill: "JavaScript",
        Underline: false
    },
    {
        Icon: TbBrandTypescript,
        Skill: "TypeScript",
        Underline: true
    },
    {
        Icon: FaRProject,
        Skill: "R",
        Underline: false
    },
    {
        Icon: null,
        Skill: "ASP Core 2.0",
        Underline: false
    },
    {
        Icon: BiGitMerge,
        Skill: "Git",
        Underline: true
    },
    {
        Icon: null,
        Skill: "C",
        Underline: false
    },
    {
        Icon: null,
        Skill: "Micro 16",
        Underline: false
    },
    {
        Icon: null,
        Skill: "Matlab",
        Underline: false
    },
    {
        Icon: SiCss3,
        Skill: "CSS",
        Underline: false
    },
    {
        Icon: SiSelenium,
        Skill: "Selenium",
        Underline: true
    },
    {
        Icon: FiFigma,
        Skill: "Figma",
        Underline: true
    },
    {
        Icon: AiFillApple,
        Skill: "MacOS",
        Underline: true
    },
    {
        Icon: FaLinux,
        Skill: "Linux",
        Underline: false
    },
    {
        Icon: ImWindows,
        Skill: "Windows",
        Underline: true
    },
    {
        Icon: SiCisco,
        Skill: "Cisco",
        Underline: false
    },
    {
        Icon: SiAngular,
        Skill: "Angular",
        Underline: true
    },
    {
        Icon: DiReact,
        Skill: "React",
        Underline: true
    },
    {
        Icon: FaVuejs,
        Skill: "Vue",
        Underline: false
    },
    {
        Icon: DiNodejsSmall,
        Skill: "NodeJS",
        Underline: true
    },
    {
        Icon: AiFillHtml5,
        Skill: "HTML",
        Underline: true
    },
    {
        Icon: GrMysql,
        Skill: "MySQL",
        Underline: true
    },
    {
        Icon: SiPostgresql,
        Skill: "PostgreSQL",
        Underline: false
    },
    {
        Icon: BsFiletypeSql,
        Skill: "PL/SQL",
        Underline: false
    },
    {
        Icon: SiSpring,
        Skill: "Spring Boot",
        Underline: true
    },
    {
        Icon: SiMongodb,
        Skill: "MongoDB",
        Underline: false
    },
    {
        Icon: SiApachemaven,
        Skill: "Maven",
        Underline: true
    },
    {
        Icon: SiGradle,
        Skill: "Gradle",
        Underline: false
    },
    {
        Icon: SiJunit5,
        Skill: "JUnit",
        Underline: false
    },
    {
        Icon: FaJenkins,
        Skill: "Jenkins",
        Underline: false
    },
    {
        Icon: DiJqueryLogo,
        Skill: "JQuery",
        Underline: false
    },
    {
        Icon: BsFiletypeXml,
        Skill: "XML",
        Underline: false
    },
    {
        Icon: IoLogoBitbucket,
        Skill: "Bitbucket",
        Underline: true
    },
    {
        Icon: AiFillGithub,
        Skill: "GitHub",
        Underline: true
    },
    {
        Icon: FiGitlab,
        Skill: "GitLab",
        Underline: true
    },
    {
        Icon: AiFillAndroid,
        Skill: "Android",
        Underline: false
    },
    {
        Icon: DiScrum,
        Skill: "Scrum",
        Underline: true
    },
    {
        Icon: DiRuby,
        Skill: "Ruby",
        Underline: false
    },
    {
        Icon: DiSwift,
        Skill: "Swift",
        Underline: false
    },
    {
        Icon: FaPhp,
        Skill: "PHP",
        Underline: false
    },
    {
        Icon: null,
        Skill: "Mockito",
        Underline: false
    },
    {
        Icon: SiPandas,
        Skill: "Pandas",
        Underline: false
    },
    {
        Icon: null,
        Skill: "SMT 2.0",
        Underline: false
    },
    {
        Icon: null,
        Skill: "XQuery",
        Underline: false
    },
    {
        Icon: null,
        Skill: "XSLT",
        Underline: false
    },
    {
        Icon: null,
        Skill: "DTD",
        Underline: false
    },
];
