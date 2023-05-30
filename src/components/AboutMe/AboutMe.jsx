import React from "react";
import {FiCodesandbox} from "react-icons/fi";
import {CgWebsite} from "react-icons/cg";
import styled from "styled-components";
import Card from "./Card";
import {Slide} from "react-awesome-reveal";
import {BsGlobe} from "react-icons/bs";

let cards = [
    {
        icon: FiCodesandbox,
        title: "Full-Stack Development",
        description: "With expertise in both front-end and back-end technologies, including extensive experience working with SQL or PostgreSQL databases in Docker containers, utilizing Node.js or Spring for the backend, and developing frontend interfaces with React or Angular, I am able to create comprehensive and scalable web applications that deliver exceptional user experiences."
    },
    {
        icon: BsGlobe,
        title: "Web Scraping | Botting",
        description: "My skills in web scraping and botting, including creating several web scrapers using Python with Selenium and developing bots for Android games, enable me to efficiently collect, analyze, and automate data from various sources, helping clients to make informed business decisions and improve their operational efficiencies."
    },
    {
        icon: CgWebsite,
        title: "Project Management",
        description: "As a seasoned project manager, with experience leading every school and university project I've worked on, as well as my diploma project for Verbund, I possess the ability to oversee and execute complex projects from inception to completion, ensuring timely delivery, within budget, and with the highest quality standards."
    },
]

const AboutMe = () => {
    return (
        <Container id="aboutme">
            <Slide direction="down">
                <h1>
                    About <span className="tertiary">Me</span>
                </h1>
            </Slide>
            <Cards>
                {cards.map((card, index) => (
                    <Card key={index}
                          Icon={card.icon}
                          title={card.title}
                          desc={card.description}
                    />
                ))}
            </Cards>
        </Container>
    );
};

export default AboutMe;

const Container = styled.div`
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 5rem 0;
  color: var(---primary);
  @media (max-width: 840px) {
    width: 90%;
  }

  h1 {
    padding-top: 1rem;
  }
`;

const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  @media (max-width: 840px) {
    grid-template-columns: 1fr;
  }
  margin-top: 4rem;
  gap: 1rem;
`;
