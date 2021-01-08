import React,{useState} from 'react'
import { Col, Container, Row } from 'reactstrap';
// import handphone from '../assets/handphone.png';
import { Document, Page } from 'react-pdf';
import ParallaxImagesContainerAbout from '../components/ParralaxAbout';
import './AboutScreen.scss';
import pdf from '../assets/Cv_Indiveri_Esteban.pdf';
import 'react-pdf/dist/umd/Page/AnnotationLayer.css';
import { pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const AboutScreen = () => {
    const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1)

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

    return ( 
        <Container>
            <Row md={12} className="mt-2 ">
              
                <Col md={6} sm={6} className="parallaxAbout fade-in ">
                    <ParallaxImagesContainerAbout/>
                </Col>
                <Col md={6} sm={6}>
                <div className="mt-5">
                {/* <img src={handphone} alt="" height="300px"></img> */}

                        <h1 style={{fontSize:'4.8rem'}}className="mb-3 font-weight-bold text-center animate__animated animate__fadeIn animate__delay-1s animate__slow">Hello, Welcome</h1>
                        <h1 className="mb-3 text-center animate__animated animate__fadeIn animate__delay-2s animate__slow">To About Page</h1>
                        <h5 style={{fontSize:'1.5rem'}}  className="text-center animate__animated animate__fadeIn animate__delay-3s animate__slower">Feel free to read short description about me.</h5>
                        <p className="text-justify p-4 animate__animated animate__fadeIn animate__delay-3s animate__slower">My name is Esteban Indiveri and I am an experienced software engineer and freelance developer.I have a experience working on a wide range of technologies C#, Kotlin, Flutter, Javascript creating modern mobile and web applications using Frameworks like React and Angular. Throughout my career, I have acquired advanced technical knowledge. I invite you to contact with me and work together.</p>
                    </div>
                </Col>                
            </Row>

            <Row xs={12}  style={{height:'100vh',marginTop:'10rem'}}>
                <Col >
                    <h1 className="text-center">My CV</h1>
                    <div style={{marginLeft:'14rem',marginTop:'2rem',marginBottom:'2rem'}}>
                    <Document
                        file={pdf}
                        onLoadSuccess={onDocumentLoadSuccess}
                        
                    >
                <Page pageNumber={1} />
                    </Document>
                    </div>
                    
                    
                </Col>
            </Row>
            </Container>
     );
}
 
export default AboutScreen;