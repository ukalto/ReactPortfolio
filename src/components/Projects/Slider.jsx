import React, {useRef} from 'react'
import Slider from 'react-slick';
import Project from './Project';
import {IoIosArrowBack, IoIosArrowForward} from "react-icons/io";
import FamilyTreeImg from '../../assets/FamilyTree/FamilyTreeThree.png';
import TicketLineImg from '../../assets/TicketLine/TicketLineTwo.png';
import ArtmartImg from '../../assets/Artmart/ArtmartOne.png';
import RandomMathImg from '../../assets/RandomMath/RandomMathTwo.png';
import VerbundVisionMobileImg from '../../assets/VerbundVisionMobile/VerbundVisionMobileFour.png';
import styled from 'styled-components';
import {RiAngularjsLine} from "react-icons/ri";
import {GrDocker} from "react-icons/gr";
import {DiNodejsSmall} from "react-icons/di";
import {BsFiletypeSql} from "react-icons/bs";
import {FaJava, FaVuejs} from "react-icons/fa";
import {SiPostgresql, SiSpring} from "react-icons/si";
import {TbApi} from "react-icons/tb";

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
        img: TicketLineImg,
        disc: "is the ultimate destination for all ticketing needs, providing a user-friendly online platform for purchasing and reserving tickets.",
        ref: "https://github.com/ukalto/Ticket-Line",
        apptitle: "Ticket Line",
        icons: [
            RiAngularjsLine,
            SiSpring,
            SiPostgresql
        ],
        ref_name: null
    },
    {
        img: ArtmartImg,
        disc: "is the best place to buy art online. With access to the Metropolitan Museum of Art collection API a vast selection of high-quality art pieces from around the world is offered.",
        ref: "https://github.com/ukalto/Web-Engineering",
        apptitle: "Artmart",
        icons: [
            FaVuejs
        ],
        ref_name: null
    },
    {
        img: RandomMathImg,
        disc: "is a math calculation website that allowes users to track their progress and compete with other math enthusiasts worldwide.",
        ref: "https://github.com/ukalto/RandomMath",
        apptitle: "RandomMath",
        icons: [
            RiAngularjsLine,
            GrDocker,
            DiNodejsSmall,
            BsFiletypeSql
        ],
        ref_name: null
    },
    {
        img: FamilyTreeImg,
        disc: "is a tool designed to help organizing horses with their owners, creating a detailed pedigree that traces the lineage and ancestry of each horse in the network.",
        ref: "https://github.com/ukalto/Family-Tree",
        apptitle: "FamilyTree",
        icons: [
            RiAngularjsLine,
            SiSpring,
            SiPostgresql
        ],
        ref_name: null
    },
    {
        img: VerbundVisionMobileImg,
        disc: "is an Android application developed as part of my diploma project, taking inspiration from the official Verbund Vision app in partnership with Verbund AG. For more information, please refer to the following link.",
        ref: "https://www.verbund.com/de-at/geschaeftskunden/online-services",
        apptitle: "VerbundVisionMobile",
        icons: [
            FaJava,
            TbApi
        ],
        ref_name: "Verbund"
    },
];
