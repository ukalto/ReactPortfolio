import React from 'react'
import styled from 'styled-components';

const Project = (props) => {
    const {img, disc, ref, apptitle, icons} = props.item;
    return (
        <Container className='project'>
            <img src={img} alt="project"/>
            <div className="disc">
                <TitleWrapper>
                    {icons.map((Icon, index) => (
                        <span key={index}><Icon/></span>
                    ))}
                </TitleWrapper>
                <p><span style={{color: "var(---secondary)"}}>{apptitle}</span> {disc}
                    <a href={ref}>GitHub</a>
                </p>
            </div>
        </Container>
    )
}

export default Project;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;

  span {
    margin-left: 0.5rem;
    font-size: 1.2rem; /* change the font size to 24px */
    color: var(---secondary); /* change the color to a dark gray */
  }

`;

const Container = styled.div`
  height: 20rem;
  background-color: var(---tertiary);
  margin: 0 0.5rem;
  padding: 0.5rem;
  border-radius: 5px;
  cursor: pointer;
  position: relative;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 400ms ease-in-out;
  }

  .disc {
    position: absolute;
    right: 0;
    left: 0;
    bottom: -10rem;
    text-align: left;
    padding: 0.5rem;
    transition: all 400ms ease-in-out;

    h1 {
      font-size: 1rem;
    }

    p {
      width: 90%;
      font-size: 0.8rem;
      font-weight: bold;

      a {
        margin-left: 0.4rem;
        color: var(---secondary);
      }
    }
  }

  :hover > img {
    transform: scale(1.3);
  }

  :hover > .disc {
    background-color: var(---tertiary);
    bottom: 0;
  }

`
