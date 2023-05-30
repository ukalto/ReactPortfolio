import React, {useState} from 'react'
import styled from 'styled-components';

const NavBar = () => {
    const [bar, setBar] = useState(false);
    const handleClick = () => {
        setBar(!bar);
    };
    return (
        <Container bar={bar}>
            <ContentWrapper>
                <Name>
                    <h1>Maximilian Gaber</h1>
                </Name>
                <Nav bar={bar}>
                    <span><a href="#home" onClick={handleClick}>Home</a></span>
                    <span><a href="#aboutme"onClick={handleClick}>About</a></span>
                    <span><a href="#techstack" onClick={handleClick}>Tech-Stack</a></span>
                    <span><a href="#projects" onClick={handleClick}>Projects</a></span>
                    <span><a href="#timeline" onClick={handleClick}>Timeline</a></span>
                    <span><a href="#contact" onClick={handleClick}>Contact</a></span>
                </Nav>
                <div
                    onClick={() => setBar(!bar)}
                    className="bars">
                    <div className="bar"></div>
                </div>
            </ContentWrapper>
        </Container>
    )
}

export default NavBar

const Container = styled.div`
  display: flex;
  background-color: var(---primary);
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: 0;
  padding: 1.5rem 0;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  animation: header 500ms ease-in-out;

  .bars {
    display: none;
  }

  h1, a {
    color: var(---tertiary);
    text-decoration: none;
    font-weight: 500;
    position: relative;

    :before {
      content: "";
      position: absolute;
      left: 0;
      right: 0;
      bottom: -5px;
      height: 2px;
      transform: scale(0);
      transform-origin: right;
      transition: transform 400ms ease-in-out;
      background-color: var(---secondary);
    }

    :hover:before {
      transform: scale(1);
      transform-origin: left;
    }
  }

  @media (max-width: 768px) {
    opacity: 100%;
    .bars {
      width: 40px;
      height: 40px;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0.5rem;
      z-index: 100;

      .bar {
        position: absolute;
        width: 100%;
        height: 2px;
        background-color: ${props => props.bar ? "transparent" : "var(---tertiary)"};
        transition: all 400ms ease-in-out;

        :before, :after {
          content: "";
          width: 100%;
          height: 2px;
          background-color: var(---tertiary);
          position: absolute;
        }

        :before {
          transform: ${props => props.bar ? "rotate(45deg)" : "translateY(10px)"};
          transition: all 400ms ease-in-out;
        }

        :after {
          transform: ${props => props.bar ? "rotate(-45deg)" : "translateY(-10px)"};
          transition: all 400ms ease-in-out;
        }
      }
    }
  }

`;

const ContentWrapper = styled.div`
  max-width: 1280px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 80%;
  margin: 0 auto;
`;


const Name = styled.div`
  h1 {
    font-weight: 600;
    font-size: 1.2rem;
  }

  :hover h1 {
    cursor: default;
  }
`;

const Nav = styled.div`
  @media (max-width: 768px) {
    position: fixed;
    display: flex;
    color: var(---tertiary);
    flex-direction: column;
    background-color: var(---primary);
    inset: 0;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    gap: 2rem;
    font-weight: 700;
    height: ${props => props.bar ? "100vh" : 0};
    transition: height 400ms ease-in-out;
    overflow: hidden;
    z-index: 100;
  }

  span {
    margin-left: 1.2rem;
  }
`;
