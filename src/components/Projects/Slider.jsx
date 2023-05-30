import React, {useRef} from 'react'
import Slider from 'react-slick';
import Project from './Project';
import {IoIosArrowBack, IoIosArrowForward} from "react-icons/io";
import FamilyTreeThreeImg from '../../assets/FamilyTree/FamilyTreeThree.png';
import TicketLineTwoImg from '../../assets/TicketLine/TicketLineTwo.png';
import ArtmartOneImg from '../../assets/Artmart/ArtmartOne.png';
import RandomMathTwoImg from '../../assets/RandomMath/RandomMathTwo.png';
import styled from 'styled-components';
import {RiAngularjsLine} from "react-icons/ri";
import {GrDocker} from "react-icons/gr";
import {DiNodejsSmall} from "react-icons/di";
import {BsFiletypeSql} from "react-icons/bs";
import {FaVuejs} from "react-icons/fa";
import {SiPostgresql, SiSpring} from "react-icons/si";

let settings = {
    className: "center",
    centerMode: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    responsive: [
        {
            breakpoint: 990,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
                centerMode: false
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2,
                centerMode: false
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: false
            }
        }
    ]
};
const SliderComp = () => {
    const arrowRef = useRef(null);
    let sliderProject = "";
    sliderProject = data.map((item, index) => (
        <Project item={item} key={index}/>
    ))
    return (
        <Container>
            <Slider ref={arrowRef} {...settings}>
                {sliderProject}
            </Slider>
            <Buttons>
                <button
                    onClick={() => arrowRef.current.slickPrev()}
                    className='back'><IoIosArrowBack/></button>
                <button
                    onClick={() => arrowRef.current.slickNext()}
                    className='next'><IoIosArrowForward/></button>
            </Buttons>
        </Container>
    )
}

export default SliderComp;

const Container = styled.div`
  position: relative;
`;

const Buttons = styled.div`
  button {
    opacity: 90%;
    width: 2rem;
    height: 2rem;
    background-color: var(---tertiary);
    cursor: pointer;
    color: var(---primary);
    border: none;
    position: absolute;
    top: 45%;
    right: -1rem;
  }

  .back {
    left: -1rem;
  }
`;

let data = [
    {
        img: TicketLineTwoImg,
        disc: "is the ultimate destination for all ticketing needs, providing a user-friendly online platform for purchasing and reserving tickets.",
        ref: "https://github.com/ukalto/Ticket-Line",
        apptitle: "Ticket Line",
        icons: [
            RiAngularjsLine,
            SiSpring,
            SiPostgresql
        ]
    },
    {
        img: ArtmartOneImg,
        disc: "is the best place to buy art online. With access to the Metropolitan Museum of Art collection API a vast selection of high-quality art pieces from around the world is offered.",
        ref: "https://github.com/ukalto/Web-Engineering",
        apptitle: "Artmart",
        icons: [
            FaVuejs
        ]
    },
    {
        img: RandomMathTwoImg,
        disc: "is a math calculation website that allowes users to track their progress and compete with other math enthusiasts worldwide.",
        ref: "https://github.com/ukalto/RandomMath",
        apptitle: "RandomMath",
        icons: [
            RiAngularjsLine,
            GrDocker,
            DiNodejsSmall,
            BsFiletypeSql
        ]
    },
    {
        img: FamilyTreeThreeImg,
        disc: "is a tool designed to help organizing horses with their owners, creating a detailed pedigree that traces the lineage and ancestry of each horse in the network.",
        ref: "https://github.com/ukalto/Family-Tree",
        apptitle: "FamilyTree",
        icons: [
            RiAngularjsLine,
            SiSpring,
            SiPostgresql
        ]
    },

];
