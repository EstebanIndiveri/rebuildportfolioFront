import React,{Fragment, useState} from 'react'
import { Button, Col, Container, Row } from 'reactstrap';
// import handphone from '../assets/handphone.png';
import { Document, Page } from 'react-pdf';
import ParallaxImagesContainerAbout from '../components/ParralaxAbout';
import './AboutScreen.scss';
import pdf from '../assets/Cv_Indiveri_Esteban.pdf';
import 'react-pdf/dist/umd/Page/AnnotationLayer.css';
import { pdfjs } from 'react-pdf';
import perfil from '../assets/perfil-black.jpg';
import hand from '../assets/businesscoffe.png';
import icon3dcode1 from '../assets/icon3dcode1.png';
import icon3dcode2 from '../assets/icon3dcode2.png';
import icon3dnotes from '../assets/icon3dnotes.png';
import icon3dtable from '../assets/icon3dtabla.png';
import icon3dcel from '../assets/icon3dcel.png';
import icon3dtest from '../assets/icon3d__test.png';
import icon3dDesign from '../assets/icon3d__design.png';
import icon3dcommunication from '../assets/icon3d__communitaction.png';
import icon3dwork from '../assets/icon3dwork.png';
import icon3dTeam from '../assets/icon3d__team.png';
import Helmet from 'react-helmet';

import AnimatedCard from '@rihor/react-3d-card/dist/AnimatedCard';










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
                 <Helmet>
                <title>About | Esteban Indiveri</title>
                <meta name="description" content="Cursos | About me Esteban Indiveri" data-react-helmet="true"/>
            </Helmet>
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
            <Row className="aboutskills" style={{height:'110vh',marginTop:'4rem',background:'#fcfcfc',borderRadius:'10px'}}>
        <Col sm={12} lg={6}  >
        <AnimatedCard weight={0.2} clickable={true}>

                <h2 className="text-center">Soft Skills</h2>
                <ul>
                    <li className="mb-4">
                        <img src={icon3dcommunication} alt="" width="120px" style={{opacity:"0.66"}}/> 
                        Communication
                    </li>
                    <li className="mb-4">
                        <img src={icon3dnotes} alt="" width="120px" style={{opacity:"0.66"}}/> 
                        Positive Attitude
                    </li> 
                    <li >
                        <img src={icon3dtable} alt="" width="120px" style={{opacity:"0.66"}}/> 
                        Critical Thinking
                    </li>
                    <li >
                        <img src={icon3dTeam} alt="" width="120px" style={{opacity:"0.66"}}/> 
                        Teamwork
                    </li>
                    <li >
                        <img src={icon3dwork} alt="" width="120px" style={{opacity:"0.66"}}/> 
                        Leadership
                    </li>
                </ul>
                </AnimatedCard>
            </Col>
            <Col sm={12} lg={6} >
            <AnimatedCard weight={0.3} clickable={true}>
                <h2 className="text-center">Soft Skills</h2>
                <ul>
                    <li>
                        <img src={icon3dcode1} alt="" width="120px" style={{opacity:"0.66"}}/><img src={icon3dcode2} alt="" width="120px" style={{opacity:"0.66",marginLeft:'-5rem',marginRight:'-2rem'}}/> 
                        Software Languages and last frameworks
                    </li>
                    <li>
                        <img src={icon3dtest} alt="" width="120px" style={{opacity:"0.66"}}/> 
                        Unit Test, Manual Test, automation test "Selemiun"
                    </li>
                    <li>
                        <img src={icon3dcel} alt="" width="120px" style={{opacity:"0.66"}}/> 
                        Mobile Developer: React-Native, Flutter, Kotlin
                    </li>
                    <li>
                        <img src={icon3dDesign} alt="" width="120px" style={{opacity:"0.66"}}/> 
                        Designer UX/UI: Adobe XD, Figma, Invision, framer
                    </li>
                </ul>
                </AnimatedCard>
            </Col>
        
        </Row>
           
            <div className="container22 text-center animate__animated animate__fadeIn animate__delay-3s animate__slower">
            <div className="object">
                    <img src={perfil} alt="" className="object__img"/>
                    <div className="object__intro">
                    <h1 className="object__intro-title">Full Stack Dev</h1>
                    <p className="object__intro-text">Let's talk, i'm ready to work right now, you can see my cv under here to contact with me</p>
                    </div>
                </div>

                <div className="arrow">
                    <div className="arrow__body"></div>
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

            </Row>
      
            </Container>
            <div className="clearfix"/>
            <div style={{marginTop:'-40rem',zIndex:'-999',height:'100vh'}}>
         
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
        {/* <div className="fade-in" style={{boxShadow:'0px 0px 7px 1px #eee',transition:'all 300ms ease-in-out',paddingTop:'.4rem',paddingBottom:'.4rem',backgroundColor:"#eee",fontSize:"15px",borderRadius:'15px',width:'40px',position:'fixed',zIndex:'999',bottom:'1rem',left:'95%',cursor:'pointer'}} >
                    <p className="text-center mb-0 ">?</p>
                  </div> */}
     
            </Fragment>
     );
}
 
export default AboutScreen;