import React,{useState} from 'react';
import { Col, Container, Row } from 'reactstrap';
import saly6 from '../assets/Saly-6.png'
import saly12 from '../assets/Saly-12.png'
import styled from '@emotion/styled';
import { Collapse } from 'reactstrap';
// import salyCard from '../assets/Saly-13.png';
import react from '../assets/react-logo.png'
import threejs from '../assets/threejs.png'
import gatsby from '../assets/Gatsbyjs.png'



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
        transform:scale(1.03);
    }
    @media(max-width:540px){
        transform:none !important;
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
            <Container className="fade-in" style={{backgroundColor:'#eeeeee',borderRadius:'10px'}} >
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
                <Col md={12} sm={12} className="m-4" >
                    <Title >Fresh blog</Title>
                    <SubTitle >You can read a new entries about soft and tech</SubTitle>
                </Col>

                <Col xs={12} sm={{size:8,offset:2}} >
                    <NewEntry id="FirstBlog" className={`${isOpen&&'mb-5 boxshadow'}`}>
                        <h4 className="cursor-pointer" onClick={scrollandToggle} >ThreeJS</h4>
                        <hr/>
                        {isOpen&&(<ImgExpandCard className="fade-in" src={threejs} height="200px" alt=""/>)}
                        <p className="text-justify">Developing 3D Web Apps With Three.js</p>
                        <Collapse isOpen={isOpen}>
                            <p className="text-justify">As the name would imply, a 3D web application is a website that is rendered in three dimensions. This is accomplished by manipulating the HTML “canvas” element. The canvas element itself is worth writing a full post or two about, just to explore what it can do. For now though, all we need to know is that it was designed to create and display interactive, animatable graphics that can be drawn by the user.</p>
                            <p className="text-justify">As cool as that already is, people weren’t satisfied with stopping there, and figured out how to manipulate the canvas to work in three dimensions, using something called WebGL. WebGL is managed by Khronos Group, which defines it as “a cross-platform, royalty-free web standard for a low-level 3D graphics API based on OpenGL ES, exposed to ECMAScript via the HTML5 Canvas element.”</p>
                            <p className="text-justify">
                            Three.js is a javascript library that simplifies the process of the writing 3D code by acting as a translator between the programmer and WebGL. It does this largely by abstracting WebGL into a more manageable set of functions and classes. That is to say, that when you write code in Three.js, behind the scenes Three.js is writing dozens on lines of WebGL for you.
                            </p>
                        </Collapse>
                    </NewEntry>
                </Col>

                <Col xs={12} sm={{size:8,offset:2}}>
                <NewEntry  className={`${secondOpen&&'mb-5  boxshadow'}`}>
                        <h4  id="SecondBlog" className="cursor-pointer" onClick={secondScrollToggle} >What is React JS?</h4>
                        <hr/>
                        {secondOpen&&(<ImgExpandCard className="fade-in" src={react} height="200px" alt=""/>)}
                        <p className="text-justify">React JS is a JavaScript library used in web development</p>
                        <Collapse isOpen={secondOpen}>
                            <p className="text-justify" >
                            JavaScript (or JS) is a scripting language used to create and control dynamic web content. Dynamic web content includes things like animated graphics, photo slideshows, and interactive forms. Anytime you visit a website where things move, refresh, or otherwise change on your screen without requiring you to manually reload a web page, there’s a very good chance JS is the language making it happen, JavaScript is a super important coding language used to add animated and interactive features to websites or web applications 
                            <br/>
                            <b className="interSub">WHAT IS A JAVASCRIPT LIBRARY?</b>
                            <br/>
                            From the definition above, you can see how JavaScript plays a critical role in website and web application development. But there are times when you need JavaScript to perform repetitive functions—things like stock animation effects or autocomplete search bar features. Re-coding these functions every time they occur becomes a “reinventing the wheel” situation. Annnnoying. This is where JavaScript libraries come in. JavaScript libraries are collections of pre-written JavaScript code that can be used for common JS tasks, allowing you to bypass the time intensive (and unnecessary) process of coding by hand. If there’s a run-of-the-mill JavaScript function that you keep needing to code (and that other developers before you have needed for their own projects) there’s probably a JS library to ease your pain.    
                            </p>
                        </Collapse>
                    </NewEntry>
                </Col>

                <Col xs={12} sm={{size:8,offset:2}}>
                <NewEntry id="thirdBlog" className={`${thirdOpen&&'mb-5 boxshadow'}`}>
                        <h4 className="cursor-pointer" onClick={thirdScrollToggle} >GatsbyJs</h4>
                        <hr/>
                        {thirdOpen&&(<ImgExpandCard className="fade-in" src={gatsby} height="200px" alt=""/>)}
                        <p className="text-justify">New Framework to Javacript, very fast and confort, talk about and make a quick page to view in live</p>
                        <Collapse isOpen={thirdOpen}>
                            <p className="text-justify">
                            The 3rd place in our list of Top JavaScript Frameworks of 2020 in the bank-end category goes to Gatsby.js. Gatsby.js was founded by Kyle Mathews and Sam Bhagwat, and launched around May 2015. Gatsby is a modern, flexible React and GraphQl based Static Site Generator used to build high performance and SEO friendly static websites. Gatsby lets users pull data from any data source imaginable – CMS like WordPress, Drupal, Netlify, Contentful etc or APIs, databases or simple markdown. Unlike Next.js which we discussed above, Gatsby does not perform server-side rendering. Instead it generates HTML content on the client side during build time. As a result Gatsby.js delivers blazing fast performance, impeccable security and good SEO performance. Another major advantage that Gatsby offers is plugins that add key functionalities and modifications to make your life easier. These range from enhancing UI/UX, using styled components, integration with key services like Email marketing tools or CMS, SEO, image optimisation, setting up google analytics, creating sitemaps, robot txt files, caching etc. Gatsby.js is used by major brands like Airbnb, Nike, edx.org, Figma to name a few.

                            </p>
                        </Collapse>
                    </NewEntry>
                </Col>
            </Row>
            </Container>
            </div>
     );
}
 
export default BlogScreen;