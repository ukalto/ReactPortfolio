import React from 'react'
import styled from 'styled-components';

const Card = (props) => {
    const {Icon, desc, title} = props;
    return (
        <Container>
            <span className='secondary'><Icon/></span>
            <h1>{title}</h1>
            <p>{desc}</p>
        </Container>
    )
}

export default Card;

const Container = styled.div`
  width: 100%;
  background: var(---tertiary);
  padding: 1rem;
  text-align: center;

  span {
    font-size: 4rem;
  }

  h1 {
    font-size: 1.2rem;
    padding-bottom: 1rem;
  }

  p {
    font-size: 0.8rem;
  }
`;
