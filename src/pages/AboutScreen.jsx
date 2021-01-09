import React,{Fragment, useState} from 'react'
import { Button, Col, Container, Row } from 'reactstrap';
// import handphone from '../assets/handphone.png';
import { Document, Page } from 'react-pdf';
import ParallaxImagesContainerAbout from '../components/ParralaxAbout';
import './AboutScreen.scss';
import pdf from '../assets/Cv_Indiveri_Esteban.pdf';
import 'react-pdf/dist/umd/Page/AnnotationLayer.css';
import { pdfjs } from 'react-pdf';
import perfil from '../assets/perfil-black.jpg'
import hand from '../assets/businesscoffe.png'
// import phone from '../assets/Phone.png'
// import phone from '../assets/Saly-8.png'
import phone from '../assets/handshake.png'
import { Controller, Scene } from "react-scrollmagic";
// eslint-disable-next-line
import { Controls, PlayState, Reveal, Tween } from 'react-gsap';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;


const AboutScreen = () => {
    // eslint-disable-next-line
    const [numPages, setNumPages] = useState(null);
    // eslint-disable-next-line
  const [pageNumber, setPageNumber] = useState(1)
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }
//       box-shadow: rgb(255, 255, 255) 50px 50px 200px inset;
    return ( 
        <Fragment>
        <Container >
            <Row className="fade-in-slowx2 conta aboutScreen mt-2" md={12}  style={{background:'#eeeeee',boxShadow:'inset 5px 5px 100px #FFF',borderRadius:'20px'}}>
                <Col md={6} sm={12} className="parallaxAbout fade-in" >
                    <ParallaxImagesContainerAbout/>
                </Col>
                <Col md={6} sm={12}>
                <div className="mt-5">
                        <h1 style={{fontSize:'4.8rem'}}className="mb-3 font-weight-bold text-center animate__animated animate__fadeIn animate__delay-1s animate__slow">Hello, Welcome</h1>
                        <h1 className="mb-3 text-center animate__animated animate__fadeIn animate__delay-2s animate__slow">To About Page</h1>
                        <h5 style={{fontSize:'1.5rem'}}  className="text-center animate__animated animate__fadeIn animate__delay-3s animate__slower">Feel free to read short description about me.</h5>
                        <p className="text-justify p-4 animate__animated animate__fadeIn animate__delay-3s animate__slower">My name is Esteban Indiveri and I am an experienced software engineer and freelance developer.I have a experience working on a wide range of technologies C#, Kotlin, Flutter, Javascript creating modern mobile and web applications using Frameworks like React and Angular. Throughout my career, I have acquired advanced technical knowledge. I invite you to contact with me and work together.</p>
                    </div>
                </Col>                
            </Row>
            <div class="container22 text-center animate__animated animate__fadeIn animate__delay-3s animate__slower">
            <div class="object">
                    <img src={perfil} alt="" className="object__img"/>
                    <div className="object__intro">
                    <h1 className="object__intro-title">Full Stack Dev</h1>
                    <p className="object__intro-text">Let's talk, i'm ready to work right now, you can see my cv under here to contact with me</p>
                    </div>
                </div>

                <div class="arrow">
                    <div class="arrow__body"></div>
                </div>
            </div>


            <iframe id="my_iframe" style={{display:'none'}} title="my_iframe" src={pdf}></iframe>
            <Row xs={12}  style={{height:'100vh',marginTop:'3rem'}}>
                <Col md={{size:8, offset:2}}>
                <div className="mx-auto text-center" style={{zIndex:'999'}}>
                    <h1 className="text-center mb-3 cv_title">My CV</h1>
                    <a
                    download={pdf} 
                    href={pdf}
                    ><Button className="mb-3">Download</Button></a>
                </div>
                    <div className="documentopdf" style={{overflowX:'hidden',marginBottom:'2rem',position:'absolute'}}>
                    <Document
                        file={pdf}
                        onLoadSuccess={onDocumentLoadSuccess}
                        className="cursor-pointer"
                    >
                <Page pageNumber={1} />
                    </Document>
                    </div>
                    <div
                 className="handshake"
                 >
                <Controller>
                <Scene duration={300} pin offset={50} >
               <Reveal repeat>
                <Tween 
               from={{ opacity: 0 }} duration={2}
                >
                    <div
                    className="handshake"
                    style={{ height: "200px", width: "200px" }}
                    >
                        <img src={phone} alt="" height="200px" />
                    </div>
                </Tween>
                </Reveal>
                </Scene>
                </Controller>
                </div>
                </Col>
        <div className="clearfix m-4"></div>

                <Col sm={12} style={{marginTop:'30rem'}}>
                <h2 className="text-center">Soft Skills</h2>
            </Col>
            </Row>
      
            </Container>
            <div className="clearfix"/>
            <div style={{marginTop:'-40rem',zIndex:'-999'}}>
         
         <div className="coffe">
            <Controller>
                <Scene duration={300} pin offset={50}>
                    <Tween 
                    from={{ xPercent: -140, yPercent:-100 }} 
                    to={{ xPercent: 20,yPercent:50,opacity:1 }} 
                    >
                        <div
                        style={{ height: "200px", width: "200px",  }}
                        >
                            <img src={hand} alt="" height="300px"/>
                        </div>
                    </Tween>
                </Scene>
            </Controller>
            </div>
        </div>
           
            </Fragment>
     );
}
 
export default AboutScreen;