import React from 'react'
import styled from 'styled-components'

const Skill = (props) => {
    const {Icon, Skill, Underline} = props;

    return (
        <Container underline={Underline}>
            {Icon && (
                <IconWrapper>
                    <Icon/>
                </IconWrapper>
            )}
            <SkillName>{Skill}</SkillName>
        </Container>
    );
}

export default Skill

const Container = styled.div`
  background: var(---tertiary);
  color: var(---primary);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 3rem;
  width: 100%;
  text-align: center;
  ${({underline}) => underline && `
    text-decoration: underline;
    text-decoration-color: var(---secondary);
    text-underline-offset: 0.2rem;
  `}
`;

const IconWrapper = styled.span`
  font-size: 2rem;
  margin-right: 0.5rem;
  padding-top: 0.3rem;
  @media (max-width: 650px) {
    font-size: 1.4rem;
  }
`;

const SkillName = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
  margin: 0;
  display: inline-block;

  @media (max-width: 650px) {
    font-size: 0.9rem;
  }
`;


