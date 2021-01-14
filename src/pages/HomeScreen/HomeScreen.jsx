import React, { Fragment } from 'react'
import { Col, Container, Row } from 'reactstrap';
import ArrowRight from '../../components/ArrowRight/ArrowRight';
import DescriptionHome from '../../components/DescriptionHome'
// import ImageLayout from '../../components/ImageLayout';
import {css} from '@emotion/react';
import styled from '@emotion/styled';
import './HomeScreen.scss';
import ParallaxImage from '../../components/Parallax'
import ButttonRetro from '../../utils/Fonts/buttons/ButtonRetro';
import elipse from '../../assets/redondat.png'
import ExpandHome from '../../components/ExpandHome/ExpandHome';
import Footer from '../../components/Footer/Footer';
import Helmet from 'react-helmet';

// import ListSkills from '../../components/ListSkills/ListSkills';
const Containerwave=styled.div`
width:100%;
height:2.4rem;
margin-top:-4.2rem;
padding-top:0;
margin-bottom:0;
padding-bottom:0;

 @media(max-width:768px){
    top: -146px;
    width: 100%;
    height: 2.4rem;
    margin-top: -6em;
    padding-top: 0;
    margin-bottom: 0;
    padding-bottom: 0;
    position: relative;
 }
`
const ContainerButton=styled.div`
margin-left:22rem;
margin-top:-2rem;
width:200px;
@media(max-width:1200px){
    margin:0 auto;
}
`;
const ImgContainer=styled.div`
z-index:-999;
 @media(max-width:786px){
     display:none;
 }
`;
const Img=styled.img`
    z-index: -999999;
    position: absolute;
`;

// const ContainerWave2=styled.div`
// width: 265%;
//     height: 0rem;
//     padding-top: 0px;
//     margin-bottom: 0;
//     margin-right: -64rem;
//     margin-left: -59rem;
//     padding-bottom: 0;
//     margin-top: 98rem;
//     position: absolute;
//     z-index: -9999999;
//  @media(max-width:1100px){
//    display:none;
//  }
// `;



const scroll = (component) => {
    if(component){
        const section = document.querySelector( component );
        if(section){
            section.scrollIntoView( { behavior: 'smooth' } );


            const ready=document.querySelector(component);
            ready.classList.add('animate__fadeIn','animate__slower');

            setTimeout(() => {
                ready.classList.remove( 'animate__fadeIn','animate__slower')
            }, 3000);
        }
    };
  };

const HomeScreen = () => {

   

    return ( 
        <Fragment>
             <Helmet>
                <title>Esteban Indiveri</title>
                <meta name="description" content="Home | Portfolio Indiveri" data-react-helmet="true"/>
                
            </Helmet>
            {/* <Containerwave className="fade-in-slowx2"> */}
            <Containerwave >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#F3FEFF" fillOpacity="1" d="M0,192L48,197.3C96,203,192,213,288,218.7C384,224,480,224,576,234.7C672,245,768,267,864,240C960,213,1056,139,1152,122.7C1248,107,1344,149,1392,170.7L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
            </Containerwave>
            <Container fluid={false}>
            <Row>
                <Col xs="12" md="5">
                    <div css={css`
                    height:100vh;
                    @media(max-width:576px){
                        width:94%;
                        margin:0 auto;
                    }
                    `}>
                    <ArrowRight />
                    <DescriptionHome/>
                    {/* <ContainerButton className="text-center animate__animated animate__fadeIn animate__delay-3s" onClick={()=>scroll(".expandHome")}> */}
                    <ContainerButton onClick={()=>scroll(".expandHome")}>

                    <ButttonRetro/>
                    </ContainerButton>
                    <ImgContainer>
                    {/* <Img className="fade-in-slowx2" src={elipse} alt=""></Img> */}
                    <Img  src={elipse} alt=""></Img>

                    </ImgContainer>
                    </div>
                </Col>
                {/* <Col className="fade-in" xs="12" md="7" > */}
                <Col xs="12" md="7" >

                        <ParallaxImage/>
                </Col>
            </Row>
            </Container>
            <ExpandHome/>
            {/* <ListSkills/> */}
            <div onClick={()=>scroll("#nave")}>
            <Footer/>
            </div>
        </Fragment>
     );
}
 
export default HomeScreen;


