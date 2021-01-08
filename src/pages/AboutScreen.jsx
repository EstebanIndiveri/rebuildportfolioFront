import React,{useState} from 'react'
import { Button, Col, Container, Row } from 'reactstrap';
// import handphone from '../assets/handphone.png';
import { Document, Page } from 'react-pdf';
import ParallaxImagesContainerAbout from '../components/ParralaxAbout';
import './AboutScreen.scss';
import pdf from '../assets/Cv_Indiveri_Esteban.pdf';
import 'react-pdf/dist/umd/Page/AnnotationLayer.css';
import { pdfjs } from 'react-pdf';
import perfil from '../assets/perfil-black.jpg'
import hand from '../assets/hand3d.png'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const AboutScreen = () => {
    const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1)

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }
 

    return ( 
        <>


        <Container>
            <Row md={12} className="mt-2 ">
              
                <Col md={6} sm={12} className="parallaxAbout fade-in ">
                    <ParallaxImagesContainerAbout/>
                </Col>
                <Col md={6} sm={12}>
                <div className="mt-5">
                {/* <img src={handphone} alt="" height="300px"></img> */}

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
                    <p className="object__intro-text">I'm ready to work with right now, you can see my cv under here </p>
                    </div>
                </div>

                <div class="arrow">
                    <div class="arrow__body"></div>
                </div>
            </div>


            <iframe id="my_iframe" style={{display:'none'}} title="my_iframe" src={pdf}></iframe>
            <Row xs={12}  style={{height:'100vh',marginTop:'3rem'}}>
                <Col >
                <div className="mx-auto text-center">
                    <h1 className="text-center mb-3 cv_title">My CV</h1>
                    <a
                    download={pdf} 
                    href={pdf}
                    ><Button className="mb-3">Download</Button></a>
                </div>
                    <div style={{marginLeft:'14rem',marginTop:'2rem',marginBottom:'2rem'}}>
                    <Document
                        file={pdf}
                        onLoadSuccess={onDocumentLoadSuccess}
                        
                    >
                <Page pageNumber={1} />
                    </Document>
                    </div>
                  
                </Col>
                <img src={hand} alt="" height="120px"></img>
            </Row>
            </Container>
            </>
     );
}
 
export default AboutScreen;