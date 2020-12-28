import React, { Fragment,useEffect,useState } from 'react'
import { Col, Container, Row } from 'reactstrap';
import ArrowRight from '../../components/ArrowRight/ArrowRight';
import DescriptionHome from '../../components/DescriptionHome'
// import ImageLayout from '../../components/ImageLayout';
import {css} from '@emotion/react';
import styled from '@emotion/styled';
import './HomeScreen.scss';
import ParallaxImage from '../../components/Parallax'

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
    margin-top: -4.2rem;
    padding-top: 0;
    margin-bottom: 0;
    padding-bottom: 0;
    position: relative;
 }
`

const HomeScreen = () => {
const [ventana, setVentana] = useState(false);

    useEffect(()=>{
        // setVentana(window.screen.width)
        if(window.screen.width===1920){
            setVentana(true);
        }else{
            setVentana(false);
        }
    },[ventana])
    return ( 
        <Fragment>
            <Containerwave>
                {/* <Img src={waveImage} alt=""/> */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#F3FEFF" fill-opacity="1" d="M0,192L48,197.3C96,203,192,213,288,218.7C384,224,480,224,576,234.7C672,245,768,267,864,240C960,213,1056,139,1152,122.7C1248,107,1344,149,1392,170.7L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
            </Containerwave>
            <Container fluid={ventana}>
            <Row>
                <Col xs="12" md="5">
                    <div css={css`
                    height:100vh;
                    @media(max-width:576px){
                        width:94%;
                        margin:0 auto;
                    }
                    `}>
                    <ArrowRight/>
                    <DescriptionHome/>

                    </div>
                </Col>
                <Col className="fade-in" xs="12" md="7" >
                        {/* <ImageLayout/> */}
                        <ParallaxImage/>
                </Col>
         
            </Row>
            </Container>
            
        </Fragment>
     );
}
 
export default HomeScreen;