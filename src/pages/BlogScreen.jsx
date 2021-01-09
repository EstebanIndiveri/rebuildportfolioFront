import React,{useState} from 'react';
import { Col, Container, Row } from 'reactstrap';
import saly6 from '../assets/Saly-6.png'
import saly12 from '../assets/Saly-12.png'
import styled from '@emotion/styled';
import { Collapse } from 'reactstrap';
import salyCard from '../assets/Saly-13.png';

import './BlogScreen.scss';

const ImageContainer=styled.div`
width:100%;
height:50vh;
background-color:#eee;
border-radius:20px;
box-shadow:inset 10px 10px 500px #fff;
justify-content:space-between;
align-items:center;

display:flex;
img{
    display:block;
    height:300px;
    width:300px;
}
`;
const FirstImageInsideDive=styled.img`
@media(max-width:510px){
    height:200px !important;
    width:200px !important;
}
`;
const SecondImageInsideDive=styled.img`
@media(max-width:768px){
    display:none !important;
}
`;
const InsideDive=styled.div`
text-align:center;
`;
const TextInsideDive=styled.h3`
font-size:5.4rem;
font-family:'Franchise';
@media(max-width:510px){
    font-size:4rem;
}
@media(max-width:370px){
    font-size:3.5rem;
}
`;

const Title=styled.h1`
text-align:center;
font-size:7rem;
`;

const SubTitle=styled.p`
text-align:center;
margin-top:3rem;
font-size:1.7rem;
`;

const NewEntry=styled.div`
    background-color:#FFF;
    border-radius:20px;
    padding:1rem;
    margin-bottom:1.4rem;
    transition:all 300ms ease-in-out;

    &:hover{
        transform:scale(1.2);
    }
`;

const ImgExpandCard=styled.img`
align-items:center;
text-align:center;
display:block;
justify-content:center;
margin:0 auto;
`;

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

const BlogScreen = () => {
const [isOpen, setIsOpen] = useState(false);
const [secondOpen,setSecondOpen]=useState(false);
const [thirdOpen,setThirdOpen]=useState(false);
const toggle = () => setIsOpen(!isOpen);
const toggle1 = () => setSecondOpen(!secondOpen);
const toggle2 = () => setThirdOpen(!thirdOpen);

const scrollandToggle=()=>{
    toggle();
    scroll("#FirstBlog");
}
const secondScrollToggle=()=>{
    toggle1();
    scroll("#SecondBlog");
}
const thirdScrollToggle=()=>{
    toggle2();
    scroll("#thirdBlog");
}
    return ( 
        <div className={`${isOpen?'onfocusback ':'total'}`} >
            <Container className="fade-in" style={{backgroundColor:'#eeeeee',borderRadius:'10px'}}>
            <Row md={12}>
                <Col md={12} sm={12} xs={12} className="mt-4">
                    <ImageContainer>
                    <FirstImageInsideDive src={saly6} alt=""></FirstImageInsideDive>
                    <InsideDive>
                        <TextInsideDive>Ready to Read</TextInsideDive>
                    </InsideDive>
                    <SecondImageInsideDive src={saly12} alt=""></SecondImageInsideDive>

                    </ImageContainer>
                </Col>
                <Col md={12} sm={12} className="m-4">
                    <Title >Fresh blog</Title>
                    <SubTitle >You can read a new entries about soft and tech</SubTitle>
                </Col>

                <Col xs={12} sm={{size:8,offset:2}}>
                    <NewEntry id="FirstBlog" className={`${isOpen&&'mb-5'}`}>
                        <h4 className="cursor-pointer" onClick={scrollandToggle} >ThreeJS</h4>
                        <hr/>
                        {isOpen&&(<ImgExpandCard src={salyCard} height="200px" alt=""/>)}
                        <p className="text-justify">New Framework to Javacript, very fast and confort, talk about and make a quick page to view in live</p>
                        <Collapse isOpen={isOpen}>
                            <p className="text-justify">Anim pariatur cliche reprehenderit,
                            enim eiusmod high life accusamus terry richardson ad squid.
                            Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred
                            nesciunt sapiente ea proident.</p>
                        </Collapse>
                    </NewEntry>
                </Col>

                <Col xs={12} sm={{size:8,offset:2}}>
                <NewEntry  className={`${secondOpen&&'mb-5 enter'}`}>
                        <h4  id="SecondBlog" className="cursor-pointer" onClick={secondScrollToggle} >ThreeJS</h4>
                        <hr/>
                        {secondOpen&&(<ImgExpandCard src={salyCard} height="200px" alt=""/>)}
                        <p className="text-justify">New Framework to Javacript, very fast and confort, talk about and make a quick page to view in live</p>
                        <Collapse isOpen={secondOpen}>
                            <p className="text-justify">Anim pariatur cliche reprehenderit,
                            enim eiusmod high life accusamus terry richardson ad squid.
                            Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred
                            nesciunt sapiente ea proident.</p>
                        </Collapse>
                    </NewEntry>
                </Col>

                <Col xs={12} sm={{size:8,offset:2}}>
                <NewEntry id="thirdBlog" className={`${thirdOpen&&'mb-5'}`}>
                        <h4 className="cursor-pointer" onClick={thirdScrollToggle} >ThreeJS</h4>
                        <hr/>
                        {thirdOpen&&(<ImgExpandCard src={salyCard} height="200px" alt=""/>)}
                        <p className="text-justify">New Framework to Javacript, very fast and confort, talk about and make a quick page to view in live</p>
                        <Collapse isOpen={thirdOpen}>
                            <p className="text-justify">Anim pariatur cliche reprehenderit,
                            enim eiusmod high life accusamus terry richardson ad squid.
                            Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred
                            nesciunt sapiente ea proident.</p>
                        </Collapse>
                    </NewEntry>
                </Col>
            </Row>
            </Container>
            </div>
     );
}
 
export default BlogScreen;