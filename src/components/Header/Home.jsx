import React from "react";
import styled from "styled-components";
import {AiFillGithub} from "react-icons/ai";
import {FaLinkedinIn, FaStackOverflow} from "react-icons/fa";
import {MdAlternateEmail} from "react-icons/md";
import profile from '../../assets/Me/MaximilianGaber.png';


const Home = () => {
    const birthday = new Date('2000-12-05');
    const now = new Date();
    const diff = now.getFullYear() - birthday.getFullYear();
    const hasBirthdayOccurredThisYear = (
        now.getMonth() > birthday.getMonth() ||
        (now.getMonth() === birthday.getMonth() && now.getDate() >= birthday.getDate())
    );
    const age = hasBirthdayOccurredThisYear ? diff : diff - 1;

    return (
        <Container id="home">
            <Texts>
                <h4>
                    Hey, <span style={{color: 'var(---secondary)'}}>I'am</span>
                </h4>
                <h1>Maximilian Gaber</h1>
                <h3>Full-Stack Developer</h3>
                <p>I am a {age}-year-old <a>Software Engineer</a>, who codes since <a>2015</a>.</p>
                <a href="#contact">
                    <button>Contact Me</button>
                </a>
                <Social>
                    <div className="social-icons">
                            <span>
                                <a href="https://github.com/ukalto">
                                  <AiFillGithub/>
                                </a>
                            </span>
                        <span>
                                <a href="https://www.linkedin.com/in/maximilian-gaber/">
                                  <FaLinkedinIn/>
                                </a>
                          </span>
                        <span>
                                <a href="https://stackoverflow.com/users/12347865/max">
                                  <FaStackOverflow/>
                                </a>
                            </span>
                        <span>
                                <a href="mailto:maxi.gaber@gmail.com">
                                  <MdAlternateEmail/>
                                </a>
                            </span>
                    </div>
                </Social>
            </Texts>
            <Profile>
                <img
                    src={profile}
                    alt="profile"
                />
            </Profile>
        </Container>
    );
};

export default Home;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 3rem;
  width: 80%;
  max-width: 1280px;
  margin: 5rem auto 15rem;
  z-index: 1;
  @media (max-width: 840px) {
    width: 90%;
  }

  @media (max-width: 640px) {
    flex-direction: column;
  }
`;

const Texts = styled.div`
  flex: 1;

  h4 {
    padding: 1rem 0;
    font-weight: 500;
  }

  h1 {
    font-size: 2rem;
    font-family: "Secular One", sans-serif;
    color: var(---secondary);
    letter-spacing: 2px;
  }

  h3 {
    font-weight: 500;
    font-size: 1.2rem;
    padding-bottom: 1.2rem;
    text-transform: capitalize;
  }

  p {
    font-weight: 300;
  }

  a {
    text-decoration: underline var(---secondary) 2px;
    text-underline-offset: 4px;
  }

  button {
    padding: 0.7rem 2rem;
    margin-top: 3rem;
    cursor: pointer;
    background-color: #01be96;
    border: none;
    color: #fff;
    font-weight: 500;
    filter: drop-shadow(0px 10px 10px #01be9551);

    :hover {
      filter: drop-shadow(0px 10px 10px #01be9570);
    }
  }

  @media (max-width: 790px) {
    text-align: center;
  }
`;

const Social = styled.div`
  margin-top: 3rem;
  display: flex;
  align-items: center;
  gap: 1rem;

  p {
    font-size: 0.9rem;
    @media (max-width: 690px) {
      font-size: 0.7rem;
    }
  }

  @media (max-width: 790px) {
    justify-content: center;
  }

  .social-icons {
    display: flex;
    align-items: center;
    gap: 1rem;

    span {
      width: 2.3rem;
      height: 2rem;
      clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
      background-color: #01be96;
      position: relative;
      transition: transform 400ms ease-in-out;

      :hover {
        transform: rotate(360deg);
      }
    }

    a {
      color: #fff;
      position: absolute;
      top: 55%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
`;

const Profile = styled.div`
  img {
    width: 25rem;
    transition: transform 400ms ease-in-out;
    clip-path: circle(45% at center);

    @media (max-width: 790px) {
      margin-top: 2rem;
      width: 20rem;
    }

    @media (max-width: 660px) {
      width: 18rem;
    }

    @media (max-width: 640px) {
      width: 100%;
    }
  }

  :hover img {
    transform: scale(1.1);
  }
`;

