import React from 'react';
import Timepoint from './Timepoint';
import styled from "styled-components";

const Timeline = () => {
    const sortedData = [...data].sort((a, b) => {
        if (a.present && !b.present) {
            return 1;
        } else if (!a.present && b.present) {
            return -1;
        } else {
            return a.date_from - b.date_from;
        }
    });

    return (
        <Container id="timeline">
            <h1>
                Time<span className="secondary">line</span>
            </h1>
            <ContentWrapper>
                <div className="time">
                    <div className="line"/>
                </div>
                {sortedData.map((timepoint, index) => (
                    <Timepoint
                        key={index}
                        timepoint={timepoint}
                        index={index}
                    />
                ))}
            </ContentWrapper>
        </Container>
    );
};

export default Timeline;

const Container = styled.div`
  max-width: 1280px;
  width: 80%;
  position: relative;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  h1 {
    padding-top: 1rem;
  }
`;

const ContentWrapper = styled.div`
  max-width: 1280px;
  width: 90%;
  position: relative;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .time {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .line {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 3px;
    background-color: var(---tertiary);
    z-index: -1;
  }

  .timepoint {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    width: 40%;
  }

  .timepoint.present .dot {
    background-color: var(---secondary);
  }

  .dot {
    height: 20px;
    width: 20px;
    display: inline-flex;
    flex: 0 0 auto;
    line-height: 80px;
    border-radius: 100%;
    background-color: var(---primary);
    border: 3px solid var(---secondary);
  }

  .content {
    background-color: var(---tertiary);
    color: var(---primary);
    padding: 10px;
    margin-left: 15px;
    margin-right: 15px;
    border-radius: 5px;
    width: 100%;
  }

  .date {
    font-weight: bold;
    margin-bottom: 5px;
  }

  .company {
    font-style: italic;
  }

  .position {
    font-style: italic;
    font-weight: bold;
    color: var(---secondary);
  }

  @media (max-width: 840px) and (min-width: 651px) {
    .timepoint {
      width: 60%;
    }
  }

  @media (max-width: 650px) {
    align-items: flex-start;

    .timepoint {
      width: 100%;
    }

    .line {
      margin-left: 20px;
    }
  }
`;

const data = [
    {
        date_from: new Date(2007, 8, 1),
        date_to: new Date(2011, 5, 30),
        position: '',
        company: 'Piaristenvolksschule Maria Treu',
        present: false,
    },
    {
        date_from: new Date(2011, 8, 1),
        date_to: new Date(2015, 5, 30),
        position: '',
        company: 'Piaristengymnasium',
        present: false,
    },
    {
        date_from: new Date(2015, 8, 1),
        date_to: new Date(2020, 5, 30),
        position: '',
        company: 'HTL Spengergasse',
        present: false,
    },
    {
        date_from: new Date(2020, 9, 1),
        date_to: null,
        position: 'Software and Information Engineering',
        company: 'Vienna University of Technology',
        present: true,
    },
    {
        date_from: new Date(2021, 8, 1),
        date_to: null,
        position: 'Programming- (Java,Python) and Mathematics-tutor',
        company: 'Freelance',
        present: true,
    },
    {
        date_from: new Date(2017, 6, 1),
        date_to: new Date(2017, 7, 1),
        position: 'Sailing Instructor',
        company: 'Segelschule Hofbauer',
        present: false,
    },
    {
        date_from: new Date(2019, 6, 1),
        date_to: new Date(2019, 7, 1),
        position: 'Full-Stack-Developer',
        company: 'SALE4U',
        present: false,
    },
    {
        date_from: new Date(2023, 6, 1),
        date_to: null,
        position: 'Software Engineer Intern',
        company: 'Erste Digital',
        present: true,
    }
]
