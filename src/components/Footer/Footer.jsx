import React from "react";
import styled from "styled-components";
import {AiFillGithub} from "react-icons/ai";
import {FaLinkedinIn, FaStackOverflow} from "react-icons/fa";
import {MdAlternateEmail} from "react-icons/md";
import {CgArrowUpO} from "react-icons/cg";

const Footer = () => {
    const scrollUp = () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    };

    return (
        <Container>
            <div className="footer">
                <div className="social-icons">
                  <span>
                    <a href="https://github.com/ukalto">
                      <AiFillGithub className="icon"/>
                    </a>
                  </span>
                    <span>
                    <a href="https://www.linkedin.com/in/maximilian-gaber/">
                      <FaLinkedinIn className="icon"/>
                    </a>
                  </span>
                    <span>
                    <a href="https://stackoverflow.com/users/12347865/max">
                      <FaStackOverflow className="icon"/>
                    </a>
                  </span>
                    <span>
                    <a href="mailto:maxi.gaber@gmail.com">
                      <MdAlternateEmail className="icon"/>
                    </a>
                  </span>
                    <ArrowUp onClick={scrollUp}>
                        <CgArrowUpO className="icon" id="arrowUp"/>
                    </ArrowUp>
                </div>
            </div>
        </Container>
    );
};

export default Footer;

const Container = styled.div`
  .footer {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: var(---secondary);
  }

  .social-icons {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80px;
    gap: 80px;
  }

  .icon {
    color: var(---primary);
    font-size: 48px;
    margin: 0 10px;
    transition: all 0.2s;
  }

  .icon:hover {
    transform: scale(1.2);
  }

  #arrowUp {
    color: var(---tertiary);
  }

  @media screen and (max-width: 768px) {
    .icon {
      font-size: 30px;
    }

    #arrowUp {
      color: var(---primary);
    }

    .social-icons {
      gap: 20px;
    }
  }
`;

const ArrowUp = styled.div`
  cursor: pointer;
  @media screen and (max-width: 768px) {
    position: fixed;
    bottom: 60px;
    right: 50px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: var(---tertiary);
    font-size: 28px;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
    svg {
      margin-top: -5px;
    }
  }
`;
